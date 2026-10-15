import type { Metadata } from "next";
import { SITE_URL } from "@/config/site";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import PrintSheet, { shortUrl } from "@/components/print/PrintSheet";
import ProjectBlock from "@/components/print/ProjectBlock";

// 지원서에 첨부할 "프로젝트 포트폴리오" PDF 페이지(/pdf/portfolio).
// 경력·학력·기술 스택은 이력서에 따로 있으므로, 이 문서에는 대표 프로젝트만 프로젝트당 한 쪽씩 싣는다.
// 이력서 전체 PDF는 /pdf/resume 에 있다.
export const metadata: Metadata = {
  title: "프로젝트 포트폴리오",
  description: `${profile.name} 프로젝트 포트폴리오 (PDF 저장용)`,
};

export default function PortfolioPdfPage() {
  // 머리말 연락처. 첨부 문서라 누구의 문서인지와 연락 수단만 간단히 보여준다.
  const contacts = [
    { value: profile.email, href: `mailto:${profile.email}` },
    { value: profile.phone, href: `tel:${profile.phone.replace(/-/g, "")}` },
    { value: shortUrl(profile.github), href: profile.github },
    { value: shortUrl(SITE_URL), href: SITE_URL },
  ];

  return (
    <PrintSheet>
      {/* 머리말: 문서 제목, 이름, 연락처. 첫 쪽에만 나온다. */}
      <header className="border-b-2 border-foreground pb-3">
        <p className="text-[12px] font-semibold tracking-wide text-fuchsia-600">프로젝트 포트폴리오</p>
        <div className="mt-0.5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h1 className="text-[24px] leading-tight font-extrabold tracking-tight">
            {profile.name}
            <span className="ml-2 text-[13px] font-medium text-muted">{profile.role}</span>
          </h1>
          <p className="text-[11.5px] text-muted">
            {contacts.map((item, i) => (
              <span key={item.href}>
                {i > 0 && " · "}
                <a href={item.href} className="hover:underline">
                  {item.value}
                </a>
              </span>
            ))}
          </p>
        </div>
      </header>

      {projects.map((project, i) => (
        // 인쇄 시 두 번째 프로젝트부터 새 쪽에서 시작해 프로젝트 하나가 한 쪽을 차지하게 한다.
        <section key={project.slug} className={i > 0 ? "mt-10 print:mt-0 print:break-before-page" : "mt-6"}>
          <ProjectBlock project={project} />
        </section>
      ))}
    </PrintSheet>
  );
}
