"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { profile } from "@/data/profile";

// 헤드라인 중 그라데이션으로 강조할 앞부분. profile.headline이 이 문구로 시작해야 한다.
const HIGHLIGHT = "설명할 수 있는 코드";

// 첫 화면(히어로).
// 헤드라인은 글자 단위로 한 글자씩 나타나 타이핑하는 듯한 효과를 준다.
// 글자를 처음부터 HTML에 모두 렌더링하고 투명도만 조절하므로, 검색엔진과 JS가 꺼진 환경에서도 문구가 보인다.
export default function Hero() {
  // 마우스를 따라다니는 배경 조명 위치
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(168,85,247,0.15), transparent 70%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  const rest = profile.headline.slice(HIGHLIGHT.length);
  const chars = [
    ...Array.from(HIGHLIGHT).map((char) => ({ char, highlight: true })),
    ...Array.from(rest).map((char) => ({ char, highlight: false })),
  ];
  // 한 글자당 등장 간격(초). 타이핑이 끝나는 시점에 서브 문구가 나오도록 계산에 사용한다.
  const charDelay = 0.06;
  const typingEnd = 0.3 + chars.length * charDelay;

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative flex min-h-svh items-center overflow-hidden pt-16"
    >
      {/* 배경 레이어: 격자 + 떠다니는 빛 덩어리 + 마우스 조명 */}
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="animate-blob pointer-events-none absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-violet-600/30 blur-3xl" />
      <div
        className="animate-blob pointer-events-none absolute top-1/3 -right-40 h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/20 blur-3xl"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="animate-blob pointer-events-none absolute -bottom-40 left-1/3 h-[24rem] w-[24rem] rounded-full bg-cyan-500/20 blur-3xl"
        style={{ animationDelay: "-12s" }}
      />
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: spotlight }} />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-4 py-1.5 font-mono text-xs text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {profile.role} · {profile.nameEn}
        </motion.p>

        <h1 className="text-4xl leading-tight font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          {/* 강조 구간은 바깥 span 하나에 그라데이션을 걸어 글자 사이에서 색이 끊기지 않게 한다 */}
          <span className="text-gradient">
            {chars.filter((c) => c.highlight).map(({ char }, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * charDelay, duration: 0.01 }}
              >
                {char}
              </motion.span>
            ))}
          </span>
          {chars.filter((c) => !c.highlight).map(({ char }, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + (HIGHLIGHT.length + i) * charDelay, duration: 0.01 }}
            >
              {char}
            </motion.span>
          ))}
          <span className="animate-caret ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.1em] bg-fuchsia-400" />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: typingEnd, duration: 0.7 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          {profile.subline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: typingEnd + 0.2, duration: 0.7 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition-transform hover:scale-[1.03]"
          >
            프로젝트 보기
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-border bg-white/[0.03] px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/[0.08]"
          >
            연락하기
          </a>
        </motion.div>
      </div>

      {/* 아래로 스크롤 유도 표시 */}
      <motion.a
        href="#about"
        aria-label="아래로 스크롤"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: typingEnd + 0.6 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 -ml-3 text-muted"
      >
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M12 5v14m0 0-6-6m6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.a>
    </section>
  );
}
