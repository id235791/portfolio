"use client";

import { useSyncExternalStore } from "react";
import { certifications, education, experiences } from "@/data/experience";
import { BUILD_DATE, formatMonths, monthsInPeriod } from "@/lib/career";
import SectionTitle from "@/components/ui/SectionTitle";

// 날짜는 구독할 변화 이벤트가 없으므로 아무것도 하지 않는 구독 함수를 넘긴다.
const subscribeNothing = () => () => {};
// 스냅샷은 매 렌더마다 같은 값이어야 하므로 밀리초가 아닌 "그 달 1일" 시각으로 맞춘다.
const getTodayTime = () => {
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), 1).getTime();
};
const getBuildTime = () => BUILD_DATE.getTime();

export default function Experience() {
  // "재직중" 기간을 셀 기준 날짜. 정적 HTML(서버 스냅샷)은 빌드 날짜로 만들고,
  // 브라우저에서는 오늘 날짜를 써서 배포 후 시간이 지나도 기간이 늘어나게 한다.
  // 두 값이 달라도 React가 hydration 직후 다시 그려 주므로 불일치 경고가 나지 않는다.
  const nowTime = useSyncExternalStore(subscribeNothing, getTodayTime, getBuildTime);
  const now = new Date(nowTime);

  // 개발 실무와 강의 경력을 각각 합산한다. 기간이 겹치지 않으므로 단순 합계가 총 경력이 된다.
  const sumMonths = (kind?: "work" | "teaching") =>
    experiences
      .filter((item) => !kind || item.kind === kind)
      .reduce((total, item) => total + monthsInPeriod(item.period, now), 0);

  return (
    <section id="experience" className="section scroll-mt-20">
      <div className="wrap">
        <SectionTitle
          title="걸어온 길"
          aside={
            <dl className="flex flex-wrap gap-x-8 gap-y-2 text-ink-2">
              <div className="flex gap-2">
                <dt>총</dt>
                <dd className="num font-medium text-ink">{formatMonths(sumMonths())}</dd>
              </div>
              <div className="flex gap-2">
                <dt>개발</dt>
                <dd className="num font-medium text-ink">{formatMonths(sumMonths("work"))}</dd>
              </div>
              <div className="flex gap-2">
                <dt>강의</dt>
                <dd className="num font-medium text-ink">{formatMonths(sumMonths("teaching"))}</dd>
              </div>
            </dl>
          }
        />

        <ol className="set">
          {experiences.map((item) => (
            <li key={item.organization} className="grid-12 py-8">
              {/* 왼쪽 칸: 기간과 근무 형태. 경력서처럼 시간 순서가 먼저 눈에 들어오게 한다 */}
              <div className="text-sm text-muted lg:col-span-3">
                <p className="num">{item.period}</p>
                <p className="num mt-1">{formatMonths(monthsInPeriod(item.period, now))}</p>
                <p className="mt-1">{item.type}</p>
              </div>
              <div className="lg:col-span-9">
                <h3>{item.organization}</h3>
                <p className="mt-2 font-medium text-ink">{item.title}</p>
                <ul className="mt-3 max-w-[70ch] list-disc space-y-2 pl-5 text-ink-2">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                {item.tech && <p className="mt-4 text-sm text-muted">{item.tech.join(", ")}</p>}
              </div>
            </li>
          ))}
        </ol>

        {/* 학력과 자격증. 경력과 같은 칸 구성으로 이어서 경력 기록의 일부처럼 읽히게 한다 */}
        <div className="border-b border-rule">
          <div className="grid-12 py-8">
            <h3 className="lg:col-span-3">학력</h3>
            <ul className="space-y-4 lg:col-span-9">
              {education.map((edu) => (
                <li key={edu.school}>
                  <p className="font-medium">{edu.school}</p>
                  <p className="mt-1 text-sm text-muted">
                    {edu.detail}, {edu.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-b border-rule">
          <div className="grid-12 py-8">
            <h3 className="lg:col-span-3">자격증</h3>
            <ul className="space-y-4 lg:col-span-9">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  <p className="font-medium">{cert.name}</p>
                  <p className="mt-1 text-sm text-muted">
                    {cert.issuer}, {cert.date}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
