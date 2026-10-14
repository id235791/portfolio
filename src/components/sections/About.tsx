"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { animate, useInView } from "framer-motion";
import { withBasePath } from "@/config/site";
import { profile } from "@/data/profile";
import type { Highlight } from "@/types";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";

// 화면에 보이는 순간 0에서 목표 숫자까지 올라가는 카운터
function CountUp({ value, decimals = 0, suffix = "" }: Pick<Highlight, "value" | "decimals" | "suffix">) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  // 초기값을 최종값으로 두어, JS가 동작하기 전(정적 HTML)에도 올바른 숫자가 보이게 한다.
  const [display, setDisplay] = useState(value.toFixed(decimals));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(latest.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, value, decimals]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle eyebrow="01 / About" title="가르치던 사람에서, 만드는 사람으로" />

        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          {/* 프로필 사진. 사진이 없으면 이니셜 플레이스홀더를 보여준다. */}
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px]">
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 opacity-60 blur-lg" />
              <div className="relative h-full overflow-hidden rounded-[2rem] border border-border bg-surface-strong">
                {profile.photo ? (
                  <Image
                    src={withBasePath(profile.photo)}
                    alt={`${profile.name} 프로필 사진`}
                    fill
                    className="object-cover"
                    sizes="280px"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="text-gradient text-7xl font-extrabold">다솔</span>
                  </div>
                )}
              </div>
            </div>
          </Reveal>

          <div>
            <div className="space-y-5 text-base leading-relaxed text-foreground/85 sm:text-lg">
              {profile.about.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>

            {/* 강사·실무·사이드 프로젝트의 주요 성과 수치 */}
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {profile.highlights.map((item, i) => (
                <Reveal key={item.label} delay={i * 0.08} className="h-full">
                  <div className="h-full rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-fuchsia-500/40">
                    <p className="text-2xl font-bold sm:text-3xl">
                      <CountUp value={item.value} decimals={item.decimals} suffix={item.suffix} />
                    </p>
                    <p className="mt-2 text-xs text-muted sm:text-sm">{item.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
