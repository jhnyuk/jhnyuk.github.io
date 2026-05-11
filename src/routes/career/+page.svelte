<script lang="ts">
	import { IconBriefcase, IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-svelte';
	import Site from '$lib/config/common';
</script>

<svelte:head>
	<title>Career | 김지현</title>
	<meta name="description" content="김지현의 경력 — Full-stack Developer & QA Engineer" />
</svelte:head>

<div class="mx-auto max-w-4xl space-y-16 px-4 py-8 md:px-6">

	<!-- Header -->
	<section class="space-y-4">
		<h1 class="flex items-center gap-3 text-3xl font-bold md:text-4xl">
			<IconBriefcase size={32} class="text-accent" />
			Career
		</h1>
		<div class="flex flex-wrap gap-3 text-sm">
			<a href={Site.out.github} target="_blank" rel="noopener noreferrer"
				class="hover:text-accent inline-flex items-center gap-1.5 transition-colors">
				<IconBrandGithub size={15} /> GitHub
			</a>
			<span class="text-surface1">·</span>
			<a href={Site.out.linkedin} target="_blank" rel="noopener noreferrer"
				class="hover:text-accent inline-flex items-center gap-1.5 transition-colors">
				<IconBrandLinkedin size={15} /> LinkedIn
			</a>
			<span class="text-surface1">·</span>
			<a href={Site.out.email}
				class="hover:text-accent inline-flex items-center gap-1.5 transition-colors">
				<IconMail size={15} /> debussysuh@gmail.com
			</a>
		</div>
	</section>

	<!-- ─── Payday ─── -->
	<article class="space-y-10">
		<header class="border-surface0 border-b pb-4">
			<div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
				<div>
					<h2 class="text-text text-2xl font-bold">Full-stack Developer & QA Engineer</h2>
					<p class="text-accent font-medium">Payday</p>
				</div>
				<span class="text-overlay1 text-sm whitespace-nowrap">Jul 2024 – Aug 2025</span>
			</div>
			<p class="text-subtext0 mt-2 text-sm leading-relaxed">
				급여·연말정산·인사 관리 SaaS 서비스의 전산 시스템 유지보수 및 사내 도구 개발, QA 수행
			</p>
		</header>

		<!-- 사내 업무 이력 관리 시스템 -->
		<section class="space-y-4">
			<h3 class="text-text text-xl font-semibold">사내 업무 이력 관리 시스템</h3>
			<p class="text-subtext0 leading-relaxed">
				기존에는 전산 요청 처리 완료 후 개발 이력이 Git 커밋 로그·DB 로그에만 분산 저장되어, 어떤 요청에 어떤 작업이 이루어졌는지 추적이 불가능한 상태였습니다. 요청 단위로 작업 이력을 통합 관리하고 자동 저장하는 시스템을 기획부터 개발까지 주도했습니다.
			</p>

			<ul class="space-y-4">
				<li class="space-y-1">
					<p class="text-text font-medium">▸ 작업 이력 통합 기록 구조 설계</p>
					<p class="text-subtext0 text-sm leading-relaxed">
						작업 구분(Front/Back/DB/디자인), Git 이슈·커밋 링크, DB 쿼리, 배포 일시, 참고 문서, 기타 메모, 태그(HTMS/연말정산 등) 항목을 요청 단위로 통합 관리하는 구조를 설계했습니다. 저장 시 <code class="text-accent bg-surface0 rounded px-1 py-0.5 text-xs">htmItemList</code> 배열과 조회 시 <code class="text-accent bg-surface0 rounded px-1 py-0.5 text-xs">RbmWorkHistoryItemDTO</code> 구조가 달라 타입별(ISSUE/QUERY/COPY/REFERENCE/NOTICE) 그룹화·역변환 로직을 직접 설계하여 구현했습니다.
					</p>
				</li>
				<li class="space-y-1">
					<p class="text-text font-medium">▸ 자동 저장 및 변경 감지 구현</p>
					<p class="text-subtext0 text-sm leading-relaxed">
						상세 화면 닫기·다른 항목 이동·외부 클릭·브라우저 닫기 시점에 저장 API를 일괄 호출하도록 구현했습니다. <code class="text-accent bg-surface0 rounded px-1 py-0.5 text-xs">useRef</code>로 초기 상태를 저장하고 현재값과 비교하여 변경된 경우에만 API를 호출해 불필요한 요청을 최소화했습니다. 저장 시 마지막 수정자·일시(<code class="text-accent bg-surface0 rounded px-1 py-0.5 text-xs">htmRegDate</code>, <code class="text-accent bg-surface0 rounded px-1 py-0.5 text-xs">htmRegSabun</code>)를 자동 표시하는 기능도 함께 구현했습니다.
					</p>
				</li>
				<li class="space-y-1">
					<p class="text-text font-medium">▸ 편집 모드 UX 구현</p>
					<p class="text-subtext0 text-sm leading-relaxed">
						더블 클릭 시 편집 모드로 전환되고, 외부 클릭 시 자동 저장 후 읽기 모드로 복귀하는 흐름을 구현했습니다. URL 입력값은 텍스트로 표시하되 Ctrl+클릭 시 새 탭으로 열리도록 처리했습니다. 배포 일시는 날짜(숫자 자동 포맷)·시간(콜론 자동 삽입) 입력 필드로 분리하여 입력 편의성을 높였습니다.
					</p>
				</li>
				<li class="space-y-1">
					<p class="text-text font-medium">▸ 권한 분리</p>
					<p class="text-subtext0 text-sm leading-relaxed">
						요청 수신자 사번을 기준으로 전산팀 여부를 판단하여 작업 이력 패널의 노출 여부를 제어했습니다. HR팀·경영팀 등 타 팀에는 화면이 노출되지 않도록 처리했습니다.
					</p>
				</li>
				<li class="space-y-1">
					<p class="text-text font-medium">▸ 트러블슈팅: 상태 업데이트 타이밍 문제</p>
					<p class="text-subtext0 text-sm leading-relaxed">
						Tag·Type 선택 후 저장 시 이전 값이 API로 전달되는 문제가 발생했습니다. Redux 상태 업데이트는 비동기이므로 <code class="text-accent bg-surface0 rounded px-1 py-0.5 text-xs">setTimeout</code>으로는 완료 시점을 보장할 수 없음을 파악하고, 상태가 확정된 이후 저장 로직이 실행되도록 의존성 구조를 재설계하여 해결했습니다.
					</p>
				</li>
				<li class="space-y-1">
					<p class="text-text font-medium">▸ 트러블슈팅: 변경 감지 오작동 및 빈 값 필터링</p>
					<p class="text-subtext0 text-sm leading-relaxed">
						<code class="text-accent bg-surface0 rounded px-1 py-0.5 text-xs">hasChanged</code> 상태가 입력 이벤트 발생 여부만 체크하여 실제 값 변경과 무관하게 저장 API가 호출되던 문제를, <code class="text-accent bg-surface0 rounded px-1 py-0.5 text-xs">useRef</code> 기반 초기값 비교 방식으로 교체하여 해결했습니다. 삭제하지 않은 빈 입력 필드가 API에 전송되던 문제는, 하위 컴포넌트의 <code class="text-accent bg-surface0 rounded px-1 py-0.5 text-xs">onDelete</code> 대신 저장 직전 부모 컴포넌트에서 빈 값을 필터링하도록 책임 위치를 상위로 이동하여 해결했습니다.
					</p>
				</li>
				<li class="space-y-1">
					<p class="text-text font-medium">▸ 트러블슈팅: 캘린더 스크롤 레이아웃 깨짐 및 SVG 반복 로딩</p>
					<p class="text-subtext0 text-sm leading-relaxed">
						캘린더가 열릴 때 <code class="text-accent bg-surface0 rounded px-1 py-0.5 text-xs">body overflow: auto → hidden</code> 전환으로 스크롤바가 사라지며 레이아웃이 틀어지는 현상을, 캘린더 open 상태 기반 overflow 복구 로직으로 해결했습니다. 편집 모드 전환 시마다 SVG 아이콘을 새로 불러오던 문제는 import 방식으로 일괄 변경하여 불필요한 리소스 요청을 제거했습니다.
					</p>
				</li>
			</ul>
		</section>

		<hr class="border-surface0" />

		<!-- AI 평가 검증 시스템 -->
		<section class="space-y-4">
			<h3 class="text-text text-xl font-semibold">AI 평가 검증 시스템 프론트엔드 개발</h3>
			<p class="text-subtext0 leading-relaxed">
				사내 AI 챗봇의 답변 품질을 관리하기 위해, 사용자가 입력한 예상 답변과 실제 AI 답변을 비교·평가하는 관리 시스템의 프론트엔드를 단독으로 설계하고 개발했습니다.
			</p>
			<ul class="space-y-4">
				<li class="space-y-1">
					<p class="text-text font-medium">▸ 테스트 케이스 관리 화면 구현</p>
					<p class="text-subtext0 text-sm leading-relaxed">
						테스트 케이스 목록·체크박스 다중 선택·상세 패널·편집 모달 등 복합 UI 상태를 React Hooks로 구조화했습니다. 전체 선택/개별 선택 토글, 검증·수정·삭제 액션 버튼, 토스트 메시지 시스템(전역 관리) 등을 구현하여 즉각적인 피드백을 제공했습니다.
					</p>
				</li>
				<li class="space-y-1">
					<p class="text-text font-medium">▸ 검증 플로우 및 이어서 테스트 기능 구현</p>
					<p class="text-subtext0 text-sm leading-relaxed">
						질문 클릭 시 우측 상세 패널에서 예상 답변·AI 답변을 비교하고 검증 결과를 확인할 수 있는 인터페이스를 구현했습니다. 기존 검증 내역을 불러와 대화 형태로 이어서 테스트할 수 있는 모달 기능도 함께 개발했습니다.
					</p>
				</li>
			</ul>
		</section>

		<hr class="border-surface0" />

		<!-- 전산 HR 시스템 유지보수 -->
		<section class="space-y-4">
			<h3 class="text-text text-xl font-semibold">전산 HR 시스템 유지보수 및 기능 개발</h3>
			<p class="text-subtext0 leading-relaxed">
				인사·급여·근태·세금 계산·연봉계약서·제증명 등 다수의 HR 모듈을 유지보수하고 기능을 개선했습니다.
			</p>
			<ul class="space-y-4">
				<li class="space-y-1">
					<p class="text-text font-medium">▸ iframe 기반 멀티 프레임 아키텍처 유지보수</p>
					<p class="text-subtext0 text-sm leading-relaxed">
						부모 프레임(HTMS SpaceX)이 iframe을 통해 자식 프로젝트를 통합하는 구조를 분석하고, <code class="text-accent bg-surface0 rounded px-1 py-0.5 text-xs">postMessage</code> 기반의 세션·사용자 정보 전달 로직을 유지보수했습니다. 부모↔자식 간 sessionId, userInfo, menuNm 등의 데이터 흐름을 파악하여 인증 관련 이슈를 처리했습니다.
					</p>
				</li>
				<li class="space-y-1">
					<p class="text-text font-medium">▸ 연봉계약서·제증명 서식 개발 및 배포</p>
					<p class="text-subtext0 text-sm leading-relaxed">
						<code class="text-accent bg-surface0 rounded px-1 py-0.5 text-xs">HtmSalaryLetterParser</code> 키워드 치환 구조를 분석하여 DB 데이터 연동 및 연도·서식 추가 작업을 수행했습니다. 서버별 분기 로직을 반영하여 배포했습니다.
					</p>
				</li>
				<li class="space-y-1">
					<p class="text-text font-medium">▸ 사내 요청 시스템(CCM 후속) 프론트엔드 개발</p>
					<p class="text-subtext0 text-sm leading-relaxed">
						요청 등록·진행·완료 전 사이클 UI를 구현했습니다. 요청 목록 필터링·상태 관리(새요청→진행중→마무리→완료), 대시보드 시각화(최근 7일 그래프), 즐겨찾기 등 주요 기능을 개발했습니다.
					</p>
				</li>
			</ul>
		</section>

		<hr class="border-surface0" />

		<!-- 연말정산 QA -->
		<section class="space-y-4">
			<h3 class="text-text text-xl font-semibold">연말정산 및 급여 시스템 QA</h3>
			<p class="text-subtext0 leading-relaxed">
				연말정산 모바일·웹 서비스의 QA를 수행했습니다. 세액 계산 및 수당 지급 로직이 포함된 금융 도메인으로, 작은 계산 오류도 재무 리스크로 직결되는 환경이었습니다.
			</p>
			<ul class="space-y-4">
				<li class="space-y-1">
					<p class="text-text font-medium">▸ 테스트 프로세스 0부터 수립</p>
					<p class="text-subtext0 text-sm leading-relaxed">
						기존 QA 체계가 부재한 상태에서 QA 시트와 Notion 기반 테스트 프로세스를 직접 구축했습니다. 요구사항 기반 테스트 시나리오를 재정비하고, 세액 계산 로직을 화이트박스 관점으로 재검증하여 경계값·예외 케이스 중심의 TC를 설계했습니다.
					</p>
				</li>
				<li class="space-y-1">
					<p class="text-text font-medium">▸ 핵심 결함 발견 및 재무 리스크 차단</p>
					<p class="text-subtext0 text-sm leading-relaxed">
						Critical 2건 포함 핵심 오류 총 8건을 발견하여 수정 완료했습니다. 세액 계산 정확성 검증, 홈택스 간편화 정보 연동 데이터 정합성 확인을 통해 잠재적 재무 리스크를 사전에 차단했습니다.
					</p>
				</li>
				<li class="space-y-1">
					<p class="text-text font-medium">▸ 개발 친화적 이슈 리포팅</p>
					<p class="text-subtext0 text-sm leading-relaxed">
						DevTools 네트워크 탭을 활용하여 API 응답값·상태 코드(302/404/500) 기반으로 원인을 추정하고, 수정 방향까지 포함한 이슈를 작성했습니다. 디자이너·개발자와 우선순위를 협의하고, 릴리즈 전 잔여 이슈를 정리하여 배포 판단을 지원했습니다.
					</p>
				</li>
			</ul>
		</section>

		<hr class="border-surface0" />

		<!-- 전체 문서화 -->
		<section class="space-y-4">
			<h3 class="text-text text-xl font-semibold">전산 HR 시스템 전체 문서화</h3>
			<p class="text-subtext0 leading-relaxed">
				레거시 Java 기반 HTMS 전체 시스템을 약 1개월에 걸쳐 단독으로 문서화했습니다. 코드 파일·API·DB 구조를 전수 정리하고, 반복되는 전산 요청 처리 기준을 위키로 표준화하여 팀 내 온보딩 비용을 절감했습니다.
			</p>
			<ul class="space-y-4">
				<li class="space-y-1">
					<p class="text-text font-medium">▸ 아키텍처 시각화</p>
					<p class="text-subtext0 text-sm leading-relaxed">
						HTMS 시스템 전체 흐름(로그인 → 세션 → iframe 데이터 전달 → 각 모듈)을 Figma로 플로우차트·시퀀스 다이어그램 형태로 시각화했습니다.
					</p>
				</li>
				<li class="space-y-1">
					<p class="text-text font-medium">▸ 코드·DB·API 문서화</p>
					<p class="text-subtext0 text-sm leading-relaxed">
						Servlet(CPage) → Model → Tr(DB) → En(엔티티) → JSP/JS 레이어 구조 및 각 클래스 역할을 정리했습니다. 연봉계약서·급여명세서·제증명 등 주요 기능별 테이블 구조, 컬럼 정의, 연관 쿼리와 함께 주요 화면별 요청 파라미터·응답 구조·인증 흐름을 문서화했습니다.
					</p>
				</li>
				<li class="space-y-1">
					<p class="text-text font-medium">▸ 운영 위키 구축</p>
					<p class="text-subtext0 text-sm leading-relaxed">
						급여명세서 하단 문구 추가, 연봉계약서 연도·서식 추가, 제증명 서식 세팅 등 반복 발생하는 전산 요청 처리 절차를 단계별 체크리스트로 문서화하여 처리 기준을 표준화했습니다.
					</p>
				</li>
			</ul>
		</section>
	</article>

	<!-- ─── Raonsecure ─── -->
	<article class="space-y-6">
		<header class="border-surface0 border-b pb-4">
			<div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
				<div>
					<h2 class="text-text text-2xl font-bold">QA Intern</h2>
					<p class="text-accent font-medium">Raonsecure</p>
				</div>
				<span class="text-overlay1 text-sm whitespace-nowrap">Dec 2025 – Feb 2026</span>
			</div>
			<p class="text-subtext0 mt-2 text-sm">RAON Metademy (Launcher / Web Admin) QA</p>
		</header>
		<ul class="text-subtext0 space-y-2 text-sm">
			<li>• 39일간 빠른 릴리즈 환경에서 179건 등록·496건 대응</li>
			<li>• 요구사항 기반 TC 100+ 설계·수행</li>
			<li>• 결제 흐름 전 구간 시나리오 검증 — 실결제 후 구매 내역 미표시 결함 조기 발견</li>
			<li>• DevTools·API 응답·예외 로그 기반 유사 장애 예방을 위한 TC 확장 수행</li>
			<li>• 인증 우회·세션 쿠키 Secure 미설정 등 보안·접근제어 취약점 조기 발견</li>
			<li>• Jira 이슈 구조화, Zephyr Test Cycle 운영, Jira Automation 적용으로 반복 작업 최소화</li>
			<li>• 릴리즈 전 잔여 이슈 정리 및 배포 판단 기준 자료 제공 / 계약 연장 요청 수령</li>
		</ul>
	</article>

	<!-- ─── Soundmind ─── -->
	<article class="space-y-6">
		<header class="border-surface0 border-b pb-4">
			<div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
				<div>
					<h2 class="text-text text-2xl font-bold">QA Tester</h2>
					<p class="text-accent font-medium">Soundmind</p>
				</div>
				<span class="text-overlay1 text-sm whitespace-nowrap">Dec 2025.01 – Dec 2025.12</span>
			</div>
			<p class="text-subtext0 mt-2 text-sm">ERP·판매 관리 시스템 통합 테스트</p>
		</header>
		<ul class="text-subtext0 space-y-2 text-sm">
			<li>• 9개 모듈 TC 1,200건 수행, 완료율 100% (PASS율 98% 이상 · Critical 0건 기준 충족)</li>
			<li>• Critical 7건(기능 불능·데이터 유실) 포함 총 60건 결함 발견 / 수정 후 Retest 수행</li>
			<li>• 대시보드·정책 화면 간 입금액·페이백 금융 데이터 정합성 불일치 이슈 발견 → 정산 신뢰도 개선</li>
			<li>• 전수 조사·검색 필드 초기화 UX 개선 제안 + 매뉴얼 오탈자 60건 검수</li>
		</ul>
	</article>

</div>

<style>
	:global(html) {
		scroll-padding-top: 5rem;
	}
</style>
