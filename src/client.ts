import * as Got from 'got';

class Client {
	constructor(private token: string) {}

	private resource(method: string, url: string, payload?: any): Promise<any> {
		return new Promise((resolve, reject) => {
			Got(`https://api.pocketsmith.com/v2/${url}`, {
				method: method,
				json: true,
				retries: 0,
				query: payload || void 0,
				headers: {
					Authorization: this.token,
					'Content-Type': 'application/json'
				}
			}).then(
				response => {
					resolve(response.body);
				},
				err => {
					reject(err);
				}
			);
		});
	}

	get(url: string, callback?: Function, payload?: any): Promise<any> {
		let prom = this.resource('GET', url, payload);

		if (!(callback === void 0)) {
			prom.then(resp => {
				callback(resp);
			});
		}

		return prom;
	}
}

export default Client;
