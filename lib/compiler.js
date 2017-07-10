const hasbin = require('hasbin'),
	path = require('path'),
	fs = require('fs'),
	shx = require('shelljs')

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
