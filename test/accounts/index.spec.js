'use strict';

var expect = require('chai').expect,
	nock = require('nock');

var PocketSmith = require('../../dist');

var API = 'https://api.pocketsmith.com/v2';

describe('Accounts', function() {
	before(function() {
		this.smith = new PocketSmith('TOKEN');
		this.accounts = this.smith.Accounts;
	});

	describe('instance', function() {
		var methods = ['get', 'getAllByUser', 'getAllByInstitution', 'getAll'];

		methods.forEach(method => {
			it('should have a ' + method + ' method', function() {
				expect(this.accounts[method]).to.exist.to.be.an.instanceOf(
					Function
				);
			});
		});
	});

	describe('@get', function() {
		afterEach(function() {
			nock.cleanAll();
		});

		it('should GET to /accounts/{id}', function(done) {
			var req = nock(API)
				.get('/accounts/1')
				.reply(200);

			this.accounts.get(1).then(() => {
				expect(req.isDone()).to.be.true;
				done();
			});
		});

		it('should have a token header', function(done) {
			var req = nock(API)
				.get('/accounts/1')
				.matchHeader('Authorization', 'Key TOKEN')
				.reply(200);

			this.accounts.get(1).then(() => {
				expect(req.isDone()).to.be.true;
				done();
			});
		});

		it('should return data in the then', function(done) {
			var data = { test: 'test' };

			var req = nock(API)
				.get('/accounts/1')
				.reply(200, data);

			this.accounts.get(1).then(resp => {
				expect(resp).to.be.an.instanceOf(Object);

				expect(resp.length).to.equal(data.length);

				expect(resp.test).to.equal(data.test);

				done();
			});
		});

		it('should accept a callback', function(done) {
			var req = nock(API)
				.get('/accounts/1')
				.reply(200);

			this.accounts.get(1, function() {
				done();
			});
		});

		it('should return a promise', function(done) {
			var req = nock(API)
				.get('/accounts/1')
				.reply(200);

			this.accounts
				.get(1)
				.then(done.bind(null, null))
				.catch(done.bind(null, null));
		});
	});

	describe('@getAllByUser', function() {
		afterEach(function() {
			nock.cleanAll();
		});

		it('should GET to /users/{id}/accounts', function(done) {
			var req = nock(API)
				.get('/users/1/accounts')
				.reply(200);

			this.accounts.getAllByUser(1).then(() => {
				expect(req.isDone()).to.be.true;
				done();
			});
		});

		it('should have a token header', function(done) {
			var req = nock(API)
				.get('/users/1/accounts')
				.matchHeader('Authorization', 'Key TOKEN')
				.reply(200);

			this.accounts.getAllByUser(1).then(() => {
				expect(req.isDone()).to.be.true;
				done();
			});
		});

		it('should return data in the then', function(done) {
			var data = [{ test: 'test' }];

			var req = nock(API)
				.get('/users/1/accounts')
				.reply(200, data);

			this.accounts.getAllByUser(1).then(resp => {
				expect(resp).to.be.an.instanceOf(Array);

				expect(resp.length).to.equal(data.length);

				expect(resp[0].test).to.equal(data[0].test);

				done();
			});
		});

		it('should accept a callback', function(done) {
			var req = nock(API)
				.get('/users/1/accounts')
				.reply(200);

			this.accounts.getAllByUser(1, function() {
				done();
			});
		});

		it('should return a promise', function(done) {
			var req = nock(API)
				.get('/users/1/accounts')
				.reply(200);

			this.accounts
				.getAllByUser(1)
				.then(done.bind(null, null))
				.catch(done.bind(null, null));
		});
	});

	describe('@getAllByInstitution', function() {
		afterEach(function() {
			nock.cleanAll();
		});

		it('should GET to /users/{id}/accounts', function(done) {
			var req = nock(API)
				.get('/institutions/1/accounts')
				.reply(200);

			this.accounts.getAllByInstitution(1).then(() => {
				expect(req.isDone()).to.be.true;
				done();
			});
		});

		it('should have a token header', function(done) {
			var req = nock(API)
				.get('/institutions/1/accounts')
				.matchHeader('Authorization', 'Key TOKEN')
				.reply(200);

			this.accounts.getAllByInstitution(1).then(() => {
				expect(req.isDone()).to.be.true;
				done();
			});
		});

		it('should return data in the then', function(done) {
			var data = [{ test: 'test' }];

			var req = nock(API)
				.get('/institutions/1/accounts')
				.reply(200, data);

			this.accounts.getAllByInstitution(1).then(resp => {
				expect(resp).to.be.an.instanceOf(Array);

				expect(resp.length).to.equal(data.length);

				expect(resp[0].test).to.equal(data[0].test);

				done();
			});
		});

		it('should accept a callback', function(done) {
			var req = nock(API)
				.get('/institutions/1/accounts')
				.reply(200);

			this.accounts.getAllByInstitution(1, function() {
				done();
			});
		});

		it('should return a promise', function(done) {
			var req = nock(API)
				.get('/institutions/1/accounts')
				.reply(200);

			this.accounts
				.getAllByInstitution(1)
				.then(done.bind(null, null))
				.catch(done.bind(null, null));
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

		it('should GET to /users/{id}/accounts', function(done) {
			var req = nock(API)
				.get('/users/1/accounts')
				.reply(200);

			this.inst.Accounts.getAll().then(() => {
				expect(req.isDone()).to.be.true;
				done();
			});
		});

		it('should have a token header', function(done) {
			var req = nock(API)
				.get('/users/1/accounts')
				.matchHeader('Authorization', 'Key TOKEN')
				.reply(200);

			this.inst.Accounts.getAll().then(() => {
				expect(req.isDone()).to.be.true;
				done();
			});
		});

		it('should return data in the then', function(done) {
			var data = [{ test: 'test' }];

			var req = nock(API)
				.get('/users/1/accounts')
				.reply(200, data);

			this.inst.Accounts.getAll().then(resp => {
				expect(resp).to.be.an.instanceOf(Array);

				expect(resp.length).to.equal(data.length);

				expect(resp[0].test).to.equal(data[0].test);

				done();
			});
		});

		it('should accept a callback', function(done) {
			var req = nock(API)
				.get('/users/1/accounts')
				.reply(200);

			this.inst.Accounts.getAll(function() {
				done();
			});
		});

		it('should return a promise', function(done) {
			var req = nock(API)
				.get('/users/1/accounts')
				.reply(200);

			this.inst.Accounts.getAll()
				.then(done.bind(null, null))
				.catch(done.bind(null, null));
		});

		it('should fail when no `init` ran for me context', function() {
			var Smith = new PocketSmith('TOKEN');

			expect(() => {
				Smith.Accounts.getAll();
			}).to.throw();
		});
	});
});
