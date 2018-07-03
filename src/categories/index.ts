import { PocketSmithInterface, CategoryInterface } from '../interfaces';

import { NotInMeContext } from '../exceptions';

export default class Categories {
	constructor(private context: PocketSmithInterface) {}

	get(id: number, callback?: Function): Promise<CategoryInterface> {
		return this.context.Client.get(`categories/${id}`, callback);
	}

	getAllByUser(
		userId: number,
		callback?: Function
	): Promise<Array<CategoryInterface>> {
		return this.context.Client.get(`users/${userId}/categories`, callback);
	}

	// -- In `me` context --
	getAll(callback?: Function): Promise<Array<CategoryInterface>> {
		if (this.context.Me) {
			return this.getAllByUser(this.context.Me.data.id, callback);
		} else {
			throw NotInMeContext();
		}
	}
}
