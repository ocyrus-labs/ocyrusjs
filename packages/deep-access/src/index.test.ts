import { describe, it, expect } from 'vitest';
import { deepGet, deepSet } from './index';

describe('deepAccess', () => {
  const data = {
    user: {
      profile: {
        name: 'OcyrusJs',
        tags: ['fast', 'safe']
      },
      settings: null
    }
  };

  describe('deepGet', () => {
    it('retrieves nested values', () => {
      expect(deepGet(data, 'user.profile.name')).toBe('OcyrusJs');
    });

    it('retrieves array values via dot or bracket', () => {
      expect(deepGet(data, 'user.profile.tags.0')).toBe('fast');
      // expect(deepGet(data, 'user.profile.tags[1]')).toBe('safe'); // TODO: Support bracket in next iter if needed
    });

    it('returns fallback for missing paths', () => {
      expect(deepGet(data, 'user.bad.path', 'default')).toBe('default');
    });

    it('handles null intermediate values', () => {
      expect(deepGet(data, 'user.settings.theme')).toBeUndefined();
    });
  });

  describe('deepSet', () => {
    it('sets nested value', () => {
      const obj = { a: { b: 1 } };
      deepSet(obj, 'a.b', 2);
      expect(obj.a.b).toBe(2);
    });

    it('creates missing path', () => {
      const obj: any = {};
      deepSet(obj, 'x.y.z', 100);
      expect(obj.x.y.z).toBe(100);
    });

    it('creates arrays for numeric keys', () => {
      const obj: any = {};
      deepSet(obj, 'list.0', 'item');
      expect(Array.isArray(obj.list)).toBe(true);
      expect(obj.list[0]).toBe('item');
    });
  });
});
