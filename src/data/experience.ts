import type { CertificationItem, EducationItem, ExperienceItem } from "@/types";

// 경력 타임라인. 최신순으로 정렬한다.
export const experiences: ExperienceItem[] = [
  {
    organization: "지에스네오텍(주)",
    period: "2026.02 - 재직중",
    kind: "work",
    type: "계약직 · 웹개발자",
    title: "SaaS - 기간계 시스템 연동 개발",
    bullets: [
      "신세계인터내셔날 정보보안 취약점 대응: 연동 API의 토큰 기반 보안 인증 백엔드 개발",
      "LG전자 Zendesk Private App 고도화: 증상 기반 CallCode 추천으로 상담 입력 UX·조회 로직 변경",
      "기간계 신규 시스템(N-GSFS) 전환 2회 대응: 7월 아시아 8개 법인, 10월 중동·아프리카 11개 법인(73개국)·인도네시아",
      "일정 기반 자동 전환, 전환 RUNBOOK·점검 스크립트 정리, Claude Code를 활용한 레거시 분석과 유지보수 효율 개선",
    ],
    tech: ["Spring Framework", "PostgreSQL", "JavaScript", "jQuery", "Zendesk"],
  },
  {
    organization: "아이디어정보기술",
    period: "2025.04 - 2026.01",
    kind: "work",
    type: "정규직 · 주임",
    title: "건설업계 종합 플랫폼 GaiA/CaiROS 풀스택 개발",
    bullets: [
      "퍼사드, 아토믹, 팩토리, 싱글톤 패턴을 활용한 레거시 리팩토링과 공통 모듈화",
      "Server-to-Server API, RESTful API 설계 및 구축, 착공계 문서 관리 핵심 기능 합동 개발",
      "서비스 오픈을 위한 권한·보안·코드 검측 환경 세팅, Jenkins CI/CD 파이프라인 관리",
      "하위 인력 5인 교육 및 코드 리뷰",
    ],
    tech: ["Spring Boot", "Pebble", "JPA", "MyBatis", "PostgreSQL", "Redis", "Jenkins"],
  },
  {
    organization: "KH정보교육원",
    period: "2023.06 - 2024.12",
    kind: "teaching",
    type: "프리랜서 · 전임강사",
    title: "공공데이터 융합 자바개발자 양성과정 강의",
    bullets: [
      "Spring Boot, React 기반 웹 애플리케이션 개발자 양성",
      "수강생 취업률 80% 이상, 평균 강사 만족도 4.3 / 5.0",
    ],
    tech: ["Java", "Spring Boot", "MyBatis", "React", "MySQL"],
  },
  {
    organization: "코리아정보보안IT아카데미",
    period: "2019.11 - 2023.02",
    kind: "teaching",
    // 2019.11~2020.07은 수강생 1:1 보습, 2020.08부터 프리랜서 전임강사로 근무
    type: "보습강사 → 프리랜서 전임강사",
    title: "풀스택 웹 애플리케이션 개발자 양성과정 강의",
    bullets: [
      "기초·심화 과목, 백엔드·프론트엔드 개발 강의 및 수강생 1:1 보습",
      "평균 강사 만족도 4.5 / 5.0, 원내 만족도 조사 1위",
    ],
    tech: ["Java", "Spring", "React", "Oracle", "MySQL"],
  },
];

export const education: EducationItem[] = [
  { school: "한양대학교 ERICA캠퍼스", period: "2013.03 - 2020.02", detail: "기계공학과 (중퇴)" },
  { school: "선린인터넷고등학교", period: "2009.03 - 2012.02", detail: "정보통신과 (졸업)" },
];

export const certifications: CertificationItem[] = [
  { name: "정보처리기능사", date: "2021.11", issuer: "한국산업인력공단" },
];
