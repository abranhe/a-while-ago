[<img src="https://cdn.abranhe.com/projects/a-while-ago/a-while-ago.png" height="80%" width="80%">](https://npmjs.org/a-while-ago)

<br/>

[![](https://api.abranhe.com/badges/travis/a-while-ago)](https://travis-ci.org/abranhe/a-while-ago)
[![](https://img.shields.io/github/license/abranhe/a-while-ago.svg)](https://github.com/abranhe/a-while-ago/blob/master/license)
[![](https://abranhe.com/badge.svg)](https://github.com/abranhe)
[![](https://cdn.abranhe.com/badges/cash-me.svg)](https://cash.me/$abranhe)
[![](https://cdn.abranhe.com/badges/patreon.svg)](https://patreon.com/abranhe)
[![](https://cdn.abranhe.com/badges/paypal.svg)](https://paypal.me/abranhe/10)
[![](https://img.shields.io/npm/v/a-while-ago.svg)](https://npmjs.org/a-while-ago)

	
## Install

```
$ npm install a-while-ago
```

## Usage

```js
const awa = require('a-while-ago');

console.log(awa(new Date() - 1000));
// => a second ago
```

## API

### awa(date)

- **date**: A past date

###### Example:

```js
awa(new Date() - 1000)
// => a second ago

awa(new Date() - 60 * 2000);
// => 2 minutes ago
```

### awa(date, short)

- **date**: A past date
- **short** (`boolean`): A past date

###### Example:

```js
awa(new Date() - 60 * 2000, true);
// => 2m
```

## Related

- [minutes-to-read](https://github.com/abranhe/minutes-to-read): How long does it take you to read something.

## Todo

- Support for sufix object instead of a boolean value.

Current:

```js
awa(new Date() - 60 * 2000, true);
// => 2m
```

Desired behavior 

```js
awa(new Date() - 60 * 2000, { short: true });
// => 2m

awa(new Date() - 60 * 2000, { short: false });
// => 2 minutes ago
```

## License

[MIT](https://github.com/abranhe/a-while-ago/blob/master/license) License © [Carlos Abraham](https://github.com/abranhe)
