const hasbin = require('hasbin'),
	path = require('path'),
	shx = require('shelljs'),
	w = require('write')

var prgm = () => {
	return new Promise((then, er) => {
		hasbin('go', res => {
			if(res === true) {
				then(true)
			} else {
				er(res)
			}
		})
	})
}

var compiler = (i) => {
	return new Promise((then, er) => {
		prgm().then(go => {
			w('/tmp/node-go-main.go', i, (err) => {
				if(err) {
					er(err)
				} else {
					return then(true)
				}
			})

		}).catch(e => {
			throw e;
		})
	})
}

module.exports = compiler