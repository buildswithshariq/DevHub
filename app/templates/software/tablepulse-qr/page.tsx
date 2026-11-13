import { Metadata } from 'next';
import { TablePulseQrTemplate } from '@/components/standalone-templates/TablePulseQrTemplate';

export const metadata: Metadata = {
  title: 'TablePulse™ Interactive Dine-In QR Ordering | 0% Commission Hospitality OS',
  description: 'Zero app download required. Diners scan, browse high-res dish photos, filter dietary options, and send orders straight to your kitchen POS printer.',
  openGraph: {
    title: 'TablePulse™ Touchless QR Restaurant Ordering',
    description: 'Instant mobile dine-in ordering, waiter call pager, and kitchen printer routing for high-turnover restaurants.'
  }
};

export default function TablePulseQrPage() {
  return <TablePulseQrTemplate />;
}
