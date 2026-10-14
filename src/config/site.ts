// 배포 경로 설정을 한곳에서 관리한다.
// GitHub Pages는 저장소 이름이 "portfolio"이면 https://id235791.github.io/portfolio/ 처럼 하위 경로에 배포된다.
// 저장소를 id235791.github.io 로 옮기면 BASE_PATH를 ""로 바꾸기만 하면 된다.
export const BASE_PATH = "/portfolio";

// 사이트의 실제 공개 주소. OG 메타데이터 등 절대 URL이 필요한 곳에서 사용한다.
export const SITE_URL = `https://id235791.github.io${BASE_PATH}`;

// next/link는 basePath를 자동으로 붙여주지만, 이미지 src 같은 일반 경로에는 직접 붙여야 한다.
export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
