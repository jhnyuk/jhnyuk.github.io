interface NavItem {
	title: string;
	href: string;
	external?: boolean;
}

export const mainNavItems: NavItem[] = [
	{ title: 'About', href: '/about' },
	{ title: 'Career', href: '/career' },
	{ title: 'Projects', href: '/projects' }
];

export const moreNavItems: NavItem[] = [
	{ title: 'GitHub', href: 'https://github.com/jhnyuk', external: true },
	{ title: 'LinkedIn', href: 'https://www.linkedin.com/in/jhnyuk/', external: true }
];
