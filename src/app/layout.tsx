import type { Metadata } from "next";
import { SITE_URL } from "@/config/site";
import { profile } from "@/data/profile";
import MotionProvider from "@/components/layout/MotionProvider";
import "./globals.css";

// 배포 주소. OG 이미지, canonical 등 절대 경로가 필요한 메타데이터의 기준이 된다.
const siteUrl = SITE_URL;

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
    <html lang="ko" className="h-full antialiased">
      <head>
        {/* 한글 웹폰트 Pretendard. 사용하는 글자만 내려받는 dynamic subset 버전 */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
