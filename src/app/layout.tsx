import type { Metadata } from "next";
import { Noto_Serif_KR } from "next/font/google";
import { SITE_URL } from "@/config/site";
import { profile } from "@/data/profile";
import "./globals.css";

// 배포 주소. OG 이미지, canonical 등 절대 경로가 필요한 메타데이터의 기준이 된다.
const siteUrl = SITE_URL;

// 제목용 서체. 한글과 라틴을 한 서체로 굵게 써서 제목의 힘을 만든다.
// next/font가 빌드 때 파일을 내려받아 함께 배포하므로 방문자가 구글 서버에 접속하지 않는다.
// 한글 글꼴은 파일이 많아 미리 불러오지 않고, 화면에 필요한 글자 묶음만 그때 받게 한다.
const notoSerif = Noto_Serif_KR({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.subline,
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: profile.subline,
    url: siteUrl,
    siteName: `${profile.name} 포트폴리오`,
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`h-full antialiased ${notoSerif.variable}`}>
      <head>
        {/* 본문 서체 Pretendard. 사용하는 글자만 내려받는 dynamic subset 버전 */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
