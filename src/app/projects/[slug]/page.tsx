import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ExternalLinkIcon from "@/components/ui/ExternalLinkIcon";
import Reveal from "@/components/ui/Reveal";
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

  // 개요 영역에 표시할 메타 정보
  const meta = [
    { label: "기간", value: project.period },
    { label: "소속", value: project.organization },
    { label: "역할", value: project.role },
    { label: "기여도", value: project.contribution },
  ];

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* 상단 커버: 프로젝트 고유 그라데이션 */}
        <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
          <div className={`pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-r ${project.accent} opacity-25 blur-3xl`} />
          <div className="bg-grid pointer-events-none absolute inset-0" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
            <Reveal>
              <Link href="/#projects" className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground">
                &larr; 프로젝트 목록
              </Link>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">{project.title}</h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">{project.summary}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="mt-10 grid grid-cols-2 gap-4 rounded-3xl border border-border bg-surface/70 p-6 backdrop-blur sm:grid-cols-4">
                {meta.map((m) => (
                  <div key={m.label}>
                    <dt className="font-mono text-xs text-muted uppercase">{m.label}</dt>
                    <dd className="mt-1 text-sm font-medium">{m.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <TechBadge key={t} name={t} />
                ))}
              </div>
              {project.links.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-foreground/[0.04] px-4 py-2 text-sm transition-colors hover:bg-foreground/[0.08]"
                    >
                      {link.label}
                      <ExternalLinkIcon />
                    </a>
                  ))}
                </div>
              )}
            </Reveal>
          </div>
        </section>

        <div className="mx-auto max-w-4xl space-y-20 px-4 pb-28 sm:px-6">
          {/* 배경 */}
          <section>
            <Reveal>
              <h2 className="mb-5 font-mono text-sm tracking-widest text-fuchsia-600 uppercase">Background</h2>
              <p className="text-lg leading-relaxed text-foreground/85">{project.background}</p>
            </Reveal>
          </section>

          {/* 주요 구현 목록 (데이터에 keyWork가 있는 프로젝트만) */}
          {project.keyWork && project.keyWork.length > 0 && (
            <section>
              <Reveal>
                <h2 className="mb-6 font-mono text-sm tracking-widest text-fuchsia-600 uppercase">Key Work</h2>
              </Reveal>
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.keyWork.map((work, i) => (
                  <li key={work}>
                    <Reveal delay={(i % 2) * 0.05} className="h-full">
                      <div className="flex h-full gap-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-foreground/85">
                        <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                        {work}
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 문제 -> 해결 */}
          <section>
            <Reveal>
              <h2 className="mb-8 font-mono text-sm tracking-widest text-fuchsia-600 uppercase">Problem &amp; Solution</h2>
            </Reveal>
            <ol className="space-y-6">
              {project.challenges.map((c, i) => (
                <li key={i}>
                  <Reveal delay={i * 0.05}>
                    <div className="grid overflow-hidden rounded-3xl border border-border md:grid-cols-2">
                      <div className="bg-surface p-6 sm:p-7">
                        <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs text-rose-600 uppercase">
                          <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                          Problem {String(i + 1).padStart(2, "0")}
                        </p>
                        <p className="text-sm leading-relaxed text-foreground/80 sm:text-base">{c.problem}</p>
                      </div>
                      <div className="border-t border-border bg-surface-strong p-6 sm:p-7 md:border-t-0 md:border-l">
                        <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs text-emerald-600 uppercase">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          Solution
                        </p>
                        <p className="text-sm leading-relaxed text-foreground/90 sm:text-base">{c.solution}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </section>

          {/* 성과 · 배운 점 */}
          <section className="grid gap-6 md:grid-cols-2">
            <Reveal className="h-full">
              <div className="h-full rounded-3xl border border-border bg-surface p-6 sm:p-8">
                <h2 className="mb-5 font-mono text-sm tracking-widest text-fuchsia-600 uppercase">Results</h2>
                <ul className="space-y-3 text-sm leading-relaxed text-foreground/85">
                  {project.results.map((r) => (
                    <li key={r} className="flex gap-3">
                      <span className="mt-0.5 text-emerald-600">&#10003;</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="h-full">
              <div className="h-full rounded-3xl border border-border bg-surface p-6 sm:p-8">
                <h2 className="mb-5 font-mono text-sm tracking-widest text-fuchsia-600 uppercase">Learnings</h2>
                <ul className="space-y-3 text-sm leading-relaxed text-foreground/85">
                  {project.learnings.map((l) => (
                    <li key={l} className="flex gap-3">
                      <span className="mt-0.5 text-cyan-700">&rarr;</span>
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </section>

          {/* 다음 프로젝트 */}
          <Reveal>
            <Link
              href={`/projects/${next.slug}/`}
              className="group relative block overflow-hidden rounded-3xl border border-border bg-surface p-8 transition-colors hover:border-foreground/20"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${next.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-15`} />
              <p className="relative font-mono text-xs text-muted uppercase">Next Project</p>
              <p className="relative mt-2 flex items-center justify-between text-2xl font-bold">
                {next.title}
                <span className="transition-transform group-hover:translate-x-2">&rarr;</span>
              </p>
            </Link>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
