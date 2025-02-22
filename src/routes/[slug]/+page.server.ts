import type { PageServerData } from './$types';
import matter from 'gray-matter';
import { marked } from 'marked';
import { error } from '@sveltejs/kit';

export const load: PageServerData = async ({ params }) => {
	try {
		const { default: recipe } = await import(`../../content/${params.slug}.md?raw`);

		const { data: meta, content } = matter(recipe);

		const html = marked.parse(content, {
			breaks: true,
			gfm: true
		});

		return {
			meta,
			content: html
		};
	} catch (e) {
		error(404, `Error: ${e}`);
	}
};
