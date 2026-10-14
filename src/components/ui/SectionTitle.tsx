import Reveal from "./Reveal";

interface SectionTitleProps {
  // 제목 위의 작은 영문 라벨 (예: "01 / About")
  eyebrow: string;
  title: string;
  description?: string;
}

// 모든 섹션 상단에 공통으로 쓰는 제목 블록
export default function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <Reveal className="mb-14">
      <p className="mb-3 font-mono text-sm tracking-widest text-fuchsia-400 uppercase">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 max-w-2xl text-muted">{description}</p>}
    </Reveal>
  );
}
