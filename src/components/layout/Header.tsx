import React from 'react';
import { siteConfig, getWhatsAppLink } from '../../config/site';
import { Phone, MessageCircle, Bookmark } from 'lucide-react';

interface HeaderProps {
  inquiryCount: number;
  onOpenInquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  inquiryCount,
  onOpenInquiry,
}) => {
  return (
    <header className="w-full bg-canvas/95 backdrop-blur-md border-b border-hairline sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-3">
        
        {/* Brand & Subtitle */}
        <div className="min-w-0">
          <a href="#" className="block">
            <h1 className="text-lg sm:text-2xl font-serif font-medium text-ink tracking-tight truncate leading-tight">
              {siteConfig.brandName}
            </h1>
          </a>
          <p className="text-[11px] sm:text-xs text-ink-secondary tracking-normal font-sans">
            Filament and cotton terry towels
          </p>
        </div>

        {/* Compact Right Actions */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Call Link */}
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="p-1.5 sm:px-2.5 sm:py-1.5 text-xs font-mono border border-hairline bg-surface hover:bg-canvas-subtle text-ink transition-colors flex items-center gap-1.5"
            title="Call 9326829031"
          >
            <Phone className="w-3.5 h-3.5 text-brand-terracotta" />
            <span className="hidden md:inline">{siteConfig.contact.phoneDisplay}</span>
          </a>

          {/* WhatsApp Direct */}
          <a
            href={getWhatsAppLink("Hello Viraj Rayling Adam, I am viewing your towel catalog and have an inquiry.")}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:px-3 sm:py-1.5 text-xs font-mono bg-emerald-700 hover:bg-emerald-800 text-white transition-colors flex items-center gap-1.5 shadow-crisp"
            title="WhatsApp 9326829031"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* Inquiry List Drawer Trigger */}
          <button
            onClick={onOpenInquiry}
            className="p-1.5 sm:px-2.5 sm:py-1.5 text-xs font-mono border border-hairline bg-surface hover:bg-canvas-subtle text-ink transition-colors flex items-center gap-1.5 relative"
            title="Inquiry List"
          >
            <Bookmark className="w-3.5 h-3.5 text-brand-terracotta" />
            <span className="hidden sm:inline">List</span>
            <span className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${
              inquiryCount > 0 
                ? 'bg-brand-terracotta text-white' 
                : 'bg-hairline text-ink-secondary'
            }`}>
              {inquiryCount}
            </span>
          </button>
        </div>

      </div>
    </header>
  );
};
