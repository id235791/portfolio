"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { navItems, profile } from "@/data/profile";

// 상단 고정 내비게이션.
// - 스크롤을 내리면 배경이 반투명 블러로 바뀐다.
// - 현재 보고 있는 섹션의 메뉴가 강조된다(스크롤 스파이).
// - 상단에 페이지 진행률 막대가 표시된다.
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 화면 중앙 부근에 걸친 섹션을 '현재 섹션'으로 판단한다.
  // 상세 페이지처럼 해당 id가 없는 페이지에서는 아무것도 강조되지 않는다.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen ? "border-b border-border bg-background/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <motion.div
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400"
        style={{ scaleX: progress }}
      />
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* 로고: 상세 페이지에서도 메인으로 돌아오는 링크 */}
        <Link href="/" className="font-mono text-sm font-semibold tracking-tight">
          <span className="text-gradient">{"<"}</span>
          {profile.nameEn}
          <span className="text-gradient">{" />"}</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              {/* Link를 써야 하위 경로(basePath)가 자동으로 붙는다 */}
              <Link
                href={`/#${item.id}`}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  activeId === item.id ? "text-foreground" : "text-muted hover:text-foreground"
                }`}
              >
                {/* layoutId: 활성 메뉴가 바뀔 때 배경 알약이 미끄러지듯 이동한다 */}
                {activeId === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-foreground/[0.07]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* 모바일 햄버거 버튼 */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? (
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <ul className="flex flex-col gap-1 px-4 pb-4 md:hidden">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={`/#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm text-muted hover:bg-foreground/5 hover:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
