import { Metadata } from 'next';
import { LetoileFineDiningTemplate } from '@/components/standalone-templates/LetoileFineDiningTemplate';

export const metadata: Metadata = {
  title: 'L’ÉTOILE Gastronomie Paris | 3 Michelin Stars | Haute Degustation & Grand Cru Cellar',
  description: 'Three Michelin starred haute French dining in Place Vendôme. Autumn 7-course degustation menu, 1,800-bottle cellar pairings, and formal table reservations.'
};

export default function LetoileFineDiningAliasPage() {
  return <LetoileFineDiningTemplate />;
}
