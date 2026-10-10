import React from 'react';
import { siteConfig, getWhatsAppLink } from '../../config/site';
import { Phone, MessageCircle, Printer, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-surface border-t border-hairline py-12 sm:py-16 text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-hairline">
          
          {/* Brand Colophon Column */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-normal tracking-tight text-ink">
              {siteConfig.brandName}
            </h3>
            <p className="mt-2 text-xs text-ink-secondary leading-relaxed max-w-sm font-sans">
              Manufacturers and wholesale distributors of fine cotton terry and jacquard towels. Home of the <strong className="text-ink">GEM Series</strong> and <strong className="text-ink">Gemini Series</strong>.
            </p>
            <div className="mt-4 flex items-center gap-2 text-[11px] font-mono text-ink-muted">
              <span>{siteConfig.catalogEdition}</span>
              <span>·</span>
              <span>{siteConfig.contact.location}</span>
            </div>
          </div>

          {/* Direct Wholesale Contact */}
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-ink-muted block mb-3">
              Direct Inquiries
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a 
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-brand-terracotta transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-terracotta" />
                  <span>Call: {siteConfig.contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a 
                  href={getWhatsAppLink("Hello Viraj Rayling Adam, I am inquiring about wholesale towel supply.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-terracotta transition-colors flex items-center gap-1.5 text-ink font-medium"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp: {siteConfig.contact.phone}</span>
                </a>
              </li>
              <li className="pt-2 text-ink-secondary text-[11px] leading-tight">
                Bulk inquiries, hotel orders, and retail stockist requests welcomed.
              </li>
            </ul>
          </div>

          {/* Quick Actions & Utilities */}
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-ink-muted block mb-3">
              Catalog Utilities
            </span>
            <div className="space-y-2 text-xs font-mono">
              <button
                onClick={() => window.print()}
                className="w-full text-left py-1.5 px-2.5 bg-canvas border border-hairline hover:bg-canvas-subtle transition-colors flex items-center justify-between"
              >
                <span>Print Spec Sheet</span>
                <Printer className="w-3.5 h-3.5 text-ink-muted" />
              </button>
              <button
                onClick={scrollToTop}
                className="w-full text-left py-1.5 px-2.5 bg-canvas border border-hairline hover:bg-canvas-subtle transition-colors flex items-center justify-between"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 text-ink-muted" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-ink-muted">
          <div>
            © {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>100% Cotton Terry</span>
            <span>·</span>
            <span>Dobby Jacquard Hem</span>
            <span>·</span>
            <span>6-Color Assortment Packs</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
