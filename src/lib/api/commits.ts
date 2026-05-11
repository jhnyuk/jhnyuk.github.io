export interface ProcessedCommit {
	repo: string;
	message: string;
	href: string;
	sha: string;
	date: string;
}

export interface CommitData {
	commits: ProcessedCommit[];
}

interface GitHubPushEvent {
	type: string;
	repo: { name: string };
	payload: {
		commits: {
			sha: string;
			message: string;
			url: string;
		}[];
	};
	created_at: string;
}

const FALLBACK_DATA: CommitData = {
	commits: [
		{
			repo: 'jhnyuk.github.io',
			message: 'feat: initial portfolio setup',
			href: 'https://github.com/jhnyuk/jhnyuk.github.io',
			sha: 'abc1234',
			date: new Date().toISOString()
		}
	]
};

export async function fetchLatestCommits(): Promise<CommitData> {
	try {
		const response = await fetch(
			'https://api.github.com/users/jhnyuk/events/public?per_page=30',
			{
				headers: {
					Accept: 'application/vnd.github+json',
					'User-Agent': 'jhnyuk-portfolio/1.0'
				},
				signal: AbortSignal.timeout(3000)
			}
		);

		if (!response.ok) throw new Error(`GitHub API: HTTP ${response.status}`);

		const events: GitHubPushEvent[] = await response.json();

		const commits: ProcessedCommit[] = events
			.filter((e) => e.type === 'PushEvent' && e.payload?.commits?.length > 0)
			.flatMap((e) =>
				e.payload.commits.map((c) => ({
					repo: e.repo.name.split('/')[1] ?? e.repo.name,
					message: c.message.split('\n')[0],
					href: `https://github.com/${e.repo.name}/commit/${c.sha}`,
					sha: c.sha.substring(0, 7),
					date: e.created_at
				}))
			)
			.slice(0, 5);

		if (commits.length === 0) return FALLBACK_DATA;
		return { commits };
	} catch (err) {
		console.warn('GitHub API fetch failed:', err);
		return FALLBACK_DATA;
	}
}
