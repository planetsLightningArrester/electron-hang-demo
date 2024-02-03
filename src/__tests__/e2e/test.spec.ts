import { test, _electron as electron, type ElectronApplication } from '@playwright/test'

test.describe('run tests', () => {
  let electronApp: ElectronApplication

  test.beforeAll(async () => {
    electronApp = await electron.launch({ args: ['.'] })
  })

  // Un-commenting the code below makes test hangs for 30s
  // test.afterAll(async () => {
  //   await electronApp.close()
  // })

  test.only('print nothing', async () => {
    console.log('')
  })
})
