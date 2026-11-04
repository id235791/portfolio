import { profile } from "@/data/profile";

// 소개 섹션. 왼쪽에 제목, 오른쪽에 강사에서 개발자로 넘어온 이야기를 두고, 주요 수치는 아래 잉크 띠에 크게 펼친다.
// 수치는 카운트 효과 없이 처음부터 최종값을 보여 준다. 값은 data/profile.ts의 highlights에서 관리한다.
export default function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="wrap grid-12 pb-(--space-3xl)">
        {/* 본문이 길어 스크롤하는 동안 제목이 왼쪽 칸에 남아 있게 한다 */}
        <h2 className="lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
          <span className="mark">가르치던 사람에서, 만드는 사람으로</span>
        </h2>
        <div className="space-y-5 text-ink-2 lg:col-span-8">
          {profile.about.map((paragraph) => (
            <p key={paragraph} className="max-w-[65ch] text-lead leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* 강사·실무·사이드 프로젝트의 주요 성과 수치. 페이지 중간의 가장 강한 강조 지점이다 */}
      <div className="band-ink py-(--space-2xl)">
        <dl className="wrap grid grid-cols-1 gap-x-(--gap-columns) sm:grid-cols-2 lg:grid-cols-3">
          {profile.highlights.map((item) => (
            <div key={item.label} className="flex flex-col-reverse justify-end border-b border-ink-2 py-6">
              <dt className="mt-2 text-on-ink">{item.label}</dt>
              <dd className="num font-display text-display-s leading-none text-accent">
                {item.value.toFixed(item.decimals ?? 0)}
                {item.suffix}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
