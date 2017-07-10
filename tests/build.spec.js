const index = require('../index'),
	expect = require('chai').expect

describe('Golang Build', () => {
	it('should export a function', () => {
		expect(index.build).to.be.a('function')
		expect(index.build()).to.be.a('promise')
		expect(index.build().then).to.be.a('function')
		expect(index.build().catch).to.be.a('function')
	})
})