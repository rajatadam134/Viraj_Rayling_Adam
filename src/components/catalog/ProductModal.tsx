import React, { useState, useEffect } from 'react';
import { TowelProduct } from '../../types/towel';
import { getWhatsAppLink } from '../../config/site';
import { X, ZoomIn, ZoomOut, RotateCcw, MessageCircle, Bookmark, Check, ShieldCheck } from 'lucide-react';

interface ProductModalProps {
  product: TowelProduct | null;
  onClose: () => void;
  onToggleInquiry: (product: TowelProduct) => void;
  isInInquiryList: boolean;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onToggleInquiry,
  isInInquiryList
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panPosition, setPanPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Reset zoom whenever a new product is selected
  useEffect(() => {
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  }, [product]);

  // Keyboard escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => {
    setZoomLevel((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) setPanPosition({ x: 0, y: 0 });
      return next;
    });
  };
  const handleResetZoom = () => {
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - panPosition.x, y: e.clientY - panPosition.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setPanPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  const whatsappInquiryMessage = `Hello Viraj Rayling Adam, I am reviewing ${product.name} (${product.sizeLabel}, code: ${product.itemCode}) from your catalog. Kindly provide quotation, minimum order quantity, and pack availability.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-ink/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-surface border border-hairline w-full max-w-5xl max-h-[92vh] overflow-hidden flex flex-col md:flex-row shadow-modal relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button Top Right */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-30 p-2 bg-surface/90 hover:bg-surface border border-hairline text-ink transition-colors shadow-crisp"
          title="Close (Esc)"
        >
          <X className="w-4 h-4" />
        </button>

        {/* LEFT COLUMN: Interactive High-Resolution Weave Inspector */}
        <div className="md:w-7/12 bg-[#F4EFE9] border-b md:border-b-0 md:border-r border-hairline flex flex-col justify-between relative overflow-hidden select-none">
          {/* Inspector Toolbar */}
          <div className="p-3 border-b border-hairline/80 flex items-center justify-between z-20 bg-surface/70 backdrop-blur-xs">
            <div className="flex items-center gap-2 text-[11px] font-mono text-ink-secondary">
              <span className="w-2 h-2 rounded-full bg-brand-terracotta"></span>
              <span>Weave Inspection Studio</span>
              <span className="text-ink-muted">({Math.round(zoomLevel * 100)}%)</span>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleZoomIn}
                className="p-1.5 bg-surface border border-hairline hover:bg-canvas-subtle text-ink transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 1}
                className="p-1.5 bg-surface border border-hairline hover:bg-canvas-subtle text-ink disabled:opacity-40 transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleResetZoom}
                disabled={zoomLevel === 1}
                className="p-1.5 bg-surface border border-hairline hover:bg-canvas-subtle text-ink disabled:opacity-40 transition-colors"
                title="Reset Zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Zoom/Pan Canvas */}
          <div
            className={`w-full h-[360px] md:h-[540px] flex items-center justify-center overflow-hidden relative ${
              zoomLevel > 1 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-zoom-in'
            }`}
            onClick={() => {
              if (zoomLevel === 1) handleZoomIn();
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div 
              style={{
                transform: `translate(${panPosition.x}px, ${panPosition.y}px) scale(${zoomLevel})`,
                transition: isDragging ? 'none' : 'transform 0.25s ease-out'
              }}
              className="w-full h-full flex items-center justify-center p-4 pointer-events-none"
            >
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain filter drop-shadow-md select-none"
                draggable={false}
              />
            </div>

            {zoomLevel === 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-surface/90 border border-hairline px-3 py-1 text-[11px] font-mono text-ink-muted pointer-events-none shadow-crisp">
                Click or use zoom buttons to inspect fabric weave
              </div>
            )}
          </div>

          {/* Color Assortment Ribbon */}
          <div className="p-3 border-t border-hairline bg-surface/90 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
            <span className="text-ink-secondary text-[11px]">
              Master Pack: 6 Assorted Colorways
            </span>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-blue-600 border border-white" title="Royal Blue"></span>
              <span className="w-3 h-3 rounded-full bg-pink-500 border border-white" title="Rose Magenta"></span>
              <span className="w-3 h-3 rounded-full bg-cyan-500 border border-white" title="Turquoise Cyan"></span>
              <span className="w-3 h-3 rounded-full bg-red-600 border border-white" title="Scarlet Red"></span>
              <span className="w-3 h-3 rounded-full bg-lime-600 border border-white" title="Olive Green"></span>
              <span className="w-3 h-3 rounded-full bg-amber-400 border border-white" title="Mustard Gold"></span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Full Architectural Catalog Specifications */}
        <div className="md:w-5/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-surface max-h-[460px] md:max-h-none">
          <div>
            {/* Series & Registry Header */}
            <div className="flex items-center gap-2 text-xs font-mono text-ink-muted mb-2">
              <span className="px-2 py-0.5 border border-hairline bg-canvas-subtle text-ink uppercase">
                {product.collection} Series
              </span>
              <span>{product.itemCode}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif text-ink font-normal leading-tight">
              {product.name}
            </h2>

            <p className="mt-3 text-xs sm:text-sm text-ink-secondary leading-relaxed font-sans">
              {product.description}
            </p>

            {/* Structured Technical Specifications */}
            <div className="mt-6 border-t border-b border-hairline divide-y divide-hairline text-xs font-mono">
              <div className="py-2.5 flex justify-between">
                <span className="text-ink-muted">Standard Size</span>
                <span className="text-ink font-medium">{product.sizeLabel}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-ink-muted">Metric Dimensions</span>
                <span className="text-ink font-medium">{product.dimensionsMetric}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-ink-muted">Category</span>
                <span className="text-ink">{product.sizeCategory}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-ink-muted">Border / Header</span>
                <span className="text-ink text-right max-w-[200px]">{product.borderStyle}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-ink-muted">Fiber / Construction</span>
                <span className="text-ink">100% Terry Cotton</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-ink-muted">Dye Process</span>
                <span className="text-ink">High Fastness Reactive Dyed</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-ink-muted">Pack Structure</span>
                <span className="text-ink">6 Pieces (Assorted Colors)</span>
              </div>
            </div>

            {/* Authenticity Guarantee Note */}
            <div className="mt-4 p-3 bg-canvas-subtle border border-hairline flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-brand-terracotta shrink-0 mt-0.5" />
              <div className="text-[11px] text-ink-secondary leading-tight">
                <strong>Viraj Rayling Adam Assurance:</strong> Tested for loop integrity, shrink resistance, and sustained wash resilience.
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-6 pt-4 border-t border-hairline flex flex-col gap-2.5">
            <a
              href={getWhatsAppLink(whatsappInquiryMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-ink hover:bg-brand-terracotta text-white font-mono text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-crisp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Inquire via WhatsApp (93268 29031)</span>
            </a>

            <button
              onClick={() => onToggleInquiry(product)}
              className={`w-full py-2.5 px-4 font-mono text-xs uppercase tracking-wider border transition-colors flex items-center justify-center gap-2 ${
                isInInquiryList
                  ? 'bg-brand-terracotta border-brand-terracotta text-white'
                  : 'bg-surface border-hairline hover:bg-canvas-subtle text-ink'
              }`}
            >
              {isInInquiryList ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Item in Inquiry List (Click to Remove)</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-3.5 h-3.5 text-brand-terracotta" />
                  <span>Add to Wholesale Inquiry List</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
