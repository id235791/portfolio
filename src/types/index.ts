// 포트폴리오 전체에서 사용하는 콘텐츠 타입 정의.
// 실제 데이터는 src/data/ 아래 파일에 있으며, 내용 수정은 data 파일만 고치면 된다.

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}

export interface Highlight {
  // 카운트업 애니메이션에 쓰이는 숫자 값
  value: number;
  // 숫자 뒤에 붙는 단위/기호 (예: "%", "+", "위")
  suffix?: string;
  // 소수점 자릿수 (만족도 4.5 처럼 소수가 필요한 경우)
  decimals?: number;
  label: string;
}

export interface Profile {
  name: string;
  nameEn: string;
  role: string;
  headline: string;
  subline: string;
  about: string[];
  highlights: Highlight[];
  email: string;
  phone: string;
  github: string;
  // 프로필 사진 경로. 비어 있으면 이니셜 플레이스홀더를 보여준다.
  photo?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  organization: string;
  // "YYYY.MM - YYYY.MM" 형식. 현재 다니는 곳은 끝을 "재직중"으로 쓰면 오늘 날짜까지 자동 계산된다.
  period: string;
  // 경력 합산 구분: 개발 실무(work)와 강의(teaching)를 나눠 보여준다.
  kind: "work" | "teaching";
  type: string;
  title: string;
  bullets: string[];
  tech?: string[];
}

export interface EducationItem {
  school: string;
  period: string;
  detail: string;
}

export interface CertificationItem {
  name: string;
  date: string;
  issuer: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

// 상세 페이지의 "문제 -> 해결" 한 묶음
export interface ProblemSolution {
  problem: string;
  solution: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  period: string;
  organization: string;
  role: string;
  contribution: string;
  tech: string[];
  // 카드 배경 그라데이션 색 (Tailwind 클래스)
  accent: string;
  background: string;
  // 문제-해결 형식에 담기 어려운 주요 구현 목록 (선택). 있으면 상세 페이지에 'Key Work' 섹션으로 표시된다.
  keyWork?: string[];
  challenges: ProblemSolution[];
  results: string[];
  learnings: string[];
  links: ProjectLink[];
}

export interface SideProject {
  title: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
}
