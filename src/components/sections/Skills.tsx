import SectionTitle from "@/components/ui/SectionTitle";
import { skillGroups } from "@/data/skills";

// 기술 스택. 분류별로 한 행씩, 왼쪽에 분류 이름과 오른쪽에 쉼표로 이은 기술 목록을 둔다.
export default function Skills() {
  return (
    <section id="skills" className="section scroll-mt-20">
      <div className="wrap">
        <SectionTitle title="다뤄본 기술" description="강의로 원리를 설명하고, 실무에서 서비스로 만들어 본 기술들입니다." />

        <div className="set">
          {skillGroups.map((group) => (
            <div key={group.category} className="grid-12 py-6">
              <h3 className="lg:col-span-4">{group.category}</h3>
              <p className="text-lead text-ink-2 lg:col-span-8">{group.items.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
