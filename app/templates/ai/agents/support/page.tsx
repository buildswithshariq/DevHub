import { Metadata } from 'next';
import { OmniAgentAiTemplate } from '@/components/standalone-templates/OmniAgentAiTemplate';

export const metadata: Metadata = {
  title: 'OmniAgent™ 24/7 Autonomous Customer Support AI | Shopify & WhatsApp Integration',
  description: 'AI agents that resolve 82% of customer support tickets autonomously with zero hallucinations. RAG vector search, live order tracking, and CRM sync.'
};

export default function OmniAgentAiAliasPage() {
  return <OmniAgentAiTemplate />;
}
