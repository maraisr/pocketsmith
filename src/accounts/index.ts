import * as Promise from 'bluebird';
import {PocketSmithInterface, AccountInterface} from '../interfaces';

export default class Accounts {
	constructor(private context: PocketSmithInterface) {

	}

	get(id: number, callback?: Function): Promise<AccountInterface> {
		return this.context.Client.get(`accounts/${id}`, callback);
	}

	getAllByUser(userId: number, callback?: Function): Promise<Array<AccountInterface>> {
		return this.context.Client.get(`users/${userId}/accounts`, callback);
	}

	getAllByInstitution(institutionId: number, callback?: Function): Promise<Array<AccountInterface>> {
		return this.context.Client.get(`institutions/${institutionId}/accounts`, callback);
	}

	getAll(callback?: Function): Promise<Array<AccountInterface>> {
		if (this.context.Me) {
			return this.getAllByUser(this.context.Me.data.id, callback);
		} else {
			throw new Error('PocketSmith: Please init a `me` PocketSmith inistance. Eg: (new PocketSmith(\'token\')).init().then(() => { ... })');
		}
	}
}
