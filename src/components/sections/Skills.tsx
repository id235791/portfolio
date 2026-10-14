"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import SectionTitle from "@/components/ui/SectionTitle";

// 카테고리별 그라데이션 색. skillGroups 순서와 대응된다.
const groupAccents = [
  "from-violet-500 to-fuchsia-500",
  "from-cyan-400 to-sky-500",
  "from-emerald-400 to-teal-500",
  "from-amber-400 to-orange-500",
  "from-rose-400 to-pink-500",
];

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="02 / Skills"
          title="다뤄본 기술"
          description="강의로 원리를 설명하고, 실무에서 서비스로 만들어 본 기술들입니다."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, gi) => {
            const accent = groupAccents[gi % groupAccents.length];
            // 카테고리 수가 홀수면 마지막 카드가 혼자 남지 않도록 두 칸을 차지하게 한다
            const isLonelyLast = skillGroups.length % 2 === 1 && gi === skillGroups.length - 1;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: gi * 0.1 }}
                className={`group relative overflow-hidden rounded-3xl border border-border bg-surface p-6 sm:p-8 ${isLonelyLast ? "sm:col-span-2" : ""}`}
              >
                {/* 호버 시 카드 모서리에서 퍼지는 색 번짐 */}
                <div
                  className={`pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${accent} opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-30`}
                />
                <h3 className="mb-5 flex items-center gap-3 text-lg font-semibold">
                  <span className={`h-2.5 w-2.5 rounded-full bg-gradient-to-br ${accent}`} />
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item, ii) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.1 + ii * 0.04 + 0.2 }}
                      whileHover={{ y: -3 }}
                      className="cursor-default rounded-xl border border-border bg-white/[0.03] px-3.5 py-2 text-sm transition-colors hover:border-white/20 hover:bg-white/[0.07]"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
