'use strict';

var expect = require('chai').expect,
	nock = require('nock');

var PocketSmith = require('../../dist');

var API = 'https://api.pocketsmith.com/v2';

describe('Categories', function() {
	before(function() {
		this.smith = new PocketSmith('TOKEN');
		this.categories = this.smith.Categories;
	});

	describe('instance', function() {
		var methods = ['get', 'getAllByUser', 'getAll'];

		methods.forEach(method => {
			it('should have a ' + method + ' method', function() {
				expect(this.categories[method]).to.exist.to.be.an.instanceOf(
					Function
				);
			});
		});
	});

	describe('@get', function() {
		afterEach(function() {
			nock.cleanAll();
		});

		it('should GET to /categories/{id}', function(done) {
			var req = nock(API)
				.get('/categories/1')
				.reply(200);

			this.categories.get(1).then(() => {
				expect(req.isDone()).to.be.true;
				done();
			});
		});

		it('should have a token header', function(done) {
			var req = nock(API)
				.get('/categories/1')
				.matchHeader('Authorization', 'Key TOKEN')
				.reply(200);

			this.categories.get(1).then(() => {
				expect(req.isDone()).to.be.true;
				done();
			});
		});

		it('should return data in the then', function(done) {
			var data = { test: 'test' };

			var req = nock(API)
				.get('/categories/1')
				.reply(200, data);

			this.categories.get(1).then(resp => {
				expect(resp).to.be.an.instanceOf(Object);

				expect(resp.length).to.equal(data.length);

				expect(resp.test).to.equal(data.test);

				done();
			});
		});

		it('should accept a callback', function(done) {
			var req = nock(API)
				.get('/categories/1')
				.reply(200);

			this.categories.get(1, function() {
				done();
			});
		});

		it('should return a promise', function(done) {
			var req = nock(API)
				.get('/categories/1')
				.reply(200);

			this.categories
				.get(1)
				.then(done.bind(null, null))
				.catch(done.bind(null, null));
		});
	});

	describe('@getAllByUser', function() {
		afterEach(function() {
			nock.cleanAll();
		});

		it('should GET to //users/{id}/categories', function(done) {
			var req = nock(API)
				.get('/users/1/categories')
				.reply(200);

			this.categories.getAllByUser(1).then(() => {
				expect(req.isDone()).to.be.true;
				done();
			});
		});

		it('should have a token header', function(done) {
			var req = nock(API)
				.get('/users/1/categories')
				.matchHeader('Authorization', 'Key TOKEN')
				.reply(200);

			this.categories.getAllByUser(1).then(() => {
				expect(req.isDone()).to.be.true;
				done();
			});
		});

		it('should return data in the then', function(done) {
			var data = [{ test: 'test' }];

			var req = nock(API)
				.get('/users/1/categories')
				.reply(200, data);

			this.categories.getAllByUser(1).then(resp => {
				expect(resp).to.be.an.instanceOf(Object);

				expect(resp.length).to.equal(data.length);

				expect(resp[0].test).to.equal(data[0].test);

				done();
			});
		});

		it('should accept a callback', function(done) {
			var req = nock(API)
				.get('/users/1/categories')
				.reply(200);

			this.categories.getAllByUser(1, function() {
				done();
			});
		});

		it('should return a promise', function(done) {
			var req = nock(API)
				.get('/users/1/categories')
				.reply(200);

			this.categories
				.getAllByUser(1)
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

		it('should GET to /users/{id}/categories', function(done) {
			var req = nock(API)
				.get('/users/1/categories')
				.reply(200);

			this.inst.Categories.getAll().then(() => {
				expect(req.isDone()).to.be.true;
				done();
			});
		});

		it('should have a token header', function(done) {
			var req = nock(API)
				.get('/users/1/categories')
				.matchHeader('Authorization', 'Key TOKEN')
				.reply(200);

			this.inst.Categories.getAll().then(() => {
				expect(req.isDone()).to.be.true;
				done();
			});
		});

		it('should return data in the then', function(done) {
			var data = [{ test: 'test' }];

			var req = nock(API)
				.get('/users/1/categories')
				.reply(200, data);

			this.inst.Categories.getAll().then(resp => {
				expect(resp).to.be.an.instanceOf(Array);

				expect(resp.length).to.equal(data.length);

				expect(resp[0].test).to.equal(data[0].test);

				done();
			});
		});

		it('should accept a callback', function(done) {
			var req = nock(API)
				.get('/users/1/categories')
				.reply(200);

			this.inst.Categories.getAll(function() {
				done();
			});
		});

		it('should return a promise', function(done) {
			var req = nock(API)
				.get('/users/1/categories')
				.reply(200);

			this.inst.Categories.getAll()
				.then(done.bind(null, null))
				.catch(done.bind(null, null));
		});

		it('should fail when no `init` ran for me context', function() {
			var Smith = new PocketSmith('TOKEN');

			expect(() => {
				Smith.Categories.getAll();
			}).to.throw();
		});
	});
});
