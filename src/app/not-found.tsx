import Link from "next/link";

// 존재하지 않는 주소로 접근했을 때 보여주는 404 페이지 (정적 export 시 out/404.html로 생성됨)
export default function NotFound() {
  return (
    <main className="wrap flex flex-1 flex-col items-start justify-center py-(--section-gap)">
      <h1>404</h1>
      <p className="mt-4 text-lead text-ink-2">찾으시는 페이지가 없어요.</p>
      <Link href="/" className="btn mt-8">
        메인으로 돌아가기
      </Link>
    </main>
  );
}
