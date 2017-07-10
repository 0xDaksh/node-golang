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
			let patho = '/tmp/node-go/' + Math.random().toString().substr(2, 5) + '/main.go'
			w(patho, i, (err) => {
				if(err) {
					er(err)
				} else {
					return then(patho)
				}
			})

		}).catch(e => {
			er(e)
		})
	})
}

module.exports = compiler