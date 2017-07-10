const index = require('../index'),
	expect = require('chai').expect

describe('Golang Run', () => {
	it('should export a function', () => {
		expect(index.run).to.be.a('function')
		expect(index.run()).to.be.a('promise')
		expect(index.run().then).to.be.a('function')
		expect(index.run().catch).to.be.a('function')
	})
})