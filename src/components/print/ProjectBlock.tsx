import { SITE_URL } from "@/config/site";
import type { Project } from "@/types";
import { shortUrl } from "./PrintSheet";

// 소제목(주요 문제 해결, 성과). 인쇄 시 소제목만 쪽 끝에 홀로 남지 않도록 break-after: avoid를 준다.
function SubTitle({ children, compact }: { children: string; compact?: boolean }) {
  return (
    <p className={`${compact ? "mt-2 text-[12px]" : "mt-2.5 text-[12.5px]"} font-bold [break-after:avoid]`}>
      {children}
    </p>
  );
}

// PDF 문서에 들어가는 프로젝트 한 건. 이력서(/pdf/resume)와 포트폴리오(/pdf/portfolio)가 함께 쓴다.
// 지면에 맞춰 resumeChallenges로 고른 대표 문제·해결만 싣고, 전체 내용은 웹 상세 페이지 주소로 안내한다.
// compact: 이력서처럼 다른 섹션과 함께 실려 지면이 빠듯할 때 제목과 간격을 줄인다.
export default function ProjectBlock({ project, compact = false }: { project: Project; compact?: boolean }) {
  const picked = (project.resumeChallenges ?? [0, 1, 2])
    .map((index) => project.challenges[index])
    .filter(Boolean);

  return (
    <>
      {/* 제목·요약 묶음은 쪽 사이에서 갈라지지 않고, 바로 다음 내용과 같은 쪽에 붙어 있게 한다. */}
      <div className="[break-after:avoid] [break-inside:avoid]">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3">
          <h3 className={`${compact ? "text-[14.5px]" : "text-[16px]"} font-bold tracking-tight`}>{project.title}</h3>
          <p className="text-[11.5px] text-muted">{project.period}</p>
        </div>
        <p className="text-[11.5px] text-muted">
          {project.organization} · {project.role} · 기여도 {project.contribution}
        </p>
        <p className="mt-1.5">{project.summary}</p>
        <p className="mt-1.5 text-[11px] text-muted">{project.tech.join(" · ")}</p>
      </div>

      <SubTitle compact={compact}>주요 문제 해결</SubTitle>
      <ol className={`mt-1 ${compact ? "space-y-1.5" : "space-y-2"}`}>
        {picked.map((item) => (
          <li key={item.problem} className="border-l-2 border-fuchsia-500/40 pl-2.5 [break-inside:avoid]">
            <p className="text-muted">
              <b className="mr-1 text-rose-600">문제</b>
              {item.problem}
            </p>
            <p>
              <b className="mr-1 text-emerald-600">해결</b>
              {item.solution}
            </p>
          </li>
        ))}
      </ol>

      <div className="[break-inside:avoid]">
        <SubTitle compact={compact}>성과</SubTitle>
        <ul className="mt-0.5 list-disc space-y-0.5 pl-4 marker:text-muted">
          {project.results.map((result) => (
            <li key={result}>{result}</li>
          ))}
        </ul>
        <p className="mt-1.5 text-[11px] text-muted">
          상세: {shortUrl(SITE_URL)}/projects/{project.slug}/
          {project.links.map((link) => (
            <span key={link.href}>
              {" · "}
              {link.label}: {shortUrl(link.href)}
            </span>
          ))}
        </p>
      </div>
    </>
  );
}
