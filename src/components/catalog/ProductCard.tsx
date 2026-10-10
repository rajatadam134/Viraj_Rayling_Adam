import React from 'react';
import { TowelProduct } from '../../types/towel';
import { getWhatsAppLink } from '../../config/site';
import { MessageCircle, Bookmark, Check } from 'lucide-react';

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
  const whatsappMessage = `Hello Viraj Rayling Adam, I am inquiring about ${product.name} (Size: ${product.size}). Please share price and details.`;

  return (
    <article className="group bg-surface border border-hairline hover:border-hairline-dark transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-crisp">
      {/* Visual Image Showcase - Click to Open Image Modal */}
      <div 
        onClick={() => onOpenModal(product)}
        className="relative bg-[#F4EFE9] overflow-hidden cursor-pointer flex items-center justify-center p-2.5 sm:p-4 min-h-[220px] sm:min-h-[280px]"
      >
        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 z-10">
          <span className="px-2 py-0.5 text-[10px] font-mono tracking-wider bg-surface/95 border border-hairline text-ink uppercase">
            {product.collection}
          </span>
        </div>

        <div className="absolute top-2.5 right-2.5 z-10">
          <span className="px-2 py-0.5 text-[11px] font-mono font-bold tracking-tight bg-ink text-white">
            {product.size}
          </span>
        </div>

        {/* Product Photograph */}
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={product.image}
            alt={`${product.name} - ${product.size}`}
            loading="lazy"
            className="max-h-[220px] sm:max-h-[280px] w-auto max-w-full object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      </div>

      {/* Product Details & Actions */}
      <div className="p-3 sm:p-4 bg-surface border-t border-hairline flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-1 mb-1">
            <h3 
              onClick={() => onOpenModal(product)}
              className="text-base sm:text-lg font-serif text-ink font-normal hover:text-brand-terracotta cursor-pointer transition-colors leading-snug truncate"
            >
              {product.name}
            </h3>
            <span className="text-[11px] font-mono font-medium text-brand-terracotta shrink-0">
              {product.size}
            </span>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted mb-3">
            <span>Quality: {product.quality}</span>
            <span>6 Colors Pack</span>
          </div>
        </div>

        {/* Action Row */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-hairline/70">
          <button
            onClick={() => onToggleInquiry(product)}
            className={`py-1.5 px-2 text-[11px] font-mono uppercase tracking-wider border transition-colors flex items-center justify-center gap-1 ${
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
                <span>+ List</span>
              </>
            )}
          </button>

          <a
            href={getWhatsAppLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="py-1.5 px-2 text-[11px] font-mono uppercase tracking-wider bg-emerald-700 hover:bg-emerald-800 text-white transition-colors flex items-center justify-center gap-1 shadow-crisp"
          >
            <MessageCircle className="w-3 h-3" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  );
};
