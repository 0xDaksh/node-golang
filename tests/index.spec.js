const index = require('../index'),
	expect = require('chai').expect

describe('Golang Module', () => {
	it('should export a function', () => {
		expect(index).to.be.a('function')
	})
	it('should return a promise', () => {
		expect(index()).to.be.a('promise')
	})
}) 