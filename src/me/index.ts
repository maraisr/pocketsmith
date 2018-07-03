import { PocketSmithInterface, MeInterface } from '../interfaces';

export default class Me {
	public data: MeInterface;

	constructor(private context: PocketSmithInterface) {}

	init(): Promise<any> {
		return new Promise(resolve => {
			this.context.Client.get('me').then((res: MeInterface) => {
				this.data = res;
				resolve(this);
			});
		});
	}
}
