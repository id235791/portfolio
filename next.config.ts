import type { NextConfig } from "next";
import { BASE_PATH } from "./src/config/site";

// GitHub Pages는 정적 파일만 서빙할 수 있으므로 빌드 결과를 out/ 폴더의 순수 HTML/JS/CSS로 내보낸다.
// 서버 기능(이미지 최적화, 서버 액션, 동적 렌더링 등)은 사용할 수 없다.
const nextConfig: NextConfig = {
  output: "export",
  // 하위 경로(/portfolio) 배포용. 값은 src/config/site.ts 에서 관리한다.
  basePath: BASE_PATH,
  // /projects/duckzip -> /projects/duckzip/index.html 로 생성되어 정적 호스팅에서 경로가 안정적으로 동작한다.
  trailingSlash: true,
  images: {
    // 기본 이미지 최적화는 서버가 필요하므로 정적 export에서는 원본 이미지를 그대로 쓴다.
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
