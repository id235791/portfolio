"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navItems, profile } from "@/data/profile";

// 상단 고정 내비게이션.
// - 현재 보고 있는 섹션의 메뉴에 밑줄이 표시된다(스크롤 스파이).
// - 연락하기는 메뉴와 구분해 버튼으로 보여 준다.
export default function Header() {
  const [activeId, setActiveId] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

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

  const menuItems = navItems.filter((item) => item.id !== "contact");

  return (
    <header className="sticky top-0 z-(--z-sticky-nav) border-b border-rule bg-paper">
      <nav className="wrap flex h-[72px] items-center justify-between gap-6" aria-label="주요 메뉴">
        {/* 로고: 상세 페이지에서도 메인으로 돌아오는 링크 */}
        <Link href="/" className="font-display text-xl text-ink">
          {profile.nameEn}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6">
            {menuItems.map((item) => (
              <li key={item.id}>
                {/* Link를 써야 하위 경로(basePath)가 자동으로 붙는다 */}
                <Link
                  href={`/#${item.id}`}
                  aria-current={activeId === item.id ? "true" : undefined}
                  className={`text-sm font-medium underline-offset-[0.4em] transition-colors hover:text-ink ${
                    activeId === item.id ? "text-ink underline decoration-accent" : "text-ink-2"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/#contact" className="btn">
            연락하기
          </Link>
        </div>

        {/* 모바일 메뉴 버튼 */}
        <button
          type="button"
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-card text-ink hover:bg-paper-2 active:bg-paper-3 md:hidden"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            {menuOpen ? (
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="square" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="square" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="wrap pb-4 md:hidden">
          <ul className="set">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-12 items-center text-md text-ink hover:bg-paper-2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
