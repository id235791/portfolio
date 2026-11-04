import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ExternalLinkIcon from "@/components/ui/ExternalLinkIcon";
import TechBadge from "@/components/ui/TechBadge";
import { getProjectBySlug, projects } from "@/data/projects";

// 정적 export에서는 빌드 시점에 만들 페이지 목록을 미리 알려줘야 한다.
// data/projects.ts의 대표 프로젝트마다 /projects/[slug] 페이지가 하나씩 생성된다.
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

// 목록에 없는 slug로 접근하면 런타임에 페이지를 만들지 않고 404로 처리한다.
export const dynamicParams = false;

export async function generateMetadata(props: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectDetailPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  // 이전/다음 프로젝트 이동 링크 (마지막 다음은 처음으로 순환)
  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  // 개요 영역에 표시할 메타 정보. 기여도는 제목 아래 치수선 주석으로 보여 주므로 여기서는 뺀다
  const meta = [
    { label: "기간", value: project.period },
    { label: "소속", value: project.organization },
    { label: "역할", value: project.role },
  ];

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* 개요: 제목, 요약, 기간·소속 등 기본 정보 */}
        <section className="relative">
          <div className="proof pointer-events-none absolute inset-x-0 top-0 h-80" />
          <div className="wrap relative pt-(--space-2xl) pb-(--section-gap-s)">
          <Link href="/#projects" className="link text-sm text-ink-2">
            프로젝트 목록
          </Link>
          <h1 className="mt-6 max-w-[24ch]">
            <span className="note">
              {project.title}
              <span className="note-mark">
                <span className="note-line" />
                <span className="note-text">기여도 {project.contribution}</span>
              </span>
            </span>
          </h1>
          <p className="lead mt-4 text-ink-2">{project.summary}</p>

          <dl className="crop set mt-(--space-xl) grid grid-cols-1 sm:grid-cols-3">
            {meta.map((m) => (
              <div key={m.label} className="flex flex-col-reverse justify-end py-4 pr-4">
                <dd className="mt-1 font-medium">{m.value}</dd>
                <dt className="text-sm text-muted">{m.label}</dt>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <TechBadge key={t} name={t} />
            ))}
          </div>

          {project.links.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="btn">
                  {link.label}
                  <ExternalLinkIcon />
                </a>
              ))}
            </div>
          )}
          </div>
        </section>

        <div className="wrap space-y-(--section-gap-s) pb-(--section-gap)">
          {/* 배경 */}
          <section className="grid-12 border-t border-ink pt-8">
            <h2 className="lg:col-span-4">
              <span className="mark">배경</span>
            </h2>
            <p className="max-w-[65ch] text-ink-2 lg:col-span-8">{project.background}</p>
          </section>

          {/* 주요 구현 목록 (데이터에 keyWork가 있는 프로젝트만) */}
          {project.keyWork && project.keyWork.length > 0 && (
            <section className="grid-12 border-t border-ink pt-8">
              <h2 className="lg:col-span-4">
                <span className="mark">주요 구현</span>
              </h2>
              <ol className="lg:col-span-8">
                {project.keyWork.map((work, i) => (
                  <li key={work} className="flex gap-4 border-b border-rule py-4 text-ink-2 first:pt-0">
                    <span className="num text-muted">{String(i + 1).padStart(2, "0")}</span>
                    {work}
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* 문제 -> 해결 */}
          <section className="border-t border-ink pt-8">
            <h2 className="mb-8">
              <span className="mark">문제와 해결</span>
            </h2>
            <ol className="border-t border-rule">
              {project.challenges.map((c, i) => (
                <li key={c.problem} className="grid gap-x-(--gap-columns) gap-y-5 border-b border-rule py-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
                  <div>
                    <p className="num mb-3 text-sm font-medium text-muted">문제 {String(i + 1).padStart(2, "0")}</p>
                    <p className="text-ink-2">{c.problem}</p>
                  </div>
                  <div className="border-l-2 border-accent pl-(--gap-columns)">
                    <p className="mb-3 text-sm font-medium text-accent-text">해결</p>
                    <p className="text-lead text-ink">{c.solution}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* 성과와 배운 점 */}
          <section className="grid gap-(--space-xl) md:grid-cols-2">
            <div className="border-t border-ink pt-8">
              <h2 className="mb-6">
                <span className="mark">성과</span>
              </h2>
              <ul>
                {project.results.map((r) => (
                  <li key={r} className="border-b border-rule py-3 text-ink-2">
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-ink pt-8">
              <h2 className="mb-6">
                <span className="mark">배운 점</span>
              </h2>
              <ul>
                {project.learnings.map((l) => (
                  <li key={l} className="border-b border-rule py-3 text-ink-2">
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 다음 프로젝트 */}
          <Link href={`/projects/${next.slug}/`} className="group block border-t border-ink pt-8 text-ink">
            <span className="block text-sm text-muted">다음 프로젝트</span>
            <span className="mt-2 block font-display text-(length:--text-section) leading-tight underline decoration-rule decoration-1 underline-offset-[0.18em] transition-colors group-hover:decoration-accent">{next.title}</span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
