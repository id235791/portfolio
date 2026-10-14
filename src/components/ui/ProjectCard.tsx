"use client";

import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import type { Project } from "@/types";
import TechBadge from "./TechBadge";

// 대표 프로젝트 카드.
// 마우스 위치에 따라 카드가 살짝 기울고(틸트), 커서 위치에 빛이 따라다니는 효과가 있다.
export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  // 커서의 카드 내부 상대 좌표(0~1). 기본값은 정중앙
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  // 기울기 각도. spring을 걸어 마우스를 빠르게 움직여도 부드럽게 따라오게 한다.
  const rotateX = useSpring(0, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 });

  // 커서 위치를 중심으로 퍼지는 원형 하이라이트
  const glow = useMotionTemplate`radial-gradient(420px circle at calc(${px} * 100%) calc(${py} * 100%), rgba(255,255,255,0.08), transparent 60%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    px.set(x);
    py.set(y);
    // 중앙 기준으로 최대 6도까지 기울인다
    rotateY.set((x - 0.5) * 12);
    rotateX.set((0.5 - y) * 12);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative h-full overflow-hidden rounded-3xl border border-border bg-surface"
      >
        <motion.div className="pointer-events-none absolute inset-0 z-10" style={{ background: glow }} />
        <Link href={`/projects/${project.slug}/`} className="flex h-full flex-col">
          {/* 카드 상단의 그라데이션 커버 영역 */}
          <div className={`relative h-40 bg-gradient-to-br ${project.accent} opacity-80 transition-opacity duration-500 group-hover:opacity-100`}>
            <div className="bg-grid absolute inset-0 opacity-60" />
            <span className="absolute bottom-4 left-6 font-mono text-5xl font-bold text-white/30">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-6 sm:p-7">
            <p className="font-mono text-xs text-muted">
              {project.period} · {project.organization}
            </p>
            <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.slice(0, 5).map((t) => (
                <TechBadge key={t} name={t} />
              ))}
            </div>
            <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-fuchsia-300">
              자세히 보기
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </span>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
