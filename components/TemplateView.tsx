'use client';

import React from 'react';
import { TEMPLATES } from '@/data/products';
import { CartDrawer } from './CartDrawer';
import { WhatsAppModal } from './WhatsAppModal';
import { ProductModal } from './ProductModal';
import { MovableChatBot } from './MovableChatBot';

// 6 Dedicated, Completely Distinct Template Implementations
import { VoltModernTemplate } from './templates/VoltModernTemplate';
import { PartsProTemplate } from './templates/PartsProTemplate';
import { ApexRacingTemplate } from './templates/ApexRacingTemplate';
import { NordicMinimalTemplate } from './templates/NordicMinimalTemplate';
import { ClassicRetroTemplate } from './templates/ClassicRetroTemplate';
import { EcoCommuteTemplate } from './templates/EcoCommuteTemplate';

interface TemplateViewProps {
  templateId: string;
}

export function TemplateView({ templateId }: TemplateViewProps) {
  const template = TEMPLATES.find((t) => t.id === templateId) || TEMPLATES[0];

  // Specific bot names & primary accent color per template
  const botConfig = {
    'volt-modern': { name: 'VoltBot AI', color: '#10b981' },
    'parts-pro': { name: 'GearCraft Tech AI', color: '#f59e0b' },
    'apex-racing': { name: 'Apex Telemetry AI', color: '#ef4444' },
    'nordic-minimal': { name: 'Köpen Studio AI', color: '#27272a' },
    'classic-retro': { name: 'Veloce Clubmaster AI', color: '#1b4332' },
    'eco-commute': { name: 'CityGlide Assistant', color: '#0284c7' }
  }[template.id] || { name: 'ScootBot AI', color: template.primaryColor };

  // Render the specific, completely distinct template based on templateId
  const renderTemplateContent = () => {
    switch (template.id) {
      case 'volt-modern':
        return <VoltModernTemplate template={template} />;
      case 'parts-pro':
        return <PartsProTemplate template={template} />;
      case 'apex-racing':
        return <ApexRacingTemplate template={template} />;
      case 'nordic-minimal':
        return <NordicMinimalTemplate template={template} />;
      case 'classic-retro':
        return <ClassicRetroTemplate template={template} />;
      case 'eco-commute':
        return <EcoCommuteTemplate template={template} />;
      default:
        return <VoltModernTemplate template={template} />;
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* 
        NOTE: TemplateSwitcherBar has been completely removed from inside the template view 
        as requested ("template mai se toh yeh wala header hi hta do woh bilkul sprate hai main website se").
        Each template now functions as a 100% standalone e-commerce website!
      */}
      {renderTemplateContent()}

      {/* Global Shared Modals & Movable AI Chat Bot */}
      <CartDrawer primaryColor={botConfig.color} />
      <WhatsAppModal templateName={template.name} />
      <ProductModal />
      <MovableChatBot botName={botConfig.name} themeColor={botConfig.color} />
    </div>
  );
}
