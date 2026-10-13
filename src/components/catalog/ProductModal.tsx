import React, { useState, useEffect } from 'react';
import { TowelProduct } from '../../types/towel';
import { getWhatsAppLink } from '../../config/site';
import { X, ZoomIn, ZoomOut, RotateCcw, MessageCircle, Bookmark, Check } from 'lucide-react';

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

  // Reset zoom whenever product changes
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

  const whatsappMessage = `Hello Viraj Rayling Adam, I am inquiring about ${product.name} (Size: ${product.size}). Quality: ${product.quality}. Please share price and availability.`;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-ink/75 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-surface border border-hairline w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col md:flex-row shadow-modal relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2.5 right-2.5 z-30 p-2 bg-surface/90 hover:bg-surface border border-hairline text-ink transition-colors shadow-crisp"
          title="Close (Esc)"
        >
          <X className="w-4 h-4" />
        </button>

        {/* IMAGE CONTAINER (The Main Focus) */}
        <div className="md:w-8/12 bg-[#F4EFE9] border-b md:border-b-0 md:border-r border-hairline flex flex-col justify-between relative overflow-hidden select-none min-h-[300px] sm:min-h-[420px] md:min-h-[500px]">
          {/* Zoom controls */}
          <div className="p-2 sm:p-3 border-b border-hairline/80 flex items-center justify-between z-20 bg-surface/80 backdrop-blur-xs">
            <span className="text-[11px] font-mono text-ink-secondary">
              Zoom: {Math.round(zoomLevel * 100)}%
            </span>

            <div className="flex items-center gap-1">
              <button
                onClick={handleZoomIn}
                className="p-1 sm:p-1.5 bg-surface border border-hairline hover:bg-canvas-subtle text-ink"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 1}
                className="p-1 sm:p-1.5 bg-surface border border-hairline hover:bg-canvas-subtle text-ink disabled:opacity-40"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleResetZoom}
                disabled={zoomLevel === 1}
                className="p-1 sm:p-1.5 bg-surface border border-hairline hover:bg-canvas-subtle text-ink disabled:opacity-40"
                title="Reset"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Zoomable Image */}
          <div
            className={`w-full flex-1 flex items-center justify-center overflow-hidden relative p-3 ${
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
                transition: isDragging ? 'none' : 'transform 0.2s ease-out'
              }}
              className="w-full h-full flex items-center justify-center pointer-events-none"
            >
              <img
                src={product.image}
                alt={product.name}
                className="max-h-[280px] sm:max-h-[400px] md:max-h-[480px] max-w-full object-contain filter drop-shadow-md select-none"
                draggable={false}
              />
            </div>
          </div>

          <div className="p-2 border-t border-hairline/80 bg-surface/70 text-center text-[11px] font-mono text-ink-muted">
            Pack of {product.colorCount} Assorted Colors
          </div>
        </div>

        {/* COMPACT PRODUCT INFO & DIRECT ACTIONS (No Bloated Tables) */}
        <div className="md:w-4/12 p-4 sm:p-6 flex flex-col justify-between bg-surface overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 text-[10px] font-mono uppercase border border-hairline bg-canvas-subtle text-ink">
                {product.collection} Series
              </span>
              <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-ink text-white">
                {product.size}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-serif text-ink font-normal leading-tight">
              {product.name}
            </h2>

            {/* Essential Details Only */}
            <div className="mt-4 py-3 border-t border-b border-hairline space-y-2 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-ink-muted">Quality / Design:</span>
                <span className="text-ink font-medium">{product.quality}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-muted">Size:</span>
                <span className="text-ink font-bold text-brand-terracotta">{product.size}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-muted">Pack:</span>
                <span className="text-ink">{product.colorCount} Pieces Assorted</span>
              </div>
            </div>
          </div>

          {/* Quick Direct Actions */}
          <div className="mt-6 flex flex-col gap-2">
            <a
              href={getWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 bg-emerald-700 hover:bg-emerald-800 text-white font-mono text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-crisp"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire on WhatsApp</span>
            </a>

            <button
              onClick={() => onToggleInquiry(product)}
              className={`w-full py-2 px-3 font-mono text-xs uppercase tracking-wider border transition-colors flex items-center justify-center gap-2 ${
                isInInquiryList
                  ? 'bg-brand-terracotta border-brand-terracotta text-white'
                  : 'bg-surface border-hairline hover:bg-canvas-subtle text-ink'
              }`}
            >
              {isInInquiryList ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Item in Inquiry List</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-3.5 h-3.5 text-brand-terracotta" />
                  <span>+ Add to Inquiry List</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
