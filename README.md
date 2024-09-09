[![Node.js CI](https://github.com/stbestichhh/stlib-args-parser/actions/workflows/node.js.yml/badge.svg)](https://github.com/stbestichhh/stlib-args-parser/actions/workflows/node.js.yml)
[![NPM Version](https://img.shields.io/npm/v/@stlib/argv)](https://www.npmjs.com/package/@stlib/argv)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

# @stlib/argv

## Table of contents

* [Description](#about)
* [Getting started](#getting-started)
  * [Instalation](#installation)
  * [Usage](#usage)
* [Contributing](#contributing)
* [Changelog](#changelog)
* [Authors](#authors)
* [License](#license)

## Getting started

### Installation

```shell
$ yarn add @stlib/argv
```

> [!IMPORTANT]
> **Node.js 18.x+** version must be installed in your OS.

### Usage

Object type for arguments

```TypeScript
OptionsType {
  [key: string]: string;
}
```

```TypeScript
// Parses arhuments and return object
function parseArgs(argv: string[]): OptionsType;

// Object with parsed arguments
const options: OptionsType;
```

**Example**
```shell
$ yarn ts-node index.ts -a --b -c=1 --d= 2 --e=smth=3 -f 4
```

```TypeScript
import { options } from '@stlib/argv';

console.log(options);

// Output: { a: true, b: true, c: '1', d: '2', e: 'smth=3', f: '4' }
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Changelog

Project changes are writen in changelog, see the [CHANGELOG.md](CHANGELOG.md).

We use [SemVer](https://semver.org/) for versioning.
For the versions available, see the [tags](https://github.com/stbestichhh/stlib-args-parser/tags) on this repository.
For the versions supported, see the [SECURITY.md](SECURITY.md).

## Authors

- [@stbestichhh](https://www.github.com/stbestichhh)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE)
