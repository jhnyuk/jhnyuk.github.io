<script lang="ts">
	import {
		IconBrandGithub,
		IconBrandLinkedin,
		IconMail,
		IconBriefcase,
		IconCode
	} from '@tabler/icons-svelte';
	import Site from '$lib/config/common';
</script>

<svelte:head>
	<title>About | 김지현</title>
	<meta name="description" content="김지현 소개 — Web Developer & QA Engineer" />
</svelte:head>

<div class="mx-auto max-w-6xl space-y-12 px-4 py-8 md:px-6">
	<!-- Intro -->
	<section class="space-y-6">
		<h1 class="text-3xl font-bold md:text-4xl">About Me</h1>

		<div class="space-y-4">
			<p class="text-subtext0 text-base leading-relaxed">
				안녕하세요! <span class="text-text font-semibold">Web Developer & QA Engineer 김지현</span>입니다.
				꼼꼼한 테스트 역량과 실무 개발 경험을 함께 갖춘 개발자를 목표로 하고 있습니다.
			</p>
			<p class="text-subtext0 text-base leading-relaxed">
				QA Engineer로서 TC 설계·수행, 결함 발견, 보안 취약점 탐지까지 다양한 경험을 쌓았고,
				개발자로서 React·Spring Boot 기반 사내 시스템을 직접 설계·개발하며 End-to-End 소프트웨어 개발 사이클을 이해하고 있습니다.
			</p>

			<div class="flex flex-wrap gap-3 pt-2">
				<a
					href={Site.out.github}
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-accent inline-flex items-center gap-1.5 text-sm transition-colors"
				>
					<IconBrandGithub size={16} />
					GitHub
				</a>
				<span class="text-surface1">*</span>
				<a
					href={Site.out.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-accent inline-flex items-center gap-1.5 text-sm transition-colors"
				>
					<IconBrandLinkedin size={16} />
					LinkedIn
				</a>
				<span class="text-surface1">*</span>
				<a
					href={Site.out.email}
					class="hover:text-accent inline-flex items-center gap-1.5 text-sm transition-colors"
				>
					<IconMail size={16} />
					debussysuh@gmail.com
				</a>
			</div>
		</div>
	</section>

	<!-- Experience -->
	<section class="space-y-6">
		<h2 class="flex items-center gap-2 text-2xl font-bold">
			<IconBriefcase size={24} class="text-accent" />
			Experience
		</h2>

		<div class="space-y-8">
			<!-- Raonsecure -->
			<div class="border-surface0 space-y-3 border-l-2 pl-5">
				<div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<h3 class="text-text font-semibold">QA Intern · <span class="text-accent">Raonsecure</span></h3>
						<p class="text-subtext1 text-sm">RAON Metademy (Launcher / Web Admin)</p>
					</div>
					<span class="text-overlay1 text-sm whitespace-nowrap">2025.12 – 2026.02</span>
				</div>
				<ul class="text-subtext0 space-y-1 text-sm">
					<li>• 39일간 빠른 릴리즈 환경에서 179건 등록·496건 대응</li>
					<li>• 요구사항 기반 TC 100+ 설계·수행</li>
					<li>• 결제 흐름 전 구간 시나리오 검증 — 실결제 후 구매 내역 미표시 결함 조기 발견</li>
					<li>• DevTools·API 응답·예외 로그 기반 유사 장애 예방을 위한 TC 확장 수행</li>
					<li>• 인증 우회·세션 쿠키 Secure 미설정 등 보안·접근제어 취약점 조기 발견</li>
					<li>• Jira 이슈 구조화, Zephyr Test Cycle 운영, Jira Automation 적용으로 반복 작업 최소화</li>
				</ul>
			</div>

			<!-- Soundmind -->
			<div class="border-surface0 space-y-3 border-l-2 pl-5">
				<div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<h3 class="text-text font-semibold">QA Tester · <span class="text-accent">Soundmind</span></h3>
						<p class="text-subtext1 text-sm">ERP·판매 관리 시스템 통합 테스트</p>
					</div>
					<span class="text-overlay1 text-sm whitespace-nowrap">2025.12.01 – 2025.12.12</span>
				</div>
				<ul class="text-subtext0 space-y-1 text-sm">
					<li>• 9개 모듈 TC 1,200건 수행, 완료율 100% (PASS율 98% 이상 · Critical 0건 기준 충족)</li>
					<li>• Critical 7건(기능 불능·데이터 유실) 포함 총 60건 결함 발견 / 수정 후 Retest 수행</li>
					<li>• 대시보드·정책 화면 간 입금액·페이백 금융 데이터 정합성 불일치 이슈 발견 → 정산 신뢰도 개선</li>
					<li>• 전수 조사·검색 필드 초기화 UX 개선 제안 + 매뉴얼 오탈자 60건 검수</li>
				</ul>
			</div>

			<!-- Payday -->
			<div class="border-surface0 space-y-3 border-l-2 pl-5">
				<div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<h3 class="text-text font-semibold">Web Developer & QA Engineer · <span class="text-accent">Payday</span></h3>
						<p class="text-subtext1 text-sm">연말정산·급여 시스템 QA 및 사내 전산 개발</p>
					</div>
					<span class="text-overlay1 text-sm whitespace-nowrap">2024.07 – 2025.08</span>
				</div>
				<ul class="text-subtext0 space-y-1 text-sm">
					<li>• 연말정산 QA — 세액 계산 로직 화이트박스 관점 재검증, Critical 2건 포함 핵심 오류 8건 발견</li>
					<li>• 홈택스 연동 데이터 정합성 확인·세액 계산 정확성 검증</li>
					<li>• Notion 기반 TC·버그 리포팅 프로세스 개인 구축 및 QA 운영 기준 정립</li>
					<li>• 사내 업무 이력 관리 시스템 설계·개발 (React + Spring Boot)</li>
					<li>• Unit Test 테스트 코드 작성 및 Postman API 문서화</li>
					<li>• AI 평가 검증 시스템 프론트엔드 개발</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- Skills -->
	<section class="space-y-6">
		<h2 class="flex items-center gap-2 text-2xl font-bold">
			<IconCode size={24} class="text-accent" />
			Skills
		</h2>

		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
			<div class="border-surface0 bg-base space-y-2 rounded-lg border p-4">
				<h3 class="text-accent text-sm font-semibold uppercase tracking-wide">Development</h3>
				<div class="flex flex-wrap gap-2">
					{#each ['Java', 'Spring Boot', 'React.js', 'Node.js'] as skill (skill)}
						<span class="bg-surface0 text-subtext1 rounded-md px-2 py-1 text-xs">{skill}</span>
					{/each}
				</div>
			</div>

			<div class="border-surface0 bg-base space-y-2 rounded-lg border p-4">
				<h3 class="text-accent text-sm font-semibold uppercase tracking-wide">Database & Infra</h3>
				<div class="flex flex-wrap gap-2">
					{#each ['MySQL', 'MongoDB', 'AWS', 'Jenkins'] as skill (skill)}
						<span class="bg-surface0 text-subtext1 rounded-md px-2 py-1 text-xs">{skill}</span>
					{/each}
				</div>
			</div>

			<div class="border-surface0 bg-base space-y-2 rounded-lg border p-4">
				<h3 class="text-accent text-sm font-semibold uppercase tracking-wide">QA & Tools</h3>
				<div class="flex flex-wrap gap-2">
					{#each ['Jira', 'Zephyr Scale', 'Confluence', 'Figma', 'Swagger', 'Postman'] as skill (skill)}
						<span class="bg-surface0 text-subtext1 rounded-md px-2 py-1 text-xs">{skill}</span>
					{/each}
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	:global(html) {
		scroll-padding-top: 5rem;
	}
</style>
