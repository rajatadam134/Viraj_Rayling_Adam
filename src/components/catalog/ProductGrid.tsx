import React from 'react';
import { TowelProduct } from '../../types/towel';
import { ProductCard } from './ProductCard';
import { SlidersHorizontal, RefreshCcw } from 'lucide-react';

interface ProductGridProps {
  products: TowelProduct[];
  onOpenModal: (product: TowelProduct) => void;
  onToggleInquiry: (product: TowelProduct) => void;
  inquiryProductIds: Set<string>;
  onResetFilters: () => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onOpenModal,
  onToggleInquiry,
  inquiryProductIds,
  onResetFilters
}) => {
  if (products.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-20 text-center">
        <div className="inline-block p-4 bg-surface border border-hairline mb-4">
          <SlidersHorizontal className="w-6 h-6 text-ink-muted mx-auto" />
        </div>
        <h3 className="text-2xl font-serif text-ink">No towel designs match your filter</h3>
        <p className="text-xs sm:text-sm text-ink-secondary mt-2 font-sans max-w-md mx-auto">
          Try selecting another series (GEM or Gemini), changing the size filter, or clearing your search keywords.
        </p>
        <button
          onClick={onResetFilters}
          className="mt-6 px-4 py-2 bg-ink text-white font-mono text-xs uppercase tracking-wider hover:bg-brand-terracotta transition-colors inline-flex items-center gap-2"
        >
          <RefreshCcw className="w-3.5 h-3.5" />
          <span>Reset All Filters</span>
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
      {/* Architectural Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onOpenModal={onOpenModal}
            onToggleInquiry={onToggleInquiry}
            isInInquiryList={inquiryProductIds.has(product.id)}
          />
        ))}
      </div>
    </div>
  );
};
