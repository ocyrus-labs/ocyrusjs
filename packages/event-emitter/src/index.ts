export type Listener = (...args: any[]) => void;

/**
 * A high-performance, minimal event emitter.
 * Optimized for the 'emit' path to avoid object allocations.
 */
export class EventEmitter {
  private listeners: Map<string, Listener[]> = new Map();

  on(event: string, listener: Listener): this {
    let list = this.listeners.get(event);
    if (!list) {
      list = [];
      this.listeners.set(event, list);
    }
    list.push(listener);
    return this;
  }

  once(event: string, listener: Listener): this {
    const onceListener: Listener = (...args: any[]) => {
      this.off(event, onceListener);
      listener(...args);
    };
    return this.on(event, onceListener);
  }

  off(event: string, listener: Listener): this {
    const list = this.listeners.get(event);
    if (list) {
      const index = list.indexOf(listener);
      if (index !== -1) {
        // Fast remove (unordered is fine for listeners)
        list[index] = list[list.length - 1];
        list.pop();
      }
      if (list.length === 0) {
        this.listeners.delete(event);
      }
    }
    return this;
  }

  /**
   * Emit an event. 
   * Optimized for 0-3 arguments to avoid 'arguments' or '...args' overhead.
   */
  emit(event: string, a?: any, b?: any, c?: any): boolean {
    const list = this.listeners.get(event);
    if (!list || list.length === 0) return false;

    // We cache length to avoid issues if listeners are removed during emit
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

  removeAllListeners(event?: string): this {
    if (event) {
      this.listeners.delete(event);
    } else {
      this.listeners.clear();
    }
    return this;
  }
}
