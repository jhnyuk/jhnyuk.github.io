import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-svelte';
import Site from '$lib/config/common';

export const Home = {
	socialLinks: [
		{
			href: Site.out.github,
			text: 'GitHub',
			icon: IconBrandGithub
		},
		{
			href: Site.out.linkedin,
			text: 'LinkedIn',
			icon: IconBrandLinkedin
		},
		{
			href: Site.out.email,
			text: 'Email',
			icon: IconMail
		}
	]
};

export interface ExperienceTimelineItem {
	company: string;
	role: string;
	url: string;
	logoUrl: string;
	logoAlt: string;
	startDate: string;
	endDate?: string;
	details?: string;
	logoScale?: number;
	careerHref?: string;
}

export const experienceTimeline: ExperienceTimelineItem[] = [
	{
		company: 'Raonsecure',
		role: 'QA Intern',
		url: 'https://www.raonsecure.com',
		logoUrl: '/logos/raonsecure.svg',
		logoAlt: 'Raonsecure Logo',
		startDate: '2025-12-01',
		endDate: '2026-02-28',
		details:
			'RAON Metademy QA — 39일간 빠른 릴리즈 환경에서 179건 등록·496건 대응. TC 100+ 설계·수행, 결제 흐름 검증, 보안 취약점 조기 발견.',
		careerHref: '/career?tab=qa#raonsecure'
	},
	{
		company: 'Soundmind',
		role: 'QA Tester',
		url: 'https://soundmind.co.kr',
		logoUrl: '/logos/soundmind.svg',
		logoAlt: 'Soundmind Logo',
		startDate: '2025-12-01',
		endDate: '2025-12-12',
		details:
			'ERP·판매 관리 시스템 통합 테스트. TC 1,200건 수행(완료율 100%), Critical 7건 포함 60건 결함 발견.',
		careerHref: '/career?tab=qa#soundmind'
	},
	{
		company: 'Payday',
		role: 'Web Developer & QA',
		url: 'https://payday.kr',
		logoUrl: '/logos/payday.svg',
		logoAlt: 'Payday Logo',
		startDate: '2024-07-01',
		endDate: '2025-08-31',
		details:
			'연말정산·급여 시스템 QA 및 사내 전산 개발. 사내 업무 이력 관리 시스템(React + Spring Boot) 개발, AI 평가 검증 시스템 프론트엔드 개발.',
		careerHref: '/career#payday'
	}
];
