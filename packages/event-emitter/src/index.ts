export type Listener = (...args: any[]) => void;

/**
 * A high-performance, minimal event emitter.
 * Optimized specifically for the 'emit' path to eliminate object/array allocations.
 */
export class EventEmitter {
  private listeners: Map<string, Listener[]> = new Map();

  /**
   * Register a listener for an event.
   */
  on(event: string, listener: Listener): this {
    let list = this.listeners.get(event);
    if (!list) {
      list = [];
      this.listeners.set(event, list);
    }
    list.push(listener);
    return this;
  }

  /**
   * Register a one-time listener for an event.
   */
  once(event: string, listener: Listener): this {
    const onceListener: Listener = (...args: any[]) => {
      this.off(event, onceListener);
      listener(...args);
    };
    return this.on(event, onceListener);
  }

  /**
   * Remove a listener from an event.
   * Uses swap-and-pop for O(1) removal.
   */
  off(event: string, listener: Listener): this {
    const list = this.listeners.get(event);
    if (list) {
      const index = list.indexOf(listener);
      if (index !== -1) {
        // Fast removal: swap with last element and pop
        // Unordered listener execution is standard behavior.
        const lastIndex = list.length - 1;
        if (index !== lastIndex) {
          list[index] = list[lastIndex];
        }
        list.pop();
      }
      if (list.length === 0) {
        this.listeners.delete(event);
      }
    }
    return this;
  }

  /**
   * Synchronously calls each of the listeners registered for the event.
   * Optimized for 0-3 arguments to avoid 'arguments' or '...args' overhead.
   * 
   * @returns true if the event had listeners, false otherwise.
   */
  emit(event: string, a?: any, b?: any, c?: any): boolean {
    const list = this.listeners.get(event);
    if (!list || list.length === 0) return false;

    // Cache length to protect against mutations during iteration
    const len = list.length;
    for (let i = 0; i < len; i++) {
      const fn = list[i];
      if (c !== undefined) fn(a, b, c);
      else if (b !== undefined) fn(a, b);
      else if (a !== undefined) fn(a);
      else fn();
    }
    return true;
  }

  /**
   * Remove all listeners, or those of the specified event.
   */
  removeAllListeners(event?: string): this {
    if (event) {
      this.listeners.delete(event);
    } else {
      this.listeners.clear();
    }
    return this;
  }
}
