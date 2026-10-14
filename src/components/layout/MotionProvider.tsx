"use client";

import { MotionConfig } from "framer-motion";

// framer-motion 전역 설정은 클라이언트에서만 동작하므로 서버 컴포넌트인 layout에서 감싸 쓰기 위해 분리했다.
// reducedMotion="user": OS의 '동작 줄이기' 설정을 켠 사용자에게는 애니메이션을 생략한다.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
