import React from 'react';

export const HeroBanner: React.FC = () => {
  return (
    <section className="w-full border-b border-hairline bg-canvas relative overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-2 md:grid-cols-4 divide-x divide-hairline">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16 relative z-10">
        <div className="max-w-3xl">
          {/* Authentic Mill Registry Stamp */}
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-surface border border-hairline text-[11px] font-mono tracking-widest uppercase text-ink-secondary mb-4 shadow-crisp">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-terracotta"></span>
            <span>Mill Catalog Edition · 2026</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-ink leading-[1.15] tracking-tight">
            The Complete Towel Assortment Catalog.
          </h2>

          <p className="mt-4 text-sm sm:text-base font-sans text-ink-secondary leading-relaxed max-w-2xl">
            A comprehensive reference for wholesale stockists, institutions, and hospitality partners. Explore all active varieties across our signature <strong className="text-ink font-semibold">GEM Series</strong> and <strong className="text-ink font-semibold">Gemini Series</strong>, featuring intricate jacquard dobby borders and vibrant 6-color assortment master packs.
          </p>

          {/* Quick Real Fact Blocks (Authentic Specs, Not AI Fluff) */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-hairline">
            <div className="bg-surface/80 p-3 border border-hairline">
              <span className="block text-[10px] font-mono uppercase tracking-wider text-ink-muted">Available Series</span>
              <span className="block text-lg font-serif font-medium text-ink mt-0.5">GEM &amp; Gemini</span>
              <span className="text-[11px] text-ink-secondary font-mono">22 Product Varieties</span>
            </div>

            <div className="bg-surface/80 p-3 border border-hairline">
              <span className="block text-[10px] font-mono uppercase tracking-wider text-ink-muted">Standard Sizes</span>
              <span className="block text-lg font-serif font-medium text-ink mt-0.5">27×54 &amp; 30×60</span>
              <span className="text-[11px] text-ink-secondary font-mono">Bath &amp; Pool Formats</span>
            </div>

            <div className="bg-surface/80 p-3 border border-hairline">
              <span className="block text-[10px] font-mono uppercase tracking-wider text-ink-muted">Pack Assortment</span>
              <span className="block text-lg font-serif font-medium text-ink mt-0.5">6 Colors</span>
              <span className="text-[11px] text-ink-secondary font-mono">Per Master Bundle</span>
            </div>

            <div className="bg-surface/80 p-3 border border-hairline">
              <span className="block text-[10px] font-mono uppercase tracking-wider text-ink-muted">Weave Type</span>
              <span className="block text-lg font-serif font-medium text-ink mt-0.5">Terry Cotton</span>
              <span className="text-[11px] text-ink-secondary font-mono">Jacquard Dobby Hem</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
