import {
	type Icon,
	IconBrandGithub,
	IconBrandLinkedin,
	IconMail
} from '@tabler/icons-svelte';

interface Site {
	name: string;
	url: string;
	description: string;
	tags: string[];
	seo: {
		author: string;
		location: {
			city: string;
			region: string;
			country: string;
		};
	};
	out: {
		github: string;
		linkedin: string;
		email: string;
	};
	repo: { url: string; commitBaseUrl: string };
}

const Site: Site = {
	name: '김지현',
	url: 'https://jhnyuk.github.io',
	description: '김지현 — Web Developer & QA Engineer. 꼼꼼한 QA와 탄탄한 웹 개발 경험을 가진 개발자입니다.',
	tags: [
		'김지현',
		'Web Developer',
		'QA Engineer',
		'Frontend Developer',
		'React',
		'Spring Boot',
		'Java',
		'Software Testing',
		'Quality Assurance',
		'Korea',
		'Korean Developer'
	],
	seo: {
		author: '김지현',
		location: {
			city: 'Seoul',
			region: 'Seoul',
			country: 'KR'
		}
	},
	out: {
		github: 'https://github.com/jhnyuk',
		linkedin: 'https://www.linkedin.com/in/jhnyuk/',
		email: 'mailto:debussysuh@gmail.com'
	},
	repo: {
		url: 'https://github.com/jhnyuk/jhnyuk.github.io',
		commitBaseUrl: 'https://github.com/jhnyuk/jhnyuk.github.io/commit/'
	}
};

export default Site;

export const Socials = [
	{
		url: Site.out.github,
		label: 'GitHub',
		icon: IconBrandGithub,
		footer: true
	},
	{
		url: Site.out.linkedin,
		label: 'LinkedIn',
		icon: IconBrandLinkedin,
		footer: true
	},
	{
		url: Site.out.email,
		label: 'Email',
		icon: IconMail as unknown as Icon,
		footer: true
	}
];
