import type { Metadata } from "next";
import { profile } from "@/data/profile";
import ResumeDocument from "@/components/print/ResumeDocument";

// 이력서 전체 PDF 페이지(/pdf/resume).
// 소개, 경력, 기술 스택, 프로젝트, 학력·자격증까지 메인 사이트의 내용을 A4 문서 한 부로 묶는다.
// 프로젝트를 뺀 이력서는 /pdf/career, 프로젝트만 담은 첨부용 PDF는 /pdf/portfolio 에 있다.
export const metadata: Metadata = {
  title: "이력서 전체",
  description: `${profile.name} 이력서 전체 (PDF 저장용)`,
};

export default function ResumePdfPage() {
  return <ResumeDocument includeProjects={true} />;
}
