# Electron hang demo

Demo to reproduce [\[REGRESSION\]: electron tests sometimes freezes for 30 seconds](https://github.com/microsoft/playwright/issues/27523).

Based on the original project [Leitor de notas de corretagem](https://github.com/planetsLightningArrester/leitor-de-notas-de-corretagem)

## Reproducing

```bash
git clone git@github.com:planetsLightningArrester/electron-hang-demo.git
npm ci
npm test
```

This will pass in under 1s. But if we uncomment the line below in the file `src/__tests__/test.spec.ts`

```typescript
// Un-commenting the code below makes test hangs for 30s
test.afterAll(async () => {
  await electronApp.close()
})
```

The test passes **only after hanging 30s**

## What I've tried

Even if I comment almost everything inside `src/main.ts`, the hang still happens.
