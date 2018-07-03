'use strict';

var expect = require('chai').expect,
	nock = require('nock');

var PocketSmith = require('../dist');

var API = 'https://api.pocketsmith.com/v2';

var methods = [
	'Accounts',
	'Categories',
	//'Institutions',
	'Users',
	//'Transactions',
	//'Scenarios',
	'init'
];

describe('PocketSmith', function() {
	before(function() {
		this.smith = new PocketSmith('TOKEN');
	});

	describe('instance', function() {
		methods.forEach(method => {
			it(`should have a ${method} method`, function() {
				expect(this.smith[method]).to.exist;
			});
		});
	});

	describe('@init', function() {
		beforeEach(function() {
			var req = nock(API)
				.get('/me')
				.reply(200);
		});

		afterEach(function() {
			nock.cleanAll();
		});

		it('should expose the same methods', function(done) {
			var self = this;

			this.smith.init().then(function(smith) {
				methods.forEach(method => {
					expect(smith[method]).to.exist;
				});

				self.smith.Me = void 0;
				done();
			});
		});

		it('should return a promise', function(done) {
			var self = this;

			this.smith
				.init()
				.then(() => {
					self.smith.Me = void 0;
					done();
				})
				.catch(() => {
					self.smith.Me = void 0;
					done();
				});
		});

		it('should return the cached copy of me if its called again', function(done) {
			var self = this;

			// Codecoverage will illustrate this
			this.smith.init().then(function() {
				self.smith.init();
			});

			this.smith.Me = void 0;
			done();
		});
	});
});
