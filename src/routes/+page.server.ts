import type { PageServerLoad } from './$types';
import matter from 'gray-matter';

export const load: PageServerLoad = async () => {
	const files = import.meta.glob('../content/*.md', {
		eager: true,
		query: '?raw'
	});

	const recipes = Object.entries(files).map(([path, file]) => {
		const { data: meta } = matter(file.default);

		return {
			slug: path.split('/').pop().slice(0, -3),
			meta
		};
	});

	return { recipes };
};
