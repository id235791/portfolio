import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 정적 HTML 내보내기
  images: {
    unoptimized: true, // GitHub Pages는 이미지 최적화를 지원하지 않음
  },
  basePath: "/portfolio", // GitHub Pages에서 서브디렉토리 설정
  assetPrefix: "/portfolio/",
};

export default nextConfig;
