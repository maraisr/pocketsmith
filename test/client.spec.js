'use strict';

var expect = require('chai').expect,
	nock = require('nock');

var PocketSmith = require('../dist');

var API = 'https://api.pocketsmith.com/v2';

describe('Client', function() {
	before(function() {
		this.smith = new PocketSmith('TOKEN');
	});

	afterEach(function() {
		nock.cleanAll();
	});

	it('should fail when error sent', function(done) {
		var req = nock(API)
			.get('/users/1/accounts')
			.replyWithError('Error');

		this.smith.Accounts.getAllByUser(1).catch(function(e) {
			done();
		});
	});

	it('should append "Key" when you dont specify a toekn type', function() {
		let s = new PocketSmith('TOKEN');

		expect(s.token).to.exist.to.be.equal('Key TOKEN');
	});

	it('should not prepend "Key" when a type is provided', function() {
		let s = new PocketSmith('Bearer TOKEN');

		expect(s.token).to.exist.to.be.equal('Bearer TOKEN');
	});
});
