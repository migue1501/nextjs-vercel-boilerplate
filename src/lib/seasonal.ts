export function isSnowSeason(now: Date = new Date()): boolean {
  const start = new Date(2026, 10, 17, 0, 0, 0, 0); // 2026-11-17
  const end = new Date(2027, 0, 10, 23, 59, 59, 999); // 2027-01-10
  return now >= start && now <= end;
}
