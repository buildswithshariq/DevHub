import { Metadata } from 'next';
import { OriginCoffeeTemplate } from '@/components/standalone-templates/OriginCoffeeTemplate';

export const metadata: Metadata = {
  title: 'ORIGIN Single-Origin Micro Roasters | Fresh Specialty Harvests & Tasting Room',
  description: 'Single-origin specialty coffees, elevation terroir notes, live brew bar menu, and tasting table reservation system.',
  openGraph: {
    title: 'ORIGIN Micro Roasters | Artisanal Café & Bean Storefront',
    description: 'Third-wave coffee roastery with direct farm sourcing, live brew bar menu, and table reservations.'
  }
};

export default function OriginCoffeePage() {
  return <OriginCoffeeTemplate />;
}
