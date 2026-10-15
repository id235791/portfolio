import { projects, sideProjects } from "@/data/projects";
import ExternalLinkIcon from "@/components/ui/ExternalLinkIcon";
import ProjectCard from "@/components/ui/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import TechBadge from "@/components/ui/TechBadge";

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-20 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="03 / Projects"
          title="문제를 풀어 온 기록"
          description="카드를 누르면 어떤 문제를 만났고 어떻게 해결했는지 자세히 볼 수 있습니다."
        />

        {/* 대표 프로젝트: 상세 페이지가 있는 카드. 4개라서 2열(2x2)로 배치한다 */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* 기타 프로젝트: 외부 링크만 있는 작은 카드 */}
        <Reveal className="mt-20">
          <h3 className="mb-6 font-mono text-sm tracking-widest text-muted uppercase">Other Projects</h3>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {sideProjects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-foreground/20">
                <h4 className="text-lg font-semibold">{project.title}</h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <TechBadge key={t} name={t} />
                  ))}
                </div>
                <div className="mt-5 flex gap-4">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-cyan-700 hover:text-cyan-800"
                    >
                      {link.label}
                      <ExternalLinkIcon />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
