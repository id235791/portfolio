# 정다솔 포트폴리오

Next.js(App Router) + TypeScript + Tailwind CSS + Framer Motion으로 만든 개발자 포트폴리오입니다.
정적 사이트로 빌드해 GitHub Pages(`https://id235791.github.io/portfolio/`)에 배포합니다.

## 실행

```bash
npm install
npm run dev     # http://localhost:3000/portfolio/
npm run build   # out/ 폴더에 정적 사이트 생성
```

## 콘텐츠 수정

화면에 보이는 내용은 모두 `src/data/`에 모여 있어서, 컴포넌트를 건드리지 않고 데이터만 고치면 됩니다.

| 파일 | 내용 |
| --- | --- |
| `src/data/profile.ts` | 이름, 헤드라인, 소개 문단, 성과 수치, 연락처, 메뉴 |
| `src/data/skills.ts` | 기술 스택 |
| `src/data/projects.ts` | 대표 프로젝트(상세 페이지 자동 생성)와 기타 프로젝트 |
| `src/data/experience.ts` | 경력, 학력, 자격증 |

- 프로필 사진: `public/images/profile.jpg` 파일을 교체하면 됩니다.
- 대표 프로젝트를 추가하면 `/projects/[slug]/` 상세 페이지가 빌드 시 자동으로 만들어집니다.

## 배포

1. 이 프로젝트를 `https://github.com/id235791/portfolio` 저장소에 push 합니다.
   - 하위 경로(`/portfolio`) 설정은 `src/config/site.ts`의 `BASE_PATH`에서 관리합니다.
2. 저장소 Settings > Pages > Source를 **GitHub Actions**로 바꿉니다.
3. 이후 `main` 브랜치에 push 할 때마다 `.github/workflows/deploy.yml`이 자동으로 빌드·배포합니다.
