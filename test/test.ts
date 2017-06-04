import { expect, tap } from 'tapbundle'

import * as smartdelay from '../dist/index'

tap.test('.delayFor should delay async', async (tools) => {
  tools.timeout(5000)
  let timePassed = false
  setTimeout(() => {
    timePassed = true
  }, 2000)
  await smartdelay.delayFor(3000).then(async () => {
    // tslint:disable-next-line:no-unused-expression
    expect(timePassed).to.be.true
  })
})

tap.test('.delayFor should pass on a type', async (tools) => {
  tools.timeout(5000)
  let timePassed = false
  setTimeout(() => {
    timePassed = true
  }, 2000)
  let hey = 'heyThere'
  await smartdelay.delayFor<string>(3000, hey).then(async (stringArg) => {
    expect(stringArg).equal('heyThere')
  })
})

tap.test('smartdelay.Timeout', async () => {
  let timeout = new smartdelay.Timeout(2000)
  await timeout.promise
})

tap.test('smartdelay.Timeout should cancel', async (tools) => {
  let timeout = new smartdelay.Timeout(60000)
  timeout.cancel()
})

tap.start()
