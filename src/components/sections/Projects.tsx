import Link from "next/link";
import ExternalLinkIcon from "@/components/ui/ExternalLinkIcon";
import SectionTitle from "@/components/ui/SectionTitle";
import { projects, sideProjects } from "@/data/projects";

// 프로젝트 목록. 사이트의 중심 내용이라 첫 화면 바로 뒤에 둔다.
// 대표 프로젝트는 행 전체가 상세 페이지 링크이고, 기타 프로젝트는 외부 링크만 있다.
export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 pt-(--section-gap-s) pb-(--section-gap)">
      <div className="wrap">
        <SectionTitle
          title="문제를 풀어 온 기록"
          description="행을 누르면 어떤 문제를 만났고 어떻게 해결했는지 자세히 볼 수 있습니다."
        />

        <ul className="set">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link href={`/projects/${project.slug}/`} className="index-row grid-12 py-8 text-ink">
                {/* 기간과 소속은 줄을 나눠 표기한다 */}
                <div className="text-sm text-muted lg:col-span-3">
                  <p className="num font-medium text-ink">{project.period}</p>
                  <p className="mt-1">{project.organization}</p>
                </div>
                <div className="lg:col-span-6">
                  <h3 className="index-title">{project.title}</h3>
                  <p className="mt-3 text-ink-2">{project.summary}</p>
                </div>
                <div className="text-sm text-muted lg:col-span-3">
                  <p>{project.tech.slice(0, 5).join(", ")}</p>
                  <p className="mt-3 font-medium text-accent-text underline underline-offset-[0.2em]">자세히 보기</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <h3 className="mt-(--space-2xl) mb-6">기타 프로젝트</h3>
        <ul className="set">
          {sideProjects.map((project) => (
            <li key={project.title} className="grid-12 py-6">
              <h4 className="font-display text-xl lg:col-span-3">{project.title}</h4>
              <div className="lg:col-span-6">
                <p className="text-ink-2">{project.description}</p>
                <p className="mt-2 text-sm text-muted">{project.tech.join(", ")}</p>
              </div>
              <div className="flex flex-wrap gap-4 text-sm lg:col-span-3">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLinkIcon />
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
