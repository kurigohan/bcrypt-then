
# bcrypt-then-js

[bcryptjs](https://github.com/dcodeIO/bcrypt.js) as promised.

## API

Only implements two methods:

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
