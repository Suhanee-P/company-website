import type { Feature } from '../types';

export const feature: Feature = {
  slug: 'analytics-dashboard',
  name: 'Analytics dashboard and KPIs',
  question: 'How much does it cost to build an analytics dashboard?',
  metaDescription:
    'Cost and effort to build a KPI and analytics dashboard for a business or SaaS app: charts, filters, drill-downs, data pipelines and embedded BI, with tiers.',
  category: 'data',
  summary:
    'An analytics dashboard shows the numbers a business runs on: sales, bookings, on-time rates, usage, margin. A handful of charts over your existing database is a small build. Many metrics, date comparisons, filters, drill-downs, per-customer dashboards, scheduled refreshes, data from several sources and fast queries over large tables require a data pipeline, careful modelling and design that makes numbers trustworthy.',
  tiers: [
    {
      name: 'Basic',
      hours: [20, 45],
      includes: [
        'Four to eight KPIs with trend charts over a selectable date range',
        'Queries directly on your production database, cached for speed',
        'Simple filters such as branch, product line or status',
        'Responsive layout that works on a phone',
      ],
    },
    {
      name: 'Standard',
      hours: [45, 110],
      includes: [
        'Everything in Basic',
        'Comparisons to the previous period and targets with variance highlights',
        'Drill-down from a chart to the underlying records',
        'Multiple dashboards for different roles, with saved filters',
        'Nightly aggregation tables so dashboards stay fast as data grows',
        'Export of any chart\'s data to CSV or Excel',
      ],
    },
    {
      name: 'Advanced',
      hours: [110, 240],
      includes: [
        'Everything in Standard',
        'Data pipeline combining your app, accounting, ads, CRM and other sources',
        'Customer-facing dashboards embedded in your product with per-tenant isolation',
        'Alerts when a metric crosses a threshold, delivered by email or WhatsApp',
        'Forecasts and anomaly detection on key metrics',
        'Embedded BI tool such as Metabase or Superset with single sign-on',
      ],
    },
  ],
  breakdown: { design: 25, development: 55, qa: 20 },
  costDrivers: [
    'Number of metrics and the effort to define each one so everyone agrees on the number',
    'Data sources beyond your own database, each needing a connector and cleaning',
    'Volume: dashboards over millions of rows need aggregation or a warehouse',
    'Customer-facing dashboards, which need tenant isolation and polished design',
    'Interactivity such as drill-downs and cross-filtering',
    'Freshness requirements, from nightly refresh to real time',
  ],
  cheaperAlternative:
    'Metabase, Apache Superset, Looker Studio and Power BI connect directly to your database and give staff dashboards in days. Metabase and Superset are open source and can be embedded into your product later. Custom dashboards are worth building when they are part of the product your customers pay for or when the interaction is very specific.',
  hiddenCosts: [
    'BI tool licences per user or per embedded viewer',
    'Warehouse and compute costs as data grows',
    'Ongoing metric definition changes as the business evolves',
    'Data quality work when source systems produce inconsistent records',
  ],
  related: ['reporting-and-exports', 'admin-dashboard', 'third-party-api-integration', 'crm-integration', 'ai-workflow-automation'],
  faqs: [
    {
      q: 'Should we use Metabase or Power BI instead of a custom dashboard?',
      a: 'For internal use, usually yes. Connect Metabase or Power BI to a read replica of your database and you get charts, filters and scheduled emails without custom code. Build custom when dashboards face customers, need to match your product design, or require interactions those tools do not support.',
    },
    {
      q: 'How do you make sure the numbers on the dashboard are correct?',
      a: 'Every metric gets a written definition agreed with you, a test that checks it against a known result, and a reconciliation against your accounting or source system for a sample period. Dashboards fail when two teams see different numbers for the same thing, so definitions come before charts.',
    },
    {
      q: 'Will the dashboard slow down as our data grows?',
      a: 'Not if it is designed for growth. We move heavy queries to nightly or hourly aggregation tables, add indexes for the common filters, and cache results. For very large or multi-source data we recommend a small warehouse such as ClickHouse or BigQuery so the production database is never under reporting load.',
    },
  ],
};
