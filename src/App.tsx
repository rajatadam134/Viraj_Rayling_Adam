import React, { useState, useMemo, useEffect } from 'react';
import { towelCatalog } from './data/catalog';
import { TowelProduct, CollectionType, TowelSize, ViewMode } from './types/towel';
import { Header } from './components/layout/Header';
import { HeroBanner } from './components/layout/HeroBanner';
import { FilterBar } from './components/catalog/FilterBar';
import { ProductGrid } from './components/catalog/ProductGrid';
import { SpecSheetView } from './components/catalog/SpecSheetView';
import { ProductModal } from './components/catalog/ProductModal';
import { InquiryDrawer } from './components/inquiry/InquiryDrawer';
import { CraftStory } from './components/story/CraftStory';
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

  // Static Counts
  const totalCatalogCount = towelCatalog.length;
  const gemCount = useMemo(() => towelCatalog.filter((p) => p.collection === 'GEM').length, []);
  const geminiCount = useMemo(() => towelCatalog.filter((p) => p.collection === 'Gemini').length, []);
  const size27x54Count = useMemo(() => towelCatalog.filter((p) => p.size === '27 x 54').length, []);
  const size30x60Count = useMemo(() => towelCatalog.filter((p) => p.size === '30 x 60').length, []);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return towelCatalog.filter((product) => {
      // Collection filter
      if (activeCollection !== 'all' && product.collection !== activeCollection) {
        return false;
      }

      // Size filter
      if (activeSize !== 'all' && product.size !== activeSize) {
        return false;
      }

      // Search keyword filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDesign = product.design.toLowerCase().includes(query);
        const matchesCode = product.itemCode.toLowerCase().includes(query);
        const matchesBorder = product.borderStyle.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesSize = product.size.toLowerCase().includes(query);

        if (!matchesName && !matchesDesign && !matchesCode && !matchesBorder && !matchesDesc && !matchesSize) {
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
      {/* Masthead Header */}
      <Header
        inquiryCount={inquiryIds.length}
        onOpenInquiry={() => setIsInquiryOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Editorial Introduction */}
        <HeroBanner />

        {/* Filter & View Switcher Bar */}
        <FilterBar
          activeCollection={activeCollection}
          onSelectCollection={setActiveCollection}
          activeSize={activeSize}
          onSelectSize={setActiveSize}
          viewMode={viewMode}
          onSelectViewMode={setViewMode}
          totalFilteredCount={filteredProducts.length}
          totalCatalogCount={totalCatalogCount}
          gemCount={gemCount}
          geminiCount={geminiCount}
          size27x54Count={size27x54Count}
          size30x60Count={size30x60Count}
        />

        {/* Active Filters Bar if any filter is set */}
        {(activeCollection !== 'all' || activeSize !== 'all' || searchQuery.trim() !== '') && (
          <div className="bg-canvas-subtle border-b border-hairline py-2 px-4 sm:px-8 text-xs font-mono flex items-center justify-between">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-ink-muted">Active Filters:</span>
              {activeCollection !== 'all' && (
                <span className="bg-surface border border-hairline px-2 py-0.5 text-ink flex items-center gap-1">
                  Series: {activeCollection}
                  <button onClick={() => setActiveCollection('all')} className="text-ink-muted hover:text-ink">✕</button>
                </span>
              )}
              {activeSize !== 'all' && (
                <span className="bg-surface border border-hairline px-2 py-0.5 text-ink flex items-center gap-1">
                  Size: {activeSize}
                  <button onClick={() => setActiveSize('all')} className="text-ink-muted hover:text-ink">✕</button>
                </span>
              )}
              {searchQuery.trim() !== '' && (
                <span className="bg-surface border border-hairline px-2 py-0.5 text-ink flex items-center gap-1">
                  Query: "{searchQuery}"
                  <button onClick={() => setSearchQuery('')} className="text-ink-muted hover:text-ink">✕</button>
                </span>
              )}
            </div>
            <button
              onClick={handleResetFilters}
              className="text-brand-terracotta hover:underline font-mono text-[11px]"
            >
              Clear All
            </button>
          </div>
        )}

        {/* Catalog Body: Lookbook or Spec Sheet View */}
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

        {/* Material & Weaving Craft Section */}
        <CraftStory />
      </main>

      {/* Editorial Colophon Footer */}
      <Footer />

      {/* Product Weave Inspector Modal */}
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
