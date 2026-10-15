import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SITE_URL, withBasePath } from "@/config/site";
import { certifications, education, experiences } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects, sideProjects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { BUILD_DATE, formatMonths, monthsInPeriod } from "@/lib/career";
import PrintSheet, { shortUrl } from "@/components/print/PrintSheet";
import ProjectBlock from "@/components/print/ProjectBlock";

// 이력서 전체 PDF 페이지(/pdf/resume).
// 소개, 경력, 기술 스택, 프로젝트, 학력·자격증까지 메인 사이트의 내용을 A4 문서 한 부로 묶는다.
// 프로젝트만 담은 첨부용 PDF는 /pdf/portfolio 에 있다.
export const metadata: Metadata = {
  title: "이력서",
  description: `${profile.name} 이력서 (PDF 저장용)`,
};

// "재직중" 기간은 빌드 시점 기준으로 센다. 정적 페이지라 브라우저에서 다시 계산하지 않는다.
const sumMonths = (kind?: "work" | "teaching") =>
  experiences
    .filter((item) => !kind || item.kind === kind)
    .reduce((total, item) => total + monthsInPeriod(item.period, BUILD_DATE), 0);

// 섹션 제목. 인쇄 시 제목만 쪽 끝에 홀로 남지 않도록 break-after: avoid를 준다.
function Section({ title, aside, children }: { title: string; aside?: ReactNode; children: ReactNode }) {
  return (
    <section className="mt-7">
      <div className="mb-3 flex items-end justify-between gap-4 border-b-2 border-foreground pb-1.5 [break-after:avoid]">
        <h2 className="text-[15px] font-bold tracking-tight">{title}</h2>
        {aside}
      </div>
      {children}
    </section>
  );
}

// 기술 이름 나열. 배지 대신 가벼운 텍스트로 써서 지면을 아낀다.
function TechLine({ items }: { items: string[] }) {
  return <p className="mt-1.5 text-[11px] text-muted">{items.join(" · ")}</p>;
}

export default function ResumePdfPage() {
  const contacts = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/-/g, "")}` },
    { label: "GitHub", value: shortUrl(profile.github), href: profile.github },
    { label: "Web", value: shortUrl(SITE_URL), href: SITE_URL },
  ];

  return (
    <PrintSheet>
      {/* 이력서는 분량이 많아 본문 글자를 포트폴리오보다 조금 작게 잡아 A4 4쪽 안팎에 맞춘다. */}
      <div className="text-[12px] leading-[1.55]">
        {/* 머리말: 이름, 한 줄 소개, 연락처, 사진 */}
        <header className="flex items-start justify-between gap-6">
          <div className="min-w-0">
            <p className="text-[12px] font-semibold tracking-wide text-fuchsia-600">{profile.role}</p>
            <h1 className="mt-0.5 text-[28px] leading-tight font-extrabold tracking-tight">
              {profile.name}
              <span className="ml-2 text-[15px] font-medium text-muted">{profile.nameEn}</span>
            </h1>
            <p className="mt-2 text-[14px] font-semibold">{profile.headline}</p>
            <p className="mt-0.5 text-muted">{profile.subline}</p>
            <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 text-[12px]">
              {contacts.map((item) => (
                <div key={item.label} className="contents">
                  <dt className="font-semibold text-muted">{item.label}</dt>
                  <dd>
                    <a href={item.href} className="hover:underline">
                      {item.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          {profile.photo && (
            // 정적 export에서는 이미지 최적화를 쓰지 않으므로 일반 img로 넣는다(증명사진 3:4 비율).
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={withBasePath(profile.photo)}
              alt={`${profile.name} 프로필 사진`}
              className="h-[36mm] w-[27mm] shrink-0 rounded-md object-cover"
            />
          )}
        </header>

        <Section title="소개">
          <div className="space-y-1.5">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {/* 주요 수치. 메인 사이트의 카운트업 카드를 작은 표로 줄였다. */}
          <ul className="mt-3 grid grid-cols-3 gap-1.5 [break-inside:avoid]">
            {profile.highlights.map((item) => (
              <li key={item.label} className="rounded-md border border-border px-2.5 py-1.5">
                <span className="text-[14px] font-bold">
                  {item.value.toFixed(item.decimals ?? 0)}
                  {item.suffix}
                </span>
                <span className="ml-1.5 text-[11px] text-muted">{item.label}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          title="경력"
          aside={
            <p className="text-[11.5px] text-muted">
              총 <b className="text-foreground">{formatMonths(sumMonths())}</b> (개발 {formatMonths(sumMonths("work"))} ·
              강의 {formatMonths(sumMonths("teaching"))})
            </p>
          }
        >
          <ol className="space-y-3.5">
            {experiences.map((item) => (
              <li key={item.organization} className="[break-inside:avoid]">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <p className="text-[13.5px] font-bold">
                    {item.organization}
                    <span className="ml-2 text-[11.5px] font-normal text-muted">{item.type}</span>
                  </p>
                  <p className="text-[11.5px] text-muted">
                    {item.period} ({formatMonths(monthsInPeriod(item.period, BUILD_DATE))})
                  </p>
                </div>
                <p className="font-semibold">{item.title}</p>
                <ul className="mt-1 list-disc space-y-0.5 pl-4 marker:text-muted">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                {item.tech && <TechLine items={item.tech} />}
              </li>
            ))}
          </ol>
        </Section>

        <Section title="기술 스택">
          <dl className="grid grid-cols-[128px_1fr] gap-x-3 gap-y-1 [break-inside:avoid]">
            {skillGroups.map((group) => (
              <div key={group.category} className="contents">
                <dt className="font-semibold">{group.category}</dt>
                <dd className="text-foreground/85">{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* 이력서에서는 쪽을 강제로 넘기지 않고 프로젝트를 이어 붙여 빈 지면을 줄인다. */}
        <Section title="프로젝트">
          <div className="space-y-5">
            {projects.map((project) => (
              <article key={project.slug}>
                <ProjectBlock project={project} compact />
              </article>
            ))}
          </div>
        </Section>

        <Section title="기타 프로젝트">
          <ul className="space-y-1.5">
            {sideProjects.map((project) => (
              <li key={project.title} className="[break-inside:avoid]">
                <p>
                  <b>{project.title}</b>
                  <span className="ml-2 text-[11px] text-muted">{project.tech.join(" · ")}</span>
                </p>
                <p className="text-foreground/85">{project.description}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* 학력과 자격증은 짧아서 두 칸으로 나란히 둔다. */}
        <div className="grid grid-cols-2 gap-8 [break-inside:avoid]">
          <Section title="학력">
            <ul className="space-y-0.5">
              {education.map((item) => (
                <li key={item.school}>
                  <b>{item.school}</b> <span className="text-muted">{item.detail}</span>
                  <span className="ml-1.5 text-[11.5px] text-muted">{item.period}</span>
                </li>
              ))}
            </ul>
          </Section>
          <Section title="자격증">
            <ul className="space-y-1">
              {certifications.map((item) => (
                <li key={item.name}>
                  <b>{item.name}</b> <span className="text-muted">{item.issuer}</span>
                  <span className="ml-1.5 text-[11.5px] text-muted">{item.date}</span>
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </div>
    </PrintSheet>
  );
}
