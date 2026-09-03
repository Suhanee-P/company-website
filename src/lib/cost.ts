import { rates } from '../data/rates';

export const fmtUSD = (n: number) => {
  const v = n >= 1000 ? Math.round(n / 50) * 50 : Math.round(n / 10) * 10;
  return '$' + v.toLocaleString('en-US');
};

export const fmtINR = (n: number) => {
  const v = Math.round(n / 500) * 500;
  return '₹' + v.toLocaleString('en-IN');
};

export const hoursToUSD = (h: number) => h * rates.usdPerHour;
export const hoursToINR = (h: number) => h * rates.inrPerHour;

export const usdRange = ([a, b]: [number, number]) => `${fmtUSD(hoursToUSD(a))} to ${fmtUSD(hoursToUSD(b))}`;
export const inrRange = ([a, b]: [number, number]) => `${fmtINR(hoursToINR(a))} to ${fmtINR(hoursToINR(b))}`;
export const hoursRange = ([a, b]: [number, number]) => `${a} to ${b} hours`;

export const weeksRange = ([a, b]: [number, number]) => {
  const w = (h: number) => Math.max(1, Math.round(h / rates.hoursPerWeekOneDev));
  const lo = w(a), hi = w(b);
  return lo === hi ? `about ${lo} week${lo > 1 ? 's' : ''}` : `${lo} to ${hi} weeks`;
};

/** Min/max hours across all tiers of a feature. */
export const featureSpan = (tiers: { hours: [number, number] }[]): [number, number] => [
  Math.min(...tiers.map((t) => t.hours[0])),
  Math.max(...tiers.map((t) => t.hours[1])),
];
