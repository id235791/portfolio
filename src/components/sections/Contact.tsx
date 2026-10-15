"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { contactLinks, profile } from "@/data/profile";
import ExternalLinkIcon from "@/components/ui/ExternalLinkIcon";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  // 이메일 주소를 클립보드에 복사하고 2초간 '복사됨' 표시를 보여준다.
  // 클립보드 API를 쓸 수 없는 환경(구형 브라우저, http 등)에서는 메일 앱 열기로 대체한다.
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[30rem] w-[50rem] -translate-x-1/2 translate-y-1/2 rounded-full bg-fuchsia-300/30 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="mb-3 font-mono text-sm tracking-widest text-fuchsia-600 uppercase">05 / Contact</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            함께 <span className="text-gradient">일할 이야기</span>를 나눠요
          </h2>
          <p className="mt-5 text-muted">채용, 협업, 프로젝트 제안 모두 환영합니다. 편하게 연락 주세요.</p>
        </Reveal>

        <Reveal delay={0.15}>
          <button
            type="button"
            onClick={copyEmail}
            className="group relative mt-10 inline-flex items-center gap-3 rounded-full border border-border bg-surface px-6 py-4 font-mono text-sm transition-colors hover:border-fuchsia-500/50 sm:text-base"
          >
            {profile.email}
            <span className="relative inline-flex h-6 min-w-14 items-center justify-center overflow-hidden rounded-full bg-foreground/10 px-2 text-xs">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={copied ? "copied" : "copy"}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -12, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={copied ? "text-emerald-600" : "text-muted"}
                >
                  {copied ? "복사됨" : "복사"}
                </motion.span>
              </AnimatePresence>
            </span>
          </button>
        </Reveal>

        <Reveal delay={0.25}>
          <ul className="mt-10 grid gap-3 sm:grid-cols-3">
            {contactLinks.map((link) => {
              const external = link.href.startsWith("http");
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex h-full flex-col items-center gap-1 rounded-2xl border border-border bg-surface/60 px-4 py-5 transition-all hover:-translate-y-1 hover:border-foreground/20"
                  >
                    <span className="inline-flex items-center gap-1 font-mono text-xs text-muted uppercase">
                      {link.label}
                      {external && <ExternalLinkIcon className="h-3 w-3" />}
                    </span>
                    <span className="text-sm break-all">{link.value}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>

        {/* 지원서 제출용 PDF 페이지로 가는 링크. 각 페이지의 "PDF로 저장" 버튼으로 A4 문서를 받을 수 있다. */}
        <Reveal delay={0.35}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm">
            <Link
              href="/pdf/resume/"
              className="rounded-full border border-border bg-surface px-4 py-2 transition-colors hover:border-fuchsia-500/50"
            >
              이력서 PDF
            </Link>
            <Link
              href="/pdf/portfolio/"
              className="rounded-full border border-border bg-surface px-4 py-2 transition-colors hover:border-fuchsia-500/50"
            >
              프로젝트 포트폴리오 PDF
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
