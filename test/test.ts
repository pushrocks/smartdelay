import { expect, tap } from '@pushrocks/tapbundle';

import * as smartdelay from '../ts/index';

tap.test('.delayFor should delay async', async tools => {
  tools.timeout(5000);
  let timePassed = false;
  setTimeout(() => {
    timePassed = true;
  }, 2000);
  await smartdelay.delayFor(3000).then(async () => {
    // tslint:disable-next-line:no-unused-expression
    expect(timePassed).to.be.true;
  });
});

tap.test('.delayForRandom should delay async for a random time period', async tools => {
  let timePassedBefore = false;
  let timePassedAfter = false;
  setTimeout(() => {
    timePassedBefore = true;
  }, 3000);
  setTimeout(() => {
    timePassedAfter = true;
  }, 5000);
  await smartdelay.delayForRandom(3000, 4900);
  expect(timePassedBefore).to.be.true;
  expect(timePassedAfter).to.be.false;
});

tap.test('.delayFor should pass on a type', async tools => {
  tools.timeout(5000);
  let timePassed = false;
  setTimeout(() => {
    timePassed = true;
  }, 2000);
  let hey = 'heyThere';
  await smartdelay.delayFor<string>(3000, hey).then(async stringArg => {
    expect(stringArg).equal('heyThere');
  });
});

tap.test('smartdelay.Timeout', async () => {
  let timeout = new smartdelay.Timeout(2000);
  await timeout.promise;
});

tap.test('smartdelay.Timeout should cancel', async tools => {
  let timeout = new smartdelay.Timeout(60000);
  timeout.cancel();
});

tap.start();
