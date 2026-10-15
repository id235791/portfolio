// 경력 기간 계산 유틸.
// 데이터의 기간 문자열("2025.04 - 2026.01", "2026.02 - 재직중")을 개월 수로 바꿔 합산한다.

// 빌드할 때 next.config.ts에서 넣어 주는 날짜. 정적 HTML과 첫 화면(hydration)이 같은 값을 쓰도록 기준으로 삼는다.
export const BUILD_DATE = new Date(process.env.BUILD_DATE ?? Date.now());

// "2025.04" -> 연*12 + 월 형태의 절대 개월 값
function toMonthIndex(ym: string): number {
  const [year, month] = ym.trim().split(".").map(Number);
  return year * 12 + month;
}

// 기간 문자열의 개월 수. 이력서 표기와 맞추기 위해 시작 월과 끝 월을 모두 포함한다.
// 예: 2025.04 - 2026.01 -> 10개월. 끝이 "재직중"처럼 날짜가 아니면 now가 속한 달까지 센다.
export function monthsInPeriod(period: string, now: Date): number {
  const [startText, endText] = period.split("-").map((part) => part.trim());
  const start = toMonthIndex(startText);
  const end = /^\d{4}\.\d{1,2}$/.test(endText)
    ? toMonthIndex(endText)
    : now.getFullYear() * 12 + (now.getMonth() + 1);
  return Math.max(0, end - start + 1);
}

// 36 -> "3년", 19 -> "1년 7개월", 7 -> "7개월"
export function formatMonths(total: number): string {
  const years = Math.floor(total / 12);
  const months = total % 12;
  if (years === 0) return `${months}개월`;
  return months === 0 ? `${years}년` : `${years}년 ${months}개월`;
}
