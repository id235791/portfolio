"use client";

import { useState } from "react";
import Link from "next/link";
import ExternalLinkIcon from "@/components/ui/ExternalLinkIcon";
import { contactLinks, profile } from "@/data/profile";

// 연락처 섹션. 이메일 복사 버튼, 연락 수단, 지원서용 PDF 링크를 잉크 띠 위에 모았다.
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
    <section id="contact" className="band-ink section scroll-mt-20">
      <div className="wrap grid-12">
        <div className="lg:col-span-7">
          <h2>
            <span className="mark">함께 일할 이야기를 나눠요</span>
          </h2>
          <p className="lead mt-5 text-on-ink">채용, 협업, 프로젝트 제안 모두 환영합니다. 편하게 연락 주세요.</p>
          <button type="button" onClick={copyEmail} className="btn mt-8">
            {profile.email}
            {/* 복사 결과를 스크린 리더에도 알리기 위해 aria-live를 둔다 */}
            <span aria-live="polite" className="min-w-10 text-sm text-on-ink">
              {copied ? "복사됨" : "복사"}
            </span>
          </button>
        </div>

        <div className="lg:col-span-5">
          <ul className="border-t border-on-ink">
            {contactLinks.map((link) => {
              const external = link.href.startsWith("http");
              return (
                <li key={link.label} className="border-b border-ink-2">
                  <a
                    href={link.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex min-h-14 items-center justify-between gap-4"
                  >
                    <span className="text-sm text-on-ink">{link.label}</span>
                    <span className="inline-flex items-center gap-1 underline decoration-muted underline-offset-[0.2em] transition-colors group-hover:decoration-accent">
                      {link.value}
                      {external && <ExternalLinkIcon className="h-3 w-3" />}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* 지원서 제출용 PDF 페이지로 가는 링크. 각 페이지의 "PDF로 저장" 버튼으로 A4 문서를 받을 수 있다. */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/pdf/resume/" className="link">
              이력서 PDF
            </Link>
            <Link href="/pdf/portfolio/" className="link">
              프로젝트 포트폴리오 PDF
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
