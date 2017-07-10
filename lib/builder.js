var compiler = require(__dirname + '/compiler'),
	shx = require('shelljs')

module.exports = (input, dir) => {
	return new Promise((then, er) => {
		compiler(input).then((p) => {
			shx.exec('go build ' + p, (err) => {
				if(!err) {
					console.log('Built it! Find it at ' + p)
				} else {
					er(err)
				}
			})
		}).catch((err) => {
			er(err)
		})
	})
}