import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionTitleProps {
  // 제목 위의 작은 영문 라벨 (예: "01 / About")
  eyebrow: string;
  title: string;
  description?: string;
  // 제목 오른쪽에 붙는 보조 정보 (예: 걸어온 길의 총 경력 기간). 좁은 화면에서는 제목 아래로 줄바꿈된다.
  aside?: ReactNode;
}

// 모든 섹션 상단에 공통으로 쓰는 제목 블록
export default function SectionTitle({ eyebrow, title, description, aside }: SectionTitleProps) {
  return (
    <Reveal className="mb-14">
      <p className="mb-3 font-mono text-sm tracking-widest text-fuchsia-600 uppercase">{eyebrow}</p>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        {aside}
      </div>
      {description && <p className="mt-4 max-w-2xl text-muted">{description}</p>}
    </Reveal>
  );
}
