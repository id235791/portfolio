import type { ContactLink, Profile } from "@/types";

// 사이트 전반에 노출되는 기본 프로필 정보
export const profile: Profile = {
  name: "정다솔",
  nameEn: "Dasol Jung",
  role: "Full-Stack Developer",
  headline: "설명할 수 있는 코드를 만듭니다.",
  subline:
    "4년간 개발자를 가르치던 강사에서, 레거시를 구조화하고 팀의 기준을 세우는 풀스택 개발자 정다솔입니다.",
  about: [
    "IT 교육 강사로 커리어를 시작해 C, Java, Python부터 Spring Boot, React까지 기초와 실무를 아우르는 과정을 직접 설계하고 강의했습니다. 단순한 문법 전달이 아니라 '이해를 기반으로 구현하는 개발자'를 길러내는 데 집중했습니다.",
    "가르치던 기술이 현업에서 어떻게 서비스가 되는지 직접 부딪혀 보고 싶어 개발자로 전환했고, 건설업계 종합 플랫폼 오픈과 SaaS-기간계 연동 프로젝트에서 공통 모듈 설계, 디자인 패턴 기반 리팩토링, 보안 인증 개발, Jenkins CI/CD 운영을 맡았습니다.",
    "4인 사이드 프로젝트 duckzip에서는 PM으로서 첫 인프라 세팅부터 4단계 환경 분리 배포, GitHub Actions 기반 협업 자동화, 모든 API가 거쳐 가는 공통 인증·에러 처리 기반까지 개발 환경 전체를 직접 구축했습니다.",
    "강단에서 다진 설명력은 실무에서 코드 리뷰와 팀 표준화로 이어졌습니다. 혼자 잘 짜는 코드보다 팀이 함께 읽고 이어갈 수 있는 코드와 개발 환경을 만드는 것을 가장 중요하게 생각합니다.",
  ],
  highlights: [
    { value: 80, suffix: "%+", label: "수강생 취업률" },
    { value: 4.5, decimals: 1, suffix: " / 5.0", label: "평균 강사 만족도" },
    { value: 1, suffix: "위", label: "원내 강사 만족도 조사" },
    { value: 5, suffix: "명", label: "주니어 코드 리뷰·교육" },
    { value: 4, suffix: "인 팀", label: "사이드 프로젝트 PM·인프라 구축" },
    { value: 4, suffix: "단계", label: "환경 분리 배포 (local~prod)" },
  ],
  email: "id235791@gmail.com",
  phone: "010-6472-2130",
  github: "https://github.com/id235791",
  // 프로필 사진. 파일을 교체하려면 public/images/profile.jpg 를 덮어쓰면 된다.
  photo: "/images/profile.jpg",
};

// Contact 섹션과 푸터에 쓰는 연락 수단 목록
export const contactLinks: ContactLink[] = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/-/g, "")}` },
  { label: "GitHub", value: "github.com/id235791", href: profile.github },
];

// 상단 내비게이션 항목. id는 각 섹션 요소의 id와 일치해야 스크롤 이동/하이라이트가 동작한다.
export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;
