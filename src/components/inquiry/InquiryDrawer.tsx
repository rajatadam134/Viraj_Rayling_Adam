import React, { useState } from 'react';
import { TowelProduct } from '../../types/towel';
import { siteConfig, getWhatsAppLink } from '../../config/site';
import { X, MessageCircle, Trash2, Copy, Check, Phone, Bookmark } from 'lucide-react';

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  inquiryProducts: TowelProduct[];
  onRemoveProduct: (productId: string) => void;
  onClearAll: () => void;
}

export const InquiryDrawer: React.FC<InquiryDrawerProps> = ({
  isOpen,
  onClose,
  inquiryProducts,
  onRemoveProduct,
  onClearAll
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Build message for WhatsApp
  const generateMessage = () => {
    if (inquiryProducts.length === 0) {
      return `Hello Viraj Rayling Adam, I am viewing your towel catalog and would like to inquire about prices.`;
    }

    const itemsList = inquiryProducts
      .map((p, idx) => `${idx + 1}. ${p.name}`)
      .join('\n');

    return `Hello Viraj Rayling Adam,\n\nI am interested in inquiring about the following towels from your catalog:\n${itemsList}\n\nPlease share price and availability.\n\nThank you!`;
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(generateMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-hidden bg-ink/60 backdrop-blur-xs flex justify-end animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-sm sm:max-w-md bg-surface border-l border-hairline h-full flex flex-col justify-between shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-3 sm:p-4 border-b border-hairline flex items-center justify-between bg-canvas-subtle">
          <div>
            <div className="flex items-center gap-1.5">
              <Bookmark className="w-4 h-4 text-brand-terracotta" />
              <h3 className="font-serif text-base sm:text-lg text-ink font-medium">Inquiry List</h3>
            </div>
            <p className="text-[11px] font-mono text-ink-muted">
              {inquiryProducts.length} {inquiryProducts.length === 1 ? 'item' : 'items'} selected
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1 border border-hairline bg-surface hover:bg-canvas-subtle text-ink"
            title="Close Drawer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 divide-y divide-hairline">
          {inquiryProducts.length === 0 ? (
            <div className="py-16 text-center text-ink-muted">
              <Bookmark className="w-6 h-6 text-hairline-dark mx-auto mb-2 opacity-60" />
              <p className="font-serif text-sm text-ink">Inquiry list is empty</p>
              <p className="text-xs text-ink-secondary mt-1 max-w-xs mx-auto">
                Tap "+ List" on any towel to add it here.
              </p>
            </div>
          ) : (
            inquiryProducts.map((product) => (
              <div key={product.id} className="py-2.5 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-10 h-10 bg-[#F4EFE9] border border-hairline p-0.5 flex items-center justify-center shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-serif text-xs sm:text-sm text-ink truncate">
                      {product.name}
                    </h4>
                    <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-ink-muted">
                      <span className="font-bold text-ink">{product.size}</span>
                      <span>·</span>
                      <span>{product.quality}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveProduct(product.id)}
                  className="p-1 text-ink-muted hover:text-red-700"
                  title="Remove"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-3 sm:p-4 border-t border-hairline bg-canvas-subtle flex flex-col gap-2">
          {inquiryProducts.length > 0 && (
            <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted pb-1">
              <span>Viraj Rayling Adam</span>
              <button
                onClick={onClearAll}
                className="hover:text-red-700 underline"
              >
                Clear all
              </button>
            </div>
          )}

          {/* WhatsApp Primary Submit */}
          <a
            href={getWhatsAppLink(generateMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3 bg-emerald-700 hover:bg-emerald-800 text-white font-mono text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-crisp"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send on WhatsApp ({siteConfig.contact.phone})</span>
          </a>

          {/* Copy Option */}
          {inquiryProducts.length > 0 && (
            <button
              onClick={handleCopyText}
              className="w-full py-1.5 px-3 border border-hairline bg-surface hover:bg-canvas-subtle text-ink font-mono text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-ink-muted" />
                  <span>Copy List</span>
                </>
              )}
            </button>
          )}

          {/* Direct Phone Call */}
          <div className="pt-2 border-t border-hairline/60 flex items-center justify-between text-[11px] font-mono text-ink-muted">
            <span>Call:</span>
            <a 
              href={`tel:${siteConfig.contact.phone}`}
              className="text-ink font-semibold flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-brand-terracotta" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
