import React from 'react';
import { siteConfig, getWhatsAppLink } from '../../config/site';
import { Phone, MessageCircle, Bookmark, Search } from 'lucide-react';

interface HeaderProps {
  inquiryCount: number;
  onOpenInquiry: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  inquiryCount,
  onOpenInquiry,
  searchQuery,
  onSearchChange
}) => {
  return (
    <header className="w-full bg-canvas border-b border-hairline sticky top-0 z-40 backdrop-blur-md bg-canvas/95">
      {/* Top Editorial Ribbon */}
      <div className="w-full border-b border-hairline/70 py-1.5 px-4 sm:px-8 text-[11px] font-mono uppercase tracking-wider text-ink-muted flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-3">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-terracotta"></span>
          <span>{siteConfig.brandSubtitle}</span>
          <span className="hidden md:inline text-hairline-dark">/</span>
          <span className="hidden md:inline">{siteConfig.catalogEdition}</span>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href={`tel:${siteConfig.contact.phone}`} 
            className="hover:text-ink transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3 h-3 text-brand-terracotta" />
            <span>{siteConfig.contact.phoneDisplay}</span>
          </a>
          <span className="text-hairline-dark">|</span>
          <a
            href={getWhatsAppLink("Hello Viraj Rayling Adam, I am viewing your online towel catalog and have an inquiry.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-terracotta transition-colors flex items-center gap-1 text-ink font-medium"
          >
            <MessageCircle className="w-3 h-3 text-emerald-700" />
            <span>WhatsApp Direct</span>
          </a>
        </div>
      </div>

      {/* Main Architectural Masthead */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <a href="#" className="group inline-block">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium tracking-tight text-ink group-hover:text-brand-terracotta transition-colors">
              {siteConfig.brandName}
            </h1>
          </a>
          <p className="text-xs sm:text-sm font-sans text-ink-secondary mt-1 tracking-wide">
            Fine Cotton Terry Towels · GEM &amp; Gemini Master Collections
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center flex-wrap gap-2.5 sm:gap-3">
          {/* Quick Search */}
          <div className="relative flex-1 sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted pointer-events-none" />
            <input
              type="text"
              placeholder="Search design (e.g. Cabana, Diamond)..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-surface border border-hairline rounded-none focus:outline-none focus:border-ink font-sans placeholder:text-ink-muted/70 transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-ink-muted hover:text-ink text-xs font-mono"
              >
                ✕
              </button>
            )}
          </div>

          {/* Inquiry / Sample List Drawer Trigger */}
          <button
            onClick={onOpenInquiry}
            className="px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider border border-hairline bg-surface hover:bg-surface-warm text-ink transition-colors flex items-center gap-2 relative shadow-crisp"
          >
            <Bookmark className="w-3.5 h-3.5 text-brand-terracotta" />
            <span className="hidden sm:inline">Inquiry List</span>
            <span className="sm:hidden">List</span>
            <span className={`px-1.5 py-0.2 rounded text-[10px] font-semibold ${
              inquiryCount > 0 
                ? 'bg-brand-terracotta text-white' 
                : 'bg-hairline text-ink-secondary'
            }`}>
              {inquiryCount}
            </span>
          </button>

          {/* Direct WhatsApp Call-to-action */}
          <a
            href={getWhatsAppLink("Hello, I would like to inquire regarding bulk orders and wholesale pricing for your towels.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider bg-ink text-white hover:bg-brand-terracotta transition-colors flex items-center gap-1.5 shadow-crisp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Order Inquiry</span>
            <span className="sm:hidden">Inquire</span>
          </a>
        </div>
      </div>
    </header>
  );
};
