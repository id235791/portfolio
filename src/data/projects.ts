import type { Project, SideProject } from "@/types";

// 대표 프로젝트. 각 항목은 /projects/[slug] 상세 페이지로 정적 생성된다.
// slug를 바꾸면 URL도 바뀌므로 외부에 공유한 뒤에는 가급적 유지한다.
export const projects: Project[] = [
  {
    slug: "construction-platform",
    title: "GaiA/CaiROS",
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
      "건설업계 종합 플랫폼 GaiA/CaiROS는 발주처, 시공사, 협력사 등 여러 이해관계자가 함께 쓰는 대규모 서비스로, 안정성과 유지보수성이 무엇보다 중요했습니다. 애자일 방식으로 진행되는 프로젝트에서 공통 개발 팀의 일원으로 환경 세팅부터 핵심 기능, API 설계, 레거시 개선, 배포 자동화까지 전 범위를 맡았습니다.",
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
    slug: "lg-zendesk-app",
    title: "LG전자 Zendesk Private App 고도화",
    summary:
      "LG전자 글로벌 상담 데이터를 기간계로 보내는 Zendesk 사이드바 앱을 맡아, 증상 기반 CallCode 추천으로 상담 입력 흐름을 바꾸고 기간계 신규 시스템(N-GSFS) 전환을 7월·10월 두 차례 대응했습니다.",
    period: "2026.03 - 2026.10",
    organization: "지에스네오텍(주)",
    role: "유지보수 · 연동 설계 및 개발",
    contribution: "100%",
    tech: ["JavaScript", "jQuery", "Vue.js", "Zendesk Apps Framework", "Zendesk Custom Objects API", "Claude Code"],
    accent: "from-cyan-400 via-sky-500 to-indigo-500",
    // 아래 내용의 근거는 GSFS-app 저장소의 커밋 이력, README 변경 이력, docs/ngsfs-migration/RUNBOOK.md 이다.
    // 작업은 (1) 증상 기반 CallCode 추천 (2) 7월 N-GSFS 전환 (3) 10월 N-GSFS 전환 세 단계로 진행됐다.
    // 고객사 내부 서버 주소와 코드값은 공개하지 않는다.
    background:
      "LG전자 글로벌 고객센터는 Zendesk로 상담을 받고, 티켓 사이드바에서 동작하는 Private App이 상담 내용을 기간계 서비스 시스템(GSFS)으로 전송합니다. 빌드 도구 없이 순수 HTML/JS로 만들어진 앱(v2.9)을 인수받아 세 단계로 고도화했습니다. 먼저 증상 기반 CallCode 추천으로 상담 입력 UX와 조회 로직을 바꿨고, 이어 기간계가 신규 시스템(N-GSFS)으로 법인별 순차 이관되면서 7월 아시아 8개 법인, 10월 중동·아프리카 11개 법인과 인도네시아의 전환을 앱 쪽에서 대응했습니다.",
    keyWork: [
      "[증상 기반 추천] CallCode 조회 순서를 '제품 선택 후'에서 '증상 선택 후'로 변경하고 연관 CallCode 상위 3개 자동 추천, 전체 목록을 보는 [ALL] 버튼 추가",
      "[증상 기반 추천] Zendesk Sunshine Objects API(구버전)를 Custom Objects API로 전면 전환, 증상-CallCode 매핑 데이터 일괄 생성 함수",
      "[7월 전환] 국가코드 기준 기존 GSFS / N-GSFS 서버 라우팅과 셧다운 기간 임시저장 처리로 법인별 순차 전환 지원",
      "[10월 전환] 유럽(EIC) 리전 추가에 맞춘 리전별 서버 라우팅 구조 개편",
      "[10월 전환] 수동 셧다운 상수를 일정표 기반 자동 전환(셧다운 전 / 중 / 오픈 후 3단계)으로 교체",
      "[10월 전환] Zendesk 서버 시각 보정, 셧다운 안내 문구를 상담원 현지 시각으로 표시",
      "[10월 전환] 다음 전환을 위한 타임라인형 RUNBOOK, 운영 데이터 조회·누락 점검 콘솔 스크립트, Claude Code 작업 규칙(CLAUDE.md)",
      "[운영] 삭제된 CallCode 노출 차단(deleteFlag 필터), Apple Messages for Business 채널 접수 코드 추가",
    ],
    challenges: [
      {
        problem:
          "상담원은 제품을 고른 뒤 긴 CallCode 목록에서 해당 상담에 맞는 코드를 직접 찾아야 했고, 고객이 말한 증상과 CallCode 사이의 연결이 화면에 드러나지 않았습니다.",
        solution:
          "증상(3뎁스)을 먼저 고르면 CallCode를 불러오도록 입력 흐름을 바꾸고, 증상-CallCode 매핑으로 연관 코드 상위 3개를 자동 추천했습니다. 추천 밖의 코드는 [ALL] 버튼으로 전체를 볼 수 있게 했습니다.",
      },
      {
        problem:
          "앱이 쓰던 Zendesk Sunshine Objects API가 구버전이었고, 조회를 다시 할 때마다 코드 목록이 초기화되지 않고 누적되는 버그가 있었습니다.",
        solution:
          "엔드포인트를 Custom Objects API로 전면 교체하고 조회 결과를 클라이언트에서 필터링하도록 바꿨으며, 재호출 시 목록을 초기화해 누적 버그를 고쳤습니다.",
      },
      {
        problem:
          "7월 첫 전환에서는 일부 법인만 신규 시스템으로 옮기고 나머지는 기존 시스템을 계속 써야 했고, 이관 중 시스템이 멈추는 셧다운 기간의 상담도 잃지 않아야 했습니다.",
        solution:
          "상담 건의 국가코드로 기존 GSFS와 N-GSFS 중 보낼 서버를 고르고, 셧다운 기간에는 게이트웨이 임시저장으로 보낸 뒤 오픈 후 전송되게 해 법인별 순차 전환을 지원했습니다.",
      },
      {
        problem:
          "10월 전환은 법인군마다 셧다운 시작 시각이 달라, 7월처럼 셧다운 상수를 직접 바꿔 재배포하는 방식으로는 대응할 수 없었습니다. 기존 구조도 '전환 대상은 모두 아시아 리전'이라는 전제라 유럽 리전을 표현하지 못했습니다.",
        solution:
          "리전·대상 국가·셧다운 시작·오픈 시각을 담은 일정표와 현재 단계를 계산하는 함수로 바꿔, 일정만 미리 등록해 배포하면 재배포 없이 자동 전환되게 했습니다. 전환 국가 목록도 리전별 구조로 개편했습니다.",
      },
      {
        problem:
          "전 세계 상담원이 쓰는 앱이라 상담원 PC 시계가 틀리면 전환 시각 판단이 어긋나고, 안내 문구의 오픈 일시도 한국 시간으로 하드코딩되어 있었습니다.",
        solution:
          "Zendesk API 응답의 Date 헤더로 서버와 PC의 시각 차이를 보정해 서버 시각 기준으로 판단하고, 오픈 시각은 상담원 프로필 타임존의 현지 시각으로 변환해 보여주도록 했습니다.",
      },
      {
        problem:
          "10월 작업 중 7월 전환에서 '법인 1개 = 국가 1개'로 등록해 10개국이 빠져 있던 것을 발견했고, 앱에 들어 있는 국가코드 파일도 운영 데이터와 달랐습니다.",
        solution:
          "운영 Zendesk의 Custom Object를 기준 데이터로 정하고 대상 국가 조회·누락 점검 스크립트를 만들어 누락된 10개국을 바로잡았습니다. 국가코드 선조회를 RUNBOOK과 CLAUDE.md의 필수 규칙으로 남겼습니다.",
      },
      {
        problem:
          "자동 전환을 도입하자 셧다운 전 기간 내내 상담이 이중 전송되고, 얕은 복사로 원본 요청 값이 바뀌고, 캐시 키 변경 후 [ALL] 버튼이 전체 목록을 못 불러오는 부작용이 생겼습니다.",
        solution:
          "이중 전송 분기를 제거하고 요청 데이터까지 깊게 복사하도록 고쳤습니다. 캐시 키 생성 함수를 하나로 통일하고 캐시가 없으면 다시 조회하도록 해 오픈 직전 핫픽스로 배포했습니다.",
      },
    ],
    results: [
      "증상 기반 추천으로 상담원이 긴 CallCode 목록에서 찾던 과정을 상위 3개 선택으로 단축",
      "2026.07 아시아 8개 법인 N-GSFS 전환 대응",
      "2026.10 중동·아프리카 11개 법인(73개국)과 인도네시아 전환을, 당일 일정 변경에도 대응하며 완료",
      "7월 전환에서 누락됐던 10개국을 찾아 반영하고, 다음 담당자가 그대로 따라 할 수 있는 RUNBOOK과 점검 스크립트 정리",
    ],
    learnings: [
      "시각에 따라 동작이 바뀌는 기능은 '누구의 시계, 어느 타임존 기준인가'부터 정해야 한다는 점",
      "기준 데이터(source of truth)를 운영 데이터로 명확히 정하는 것의 중요성",
      "같은 작업을 두 번 해 보며, 반복되는 운영 작업은 절차서와 점검 도구로 남겨야 같은 실수가 반복되지 않는다는 점",
      "AI 코딩 도구를 레거시 분석과 문서화에 효과적으로 접목하는 방법",
    ],
    links: [],
  },
  {
    slug: "shinsegae-api-auth",
    title: "신세계인터내셔날 연동 API 보안 인증",
    summary:
      "Zendesk · ECP · MBS 3중 연동 게이트웨이에서, 정보보안 취약점 대응으로 기간계(MBS) 호출을 고정 인증키에서 토큰 발급·캐싱·자동 재발급 방식으로 바꾸고 38일간 멈춰 있던 스케줄러 장애도 찾아 해결했습니다.",
    period: "2026.02 - 2026.05",
    organization: "지에스네오텍(주)",
    role: "백엔드 개발",
    contribution: "100%",
    tech: ["Java", "Spring Boot", "JdbcTemplate", "Oracle", "Tomcat", "Logback", "Claude Code"],
    accent: "from-emerald-400 via-teal-500 to-cyan-600",
    // 아래 내용의 근거는 shinsegaeInternational 저장소의 본인 커밋(2026.04.10 이후), 개발명세서, DB설계서, TOKEN.md 이다.
    // 기존 담당자가 만든 모듈 구조와, Private App(memberInformation) 관련 변경은 본인 작업에서 제외했다.
    background:
      "신세계인터내셔날은 상담 플랫폼 Zendesk와 사내 시스템을 여러 Spring Boot 게이트웨이 모듈로 연결합니다. 홈페이지·SSG 문의는 상담 플랫폼 Zendesk, 고객이 VOC 문의 게시글을 작성하는 ECP, 문의·답변 이력과 회원 정보를 관리하는 기간계 MBS 세 시스템을 오가는 3중 연동입니다. 게이트웨이가 ECP에서 문의를 가져와 MBS에 기록한 뒤 Zendesk 티켓으로 만들고, 상담원 답변은 MBS 확인을 거쳐 ECP에 등록한 다음 MBS에 다시 남깁니다. 정보보안 취약점 점검에서 MBS 호출이 설정 파일의 고정 인증키에 의존한다는 지적을 받아, MBS가 발급하는 토큰으로 인증하는 방식으로 전환하는 작업을 맡았습니다(ECP 쪽 인증은 전환 대상이 아니었습니다). 토큰을 쓰는 3개 모듈(legacyGw, suspendedUser, outCome)에 같은 패턴으로 적용하면서 환경 설정과 공통 통신 코드도 함께 정비했습니다.",
    keyWork: [
      "Zendesk · ECP · MBS 3중 연동 흐름(문의 수집 Pull / 답변 전송 Channelback)의 MBS 호출 단계마다 토큰 인증 적용",
      "토큰 인증 시스템: IP + API 코드 단위로 토큰을 DB(T_TOKEN)에 캐싱해 재사용하고, 인증 오류 코드를 받으면 재발급 후 1회 재시도",
      "legacyGw · suspendedUser · outCome 3개 모듈에 같은 인터페이스(getCachedOrNewToken / refreshToken)와 설정 키로 통일 적용",
      "실제 기간계 없이 토큰 흐름을 시험하는 로컬 Mock 토큰 서버 모듈 추가",
      "12개 모듈의 HTTP 통신 유틸(CommonUtil) 시그니처 정리와 공통 에러 핸들러 도입",
      "전 모듈 local / dev / prod 환경별 설정 정비, Tomcat 환경별 설정·setenv 스크립트와 설정 가이드 페이지",
      "전 모듈 외부 API 호출 전후 DEBUG 로그(dev/local 전용 로그 파일로 분리)",
      "개발명세서 · DB설계서 · 기술 참조 문서 작성, CLAUDE.md 팀 컨벤션과 작업 로그 슬래시 커맨드",
    ],
    challenges: [
      {
        problem:
          "기간계 API를 설정 파일에 들어 있는 고정 인증키로 호출하고 있어, 정보보안 취약점 점검에서 외부 호출 보호가 부족하다는 지적을 받았습니다.",
        solution:
          "고정 인증키를 제거하고 기간계 토큰 발급 API로 받은 토큰을 Authorization: Bearer 헤더로 보내도록 바꿨습니다. 요청자 IP를 X-Forwarded-For로 함께 전달해 기간계가 실제 요청자를 식별할 수 있게 했습니다.",
      },
      {
        problem:
          "매 요청마다 토큰을 새로 발급받으면 기간계 부하가 커지고, 처음 설계한 'DB 만료 시각 기준' 판단은 실제 서버의 토큰 만료와 어긋났습니다. 재발급 흐름에도 불필요한 DB 왕복이 3번 있었습니다.",
        solution:
          "토큰을 IP + API 코드 단위로 DB에 캐싱하고, 만료 여부는 기간계 응답 코드로 판단하도록 바꿨습니다. 토큰 인증 오류 코드일 때만 재발급하고, 무효화-재조회-저장으로 나뉘어 있던 흐름을 refreshToken 하나로 합쳐 DB 왕복 3회를 없앴습니다.",
      },
      {
        problem:
          "같은 토큰 기능이 3개 모듈에 서로 다른 설정 키, 메서드 이름, 클래스 구조로 들어가 있어 한 곳을 고치면 나머지를 따로 찾아 고쳐야 했습니다.",
        solution:
          "세 모듈의 토큰 서비스를 같은 인터페이스와 구현체 구조로 맞추고 설정 키를 하나로 통일했습니다. 호스트 설정에서 경로를 분리해 환경별 설정값은 순수 호스트만 갖도록 표준화했습니다.",
      },
      {
        problem:
          "작업 중 휴면·탈퇴 회원 처리 스케줄러가 2026.03.26부터 38일째 Zendesk API 응답을 기다리며 멈춰 있는 것을 발견했습니다.",
        solution:
          "jstack으로 스레드 상태를 확인해 HTTP 클라이언트에 타임아웃이 없던 것이 원인임을 찾았습니다. 전 프로젝트에 연결 10초 · 읽기 30초 타임아웃과 JDBC 쿼리 타임아웃 5초를 적용하고, 작업 완료를 기다리는 무한 루프에 최대 횟수를 두고, 재처리 시 중복 INSERT를 막았습니다.",
      },
      {
        problem:
          "세 시스템을 오가는 흐름이라 어느 구간에서 실패했는지 드러나지 않았고, 실제 MBS와 붙여 보니 응답 키 이름이 문서와 달라 토큰이 null로 저장되고, Bearer 접두어 누락, Oracle 예약어 컬럼, 파라미터 타입 오류가 연달아 나왔습니다.",
        solution:
          "ECP 요청 · MBS 토큰 조회와 재발급 · MBS 요청과 응답 · DB 조작 전후에 시각과 소요 시간을 담은 로그를 남겨 실패 구간을 하나씩 좁혀 고쳤습니다. 로컬 Mock 토큰 서버도 실제 서버와 같은 형식으로 응답하게 맞춰 같은 문제가 테스트에서 먼저 드러나게 했습니다.",
      },
      {
        problem:
          "환경 설정이 모듈마다 제각각이었고, 프로파일 설정이 OS 환경변수를 읽도록 되어 있어 변수가 없으면 개발 서버도 항상 운영(prod) 설정으로 떴습니다. 개발 환경에서는 문의 수집이 같은 문의번호를 반복하는 무한 루프도 있었습니다.",
        solution:
          "전 모듈의 local / dev / prod 설정과 Tomcat 설정 파일, setenv 스크립트를 정비하고 탭형 설정 가이드로 정리했습니다. 프로파일 폴백 문제를 고치고, 개발 환경 분기와 마지막 문의번호 갱신으로 무한 루프를 막았습니다.",
      },
    ],
    results: [
      "3중 연동을 포함한 3개 게이트웨이 모듈의 MBS 호출을 토큰 기반 인증으로 전환해 정보보안 취약점 대응 완료",
      "토큰 연동이 안정된 뒤 전환 기간용 임시 fallback 코드를 계획대로 제거",
      "38일간 멈춰 있던 스케줄러 장애 원인을 찾아 전 모듈에 타임아웃 적용",
      "개발명세서 · DB설계서 · 환경 설정 가이드로 다음 담당자가 바로 이어받을 수 있게 문서화",
    ],
    learnings: [
      "외부 시스템 연동은 문서가 아니라 실제 응답을 기준으로 확인해야 한다는 점",
      "타임아웃 없는 네트워크 호출은 언젠가 멈추며, 장애는 jstack 같은 근거로 좁혀야 한다는 점",
      "같은 기능을 여러 모듈에 넣을 때는 인터페이스와 설정 키부터 통일해야 유지보수가 쉬워진다는 점",
      "임시 방어 코드는 넣을 때부터 제거 시점을 함께 계획해야 한다는 점",
    ],
    links: [],
  },
  {
    slug: "duckzip",
    title: "duckzip (덕집)",
    summary:
      "애니메이션 캐릭터 팬 커뮤니티. 4인 팀의 PM으로 첫 인프라 세팅부터 4단계 환경 분리 배포, GitHub Actions 협업 자동화, 공통 API 기반까지 직접 구축했습니다.",
    period: "2026.04 - 진행중",
    organization: "사이드 프로젝트 · 4인 팀",
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
      "duckzip(덕집)은 좋아하는 작품과 캐릭터를 중심으로 모이는 팬 커뮤니티입니다. 작품 게시판, 캐릭터 투표, 이상형 월드컵, 굿즈·콜라보 일정, 1:1 상담 채팅 등을 제공합니다. 4명이 함께 개발하는 프로젝트에서 PM을 맡아 저장소와 모노레포 구조를 처음 만드는 것부터 환경별 인프라, 배포 파이프라인, 팀 협업 자동화, 모든 API가 거쳐 가는 공통 기반까지 개발 환경 전체를 직접 구축했습니다.",
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
          "팀원들이 각자 feature 브랜치에서 작업하다 보니 main과의 차이가 금방 벌어져 충돌이 커졌고, 보호해야 할 main/dev 브랜치에 직접 작업하는 실수도 생길 수 있었습니다.",
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
      "GitHub Actions와 Discord 알림, Claude Code 훅으로 4인 팀의 브랜치·PR 흐름 자동화",
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
