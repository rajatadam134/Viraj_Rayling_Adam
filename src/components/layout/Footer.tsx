import React from 'react';
import { siteConfig, getWhatsAppLink } from '../../config/site';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-surface border-t border-hairline py-6 sm:py-8 text-ink">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div>
          <h3 className="font-serif text-lg font-medium text-ink">
            {siteConfig.brandName}
          </h3>
          <p className="text-xs text-ink-secondary font-sans">
            {siteConfig.brandSubtitle}
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="hover:text-brand-terracotta flex items-center gap-1"
          >
            <Phone className="w-3.5 h-3.5 text-brand-terracotta" />
            <span>{siteConfig.contact.phoneDisplay}</span>
          </a>

          <a
            href={getWhatsAppLink("Hello Viraj Rayling Adam, I am inquiring about towels.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-700 flex items-center gap-1 text-emerald-700 font-medium"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={scrollToTop}
            className="p-1 border border-hairline hover:bg-canvas-subtle"
            title="Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
