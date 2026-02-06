import { bench, describe } from 'vitest';
import { EventEmitter as OcyrusEE } from './index';
import { EventEmitter as NativeEE } from 'node:events';

describe('EventEmitter Emit Performance', () => {
  const ocyrus = new OcyrusEE();
  const native = new NativeEE();
  const fn = () => {};

  ocyrus.on('test', fn);
  native.on('test', fn);

  bench('ocyrus/EventEmitter.emit', () => {
    ocyrus.emit('test', 1, 2, 3);
  });

  bench('node/EventEmitter.emit', () => {
    native.emit('test', 1, 2, 3);
  });
});
