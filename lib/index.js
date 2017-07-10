var builder = require(__dirname + '/builder'),
	run = require(__dirname + '/run')

var golang = () => {
	return new Promise((then, err) => {
		err('Please Use Our Helper Methods :), Check the Docs.')
	})
}

golang.run = (input) => {
	return run(input)
}

golang.build = (input, dir) => {
	return	build(input, dir)
}

module.exports = golang;