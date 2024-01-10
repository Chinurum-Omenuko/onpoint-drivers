// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Package{
			name: string,
			price: number,
			perks: Array<string>,
		}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
