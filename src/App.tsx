import React, { useState, useMemo, useEffect } from 'react';
import { towelCatalog } from './data/catalog';
import { TowelProduct, CollectionType, TowelSize, ViewMode } from './types/towel';
import { Header } from './components/layout/Header';
import { FilterBar } from './components/catalog/FilterBar';
import { ProductGrid } from './components/catalog/ProductGrid';
import { SpecSheetView } from './components/catalog/SpecSheetView';
import { ProductModal } from './components/catalog/ProductModal';
import { InquiryDrawer } from './components/inquiry/InquiryDrawer';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  // State
  const [activeCollection, setActiveCollection] = useState<'all' | CollectionType>('all');
  const [activeSize, setActiveSize] = useState<'all' | TowelSize>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<ViewMode>('lookbook');

  const [selectedProduct, setSelectedProduct] = useState<TowelProduct | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState<boolean>(false);
  const [inquiryIds, setInquiryIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('vra_inquiry_list');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Sync inquiry list to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('vra_inquiry_list', JSON.stringify(inquiryIds));
    } catch {
      // Ignore
    }
  }, [inquiryIds]);

  const inquiryIdSet = useMemo(() => new Set(inquiryIds), [inquiryIds]);

  const inquiryProducts = useMemo(() => {
    return towelCatalog.filter((item) => inquiryIdSet.has(item.id));
  }, [inquiryIdSet]);

  const handleToggleInquiry = (product: TowelProduct) => {
    setInquiryIds((prev) => {
      if (prev.includes(product.id)) {
        return prev.filter((id) => id !== product.id);
      } else {
        return [...prev, product.id];
      }
    });
  };

  const handleRemoveInquiry = (productId: string) => {
    setInquiryIds((prev) => prev.filter((id) => id !== productId));
  };

  const handleClearInquiry = () => {
    setInquiryIds([]);
  };

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return towelCatalog.filter((product) => {
      // Collection filter
      if (activeCollection !== 'all' && product.collection !== activeCollection) {
        return false;
      }

      // Size filter (2754 or 3060)
      if (activeSize !== 'all' && product.size !== activeSize) {
        return false;
      }

      // Search keyword filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesQuality = product.quality.toLowerCase().includes(query);
        const matchesSize = product.size.toLowerCase().includes(query);

        if (!matchesName && !matchesQuality && !matchesSize) {
          return false;
        }
      }

      return true;
    });
  }, [activeCollection, activeSize, searchQuery]);

  const handleResetFilters = () => {
    setActiveCollection('all');
    setActiveSize('all');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-ink">
      {/* Slim Header */}
      <Header
        inquiryCount={inquiryIds.length}
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />

      {/* Main Content Area - Direct to Catalog */}
      <main className="flex-1">
        {/* Compact Sticky Filter Bar */}
        <FilterBar
          activeCollection={activeCollection}
          onSelectCollection={setActiveCollection}
          activeSize={activeSize}
          onSelectSize={setActiveSize}
          viewMode={viewMode}
          onSelectViewMode={setViewMode}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalFilteredCount={filteredProducts.length}
        />

        {/* Catalog Body */}
        {viewMode === 'lookbook' ? (
          <ProductGrid
            products={filteredProducts}
            onOpenModal={setSelectedProduct}
            onToggleInquiry={handleToggleInquiry}
            inquiryProductIds={inquiryIdSet}
            onResetFilters={handleResetFilters}
          />
        ) : (
          <SpecSheetView
            products={filteredProducts}
            onOpenModal={setSelectedProduct}
            onToggleInquiry={handleToggleInquiry}
            inquiryProductIds={inquiryIdSet}
          />
        )}
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Product Image Modal (Clean, Non-bloated) */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onToggleInquiry={handleToggleInquiry}
        isInInquiryList={selectedProduct ? inquiryIdSet.has(selectedProduct.id) : false}
      />

      {/* Inquiry Drawer */}
      <InquiryDrawer
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        inquiryProducts={inquiryProducts}
        onRemoveProduct={handleRemoveInquiry}
        onClearAll={handleClearInquiry}
      />
    </div>
  );
};
export default App;
