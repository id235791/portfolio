import Image from "next/image";
import { withBasePath } from "@/config/site";
import { profile } from "@/data/profile";

// 첫 화면(히어로). 서버에서 완성된 HTML로 내려가므로 JS가 꺼진 환경에서도 내용이 모두 보인다.
// 헤드라인 아래의 오렌지 치수선과 주석이 이 사이트의 시그니처다. "설명하는 사람"이라는 정체성을
// 강의 판서처럼 문장에 직접 주석을 다는 방식으로 보여 준다.
export default function Hero() {
  // profile.headline을 어절로 나눠 "설명할 수 있는" / "코드를" / "만듭니다."에 각각 배치한다.
  // 헤드라인을 다른 문구로 바꾸면 이 분할과 아래 주석 내용도 함께 검토해야 한다.
  const words = profile.headline.split(" ");
  const explain = words.slice(0, 3).join(" ");
  const code = words[3];
  const rest = words.slice(4).join(" ");

  return (
    <section className="relative overflow-clip">
      <div className="proof pointer-events-none absolute inset-0" />
      <div className="wrap relative pt-(--space-2xl)">
        {/* 문장이 끊기지 않게 화면 폭을 채우는 한 줄로 둔다. 좁은 화면에서는 어절 단위로 줄바꿈된다 */}
        <h1 className="max-w-none text-[clamp(2.25rem,5.9vw,5.4rem)] leading-[1.1]">
          {/* 주석은 보조 정보다. 같은 사실이 아래 문장에 있으므로 스크린 리더에서는 건너뛴다 */}
          <span className="note mr-[0.28em]">
            {explain}
            <span className="note-mark" aria-hidden="true">
              <span className="note-line" />
              <span className="note-text">강의 4년</span>
            </span>
          </span>
          <span className="note mr-[0.28em]">
            {code}
            <span className="note-mark" aria-hidden="true">
              <span className="note-line" />
              <span className="note-text">풀스택 개발</span>
            </span>
          </span>
          <span className="inline-block">{rest}</span>
        </h1>

        <div className="grid-12 mt-(--space-lg) items-start">
          <div className="lg:col-span-7">
            <p className="lead text-ink-2">{profile.subline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn btn--primary">
                프로젝트 보기
              </a>
              <a href="#contact" className="btn">
                연락하기
              </a>
            </div>
          </div>

          {/* 프로필 사진. 원본 해상도가 낮아 300px까지만 키운다. 파일은 public/images/profile.jpg 를 덮어쓰면 된다 */}
          <figure className="crop m-3 w-[calc(100%-24px)] max-w-[300px] lg:col-span-4 lg:col-start-9 lg:justify-self-end">
            <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-paper-2">
              {/* 사진이 없으면 이름을 대신 보여 준다 */}
              {profile.photo ? (
                <Image
                  src={withBasePath(profile.photo)}
                  alt={`${profile.name} 프로필 사진`}
                  fill
                  priority
                  className="object-cover"
                  sizes="300px"
                />
              ) : (
                <p className="flex h-full items-center justify-center font-display text-3xl">{profile.name}</p>
              )}
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
