var compiler = require(__dirname + '/compiler'),
	shx = require('shelljs')

module.exports = (input) => {
	return new Promise((then, er) => {
		compiler(input).then(g => {
			shx.exec('go run ' + g, (err) => {
				if(err) {
					return er(err)
				} else {
					console.log('Source dir at ' + g)
					then()
				}
			})
		}).catch(e => {
			return er(e)
		})
	})
}