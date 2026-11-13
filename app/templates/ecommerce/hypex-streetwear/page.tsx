import { Metadata } from 'next';
import { HypexStreetwearTemplate } from '@/components/standalone-templates/HypexStreetwearTemplate';

export const metadata: Metadata = {
  title: 'HYPEX Urban Streetwear® | Drop 004 Active | Production-Ready E-Commerce Template',
  description: 'Limited edition streetwear drops, countdown timers, high-density print lookbook, and direct WhatsApp checkout engine.',
  openGraph: {
    title: 'HYPEX Urban Streetwear® | High-Converting E-Commerce Store',
    description: 'Autonomous drop culture, 500 GSM French terry apparel, and WhatsApp instant orders.'
  }
};

export default function HypexStreetwearPage() {
  return <HypexStreetwearTemplate />;
}
