import { Layers, Droplets, Shield } from 'lucide-react';

export const CraftStory: React.FC = () => {
  return (
    <section className="w-full bg-canvas-subtle border-t border-b border-hairline py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <div className="text-[11px] font-mono uppercase tracking-widest text-ink-muted mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-terracotta"></span>
            <span>Weaving &amp; Material Standards</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-ink font-normal leading-snug">
            Precision dobby borders, ring-spun loops, and enduring color vibrancy.
          </h2>
        </div>

        {/* 3 Grounded Technical Pillar Cards (Editorial Architectural Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          <div className="p-6 bg-surface border border-hairline shadow-crisp">
            <div className="w-8 h-8 bg-canvas border border-hairline flex items-center justify-center mb-4">
              <Layers className="w-4 h-4 text-brand-terracotta" />
            </div>
            <h3 className="font-serif text-lg text-ink font-medium">
              Jacquard &amp; Dobby Header Weaves
            </h3>
            <p className="mt-2 text-xs text-ink-secondary leading-relaxed font-sans">
              Unlike flat printed designs, our towels feature woven relief patterns directly integrated on specialized dobby looms. From the geometric <strong className="text-ink">Burfy</strong> and <strong className="text-ink">Diamond</strong> lattices to sculpted <strong className="text-ink">3D Reliefs</strong>, each border retains its distinct structural definition wash after wash.
            </p>
          </div>

          <div className="p-6 bg-surface border border-hairline shadow-crisp">
            <div className="w-8 h-8 bg-canvas border border-hairline flex items-center justify-center mb-4">
              <Droplets className="w-4 h-4 text-brand-terracotta" />
            </div>
            <h3 className="font-serif text-lg text-ink font-medium">
              High Fastness Reactive Dyeing
            </h3>
            <p className="mt-2 text-xs text-ink-secondary leading-relaxed font-sans">
              Every 6-color assortment pack is dyed using premium reactive chemistry. The color molecules bind chemically with the cotton cellulose fibers, guaranteeing bright, bleeding-resistant tones across Royal Blue, Rose Magenta, Turquoise, Scarlet, Olive, and Gold.
            </p>
          </div>

          <div className="p-6 bg-surface border border-hairline shadow-crisp">
            <div className="w-8 h-8 bg-canvas border border-hairline flex items-center justify-center mb-4">
              <Shield className="w-4 h-4 text-brand-terracotta" />
            </div>
            <h3 className="font-serif text-lg text-ink font-medium">
              Double-Lock Selvedge Hems
            </h3>
            <p className="mt-2 text-xs text-ink-secondary leading-relaxed font-sans">
              Designed for high-turnover hospitality, institutional laundering, and daily residential use. All lateral edges and headers are reinforced with double-stitched lock hem construction to prevent fraying and preserve shape over extended service life.
            </p>
          </div>

        </div>

        {/* Size Format Comparison Plate */}
        <div className="mt-10 p-6 sm:p-8 bg-surface border border-hairline flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-crisp">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-ink-muted block mb-1">
              Standardized Mill Sizes
            </span>
            <h4 className="font-serif text-xl text-ink font-medium">
              Two Tailored Formats Available Across All Lines
            </h4>
            <p className="text-xs text-ink-secondary mt-1 max-w-xl font-sans">
              Whether curating for home linen retail or commercial hospitality, our dimensions are standardized for optimal draping, folding, and packaging efficiency.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <div className="p-3 bg-canvas border border-hairline">
              <span className="text-ink font-bold block text-sm">27" × 54"</span>
              <span className="text-ink-muted text-[11px]">68 × 137 cm · Bath Standard</span>
            </div>
            <div className="p-3 bg-canvas border border-hairline">
              <span className="text-ink font-bold block text-sm">30" × 60"</span>
              <span className="text-ink-muted text-[11px]">76 × 152 cm · Large Bath / Sheet</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
