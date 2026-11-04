import type { Metadata } from "next";
import { profile } from "@/data/profile";
import ResumeDocument from "@/components/print/ResumeDocument";

// 이력만 담은 이력서 PDF 페이지(/pdf/career).
// 소개, 경력, 기술 스택, 학력·자격증만 싣는다. 프로젝트는 /pdf/portfolio 를 함께 첨부하는 경우를 위한 문서다.
export const metadata: Metadata = {
  title: "이력서",
  description: `${profile.name} 이력서 (PDF 저장용)`,
};

export default function CareerPdfPage() {
  return <ResumeDocument includeProjects={false} />;
}
