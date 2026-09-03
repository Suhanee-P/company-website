import type { Feature, FeatureCategory } from '../types';
import { feature as f01 } from './user-authentication';
import { feature as f02 } from './role-based-access-control';
import { feature as f03 } from './admin-dashboard';
import { feature as f04 } from './search-and-filters';
import { feature as f05 } from './push-and-email-notifications';
import { feature as f06 } from './file-uploads-and-media';
import { feature as f07 } from './multi-language-support';
import { feature as f08 } from './online-payments';
import { feature as f09 } from './subscriptions-and-recurring-billing';
import { feature as f10 } from './shopping-cart-and-checkout';
import { feature as f11 } from './invoicing-and-quotes';
import { feature as f12 } from './in-app-chat';
import { feature as f13 } from './video-calling';
import { feature as f14 } from './whatsapp-business-integration';
import { feature as f15 } from './analytics-dashboard';
import { feature as f16 } from './reporting-and-exports';
import { feature as f17 } from './third-party-api-integration';
import { feature as f18 } from './data-migration';
import { feature as f19 } from './ai-chatbot';
import { feature as f20 } from './document-data-extraction';
import { feature as f21 } from './recommendation-engine';
import { feature as f22 } from './ai-workflow-automation';
import { feature as f23 } from './offline-mode';
import { feature as f24 } from './gps-tracking-and-maps';
import { feature as f25 } from './barcode-and-qr-scanning';
import { feature as f26 } from './booking-and-scheduling';
import { feature as f27 } from './inventory-management';
import { feature as f28 } from './crm-integration';
import { feature as f29 } from './pdf-generation';
import { feature as f30 } from './cms-and-content-editing';

export const features: Feature[] = [
  f01, f02, f03, f04, f05, f06, f07, f08, f09, f10, f11, f12, f13, f14, f15,
  f16, f17, f18, f19, f20, f21, f22, f23, f24, f25, f26, f27, f28, f29, f30,
];

export const featureBySlug = (slug: string) => features.find((f) => f.slug === slug);

export const categoryLabels: Record<FeatureCategory, string> = {
  core: 'Core product features',
  payments: 'Payments and billing',
  commerce: 'Commerce',
  communication: 'Communication and messaging',
  data: 'Data, analytics and reporting',
  ai: 'AI features',
  integrations: 'Integrations',
  mobile: 'Mobile-specific features',
  ops: 'Operations',
};
