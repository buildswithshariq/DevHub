import { Metadata } from 'next';
import { OriginCoffeeTemplate } from '@/components/standalone-templates/OriginCoffeeTemplate';

export const metadata: Metadata = {
  title: 'ORIGIN Single-Origin Micro Roasters | Fresh Specialty Harvests & Tasting Room',
  description: 'Single-origin specialty coffees, elevation terroir notes, live brew bar menu, and tasting table reservation system.'
};

export default function OriginCoffeeAliasPage() {
  return <OriginCoffeeTemplate />;
}
