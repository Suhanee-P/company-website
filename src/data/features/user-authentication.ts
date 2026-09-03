import type { Feature } from '../types';

export const feature: Feature = {
  slug: 'user-authentication',
  name: 'User authentication and accounts',
  question: 'How much does it cost to add user authentication to an app?',
  metaDescription:
    'Effort and cost to add login, sign-up, password reset, social login and two-factor authentication to a web or mobile app, with tiers and cheaper alternatives.',
  category: 'core',
  summary:
    'Adding user authentication means building sign-up, login, password reset, session handling and the account screens around them. A basic email and password flow is quick. Social login, two-factor authentication, single sign-on for business customers and account management for admins each add meaningful effort and testing.',
  tiers: [
    {
      name: 'Basic',
      hours: [16, 30],
      includes: [
        'Email and password sign-up and login',
        'Password reset by email',
        'Session handling and protected routes',
        'Basic profile screen (name, email, password change)',
      ],
    },
    {
      name: 'Standard',
      hours: [30, 60],
      includes: [
        'Everything in Basic',
        'Google and Apple sign-in (Apple is required on iOS if any social login exists)',
        'Email verification and rate limiting on login attempts',
        'Remember me, device sessions list and sign-out everywhere',
        'Admin view to search, suspend and impersonate users for support',
      ],
    },
    {
      name: 'Advanced',
      hours: [60, 120],
      includes: [
        'Everything in Standard',
        'Two-factor authentication (authenticator app or SMS) with backup codes',
        'Single sign-on for business customers (SAML or OIDC with Okta, Azure AD, Google Workspace)',
        'Organisation accounts with invitations and role-based access',
        'Audit log of security events and account deletion flow for privacy compliance',
      ],
    },
  ],
  breakdown: { design: 20, development: 60, qa: 20 },
  costDrivers: [
    'Number of login methods (each social provider adds setup, review and edge cases)',
    'Mobile platforms: biometric login and deep links for reset emails add work on iOS and Android',
    'Business customers asking for SSO, which involves per-customer configuration',
    'Compliance requirements such as account deletion, data export and consent records',
    'Migrating existing users and passwords from an older system',
    'Custom branded emails and localisation of every auth screen',
  ],
  cheaperAlternative:
    'For most new products we recommend a hosted auth service such as Clerk, Auth0, Firebase Authentication or Supabase Auth rather than a fully custom implementation. You still pay for integration and the account screens, but you skip the security-sensitive parts and get SSO and two-factor as configuration. Custom auth makes sense when you have strict data residency rules or an unusual identity model.',
  hiddenCosts: [
    'Hosted auth providers charge per monthly active user above a free tier',
    'SMS two-factor codes cost per message and need a provider such as Twilio or MSG91',
    'Apple and Google developer accounts and periodic changes to their sign-in policies',
    'Ongoing security updates and dependency patches',
  ],
  related: ['role-based-access-control', 'admin-dashboard', 'push-and-email-notifications', 'subscriptions-and-recurring-billing'],
  faqs: [
    {
      q: 'Should I build authentication myself or use a service like Auth0 or Firebase?',
      a: 'Use a service unless you have a specific reason not to. Hosted providers handle password hashing, breach detection, SSO and two-factor with far less risk, and the monthly cost is small until you have tens of thousands of active users. The engineering time goes into your product instead.',
    },
    {
      q: 'Is social login worth adding?',
      a: 'For consumer apps, yes: Google and Apple sign-in noticeably reduce sign-up drop-off. For B2B tools, email plus optional Google Workspace sign-in is usually enough, and larger customers will ask for SSO instead. Note that Apple requires Sign in with Apple on iOS if you offer any other social login.',
    },
    {
      q: 'How long does authentication take to build?',
      a: 'A basic email and password flow with a hosted provider is usually done inside a week. Social login, verification and admin tools add another one to two weeks. Enterprise SSO is scoped per customer because each identity provider has its own quirks.',
    },
    {
      q: 'Do you handle GDPR or Indian DPDP Act requirements for user accounts?',
      a: 'We build the mechanics those laws expect: consent capture at sign-up, account deletion, data export on request and an audit trail of who accessed what. The legal policy itself should come from your counsel, and we implement whatever it requires, including data residency if you need it.',
    },
  ],
};
