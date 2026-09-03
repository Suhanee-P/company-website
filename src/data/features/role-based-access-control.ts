import type { Feature } from '../types';

export const feature: Feature = {
  slug: 'role-based-access-control',
  name: 'Role-based access control and permissions',
  question: 'How much does it cost to add role-based access control to an app?',
  metaDescription:
    'Cost and effort to add roles, permissions, team accounts and approval rules to a web or mobile app, with tiers, cost drivers, hidden costs and alternatives.',
  category: 'core',
  summary:
    'Role-based access control decides who can see and change what inside your product. A fixed set of roles such as admin, manager and staff is straightforward. Custom roles, per-record permissions, organisation hierarchies and approval workflows add design work, more screens and a lot of edge-case testing, because every permission needs to be enforced on the server as well as hidden in the interface.',
  tiers: [
    {
      name: 'Basic',
      hours: [16, 32],
      includes: [
        'Three to four fixed roles such as admin, manager and staff',
        'Server-side checks on every route and API endpoint',
        'Menu items and buttons hidden by role',
        'Admin screen to assign a role to each user',
      ],
    },
    {
      name: 'Standard',
      hours: [32, 80],
      includes: [
        'Everything in Basic',
        'Custom roles built from a permission list (view, create, edit, delete, export per module)',
        'Team or organisation accounts with invitations and ownership transfer',
        'Record-level rules such as "agents see only their own leads"',
        'Change history showing who changed a permission and when',
      ],
    },
    {
      name: 'Advanced',
      hours: [80, 180],
      includes: [
        'Everything in Standard',
        'Multi-level hierarchies: regions, branches, departments with inherited access',
        'Approval workflows where certain actions need sign-off from a senior role',
        'Field-level permissions, for example hiding salary or margin columns',
        'Temporary access grants, delegation during leave and scheduled expiry',
        'Compliance-ready audit log with export for auditors',
      ],
    },
  ],
  breakdown: { design: 15, development: 60, qa: 25 },
  costDrivers: [
    'Number of modules that need their own permission set',
    'Record-level and field-level rules rather than simple page-level access',
    'Organisation hierarchies where access is inherited from a parent unit',
    'Retro-fitting permissions into an existing app whose screens assumed everyone was an admin',
    'Approval workflows that involve notifications, reminders and escalation',
    'Compliance requirements for audit trails and periodic access reviews',
  ],
  cheaperAlternative:
    'If your product already uses a hosted auth provider such as Clerk, Auth0 or Supabase, their organisation and role features cover fixed roles and team accounts with little custom code. Off-the-shelf tools like Odoo, Zoho or Airtable also come with permission systems, which is worth remembering if an internal tool is all you need.',
  hiddenCosts: [
    'Every new feature you add later needs its permissions designed and tested too',
    'Auth providers charge extra for organisation and role features on higher plans',
    'Support time spent helping customers untangle permissions they configured themselves',
  ],
  related: ['user-authentication', 'admin-dashboard', 'reporting-and-exports', 'analytics-dashboard'],
  faqs: [
    {
      q: 'Can we start with simple roles and add custom permissions later?',
      a: 'Yes, and that is the order we recommend. Start with three or four fixed roles so the product ships quickly, but have the code check named permissions rather than role names from day one. That way, moving to custom roles later is a configuration change rather than a rewrite of every screen.',
    },
    {
      q: 'Why do permissions need to be enforced on the server if the buttons are hidden?',
      a: 'Hiding a button only stops honest users. Anyone can call your API directly with a browser tool or a script, so the server must reject actions the user is not allowed to take. We treat the interface as a convenience layer and the server as the real gate, and we test both.',
    },
    {
      q: 'How do you handle a client who has hundreds of branches and staff?',
      a: 'We model the organisation as a tree of units and let access flow down the tree, so a regional manager sees every branch below them without being added to each one. Assigning users in bulk, importing the structure from a spreadsheet and reviewing access periodically are usually part of the Advanced scope.',
    },
  ],
};
