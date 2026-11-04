import type { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  description?: string;
  // 제목 아래에 붙는 보조 정보 (예: 걸어온 길의 총 경력 기간)
  aside?: ReactNode;
}

// 모든 섹션 상단에 공통으로 쓰는 제목 블록
export default function SectionTitle({ title, description, aside }: SectionTitleProps) {
  return (
    <div className="mb-(--space-2xl)">
      <h2>
        <span className="mark">{title}</span>
      </h2>
      {description && <p className="lead mt-4 text-ink-2">{description}</p>}
      {aside && <div className="mt-6">{aside}</div>}
    </div>
  );
}
