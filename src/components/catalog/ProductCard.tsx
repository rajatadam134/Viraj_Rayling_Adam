import React from 'react';
import { TowelProduct } from '../../types/towel';
import { getWhatsAppLink } from '../../config/site';
import { ZoomIn, MessageCircle, Bookmark, Check } from 'lucide-react';

interface ProductCardProps {
  product: TowelProduct;
  onOpenModal: (product: TowelProduct) => void;
  onToggleInquiry: (product: TowelProduct) => void;
  isInInquiryList: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenModal,
  onToggleInquiry,
  isInInquiryList,
}) => {
  const whatsappInquiryMessage = `Hello Viraj Rayling Adam, I am interested in inquiring about ${product.name} (${product.sizeLabel}). Item Code: ${product.itemCode}. Please share wholesale price and bulk packing details.`;

  return (
    <article className="group bg-surface border border-hairline hover:border-hairline-dark transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-crisp">
      {/* Visual Image Showcase with Warm Matte Matting */}
      <div 
        onClick={() => onOpenModal(product)}
        className="relative bg-[#F4EFE9] overflow-hidden cursor-pointer flex items-center justify-center p-3 sm:p-5 min-h-[300px] sm:min-h-[340px]"
      >
        {/* Subtle Series Watermark / Stamp */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
          <span className="px-2 py-0.5 text-[10px] font-mono tracking-wider bg-surface/90 border border-hairline text-ink uppercase backdrop-blur-xs">
            {product.collection} Series
          </span>
          {product.isFeatured && (
            <span className="px-1.5 py-0.5 text-[10px] font-mono tracking-wider bg-brand-terracotta text-white uppercase">
              Featured
            </span>
          )}
        </div>

        {/* Size Badge */}
        <div className="absolute top-3 right-3 z-10">
          <span className="px-2 py-0.5 text-[10px] font-mono font-medium tracking-tight bg-ink text-white">
            {product.sizeLabel}
          </span>
        </div>

        {/* Product Photograph with Aspect-Ratio Respecting Fit */}
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={product.image}
            alt={`${product.name} - ${product.sizeLabel} Towel Pack`}
            loading="lazy"
            className="max-h-[300px] sm:max-h-[340px] w-auto max-w-full object-contain filter drop-shadow-sm transition-transform duration-500 ease-out group-hover:scale-[1.025]"
          />
        </div>

        {/* Hover Overlay Hint for High-Res Inspection */}
        <div className="absolute inset-0 bg-ink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <div className="bg-surface/95 border border-hairline px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-ink shadow-elevated flex items-center gap-1.5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
            <ZoomIn className="w-3.5 h-3.5 text-brand-terracotta" />
            <span>Inspect Weave</span>
          </div>
        </div>
      </div>

      {/* Catalog Metadata Section */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-surface border-t border-hairline">
        <div>
          {/* Item Code & Dimension Header */}
          <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted mb-1.5">
            <span>{product.itemCode}</span>
            <span>{product.dimensionsMetric}</span>
          </div>

          {/* Design Title */}
          <h3 
            onClick={() => onOpenModal(product)}
            className="text-lg sm:text-xl font-serif text-ink font-normal hover:text-brand-terracotta cursor-pointer transition-colors"
          >
            {product.name}
          </h3>

          <p className="text-xs text-ink-secondary mt-1 line-clamp-2 leading-relaxed">
            {product.borderStyle} · 6-color assortment master pack.
          </p>
        </div>

        {/* Palette Indicator & Action Bar */}
        <div className="mt-4 pt-3 border-t border-hairline/80">
          <div className="flex items-center justify-between mb-3 text-[11px] font-mono text-ink-muted">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              <span>6 Assorted Colors Pack</span>
            </span>
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 border border-white" title="Royal Blue"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-pink-500 border border-white" title="Rose Magenta"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 border border-white" title="Turquoise Cyan"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 border border-white" title="Scarlet Red"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-lime-600 border border-white" title="Olive Green"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-white" title="Mustard Gold"></span>
            </div>
          </div>

          {/* Action Row */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onToggleInquiry(product)}
              className={`py-1.5 px-2 text-[11px] font-mono uppercase tracking-wider border transition-colors flex items-center justify-center gap-1.5 ${
                isInInquiryList
                  ? 'bg-brand-terracotta border-brand-terracotta text-white'
                  : 'bg-surface border-hairline hover:bg-canvas-subtle text-ink'
              }`}
            >
              {isInInquiryList ? (
                <>
                  <Check className="w-3 h-3" />
                  <span>In List</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-3 h-3 text-ink-muted" />
                  <span>+ Inquire</span>
                </>
              )}
            </button>

            <a
              href={getWhatsAppLink(whatsappInquiryMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="py-1.5 px-2 text-[11px] font-mono uppercase tracking-wider bg-ink hover:bg-brand-terracotta text-white transition-colors flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
