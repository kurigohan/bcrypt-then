
var Promise = require('any-promise')
var bcrypt = require('bcrypt-nodejs')

exports.hash = function (password, salt) {
  salt = salt || 10
  return new Promise(function (resolve, reject) {
    if (typeof salt !== 'string' && !(salt instanceof String)) {
      bcrypt.genSalt(salt, function (err, generatedSalt) {
        bcrypt.hash(password, generatedSalt, null, function (err, hash) {
          if (err) return reject(err)
          resolve(hash)
        })
      })
    } else {
      bcrypt.hash(password, salt, null, function (err, hash) {
        if (err) return reject(err)
        resolve(hash)
      })
    }
  })
}

exports.compare = function (expected, hash) {
  return new Promise(function (resolve, reject) {
    bcrypt.compare(expected, hash, function (err, res) {
      if (err) return reject(err)
      resolve(res)
    })
  })
}
