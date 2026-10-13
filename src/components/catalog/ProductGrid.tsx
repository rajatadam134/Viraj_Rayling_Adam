import React from 'react';
import { TowelProduct } from '../../types/towel';
import { ProductCard } from './ProductCard';
import { RefreshCcw } from 'lucide-react';

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
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h3 className="text-xl font-serif text-ink">No towels found</h3>
        <p className="text-xs text-ink-secondary mt-1 font-sans">
          Try clearing your search or changing the filters.
        </p>
        <button
          onClick={onResetFilters}
          className="mt-4 px-3.5 py-1.5 bg-ink text-white font-mono text-xs uppercase tracking-wider hover:bg-brand-terracotta transition-colors inline-flex items-center gap-1.5"
        >
          <RefreshCcw className="w-3 h-3" />
          <span>Show All</span>
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-8">
      {/* Responsive Editorial Masonry Columns */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6">
        {products.map((product) => (
          <div key={product.id} className="break-inside-avoid mb-4 sm:mb-6">
            <ProductCard
              product={product}
              onOpenModal={onOpenModal}
              onToggleInquiry={onToggleInquiry}
              isInInquiryList={inquiryProductIds.has(product.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
