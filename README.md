# @pushrocks/smartdelay

timeouts for the async&#x2F;await era, written in TypeScript

## Availabililty

[![npm](https://push.rocks/assets/repo-button-npm.svg)](https://www.npmjs.com/package/smartdelay)
[![git](https://push.rocks/assets/repo-button-git.svg)](https://GitLab.com/pushrocks/smartdelay)
[![git](https://push.rocks/assets/repo-button-mirror.svg)](https://github.com/pushrocks/smartdelay)
[![docs](https://push.rocks/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/smartdelay/)

## Status for master

[![build status](https://GitLab.com/pushrocks/smartdelay/badges/master/build.svg)](https://GitLab.com/pushrocks/smartdelay/commits/master)
[![coverage report](https://GitLab.com/pushrocks/smartdelay/badges/master/coverage.svg)](https://GitLab.com/pushrocks/smartdelay/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/smartdelay.svg)](https://www.npmjs.com/package/smartdelay)
[![Dependency Status](https://david-dm.org/pushrocks/smartdelay.svg)](https://david-dm.org/pushrocks/smartdelay)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/smartdelay/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/smartdelay/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/smartdelay/badges/code.svg)](https://www.bithound.io/github/pushrocks/smartdelay)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage

Use TypeScript for best in class instellisense.

```javascript
import * as smartdelay from 'smartdelay';

(async () => {
  await smartdelay.delayFor('3000'); // excution will halt here 3 seconds for this function scope BUT NOT BLOCK anything else
  console.log();
})();
```

[![npm](https://push.rocks/assets/repo-header.svg)](https://push.rocks)
