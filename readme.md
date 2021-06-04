# @pushrocks/smartdelay
timeouts for the async/await era, written in TypeScript

## Availabililty and Links
* [npmjs.org (npm package)](https://www.npmjs.com/package/@pushrocks/smartdelay)
* [gitlab.com (source)](https://gitlab.com/pushrocks/smartdelay)
* [github.com (source mirror)](https://github.com/pushrocks/smartdelay)
* [docs (typedoc)](https://pushrocks.gitlab.io/smartdelay/)

## Status for master

Status Category | Status Badge
-- | --
GitLab Pipelines | [![pipeline status](https://gitlab.com/pushrocks/smartdelay/badges/master/pipeline.svg)](https://lossless.cloud)
GitLab Pipline Test Coverage | [![coverage report](https://gitlab.com/pushrocks/smartdelay/badges/master/coverage.svg)](https://lossless.cloud)
npm | [![npm downloads per month](https://badgen.net/npm/dy/@pushrocks/smartdelay)](https://lossless.cloud)
Snyk | [![Known Vulnerabilities](https://badgen.net/snyk/pushrocks/smartdelay)](https://lossless.cloud)
TypeScript Support | [![TypeScript](https://badgen.net/badge/TypeScript/>=%203.x/blue?icon=typescript)](https://lossless.cloud)
node Support | [![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
Code Style | [![Code Style](https://badgen.net/badge/style/prettier/purple)](https://lossless.cloud)
PackagePhobia (total standalone install weight) | [![PackagePhobia](https://badgen.net/packagephobia/install/@pushrocks/smartdelay)](https://lossless.cloud)
PackagePhobia (package size on registry) | [![PackagePhobia](https://badgen.net/packagephobia/publish/@pushrocks/smartdelay)](https://lossless.cloud)
BundlePhobia (total size when bundled) | [![BundlePhobia](https://badgen.net/bundlephobia/minzip/@pushrocks/smartdelay)](https://lossless.cloud)
Platform support | [![Supports Windows 10](https://badgen.net/badge/supports%20Windows%2010/yes/green?icon=windows)](https://lossless.cloud) [![Supports Mac OS X](https://badgen.net/badge/supports%20Mac%20OS%20X/yes/green?icon=apple)](https://lossless.cloud)

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
