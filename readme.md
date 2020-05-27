# @pushrocks/smartdelay
timeouts for the async/await era, written in TypeScript

## Availabililty and Links
* [npmjs.org (npm package)](https://www.npmjs.com/package/@pushrocks/smartdelay)
* [gitlab.com (source)](https://gitlab.com/pushrocks/smartdelay)
* [github.com (source mirror)](https://github.com/pushrocks/smartdelay)
* [docs (typedoc)](https://pushrocks.gitlab.io/smartdelay/)

## Status for master
[![pipeline status](https://gitlab.com/pushrocks/smartdelay/badges/master/pipeline.svg)](https://gitlab.com/pushrocks/smartdelay/commits/master)
[![coverage report](https://gitlab.com/pushrocks/smartdelay/badges/master/coverage.svg)](https://gitlab.com/pushrocks/smartdelay/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/@pushrocks/smartdelay.svg)](https://www.npmjs.com/package/@pushrocks/smartdelay)
[![Known Vulnerabilities](https://snyk.io/test/npm/@pushrocks/smartdelay/badge.svg)](https://snyk.io/test/npm/@pushrocks/smartdelay)
[![TypeScript](https://img.shields.io/badge/TypeScript->=%203.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)](https://prettier.io/)

## Usage

Use TypeScript for best in class instellisense.

```javascript
import * as smartdelay from 'smartdelay';

(async () => {
  await smartdelay.delayFor(3000); // excution will halt here 3 seconds for this function scope BUT NOT BLOCK anything else
  console.log('hi there');

  // You can also go random
  await smartdelay.delayForRandom(2000, 6000); // this will delay exection somewhere between 2 and 6 seconds.
  console.log('Yay. You did not see me coming at this exact time');
})();
```

## Contribution

We are always happy for code contributions. If you are not the code contributing type that is ok. Still, maintaining Open Source repositories takes considerable time and thought. If you like the quality of what we do and our modules are useful to you we would appreciate a little monthly contribution: You can [contribute one time](https://lossless.link/contribute-onetime) or [contribute monthly](https://lossless.link/contribute). :)

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy)

[![repo-footer](https://lossless.gitlab.io/publicrelations/repofooter.svg)](https://maintainedby.lossless.com)
