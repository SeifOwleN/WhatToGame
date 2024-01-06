export interface results {
	id: number;
	slug: string;
	name: string;
	released: string;
	tba: boolean;
	background_image: string;
	rating: number;
	rating_top: number;
	ratings: {
		id: number;
		title: string;
		count: number;
		percent: number;
	}[];
	ratings_count: number;
	reviews_text_count: number;
	added: number;
	added_by_status: {
		yet: number;
		owned: number;
		beaten: number;
		toplay: number;
		dropped: number;
		playing: number;
	};
	metacritic: number;
	playtime: number;
	suggestions_count: number;
	updated: string;
	user_game: null | unknown; // You might want to create an interface for this
	reviews_count: number;
	saturated_color: string;
	dominant_color: string;
	platforms: {
		platform?: {
			id: number;
			name: string;
			slug: string;
			image: null | unknown; // You might want to create an interface for this
			year_end: null | number;
			year_start: null | number;
			games_count: number;
			image_background: string;
		};
		released_at: string;
		requirements_en: null | {
			minimum: string;
			recommended: string;
		};
		requirements_ru: null | unknown; // You might want to create an interface for this
	}[];
	parent_platforms: {
		platform: {
			id: number;
			name: string;
			slug: string;
		};
	}[];
	genres: {
		id: number;
		name: string;
		slug: string;
		games_count: number;
		image_background: string;
	}[];
	stores: {
		id: number;
		store: {
			id: number;
			name: string;
			slug: string;
			domain: string;
			games_count: number;
			image_background: string;
		};
	}[];
	clip: null | unknown; // You might want to create an interface for this
	tags: {
		id: number;
		name: string;
		slug: string;
		language: string;
		games_count: number;
		image_background: string;
	}[];
	esrb_rating: {
		id: number;
		name: string;
		slug: string;
	};
	short_screenshots: {
		id: number;
		image: string;
	}[];
}

export interface Games {
	count?: number;
	next?: null | string;
	previous?: null | string;
	results: results[]; // You might want to create an interface for the items in the 'results' array
	user_platforms?: boolean;
}

export interface Movie {
	id: number;
	name: string;
	preview: string;
	data: {
		"480": string;
		max: string;
	};
}

interface MovieList {
	count: number;
	next: null | string; // You can replace `any` with the specific type if needed
	previous: null | string; // You can replace `any` with the specific type if needed
	results: Movie[];
}
