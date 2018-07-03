import { PocketSmithInterface, UserInterface } from '../interfaces';

export default class Users {
	constructor(private context: PocketSmithInterface) {}

	get(id: number, callback?: Function): Promise<UserInterface> {
		return this.context.Client.get(`users/${id}`, callback);
	}
}
