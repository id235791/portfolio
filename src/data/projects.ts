import type { Project, SideProject } from "@/types";

// 대표 프로젝트. 각 항목은 /projects/[slug] 상세 페이지로 정적 생성된다.
// slug를 바꾸면 URL도 바뀌므로 외부에 공유한 뒤에는 가급적 유지한다.
export const projects: Project[] = [
  {
    slug: "construction-platform",
    title: "건설업계 종합 플랫폼",
    summary:
      "다양한 이해관계자가 사용하는 대규모 건설 플랫폼을 오픈까지 이끈 풀스택 개발. 레거시를 공통 모듈과 디자인 패턴으로 구조화해 팀의 개발 기준을 세웠습니다.",
    period: "2025.04 - 2026.01",
    organization: "아이디어정보기술",
    role: "풀스택 개발 · 공통 개발 · 하위 인력 관리",
    contribution: "100%",
    tech: [
      "Spring Boot",
      "Pebble",
      "Vue.js",
      "JPA",
      "MyBatis",
      "PostgreSQL",
      "Redis",
      "Jenkins",
      "Ubi-Report",
    ],
    accent: "from-violet-500 via-fuchsia-500 to-pink-500",
    background:
      "건설업계 종합 플랫폼은 발주처, 시공사, 협력사 등 여러 이해관계자가 함께 쓰는 대규모 서비스로, 안정성과 유지보수성이 무엇보다 중요했습니다. 애자일 방식으로 진행되는 프로젝트에서 공통 개발 팀의 일원으로 환경 세팅부터 핵심 기능, API 설계, 레거시 개선, 배포 자동화까지 전 범위를 맡았습니다.",
    keyWork: [
      "서비스 오픈을 위한 권한·보안·코드 검측 환경 세팅",
      "Jenkins CI/CD 파이프라인 관리와 브랜치·태그 기반 버저닝",
      "공통 모듈·인터페이스 설계 및 하위 인력에 제공",
      "퍼사드·아토믹·팩토리·싱글톤 패턴 기반 레거시 리팩토링",
      "Server-to-Server API, RESTful API 설계 및 구축",
      "착공계 문서 관리 핵심 기능 합동 개발, Ubi-Report 리포팅 자동화",
    ],
    challenges: [
      {
        problem:
          "주니어 개발자들이 복잡한 레거시 코드를 충분히 분석하지 않고 그대로 복사해 재사용하면서 비효율적인 구조가 계속 재생산되었고, 코드 검측률 저하와 일정 지연으로 이어졌습니다.",
        solution:
          "정형화된 아키텍처와 코드 구조를 설계해 팀 내 개발 기준을 세우고, 레거시를 컴포넌트·인터페이스 단위로 모듈화해 공통으로 제공했습니다. 팀원 모두가 같은 규칙과 흐름 안에서 개발하도록 만들었습니다.",
      },
      {
        problem:
          "반대로 일부 구성원은 기존 레이어를 무시하고 개인 스타일로 개발해, 복잡한 건설 도메인이 표준 없이 구현되면서 인수인계와 유지보수 부담이 급격히 커졌습니다.",
        solution:
          "개발자마다 따로 만들던 로직을 하나의 공통 모듈로 통합하고, 응답 처리·에러 핸들링 같은 관심사를 분리해 일관된 방식으로 수행하도록 했습니다. 퍼사드, 아토믹, 팩토리, 싱글톤 패턴을 상황에 맞게 적용해 모듈 간 의존성을 낮췄습니다.",
      },
      {
        problem:
          "착공계 문서 관리는 문서 승인 흐름, 상태 관리, 리포팅 등 세부 요구사항이 많은 플랫폼의 핵심 기능이었고, 다른 모듈과 데이터를 주고받아야 했습니다.",
        solution:
          "건설 도메인을 빠르게 학습해 승인 흐름과 상태 관리를 서비스 로직에 반영하고, Server-to-Server 통신과 RESTful API를 직접 설계해 모듈 간 데이터를 교환했습니다. Ubi-Report로 리포팅을 자동화했습니다.",
      },
    ],
    results: [
      "착공계 문서 관리 등 핵심 기능을 성공적으로 개발하고 서비스 오픈에 기여",
      "공통 모듈과 표준 구조 제공으로 복잡했던 레거시의 유지보수 효율 향상",
      "권한·보안·코드 검측 등 서비스 오픈 환경 세팅, Jenkins CI/CD 파이프라인으로 배포 자동화",
      "하위 인력 5인 대상 코드 리뷰·교육·도메인 설명으로 팀 생산성과 코드 품질 향상",
    ],
    learnings: [
      "협업에서 가장 중요한 것은 개인의 능력보다 팀의 일관성이라는 점",
      "문제의 원인을 코드 자체가 아니라 프로세스, 구조, 기준의 부재에서 찾고 해결하는 시각",
      "브랜치·태그 기반 버저닝과 배포 파이프라인 운영 경험",
    ],
    links: [],
  },
  {
    slug: "legacy-integration",
    title: "SaaS - 기간계 시스템 연동",
    summary:
      "신세계인터내셔날 연동 API의 토큰 기반 보안 인증과 LG전자 Zendesk Private App의 데이터 전송 구조를 설계·개발했습니다.",
    period: "2026.02 - 2026.07",
    organization: "지에스네오텍(주)",
    role: "백엔드 · 연동 설계 및 개발",
    contribution: "100%",
    tech: ["Spring Framework", "PostgreSQL", "JavaScript", "Zendesk API", "Claude Code"],
    accent: "from-cyan-400 via-sky-500 to-indigo-500",
    background:
      "SaaS 기반 고객지원 플랫폼(Zendesk)과 고객사의 기간계 시스템을 연결하는 프로젝트를 두 건 연속으로 수행했습니다. 하나는 신세계인터내셔날의 정보보안 취약점 대응을 위한 연동 API 보안 인증 개발, 다른 하나는 LG전자 Zendesk Private App 고도화로 기간계 시스템 이관에 맞춘 새로운 연동 방식 설계였습니다.",
    challenges: [
      {
        problem:
          "SaaS 앱과 기간계 시스템 사이의 연동 API가 보안 취약점 점검에서 지적되어, 외부에서 호출 가능한 API를 안전하게 보호할 방법이 필요했습니다.",
        solution:
          "Spring Framework 기반으로 토큰 발급·검증 로직을 구현해 연동 API에 토큰 기반 인증과 권한 제어를 적용하고, 그 과정에서 얽혀 있던 레거시 코드를 리팩토링했습니다.",
      },
      {
        problem:
          "LG전자의 기간계 시스템이 이관되면서 기존 Zendesk 앱이 보내던 데이터 형식과 연동 방식을 그대로 쓸 수 없게 되었습니다.",
        solution:
          "Zendesk가 제공하는 API와 이벤트 구조를 분석해 데이터 전송 구조를 새로 설계하고, 양쪽 시스템 형식을 맞추는 Payload 변환 기능을 개발했습니다.",
      },
      {
        problem:
          "운영 중 반복적으로 발생하는 장애가 있었고, 익숙하지 않은 기존 코드베이스를 빠르게 파악해야 했습니다.",
        solution:
          "장애의 Root Cause를 분석해 재발 방지 방안을 수립하고, Claude Code를 활용해 코드 분석과 리팩토링 속도를 높여 유지보수 효율을 개선했습니다.",
      },
    ],
    results: [
      "토큰 기반 보안 인증 백엔드 로직 개발로 정보보안 취약점 대응 완료",
      "기간계 이관에 맞춘 신규 연동 방식 및 Payload 변환 기능 개발 완료",
      "AI 도구를 활용한 유지보수 프로세스 개선과 레거시 리팩토링",
    ],
    learnings: [
      "복잡한 SaaS 구조를 분석하고 기존 시스템과 유기적으로 연계하는 방법",
      "운영 환경에서 장애 원인을 추적하고 재발을 막는 문제 해결 방식",
      "AI 코딩 도구를 실무 유지보수에 효과적으로 접목하는 방법",
    ],
    links: [],
  },
  {
    slug: "duckzip",
    title: "duckzip (덕집)",
    summary:
      "애니메이션 캐릭터 팬 커뮤니티. 8인 팀의 PM으로 첫 인프라 세팅부터 4단계 환경 분리 배포, GitHub Actions 협업 자동화, 공통 API 기반까지 직접 구축했습니다.",
    period: "2026.04 - 진행중",
    organization: "사이드 프로젝트 · 8인 팀",
    role: "PM · 아키텍처 · 인프라/DevOps",
    contribution: "50%",
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Vercel",
      "GitHub Actions",
      "Cloudflare R2",
      "Expo",
      "React Query",
      "Gemini API",
      "Claude Code",
    ],
    accent: "from-amber-400 via-orange-500 to-rose-500",
    background:
      "duckzip(덕집)은 좋아하는 작품과 캐릭터를 중심으로 모이는 팬 커뮤니티입니다. 작품 게시판, 캐릭터 투표, 이상형 월드컵, 굿즈·콜라보 일정, 1:1 상담 채팅 등을 제공합니다. 8명이 함께 개발하는 프로젝트에서 PM을 맡아 저장소와 모노레포 구조를 처음 만드는 것부터 환경별 인프라, 배포 파이프라인, 팀 협업 자동화, 모든 API가 거쳐 가는 공통 기반까지 개발 환경 전체를 직접 구축했습니다. 저장소 전체 커밋의 약 40%를 작성했습니다.",
    keyWork: [
      "인프라 초기 세팅: Vercel(웹), Supabase(DB·인증·Realtime), Cloudflare R2(파일 스토리지)를 연동하고 환경변수 체계와 .env.example 정비",
      "local / dev / preview / prod 4단계 환경 설계와 브랜치별 자동 배포(preview, main만 빌드)",
      "GitHub Actions: main 갱신 시 하위 브랜치 자동 동기화, 충돌·PR 발생 시 Discord 알림",
      "DB 마이그레이션 스크립트(dev/prod 분리 실행)와 운영 반영 규칙",
      "API 공통 기반: Route Handler 공통 에러 처리·CORS, JWT 인증 레이어, 중복 요청 방지(idempotency)",
      "공통 파일 업로드·다운로드·썸네일 API, 실시간 채팅 공통 모듈(Supabase Realtime)",
      "관리자용 인프라 사용량 모니터링 대시보드(Vercel·Supabase·R2 API 연동)",
      "SEO(robots, sitemap, OG 메타데이터, Search Console), PWA, 앱 WebView 셸",
      "Claude Code 팀 개발 환경: 프로젝트 규칙(CLAUDE.md), 스킬, 브랜치 보호 훅",
      "AI 자연어 검색(Gemini + 벡터 하이브리드 검색)",
    ],
    challenges: [
      {
        problem:
          "local, dev, preview, prod 네 환경이 필요했지만 Supabase 무료 플랜은 프로젝트가 2개로 제한되었고, 어느 브랜치에 push하든 Vercel이 빌드를 돌려 빌드 자원이 낭비되었습니다.",
        solution:
          "local/dev/preview는 개발 DB를 공유하고 운영 DB만 분리하는 2-프로젝트 전략을 세우고, 파일 스토리지(Cloudflare R2)도 staging/prod 버킷으로 나눴습니다. Vercel ignoreCommand로 preview와 main만 빌드되게 했고, bash 전용 문법 때문에 조건이 무시되던 문제를 POSIX 호환 문법으로 고쳐 의도대로 동작하게 만들었습니다.",
      },
      {
        problem:
          "8명이 각자 feature 브랜치에서 작업하다 보니 main과의 차이가 금방 벌어져 충돌이 커졌고, 보호해야 할 main/dev 브랜치에 직접 작업하는 실수도 생길 수 있었습니다.",
        solution:
          "GitHub Actions로 main이 갱신될 때마다 dev, preview, 모든 feature/* 브랜치에 자동 merge하고, 충돌이 나면 merge를 되돌린 뒤 해결 방법과 함께 Discord로 알리게 했습니다. PR이 열리면 커밋 목록과 테스트 체크리스트를 Discord로 보냈고, Cloudflare가 요청을 차단하는 문제는 curl 요청과 User-Agent 지정으로 해결했습니다. Claude Code 훅으로 main/dev 직접 수정을 막고, 세션을 시작할 때 main보다 뒤처진 커밋 수를 알려주도록 했습니다.",
      },
      {
        problem:
          "DB 스키마 변경이 개발 DB에만 적용되고 운영 DB에는 빠진 채 배포되면 운영 서비스가 바로 깨질 위험이 있었습니다.",
        solution:
          "SQL 마이그레이션 파일을 대상 환경(dev/prod)을 골라 실행하는 migrate 스크립트를 만들고, main으로 PR을 올리기 전에 운영 DB 마이그레이션을 먼저 적용하는 규칙을 문서화했습니다. 현재 70여 개의 마이그레이션이 이 흐름으로 관리되고 있습니다.",
      },
      {
        problem:
          "외부에서 API를 마음대로 호출할 수 있었고, 버튼을 연달아 누르거나 네트워크가 재시도하면 같은 요청이 중복으로 처리될 수 있었습니다.",
        solution:
          "모든 Route Handler가 거쳐 가는 공통 래퍼(withHandler)에 IP·Origin에 묶인 JWT 검증을 넣고, 공통 apiClient가 토큰을 자동으로 붙이고 만료되면 재발급 후 재시도하게 했습니다. 클라이언트는 진행 중인 같은 요청을 재사용하고, 서버는 Idempotency-Key 캐시로 중복 처리를 막아 이중 방어했습니다.",
      },
      {
        problem:
          "처음에는 웹과 앱이 공유 UI 패키지를 함께 쓰는 모노레포로 설계했지만, 기능이 늘수록 앱에도 같은 화면을 따로 맞춰야 해서 개발 속도가 떨어졌습니다.",
        solution:
          "앱을 Next.js 웹앱을 띄우는 WebView 셸로 전환해 웹에 추가한 기능이 앱에 자동으로 반영되게 했습니다. 웹 쪽에는 WebView 환경 감지 유틸을 두어 앱에서만 다르게 보여야 하는 부분을 처리했습니다.",
      },
      {
        problem:
          "로그인한 사용자의 거의 모든 요청마다 인증 확인 뒤 users 테이블을 한 번 더 조회해, 요청당 DB 왕복이 불필요하게 하나씩 더 붙어 있었습니다.",
        solution:
          "계정 상태, 정지 기간, 가입 완료 시각을 인증 토큰의 app_metadata에 동기화해 두고 미들웨어가 그 값을 바로 읽게 바꿔 요청당 DB 왕복을 절반으로 줄였습니다. 값을 바꾸는 세 곳(제재 처리, 소셜/이메일 가입 확정)에 동기화를 넣고, 기존 계정 데이터 누락으로 생긴 소셜 로그인 리다이렉트 루프도 함께 해결했습니다.",
      },
      {
        problem:
          "AI 자연어 검색을 넣을 때, LLM이 존재하지 않는 작품이나 글을 지어내거나 SQL을 직접 만들면 보안과 신뢰성 문제가 생길 수 있었습니다.",
        solution:
          "Gemini 호출을 '질문 분류'와 '답변 생성' 두 단계로 나누고, 그 사이 DB 조회는 서버 코드가 파라미터 바인딩으로 수행하게 했습니다. 답변에 인용된 작품과 글은 실제 검색 결과와 대조해 유효한 것만 보여줍니다. 이미지 캡션은 업로드 시점에 미리 만들고 벡터 임베딩을 더해 하이브리드 검색을 구현했으며, 기존 API 로그를 재사용해 시간당 호출 수를 제한했습니다.",
      },
    ],
    results: [
      "첫 인프라 세팅부터 운영 배포까지 전 과정을 직접 구축하고 서비스 운영 중",
      "4단계 환경을 무료 플랜 안에서 분리하고 브랜치별 자동 배포 구성",
      "GitHub Actions와 Discord 알림, Claude Code 훅으로 8인 팀의 브랜치·PR 흐름 자동화",
      "JWT 인증, 중복 요청 방지, 공통 에러 처리 등 모든 API가 공유하는 공통 기반 제공",
      "인증 요청당 DB 왕복 50% 감소",
      "README 아키텍처 설계도, 온보딩 순서, DB 접근 가이드 등 신규 개발자 문서 정비",
    ],
    learnings: [
      "PM으로서 기능보다 '팀이 같은 방식으로 일하게 만드는 기반'을 먼저 세우는 것이 전체 속도를 높인다는 점",
      "무료 플랜의 제약 안에서 환경을 분리하고 비용과 배포를 통제하는 인프라 설계",
      "초기 설계가 맞지 않을 때 빠르게 구조를 바꾸는 판단(공유 UI에서 WebView 셸로 전환)",
      "LLM 기능은 모델에 맡길 일과 서버 코드가 책임질 일을 나눠야 안전하다는 점",
    ],
    links: [
      { label: "서비스 바로가기", href: "https://gudi-dusky.vercel.app/" },
      { label: "GitHub", href: "https://github.com/id235791/gudi-public" },
    ],
  },
];

// 상세 페이지 없이 카드로만 보여주는 기타 프로젝트
export const sideProjects: SideProject[] = [
  {
    title: "과천교회청년교구 웹/앱",
    description:
      "TypeScript 기반 Next.js 웹/앱 개발과 유지보수, 기능 확장을 맡아 실제 운영 중인 서비스입니다.",
    tech: ["Next.js", "TypeScript", "Supabase", "Vercel"],
    links: [{ label: "서비스", href: "https://xn--vb0b7fa6it7s7x3cpdav29f.com/home" }],
  },
  {
    title: "강의 자료 저장소",
    description:
      "강사 시절 Java, Spring Boot, React 기반 개발자 양성 과정에서 사용한 강의 자료와 예제 코드 모음입니다.",
    tech: ["Java", "Spring Boot", "MyBatis", "React"],
    links: [{ label: "GitHub", href: "https://github.com/id235791/lecture" }],
  },
];

// slug로 대표 프로젝트를 찾는다. 상세 페이지에서 사용한다.
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
