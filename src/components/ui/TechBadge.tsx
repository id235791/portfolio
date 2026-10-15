// 기술 이름을 보여주는 작은 알약 모양 배지
export default function TechBadge({ name }: { name: string }) {
  return (
    <span className="rounded-full border border-border bg-foreground/[0.03] px-3 py-1 text-xs text-foreground/80">
      {name}
    </span>
  );
}
