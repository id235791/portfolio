import Link from "next/link";

// 존재하지 않는 주소로 접근했을 때 보여주는 404 페이지 (정적 export 시 out/404.html로 생성됨)
export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-40 text-center">
      <p className="text-gradient font-mono text-7xl font-extrabold">404</p>
      <p className="mt-4 text-muted">찾으시는 페이지가 없어요.</p>
      <Link
        href="/"
        className="mt-8 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:bg-white/[0.06]"
      >
        메인으로 돌아가기
      </Link>
    </main>
  );
}
