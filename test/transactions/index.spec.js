'use strict';

var expect = require('chai').expect,
	nock = require('nock');

var PocketSmith = require('../../dist');

var API = 'https://api.pocketsmith.com/v2';

describe('Transactions', function() {
	before(function() {
		this.smith = new PocketSmith('TOKEN');
		this.trans = this.smith.Transactions;
	});

	describe('instance', function() {
		var methods = ['getAll'];

		methods.forEach(method => {
			it('should have a ' + method + ' method', function() {
				expect(this.trans[method]).to.exist.to.be.an.instanceOf(
					Function
				);
			});
		});
	});

	describe('@getAll', function() {
		before(function(done) {
			var req = nock(API)
				.get('/me')
				.reply(200, { id: 1 });

			this.smith.init().then(smith => {
				this.inst = smith;
				done();
			});
		});

		afterEach(function() {
			nock.cleanAll();
		});

		it('should GET to /users/{id}/transactions', function(done) {
			var req = nock(API)
				.get('/users/1/transactions')
				.query({ page: 1 })
				.reply(200);

			this.trans.getAll({}, 1).then(() => {
				expect(req.isDone()).to.be.true;
				done();
			});
		});

		it('should get `me` user transactions', function(done) {
			var req = nock(API)
				.get('/users/1/transactions')
				.query({ page: 1 })
				.reply(200);

			this.trans.getAll({}).then(() => {
				expect(req.isDone()).to.be.true;
				done();
			});
		});

		it('should return page 1, then page 2 with next function', function(done) {
			var req = nock(API)
				.get('/users/1/transactions')
				.query({ page: 1 })
				.reply(200, { page: 1 });

			var req2 = nock(API)
				.get('/users/1/transactions')
				.query({ page: 2 })
				.reply(200, { page: 2 });

			this.trans.getAll({}).then(v => {
				expect(v.data.page).to.equal(1);

				v.next(v => {
					expect(req.isDone()).to.be.true;
					expect(v.data.page).to.equal(2);
					done();
				});
			});
		});

		it('should return `.next` function from callback', function(done) {
			var req = nock(API)
				.get('/users/1/transactions')
				.query({ page: 1 })
				.reply(200, { page: 1 });

			this.trans.getAll({}).then(v => {
				expect(v['next']).to.exist.to.be.an.instanceOf(Function);

				expect(v.data.page).to.equal(1);
				done();
			});
		});

		it('should reject when an error is found', function(done) {
			var req = nock(API)
				.get('/users/1/transactions')
				.query({ page: 1 })
				.replyWithError(500);

			this.trans.getAll({}).catch(v => {
				expect(v.message).to.equal('500');
				done();
			});
		});
	});
});
