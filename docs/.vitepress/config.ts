import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Ocyrusjs",
  description: "High-performance, zero-allocation utility library for JavaScript.",
  base: '/ocyrusjs/',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Modules', link: '/modules/safe-json' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Performance First', link: '/guide/performance' }
        ]
      },
      {
        text: 'Core Modules',
        items: [
          { text: 'safeJSON', link: '/modules/safe-json' },
          { text: 'heavyMap', link: '/modules/heavy-map' },
          { text: 'deepAccess', link: '/modules/deep-access' },
          { text: 'stableHash', link: '/modules/stable-hash' },
          { text: 'retry', link: '/modules/retry' },
          { text: 'fastClone', link: '/modules/fast-clone' },
        ]
      },
      {
        text: 'Utility Modules',
        items: [
          { text: 'eventEmitter', link: '/modules/event-emitter' },
          { text: 'lru', link: '/modules/lru' },
          { text: 'pool', link: '/modules/pool' },
          { text: 'bitset', link: '/modules/bitset' },
          { text: 'memo', link: '/modules/memo' },
          { text: 'clamp', link: '/modules/clamp' },
          { text: 'debounce', link: '/modules/debounce' },
          { text: 'throttle', link: '/modules/throttle' },
          { text: 'isPlainObject', link: '/modules/is-plain-object' },
          { text: 'pick', link: '/modules/pick' },
          { text: 'omit', link: '/modules/omit' },
          { text: 'chunk', link: '/modules/chunk' },
          { text: 'merge', link: '/modules/merge' },
          { text: 'shuffle', link: '/modules/shuffle' },
          { text: 'once', link: '/modules/once' },
          { text: 'isPrimitive', link: '/modules/is-primitive' },
          { text: 'castArray', link: '/modules/cast-array' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ocyrus-labs/ocyrusjs' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present Nishith Patel'
    }
  }
})
