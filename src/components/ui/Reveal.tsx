"use client";

import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  // 여러 요소를 순서대로 등장시키고 싶을 때 지연 시간(초)
  delay?: number;
  // 아래에서 위로 떠오르는 거리(px)
  y?: number;
  className?: string;
}

// 스크롤해서 화면에 들어올 때 아래에서 서서히 떠오르게 만드는 래퍼.
// 섹션 내부 요소를 감싸기만 하면 된다. once: true 이므로 한 번 등장한 뒤에는 다시 숨지 않는다.
export default function Reveal({ children, delay = 0, y = 32, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
