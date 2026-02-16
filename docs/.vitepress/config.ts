import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Ocyrusjs",
  description: "High-performance, zero-allocation utility library for JavaScript.",
  base: '/ocyrusjs/',
  lastUpdated: true,
  cleanUrls: true,
  sitemap: {
    hostname: 'https://ocyrus-labs.github.io/ocyrusjs/'
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/ocyrusjs/logo.png' }],
    ['meta', { name: 'theme-color', content: '#5f87af' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Ocyrusjs | Zero-Allocation JS Utilities' }],
    ['meta', { property: 'og:site_name', content: 'Ocyrusjs' }],
    ['meta', { property: 'og:url', content: 'https://ocyrus-labs.github.io/ocyrusjs/' }],
    ['meta', { property: 'og:description', content: 'High-performance, memory-optimized utility library for critical-path JavaScript.' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@ocyrusjs' }],
  ],
  themeConfig: {
    logo: '/logo.png',
    search: {
      provider: 'local'
    },
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
          { text: 'bloomFilter', link: '/modules/bloom-filter' },
          { text: 'occurrenceSketch', link: '/modules/occurrence-sketch' },
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
    },
    editLink: {
      pattern: 'https://github.com/ocyrus-labs/ocyrusjs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
