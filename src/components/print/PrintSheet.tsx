import type { ReactNode } from "react";
import Link from "next/link";
import PrintButton from "./PrintButton";

// PDF 저장용 페이지(/pdf/resume, /pdf/portfolio)의 공통 틀.
// 화면에서는 회색 바탕 위에 A4 폭(210mm)의 흰 종이처럼 보이게 하고, 인쇄할 때는 종이 장식과 상단 버튼을 모두 걷어낸다.
// 용지 크기와 쪽 여백은 globals.css의 @media print 에서 정한다.
export default function PrintSheet({ children }: { children: ReactNode }) {
  return (
    <main className="flex-1 bg-surface-strong py-8 print:flex-none print:bg-transparent print:py-0">
      <div className="mx-auto mb-4 flex max-w-[210mm] items-center justify-between gap-3 px-4 print:hidden">
        <Link href="/" className="text-sm text-muted hover:text-foreground">
          ← 포트폴리오로 돌아가기
        </Link>
        <div className="flex items-center gap-3">
          {/* 인쇄 창에서 머리글·바닥글 옵션을 끄지 않으면 주소와 날짜가 함께 찍힌다. */}
          <p className="hidden text-xs text-muted sm:block">인쇄 창에서 머리글·바닥글은 꺼 주세요</p>
          <PrintButton />
        </div>
      </div>

      <article className="mx-auto max-w-[210mm] bg-white px-[14mm] py-[14mm] text-[12.5px] leading-[1.6] text-foreground shadow-sm print:max-w-none print:p-0 print:shadow-none">
        {children}
      </article>
    </main>
  );
}

// 주소를 지면에 짧게 보여주기 위해 프로토콜과 끝 슬래시를 뗀다.
export function shortUrl(url: string): string {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}
