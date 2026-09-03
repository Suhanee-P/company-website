import type { Industry } from '../types';
import { industry as logistics } from './logistics-and-shipping';
import { industry as realEstate } from './real-estate';
import { industry as carRental } from './car-rental-and-fleet';
import { industry as healthcare } from './healthcare-and-wellness';
import { industry as pharma } from './pharmaceuticals';
import { industry as beauty } from './beauty-and-skincare';
import { industry as fashion } from './fashion-and-retail';
import { industry as education } from './education';
import { industry as fintech } from './fintech';
import { industry as manufacturing } from './manufacturing';
import { industry as hospitality } from './hospitality-and-travel';
import { industry as professional } from './professional-services';

export const industries: Industry[] = [
  logistics, realEstate, carRental, healthcare, pharma, beauty,
  fashion, education, fintech, manufacturing, hospitality, professional,
];

export const industryBySlug = (slug: string) => industries.find((i) => i.slug === slug);
