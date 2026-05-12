<script lang="ts">
	import { IconCode, IconTestPipe } from '@tabler/icons-svelte';
	import { page } from '$app/stores';
	import { tick } from 'svelte';

	let activeTab: 'dev' | 'qa' = $state('dev');

	$effect(() => {
		const tab = $page.url.searchParams.get('tab');
		if (tab === 'qa' || tab === 'dev') activeTab = tab;
		tick().then(() => {
			const hash = window.location.hash;
			if (hash) {
				document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		});
	});
</script>

<svelte:head>
	<title>Career | 김지현</title>
	<meta name="description" content="김지현의 경력 — Full-stack Developer & QA Engineer" />
</svelte:head>

<div class="mx-auto max-w-4xl space-y-16 px-4 py-8 md:px-6">

	<!-- ─── Career ─── -->
	<section class="space-y-8">
		<h2 class="text-2xl font-bold">Career</h2>

		<!-- Tabs -->
		<div class="border-surface0 flex gap-1 rounded-lg border p-1 w-fit">
			<button
				onclick={() => (activeTab = 'dev')}
				class="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 {activeTab === 'dev'
					? 'bg-accent/20 text-accent ring-accent/40 ring-1'
					: 'text-subtext1 hover:text-text'}"
			>
				<IconCode size={15} />
				Development
			</button>
			<button
				onclick={() => (activeTab = 'qa')}
				class="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 {activeTab === 'qa'
					? 'bg-accent/20 text-accent ring-accent/40 ring-1'
					: 'text-subtext1 hover:text-text'}"
			>
				<IconTestPipe size={15} />
				QA
			</button>
		</div>

		<!-- ── Dev Tab ── -->
		{#if activeTab === 'dev'}
		<div class="space-y-12">

			<!-- Payday Dev -->
			<article id="payday" class="space-y-8">
				<header class="border-surface0 border-b pb-4">
					<div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
						<div>
							<h3 class="text-text text-xl font-bold">Web Developer</h3>
							<p class="text-accent font-medium">Payday</p>
						</div>
						<span class="text-overlay1 text-sm whitespace-nowrap">Jul 2024 – Aug 2025</span>
					</div>
					<p class="text-subtext0 mt-2 text-sm leading-relaxed">
						사내 시스템 개발 및 급여·연말정산·인사 관리 서비스의 전산 시스템 유지보수, QA 수행
					</p>
				</header>

				<!-- AI 평가 검증 시스템 -->
<section class="space-y-4">
	<h4 class="text-text text-lg font-semibold">AI 평가 검증 시스템 프론트엔드 개발</h4>
	<ul class="space-y-4">
		<li class="space-y-1">
			<p class="text-text font-medium">▸ 테스트 케이스 관리 UI 구현</p>
			<p class="text-subtext0 text-sm leading-relaxed">
				질문·예상답변 기반 테스트 케이스 생성, 목록 관리, 상세 패널, 편집 모달 등 복합 UI를 React 기반으로 구현했습니다. 체크박스 다중 선택, 검증/수정/삭제 액션, 토스트 메시지 시스템을 적용해 사용자 피드백 흐름을 개선했습니다.
			</p>
		</li>

		<li class="space-y-1">
			<p class="text-text font-medium">▸ AI 검증 상태 비동기 처리</p>
			<p class="text-subtext0 text-sm leading-relaxed">
				AI 검증 요청 이후 대기/검증중/완료/실패 상태를 polling 기반으로 조회하고 실시간 UI에 반영했습니다. 검증 완료된 테스트만 목록에 반영되도록 상태 동기화 로직을 구현했습니다.
			</p>
		</li>

		<li class="space-y-1">
			<p class="text-text font-medium">▸ AI 답변 비교 및 이어서 테스트 기능 구현</p>
			<p class="text-subtext0 text-sm leading-relaxed">
				예상 답변과 AI 응답 결과를 비교할 수 있는 상세 인터페이스를 구현했습니다. 기존 검증 내역을 기반으로 이어서 테스트할 수 있는 대화형 모달 기능도 함께 개발했습니다.
			</p>
		</li>

		<li class="space-y-1">
			<p class="text-text font-medium">▸ 업로드 알림 및 상태 표시 UX 개선</p>
			<p class="text-subtext0 text-sm leading-relaxed">
				다수 테스트 케이스의 진행 상태를 업로드 알림 패널에서 관리하고, 상태별 아이콘 및 조건부 렌더링을 적용해 진행 상황을 직관적으로 표시했습니다.
			</p>
		</li>
	</ul>
</section>

<hr class="border-surface0" />

<!-- 실시간 AI Chatbot -->
<section class="space-y-4">
	<h4 class="text-text text-lg font-semibold">실시간 AI Chatbot 프론트엔드 개발</h4>

	<ul class="space-y-4">
		<li class="space-y-1">
			<p class="text-text font-medium">▸ WebSocket 기반 실시간 채팅 구현</p>
			<p class="text-subtext0 text-sm leading-relaxed">
				WebSocket 기반 양방향 실시간 채팅 인터페이스를 구현했습니다. AI 응답을 스트리밍 방식으로 처리하고 실시간 타이핑 효과를 적용했습니다.
			</p>
		</li>

		<li class="space-y-1">
			<p class="text-text font-medium">▸ 채팅 상태 및 히스토리 관리</p>
			<p class="text-subtext0 text-sm leading-relaxed">
				Redux 기반으로 채팅 메시지, 사용자 입력, 로딩/에러 상태를 관리했습니다. 채팅 히스토리 정렬 및 최근 메시지 유지 로직을 구현했습니다.
			</p>
		</li>

		<li class="space-y-1">
			<p class="text-text font-medium">▸ 실시간 UI 상태 처리 및 예외 대응</p>
			<p class="text-subtext0 text-sm leading-relaxed">
				메시지 상태에 따라 로딩/에러/응답 컴포넌트를 조건부 렌더링하고, 채팅 데이터 변경 시 자동 스크롤 기능을 구현했습니다. WebSocket 연결 종료 및 오류 발생 시 재연결/재시도 로직을 적용했습니다.
			</p>
		</li>

		<li class="space-y-1">
			<p class="text-text font-medium">▸ 실시간 이벤트 흐름 분석 및 문서화</p>
			<p class="text-subtext0 text-sm leading-relaxed">
				기존 WebSocket 서버 로직을 분석하고 connect/select/send/close 이벤트 흐름을 시퀀스 다이어그램으로 문서화했습니다. 서버-클라이언트 간 메시지 처리 구조를 파악하여 UI 상태 흐름과 연결했습니다.
			</p>
		</li>
	</ul>
</section>

<hr class="border-surface0" />

<!-- 사내 업무 이력 관리 시스템 -->
<section class="space-y-4">
	<h4 class="text-text text-lg font-semibold">사내 업무 이력 관리 시스템 개발</h4>

	<ul class="space-y-4">
		{#each [
			{
				title: '작업 이력 통합 관리 구조 설계',
				body: 'Git 커밋 로그·DB 로그에 분산되던 작업 이력을 요청 단위로 통합 관리할 수 있는 구조를 설계했습니다. 작업 구분, Git 이슈·커밋 링크, DB 쿼리, 배포 일시, 참고 문서, 태그 등을 하나의 화면에서 관리할 수 있도록 구현했습니다.'
			},
			{
				title: '데이터 구조 변환 및 상태 동기화 구현',
				body: '저장 데이터와 조회 DTO 간 구조 차이를 해결하기 위해 타입별 그룹화·역변환 로직을 구현했습니다. 검증된 변경 사항만 저장되도록 상태 동기화 구조를 설계했습니다.'
			},
			{
				title: '자동 저장 및 변경 감지 최적화',
				body: '상세 화면 닫기, 외부 클릭, 페이지 이동 시 변경 사항이 자동 저장되도록 구현했습니다. <code>useRef</code> 기반 초기값 비교 방식으로 실제 변경 여부를 감지하여 불필요한 API 호출을 최소화했습니다.'
			},
			{
				title: '편집 UX 및 권한 분리 구현',
				body: '더블 클릭 편집 모드, 외부 클릭 자동 저장, Ctrl+클릭 링크 이동 기능을 구현했습니다. 요청 수신자 기준으로 전산팀 여부를 판단하여 작업 이력 패널 노출 권한을 분리했습니다.'
			},
			{
				title: 'Redux 상태 업데이트 타이밍 이슈 해결',
				body: 'Tag·Type 선택 직후 저장 시 이전 값이 API로 전달되는 문제를 분석했습니다. Redux 상태 업데이트 완료 이후 저장 로직이 실행되도록 의존성 구조를 재설계하여 데이터 정합성을 개선했습니다.'
			},
			{
				title: '레이아웃 및 렌더링 최적화',
				body: '캘린더 open 상태에 따른 body overflow 제어로 스크롤 레이아웃 깨짐 현상을 해결했습니다. SVG import 방식을 적용해 반복 리소스 요청을 제거하고 렌더링 성능을 개선했습니다.'
			}
		] as item (item.title)}
			<li class="space-y-1">
				<p class="text-text font-medium">▸ {item.title}</p>
				<p class="text-subtext0 text-sm leading-relaxed">
					{@html item.body
						.replace(/<code>/g, '<code class="text-accent bg-surface0 rounded px-1 py-0.5 text-xs">')
						.replace(/<\/code>/g, '</code>')}
				</p>
			</li>
		{/each}
	</ul>
</section>

<hr class="border-surface0" />

<!-- HR 유지보수 -->
<section class="space-y-4">
	<h4 class="text-text text-lg font-semibold">전산 HR 시스템 유지보수 및 기능 개발</h4>

	<ul class="space-y-4">
		<li class="space-y-1">
			<p class="text-text font-medium">▸ iframe 기반 멀티 프레임 구조 유지보수</p>
			<p class="text-subtext0 text-sm leading-relaxed">
				부모 프레임과 iframe 기반 자식 프로젝트 간 <code class="text-accent bg-surface0 rounded px-1 py-0.5 text-xs">postMessage</code> 통신 구조를 분석하고 유지보수했습니다. sessionId, userInfo 등 인증·세션 데이터 흐름 관련 이슈를 처리했습니다.
			</p>
		</li>

		<li class="space-y-1">
			<p class="text-text font-medium">▸ 연봉계약서·제증명 서식 기능 개발</p>
			<p class="text-subtext0 text-sm leading-relaxed">
				<code class="text-accent bg-surface0 rounded px-1 py-0.5 text-xs">HtmSalaryLetterParser</code>
				구조를 분석하고 DB 데이터 연동 및 연도·서식 추가 기능을 개발했습니다. 서버 환경별 분기 로직을 반영하여 배포했습니다.
			</p>
		</li>

		<li class="space-y-1">
			<p class="text-text font-medium">▸ 사내 요청 시스템 프론트엔드 개발</p>
			<p class="text-subtext0 text-sm leading-relaxed">
				요청 등록·진행·완료 흐름의 프론트엔드를 구현했습니다. 요청 상태 관리, 목록 필터링, 최근 7일 통계 그래프, 즐겨찾기 기능 등을 개발했습니다.
			</p>
		</li>
	</ul>
</section>

<hr class="border-surface0" />

<!-- 문서화 -->
<section class="space-y-4">
	<h4 class="text-text text-lg font-semibold">전산 HR 시스템 문서화</h4>

	<ul class="space-y-4">
		<li class="space-y-1">
			<p class="text-text font-medium">▸ 레거시 시스템 구조 문서화</p>
			<p class="text-subtext0 text-sm leading-relaxed">
				Java 기반 HTMS 시스템 구조를 분석하고 코드·API·DB 구조를 문서화했습니다. Servlet → Model → DB → JSP/JS 흐름과 주요 클래스 역할을 정리했습니다.
			</p>
		</li>

		<li class="space-y-1">
			<p class="text-text font-medium">▸ 아키텍처 시각화 및 운영 위키 구축</p>
			<p class="text-subtext0 text-sm leading-relaxed">
				로그인, 세션, iframe 데이터 전달 등 시스템 흐름을 Figma 기반 플로우차트·시퀀스 다이어그램으로 시각화했습니다. 반복 발생하는 전산 요청 처리 절차를 위키로 표준화하여 운영 효율을 개선했습니다.
			</p>
		</li>
	</ul>
</section>
			</article>
		</div>

		<!-- ── QA Tab ── -->
		{:else}
			<div class="space-y-12">

	<!-- Payday -->
	<article id="payday-qa" class="space-y-6">
		<header class="border-surface0 border-b pb-4">
			<div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
				<div>
					<h3 class="text-text text-xl font-bold">QA Engineer</h3>
					<p class="text-accent font-medium">Payday</p>
				</div>
				<span class="text-overlay1 text-sm whitespace-nowrap">Jul 2024 – Aug 2025</span>
			</div>
			<p class="text-subtext0 mt-2 text-sm">연말정산·전산 시스템 QA</p>
		</header>

		<section class="space-y-4">
			<h4 class="text-text text-lg font-semibold">연말정산 및 급여 시스템 QA</h4>

			<ul class="space-y-4">
				<li class="space-y-1">
					<p class="text-text font-medium">▸ QA 프로세스 및 테스트 체계 구축</p>
					<p class="text-subtext0 text-sm leading-relaxed">
						별도의 QA 문서 및 테스트 체계가 없는 환경에서 Notion 기반 TC 시트, 버그 리포팅 양식, 운영 기준 문서를 직접 설계·구축했습니다. 구축한 QA 프로세스는 이후 팀 내 공통 기준으로 활용되었습니다.
					</p>
				</li>

				<li class="space-y-1">
					<p class="text-text font-medium">▸ 예외·경계값 기반 테스트 설계</p>
					<p class="text-subtext0 text-sm leading-relaxed">
						극단값, 누락값, 잘못된 형식 등 예외 시나리오 중심으로 테스트 케이스를 설계했습니다. 연말정산 시스템에 대해 블랙박스·화이트박스 테스트를 수행했습니다.
					</p>
				</li>

				<li class="space-y-1">
					<p class="text-accent font-medium">▸ Critical 오류 발견 및 운영 리스크 대응</p>
					<p class="text-subtext0 text-sm leading-relaxed">
						Critical 2건 포함 핵심 오류 8건을 발견했으며, 연말정산 오픈 기간 중 결함 발견 → 핫픽스 배포 → 회귀 테스트 사이클을 반복 수행하며 서비스 안정화에 기여했습니다.
					</p>
				</li>

				<li class="space-y-1">
					<p class="text-text font-medium">▸ 반복 테스트 자동화</p>
					<p class="text-subtext0 text-sm leading-relaxed">
						Cypress 기반으로 전산 ERP 로그인 및 업무 요청 게시판 등의 반복 테스트 자동화 스크립트를 작성해 반복 검증 시간을 절감했습니다.
					</p>
				</li>
			</ul>
		</section>
	</article>

	<!-- Raonsecure -->
	<article id="raonsecure" class="space-y-6">
		<header class="border-surface0 border-b pb-4">
			<div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
				<div>
					<h3 class="text-text text-xl font-bold">QA Intern</h3>
					<p class="text-accent font-medium">Raonsecure</p>
				</div>
				<span class="text-overlay1 text-sm whitespace-nowrap">Dec 2025 – Feb 2026</span>
			</div>
			<p class="text-subtext0 mt-2 text-sm">RAON Metademy (Launcher / Web Admin) QA</p>
		</header>

		<ul class="space-y-4">
			<li class="space-y-1">
				<p class="text-accent font-medium">▸ 다중 제품 QA 및 테스트 체계 구축</p>
				<p class="text-subtext0 text-sm leading-relaxed">
					Client 2종과 Admin 신규 클라이언트를 동시에 검증했으며, Jira Zephyr 기반 Test Case 100+를 직접 작성·확장하여 테스트 체계를 구축했습니다.
				</p>
			</li>

			<li class="space-y-1">
				<p class="text-text font-medium">▸ 요구사항 변경 대응 및 테스트 기준 정비</p>
				<p class="text-subtext0 text-sm leading-relaxed">
					화면설계서가 수시로 변경되는 환경에서 기획자와 직접 커뮤니케이션하며 요구사항을 정리하고 테스트 기준을 지속적으로 업데이트했습니다.
				</p>
			</li>

			<li class="space-y-1">
				<p class="text-accent font-medium">▸ 결제·세션 흐름 기반 결함 및 보안 이슈 발견</p>
				<p class="text-subtext0 text-sm leading-relaxed">
					콘텐츠 실결제 이후 구매 내역 미표시 결함과 세션 쿠키 Secure 미설정 취약점을 발견했습니다. DevTools, 네트워크 탭, API 응답, 예외 로그를 분석하여 수정 방향까지 포함한 이슈를 작성했습니다.
				</p>
			</li>

			<li class="space-y-1">
				<p class="text-text font-medium">▸ 개발 친화적 QA 협업 및 회귀 테스트 강화</p>
				<p class="text-subtext0 text-sm leading-relaxed">
					UI 퍼블리싱 오류 발생 시 CSS·JS 수정 포인트를 함께 전달하여 개발자가 즉시 수정할 수 있도록 지원했습니다. 로그 분석 결과를 기반으로 테스트 케이스를 확장해 유사 장애 재발을 방지했습니다.
				</p>
			</li>

			<li class="space-y-1">
				<p class="text-accent font-medium">▸ 성과</p>
				<p class="text-subtext0 text-sm leading-relaxed">
					Critical 2건·Major 36건 포함 총 179건의 결함을 등록하고 496건 이슈 대응을 수행했습니다. 계약 종료 시점 팀장 요청으로 계약이 1개월 연장되었습니다.
				</p>
			</li>
		</ul>
	</article>

	<!-- Soundmind -->
	<article id="soundmind" class="space-y-6">
		<header class="border-surface0 border-b pb-4">
			<div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
				<div>
					<h3 class="text-text text-xl font-bold">QA Tester</h3>
					<p class="text-accent font-medium">Soundmind</p>
				</div>
				<span class="text-overlay1 text-sm whitespace-nowrap">Dec 2025.01 – Dec 2025.12</span>
			</div>
			<p class="text-subtext0 mt-2 text-sm">ERP·판매 관리 시스템 통합 테스트</p>
		</header>

		<ul class="space-y-4">
			<li class="space-y-1">
				<p class="text-accent font-medium">▸ ERP 통합 테스트 및 모듈 검증</p>
				<p class="text-subtext0 text-sm leading-relaxed">
					2주간 9개 모듈 전체에 대한 통합 테스트를 수행했습니다. 테스트 케이스 작성·수행, 결함 등록, 수정 확인 및 회귀 테스트까지 전 과정을 담당했습니다.
				</p>
			</li>

			<li class="space-y-1">
				<p class="text-text font-medium">▸ 데이터 정합성 및 운영 흐름 검증</p>
				<p class="text-subtext0 text-sm leading-relaxed">
					대시보드와 정책 화면 간 입금액·페이백 데이터 불일치 이슈를 발견하고 수치 기반 정합성 검증을 통해 정산 시스템 신뢰도 개선에 기여했습니다.
				</p>
			</li>

			<li class="space-y-1">
				<p class="text-text font-medium">▸ UX 및 운영 품질 개선</p>
				<p class="text-subtext0 text-sm leading-relaxed">
					검색 필드 초기화 UX 개선안을 제안했으며, 매뉴얼 오탈자 60건 이상을 전수 점검해 서비스 완성도를 높였습니다.
				</p>
			</li>

			<li class="space-y-1">
				<p class="text-accent font-medium">▸ 성과</p>
				<p class="text-subtext0 text-sm leading-relaxed">
					TC 1,200건 수행 및 완료율 100%를 달성했습니다. Critical 7건 포함 총 60건의 결함을 발견하고 전체 재검증 완료 후 출시 승인에 기여했습니다.
				</p>
			</li>
		</ul>
	</article>

</div>
		{/if}
	</section>

</div>

<style>
	:global(html) {
		scroll-padding-top: 5rem;
	}
</style>
