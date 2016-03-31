
# bcryptjs-then

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]

[bcryptjs](https://github.com/dcodeIO/bcrypt.js) as promised.

## Installation

```bash
$ npm install bcryptjs-then
```

## API

Implements two methods:

### bcrypt.hash(password, [iterations]).then( hash => )

Hash a password with a # of `iterations`, defaulting to `10`.

```js
bcrypt.hash('password', 15).then(function (hash) {

})
```

### bcrypt.compare(password, hash).then( valid => )

Compare a password with a bcrypt hash.
Returns a boolean.

```js
bcrypt.compare('password', user.password).then(function (valid) {
  assert(valid)
})
```


[npm-image]: https://img.shields.io/npm/v/bcryptjs-then.svg?style=flat-square
[npm-url]: https://npmjs.org/package/bcryptjs-then
[travis-image]: https://img.shields.io/travis/kurigohan/bcryptjs-then.svg?style=flat-square
[travis-url]: https://travis-ci.org/kurigohan/bcryptjs-then
