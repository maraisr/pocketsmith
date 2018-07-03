export function NotInMeContext(): Error {
	return new Error(
		"PocketSmith: Please init a `me` PocketSmith inistance. Eg: (new PocketSmith('token')).init().then(() => { ... })"
	);
}
