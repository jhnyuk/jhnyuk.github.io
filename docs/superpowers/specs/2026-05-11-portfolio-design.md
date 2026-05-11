# 김지현 개발자 포트폴리오 설계 문서

**날짜**: 2026-05-11  
**참고 사이트**: https://jasoncameron.dev  
**참고 코드**: https://github.com/JasonLovesDoggo/nyx

---

## 1. 목표

jasoncameron.dev의 디자인과 구조를 기반으로 김지현의 개발자 포트폴리오를 제작한다. Catppuccin 테마, 반응형 레이아웃, GitHub 커밋 피드를 포함하며 GitHub Pages로 배포한다.

---

## 2. 기술 스택

| 항목 | 기술 |
|------|------|
| 프레임워크 | SvelteKit 5 |
| 스타일 | Tailwind CSS v4 |
| 마크다운 | MDsveX (.svx) |
| 테마 | Catppuccin (Latte / Frappe / Macchiato / Mocha) |
| 배포 | GitHub Pages (`@sveltejs/adapter-static`) |
| CI/CD | GitHub Actions |
| 패키지 매니저 | npm (원본은 bun, GitHub Actions 호환성 우선) |

---

## 3. 사용자 정보

| 항목 | 값 |
|------|-----|
| 이름 | 김지현 |
| 직함 | Web Developer & QA Engineer |
| 이메일 | debussysuh@gmail.com |
| GitHub | https://github.com/jhnyuk |
| LinkedIn | https://www.linkedin.com/in/jhnyuk/ |
| 기술 스택 | Java, Spring Boot, React.js, Node.js, MySQL, MongoDB, Jira, Zephyr Scale, Confluence, Figma, Jenkins, AWS, Swagger, Claude |

---

## 4. 경력

### 1. QA Intern · Raonsecure (2025.12 – 2026.02)
- RAON Metademy (Launcher / Web Admin) QA
- 39일간 빠른 릴리즈 환경에서 179건 등록·496건 대응
- 요구사항 기반 TC 100+ 설계·수행
- 결제 흐름 전 구간 시나리오 검증 — 실결제 후 구매 내역 미표시 결함 조기 발견
- 로그 분석 및 TC 확장 수행 — DevTools·API 응답·예외 로그 기반 유사 장애 예방
- 인증 우회·세션 쿠키 Secure 미설정 등 보안·접근제어 취약점 조기 발견
- Jira 이슈 구조화, 필터링으로 진행 상황 즉시 파악 가능하도록 관리 체계 구축
- Zephyr Test Cycle 운영 · Jira Automation 적용으로 반복 작업 최소화

### 2. QA Tester · Soundmind (2025.12.01 – 2025.12.12)
- ERP·판매 관리 시스템 통합 테스트
- 9개 모듈 TC 1,200건 수행, 완료율 100% (PASS율 98% 이상)
- Critical 7건 포함 총 60건 결함 발견 / 수정 후 Retest 수행
- 금융 데이터 정합성 불일치 이슈 발견 → 정산 신뢰도 개선
- 전수 조사·검색 필드 초기화 UX 개선 제안 + 매뉴얼 오탈자 60건 검수

### 3. Web Developer & QA Engineer · Payday (2024.07 – 2025.08)
- 연말정산·급여 시스템 QA 및 사내 전산 개발
- 연말정산 QA — Critical 2건 포함 핵심 오류 8건 발견
- 홈택스 연동 데이터 정합성 확인·세액 계산 정확성 검증
- Notion 기반 TC·버그 리포팅 프로세스 개인 구축
- 사내 업무 이력 관리 시스템 개발 (React + Spring Boot)
- Unit Test 테스트 코드 작성 및 Postman API 문서화
- AI 평가 검증 시스템 프론트엔드 개발

---

## 5. 페이지 구조

### 5.1 홈 (`/`)
1. **Hero 섹션** — 이름, 직함, 소개 한 줄, 소셜 링크 (GitHub, 이메일, LinkedIn)
2. **Experience 섹션** — 경력 3개를 타임라인 형태로 표시
3. **Featured Projects** — 대표 프로젝트 2개 카드 (초기 구현 시 Payday 사내 시스템 + 플레이스홀더로 구성, 이후 `content/projects/*.svx` 파일 편집으로 교체 가능)
4. **Bento 그리드** — 아래 3개 박스:
   - 테마 선택기 (Catppuccin 팔레트 + 액센트 색상)
   - 이메일 Contact 박스
   - GitHub 최신 커밋 피드

### 5.2 About (`/about`)
- 전체 경력 상세 (경력 3개 모두)
- 기술 스택 목록

### 5.3 Projects (`/projects`)
- `content/projects/*.svx` 파일 기반 프로젝트 목록
- 각 프로젝트: 이름, 설명, 기술 태그, GitHub 링크

---

## 6. 컴포넌트 계획

| 컴포넌트 | 원본 | 변경 사항 |
|----------|------|-----------|
| `Header.svelte` | 재사용 | 네비게이션 항목 조정 (About, Projects, More) |
| `Footer.svelte` | 재사용 | GitHub 링크 업데이트 |
| `Sidebar.svelte` | 재사용 | 그대로 |
| `ThemeSelector.svelte` | 재사용 | 그대로 |
| `ColorSelector.svelte` | 재사용 | 그대로 |
| `Experience.svelte` | 교체 | 김지현 경력 데이터로 교체 |
| `CommitDiffWidget.svelte` | 교체 | GitHub Events API로 교체 |
| `LocationMap.svelte` | **제거** | — |
| `TimeWaster.svelte` | **제거** | — |
| `ContactBox.svelte` | **신규** | 이메일 + GitHub 링크 |

---

## 7. 데이터 흐름

### GitHub 커밋 피드
```
빌드/서버 타임:
GET https://api.github.com/users/jhnyuk/events/public
→ PushEvent 타입 필터
→ 커밋 메시지, repo명, sha, 날짜 추출
→ 최신 5개 표시

특성: 공개 API, 인증 불필요, rate limit 60 req/hr (IP 기준)
GitHub Pages는 정적 빌드이므로 +page.server.ts에서 빌드 타임에 fetch
```

### 프로젝트 데이터
```
content/projects/*.svx (TOML frontmatter)
→ MDsveX glob import
→ /projects 페이지 렌더링
→ featured: true인 항목 → 홈 Featured 섹션
```

---

## 8. 테마 시스템

원본 구조 그대로:
- `<html>` 태그에 `mocha | frappe | macchiato | latte` 클래스 토글
- `--current-accent-color` CSS 변수로 액센트 색상 제어
- `localStorage`에 선택 저장 (페이지 새로고침 후에도 유지)
- 초기값: `prefers-color-scheme` 감지 (dark → mocha, light → latte)

---

## 9. GitHub Pages 배포

### 어댑터
```js
// svelte.config.js
import adapter from '@sveltejs/adapter-static';

adapter({ pages: 'build', assets: 'build', fallback: '404.html' })
```

### GitHub Actions 워크플로우 (`.github/workflows/deploy.yml`)
```
Trigger: push to main
Steps:
1. Checkout
2. Setup Node.js
3. npm install
4. npm run build
5. Deploy build/ → gh-pages branch
```

### 저장소 및 배포 URL
- 저장소: https://github.com/jhnyuk/jhnyuk.github.io
- 배포 URL: https://jhnyuk.github.io

---

## 10. 네비게이션

**메인 nav**: About | Projects | More...  
**More 사이드바**: Resume (PDF 링크), GitHub

---

## 11. 범위 밖 (이번 구현 제외)

- 블로그 포스트 (`/posts`)
- 사진 갤러리 (`/pics`)
- 위치 지도
- 클릭 카운터
- Cloudflare KV 캐시
- Webring 통합
