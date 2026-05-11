import type { PageServerLoad } from './$types';
import { getFeaturedProjects } from '$lib/content/projects';
import { fetchLatestCommits } from '$lib/api/commits';

export const load: PageServerLoad = async () => {
	const [featuredProjects, commitData] = await Promise.all([
		getFeaturedProjects(),
		fetchLatestCommits()
	]);

	return {
		featuredProjects,
		commitData
	};
};
