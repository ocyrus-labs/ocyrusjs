import { describe, it, expect, vi } from 'vitest';
import { EventEmitter } from './index';

describe('EventEmitter', () => {
  it('should register and emit events', () => {
    const ee = new EventEmitter();
    const handler = vi.fn();
    ee.on('test', handler);
    ee.emit('test', 'hello');
    expect(handler).toHaveBeenCalledWith('hello');
  });

  it('should handle once events', () => {
    const ee = new EventEmitter();
    const handler = vi.fn();
    ee.once('test', handler);
    ee.emit('test');
    ee.emit('test');
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('should remove listeners', () => {
    const ee = new EventEmitter();
    const handler = vi.fn();
    ee.on('test', handler);
    ee.off('test', handler);
    ee.emit('test');
    expect(handler).not.toHaveBeenCalled();
  });

  it('should support multiple arguments', () => {
    const ee = new EventEmitter();
    const handler = vi.fn();
    ee.on('test', handler);
    ee.emit('test', 1, 2, 3);
    expect(handler).toHaveBeenCalledWith(1, 2, 3);
  });
});
