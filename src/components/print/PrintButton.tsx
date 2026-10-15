"use client";

// 브라우저 인쇄 창을 여는 버튼. 인쇄 창에서 대상을 "PDF로 저장"으로 고르면 PDF가 만들어진다.
// 인쇄물에는 나오지 않도록 print:hidden 처리한다.
export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-85 print:hidden"
    >
      PDF로 저장
    </button>
  );
}
