import type { SkillGroup } from "@/types";

// 기술 스택. 실무에서 사용한 기술을 앞쪽에 배치했다.
export const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "Spring Framework", "JPA", "MyBatis", "Node.js"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Vue.js", "React Native (Expo)", "Pebble Template"],
  },
  {
    category: "Database & Cloud",
    items: ["PostgreSQL", "MySQL", "Oracle", "Redis", "Supabase", "Supabase Realtime", "Cloudflare R2"],
  },
  {
    category: "DevOps & Collaboration",
    items: [
      "GitHub Actions",
      "Jenkins",
      "Vercel",
      "CI/CD 파이프라인",
      "환경 분리 배포",
      "DB 마이그레이션 관리",
      "Discord Webhook",
      "Claude Code Hooks",
    ],
  },
  {
    category: "Architecture & Etc",
    items: [
      "디자인 패턴",
      "리팩토링",
      "모노레포 (npm workspaces)",
      "RESTful API",
      "Server-to-Server API",
      "JWT 인증",
      "Gemini API",
      "Ubi-Report",
      "Claude Code",
    ],
  },
];
