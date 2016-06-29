export interface PocketSmithInterface {
	Client: any;

	Accounts: any;
	Categories: any;
	Me: any;
}

export interface MeInterface {
	id: number;
	login: string;
	name: string;
	email: string;
	avatar_url: string;
	beta_user: boolean;
	time_zone: string;
	week_start_day: number;
	base_currency_code: string;
	always_show_base_currency: boolean;
	using_multiple_currencies: boolean;
	created_at: string;
	updated_at: string;
}

export interface CategoryInterface {

}

export interface AccountInterface {
	id: number;
	title: string;
	currency_code: string;
	current_balance: number;
	current_balance_date: string;
	type: string;
	is_net_worth: Boolean;
}