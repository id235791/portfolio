"use client";

import { useRef, useSyncExternalStore } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { certifications, education, experiences } from "@/data/experience";
import { BUILD_DATE, formatMonths, monthsInPeriod } from "@/lib/career";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import TechBadge from "@/components/ui/TechBadge";

// 날짜는 구독할 변화 이벤트가 없으므로 아무것도 하지 않는 구독 함수를 넘긴다.
const subscribeNothing = () => () => {};
// 스냅샷은 매 렌더마다 같은 값이어야 하므로 밀리초가 아닌 "그 달 1일" 시각으로 맞춘다.
const getTodayTime = () => {
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), 1).getTime();
};
const getBuildTime = () => BUILD_DATE.getTime();

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);

  // 타임라인 영역이 화면을 지나가는 정도(0~1)에 맞춰 세로선이 위에서 아래로 그려진다.
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 60%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // "재직중" 기간을 셀 기준 날짜. 정적 HTML(서버 스냅샷)은 빌드 날짜로 만들고,
  // 브라우저에서는 오늘 날짜를 써서 배포 후 시간이 지나도 기간이 늘어나게 한다.
  // 두 값이 달라도 React가 hydration 직후 다시 그려 주므로 불일치 경고가 나지 않는다.
  const nowTime = useSyncExternalStore(subscribeNothing, getTodayTime, getBuildTime);
  const now = new Date(nowTime);

  // 개발 실무와 강의 경력을 각각 합산한다. 기간이 겹치지 않으므로 단순 합계가 총 경력이 된다.
  const sumMonths = (kind?: "work" | "teaching") =>
    experiences
      .filter((item) => !kind || item.kind === kind)
      .reduce((total, item) => total + monthsInPeriod(item.period, now), 0);

  return (
    <section id="experience" className="relative scroll-mt-20 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="04 / Experience"
          title="걸어온 길"
          aside={
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="rounded-full bg-foreground px-3.5 py-1.5 font-semibold text-background">
                총 {formatMonths(sumMonths())}
              </span>
              <span className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-muted">
                개발 {formatMonths(sumMonths("work"))}
              </span>
              <span className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-muted">
                강의 {formatMonths(sumMonths("teaching"))}
              </span>
            </div>
          }
        />

        <div ref={timelineRef} className="relative">
          {/* 회색 기본선 위에 스크롤 진행에 따라 그라데이션 선이 덧그려진다 */}
          <div className="absolute top-2 bottom-2 left-[7px] w-px bg-border sm:left-[9px]" />
          <motion.div
            className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-gradient-to-b from-violet-500 via-fuchsia-500 to-cyan-400 sm:left-[9px]"
            style={{ scaleY: lineScale }}
          />

          <ol className="space-y-12">
            {experiences.map((item, i) => (
              <li key={item.organization} className="relative pl-10 sm:pl-14">
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="absolute top-1.5 left-0 h-[15px] w-[15px] rounded-full border-2 border-background bg-gradient-to-br from-violet-400 to-fuchsia-500 shadow-[0_0_16px] shadow-fuchsia-500/60 sm:h-[19px] sm:w-[19px]"
                />
                <Reveal delay={i * 0.05}>
                  <div className="rounded-3xl border border-border bg-surface p-6 transition-colors hover:border-foreground/15 sm:p-8">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-xl font-bold">{item.organization}</h3>
                      <span className="font-mono text-sm text-muted">
                        {item.period} ({formatMonths(monthsInPeriod(item.period, now))})
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-fuchsia-600">{item.type}</p>
                    <p className="mt-4 font-semibold">{item.title}</p>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/75">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    {item.tech && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.tech.map((t) => (
                          <TechBadge key={t} name={t} />
                        ))}
                      </div>
                    )}
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        {/* 학력 · 자격증 */}
        <div className="mt-20 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="mb-5 font-mono text-sm tracking-widest text-muted uppercase">Education</h3>
              <ul className="space-y-5">
                {education.map((edu) => (
                  <li key={edu.school}>
                    <p className="font-semibold">{edu.school}</p>
                    <p className="mt-1 text-sm text-muted">
                      {edu.detail} · {edu.period}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="mb-5 font-mono text-sm tracking-widest text-muted uppercase">Certification</h3>
              <ul className="space-y-5">
                {certifications.map((cert) => (
                  <li key={cert.name}>
                    <p className="font-semibold">{cert.name}</p>
                    <p className="mt-1 text-sm text-muted">
                      {cert.issuer} · {cert.date}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
