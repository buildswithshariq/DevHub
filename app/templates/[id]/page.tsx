import { Suspense } from 'react';
import { TEMPLATES } from '@/data/products';
import { TemplateView } from '@/components/TemplateView';
import { Metadata } from 'next';

export function generateStaticParams() {
  return TEMPLATES.map((tmpl) => ({
    id: tmpl.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const template = TEMPLATES.find((t) => t.id === id) || TEMPLATES[0];

  return {
    title: `${template.name} | Modern Two-Wheeler & Spare Parts E-Commerce`,
    description: template.tagline,
  };
}

async function TemplateContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <TemplateView templateId={id} />;
}

function TemplateFallback() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans animate-pulse">
      <div className="h-16 border-b border-zinc-800 bg-zinc-900/50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 w-full space-y-8">
        <div className="h-64 sm:h-80 bg-zinc-900/70 rounded-2xl border border-zinc-800/80" />
        <div className="h-12 bg-zinc-900/50 rounded-xl border border-zinc-800/60 w-full sm:w-1/2" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-80 bg-zinc-900/70 rounded-2xl border border-zinc-800/80" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TemplatePage({ params }: { params: Promise<{ id: string }> }) {
  return (
    <Suspense fallback={<TemplateFallback />}>
      <TemplateContent params={params} />
    </Suspense>
  );
}
