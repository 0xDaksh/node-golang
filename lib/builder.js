var compiler = require(__dirname + '/compiler'),
	shx = require('shelljs')

module.exports = (input) => {
	return new Promise((then, er) => {
		compiler(input).then((p) => {
			shx.exec('go build -o ' + p + '.exe ' + p, (err) => {
				if(!err) {
					console.log('Built it! Find it at ' + p)
					then()
				} else {
					er(err)
				}
			})
		}).catch((err) => {
			er(err)
		})
	})
}