const index = require('../index'),
	expect = require('chai').expect

describe('Golang Run', () => {
	it('should export a function', () => {
		expect(index.run).to.be.a('function')
	})
	it('should export a promise', () => {
		expect(index.run()).to.be.a('promise')
	})
})