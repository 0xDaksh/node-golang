const index = require('../index'),
	expect = require('chai').expect

describe('Golang Module', () => {
	it('should export a function', () => {
		expect(index).to.be.a('function')
		expect(index()).to.be.a('promise')
		expect(index().then).to.be.a('function')
		expect(index().catch).to.be.a('function')
	})
})