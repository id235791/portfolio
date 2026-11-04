// 기술 이름을 보여주는 작은 표시. 클릭할 수 없는 정보라 호버 효과를 두지 않는다.
export default function TechBadge({ name }: { name: string }) {
  return <span className="rounded-card border border-rule px-2 py-1 text-xs text-ink-2">{name}</span>;
}
