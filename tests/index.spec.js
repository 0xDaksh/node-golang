const index = require('../index'),
	expect = require('chai').expect

describe('Golang Module', () => {
	it('should export a function', () => {
		expect(index()).to.be.a('function')
	})
})