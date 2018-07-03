import { PocketSmithInterface, TransQueryInterface } from '../interfaces';

export default class Transactions {
	constructor(private context: PocketSmithInterface) {}

	getAll(
		query: TransQueryInterface,
		userId?: number,
		callback?: Function
	): Promise<any> {
		let page: number = 1;
		query.page = page;

		let url: string = `users/${userId ||
			this.context.Me.data.id}/transactions`;

		let req: Promise<any> = this.context.Client.get(url, void 0, query);

		let nextCb = (cb: Function) => {
			page += 1;
			query.page = page;

			let resp = this.context.Client.get(url, void 0, query);

			resp.then(r => {
				cb({ data: r, next: nextCb });
			});

			return resp;
		};

		return new Promise((resolve, reject) => {
			req.then(data => {
				resolve({ data: data, next: nextCb });
			}).catch(e => {
				reject(e);
			});
		});
	}
}
