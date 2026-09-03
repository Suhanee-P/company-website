// Rate assumptions used by every /cost page and the calculator.
// Change these two numbers and every estimate on the site updates on the next build.
export const rates = {
  usdPerHour: 30,      // blended senior engineer + designer rate, USD
  inrPerHour: 2500,    // blended rate, INR
  // Effort added on top of features for any new product: repo, CI/CD, design system,
  // environments, deployment, QA harness, launch checklist.
  projectFoundationHours: [60, 120] as [number, number],
  // Multiplier applied when the same feature set is delivered on more than one platform.
  platformMultiplier: { web: 1, mobile: 1.15, both: 1.4 } as const,
  // Rough delivery capacity used for timeline estimates (one senior dev + part-time designer/QA).
  hoursPerWeekOneDev: 35,
  lastReviewed: '2026-09-03',
  note: 'Estimates assume a blended rate for a senior India-based team. Real quotes depend on scope, integrations and timeline.',
};
