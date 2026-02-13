# Contributing to Ocyrus 🌑

Thank you for your interest in contributing to Ocyrus! We are building the highest-performance utility suite for the JavaScript ecosystem, and your help is welcome.

## 🚀 Performance First Philosophy

Ocyrus is built on two non-negotiable principles:
1. **Zero-Allocation:** We avoid creating temporary objects/arrays in hot paths to prevent Garbage Collection pressure.
2. **High-Perf:** We target execution speeds that match or exceed native engine methods.

**Every Pull Request that adds or modifies logic MUST include benchmark results showing no performance regressions.**

## 🛠️ Development Setup

Ocyrus is a monorepo using **npm workspaces**.

1. **Clone & Install:**
   ```bash
   git clone https://github.com/ocyrus-labs/ocyrusjs.git
   cd ocyrusjs
   npm install
   ```

2. **Run Tests:**
   ```bash
   npm run test --workspaces
   ```

3. **Run Benchmarks:**
   ```bash
   npm run bench --workspaces
   ```

## 📝 Contribution Workflow

1. **Fork & Branch:** Create a branch for your feature or fix.
2. **Implement:** Write your code in `packages/<module>/src/index.ts`.
3. **Test:** Add unit tests in `index.test.ts`. 100% coverage is required for new utilities.
4. **Benchmark:** Add performance tests in `index.bench.ts`. Compare against native or popular libraries (like Lodash).
5. **Standardize:** Ensure your code matches the "Production Grade" standards:
   - Full JSDoc documentation.
   - Fast-path optimizations for common inputs.
   - Formal options interfaces.
6. **Commit:** Use [Conventional Commits](https://www.conventionalcommits.org/) (e.g., `feat: add debounce module`).

## ⚖️ License

By contributing to Ocyrusjs, you agree that your contributions will be licensed under the MIT License.
