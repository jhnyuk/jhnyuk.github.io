<script lang="ts">
	import LinkWithIcon from '$components/LinkWithIcon.svelte';
	import Featured, { type FeaturedProject } from '$components/layout/Featured.svelte';
	import {
		IconArrowRight,
		IconActivity,
		IconExternalLink,
		IconMail
	} from '@tabler/icons-svelte';
	import Site from '$lib/config/common';
	import { Home } from '$lib/config/pages';
	import ThemeSelector from '$components/themes/ThemeSelector.svelte';
	import ColorSelector from '$components/themes/ColorSelector.svelte';
	import Experience from '$components/Experience.svelte';
	import type { CommitData } from '$lib/api/commits';

	type PageData = {
		featuredProjects: FeaturedProject[];
		commitData: CommitData;
	};

	let { data }: { data: PageData } = $props();
</script>

<div class="mx-auto max-w-6xl space-y-12 px-0 py-8 md:space-y-16 md:px-4 md:py-12">
	<!-- Hero -->
	<section class="space-y-5 px-4 md:px-0">
		<h1 class="text-3xl font-bold md:text-4xl">
			안녕하세요! 저는
			<span class="text-accent">김지현</span>
			입니다.
		</h1>
		<p class="text-subtext0 max-w-prose text-lg leading-relaxed">
			<span class="text-text font-medium">Web Developer & QA Engineer</span>로 일하고 있습니다.
			꼼꼼한 QA 경험과 React·Spring Boot 기반 웹 개발 역량을 갖추고 있습니다.
			빠른 릴리즈 환경에서 품질을 지키는 일에 보람을 느낍니다.
		</p>
		<div class="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
			{#each Home.socialLinks as link (link.href)}
				<LinkWithIcon
					href={link.href}
					text={link.text}
					icon={link.icon}
					external={!link.href.startsWith('mailto')}
					class="text-sm"
				/>
				{#if link !== Home.socialLinks[Home.socialLinks.length - 1]}
					<span class="text-surface1 text-xs">|</span>
				{/if}
			{/each}
			<span class="text-surface1 text-xs">|</span>
			<a
				href="/career"
				class="group text-subtext1 hover:text-accent inline-flex items-center gap-1 text-sm transition-colors duration-200"
			>
				<span>More about me</span>
				<IconArrowRight
					size={16}
					class="transition-transform duration-200 group-hover:translate-x-0.5"
				/>
			</a>
		</div>
	</section>

	<!-- Experience -->
	<Experience />

	<!-- Featured Projects -->
	<Featured projects={data.featuredProjects} maxProjects={2} />

	<!-- Bento Grid -->
	<section class="px-4 md:px-0">
		<div class="grid grid-cols-1 justify-center gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
			<!-- Theme Selector -->
			<div class="border-surface0 bg-base rounded-xl border p-4 shadow-lg">
				<ThemeSelector />
				<ColorSelector />
			</div>

			<!-- Contact -->
			<div class="border-surface0 bg-base rounded-xl border p-4 shadow-lg">
				<h3 class="text-text mb-3 flex items-center gap-2 text-sm font-semibold">
					<IconMail size={16} class="text-accent" />
					Contact
				</h3>
				<p class="text-subtext0 mb-4 text-sm">
					함께 일하거나 이야기 나누고 싶으신 분은 편하게 연락주세요.
				</p>
				<a
					href={Site.out.email}
					class="bg-accent/80 focus:ring-accent/50 focus:ring-offset-base inline-flex w-full items-center justify-center gap-2 rounded-md px-3 py-1.5 text-base text-sm font-medium shadow-sm transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
				>
					<IconMail size={16} />
					이메일 보내기
				</a>
			</div>

			<!-- GitHub Commits -->
			<div class="border-surface0 bg-base rounded-xl border p-4 shadow-lg sm:col-span-2 lg:col-span-1">
				<div class="text-text mb-3 flex items-center justify-between gap-2 text-sm">
					<h3 class="flex items-center gap-2 font-semibold">
						<IconActivity size={16} class="text-accent" />
						<span>Recent Commits</span>
					</h3>
					<a
						href={Site.out.github}
						target="_blank"
						rel="noopener noreferrer"
						class="text-accent/80 hover:text-accent transition-transform duration-500 ease-in hover:translate-x-0.5 hover:-translate-y-0.5"
					>
						<IconExternalLink size={18} />
					</a>
				</div>
				{#if data.commitData?.commits?.length > 0}
					<ul class="space-y-1.5 text-sm">
						{#each data.commitData.commits.slice(0, 5) as commit (commit.sha)}
							<li>
								<a
									href={commit.href}
									target="_blank"
									rel="noopener noreferrer"
									class="text-subtext0 hover:text-accent flex min-w-0 items-center gap-2"
									title={`${commit.repo}: ${commit.message}`}
								>
									<span class="text-text flex-shrink-0 font-medium">{commit.repo}:</span>
									<span class="min-w-0 flex-1 truncate">{commit.message}</span>
								</a>
							</li>
						{/each}
					</ul>
				{:else}
					<p class="text-subtext1 text-sm italic">No recent public commits.</p>
				{/if}
				<div class="mt-3">
					<a
						href={Site.out.github}
						target="_blank"
						rel="noopener noreferrer"
						class="group text-accent inline-flex items-center gap-1 text-sm hover:underline"
					>
						<span>View on GitHub</span>
						<IconExternalLink
							size={14}
							class="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
						/>
					</a>
				</div>
			</div>
		</div>
	</section>
</div>
