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

  // Build structured message for WhatsApp
  const generateMessage = () => {
    if (inquiryProducts.length === 0) {
      return `Hello Viraj Rayling Adam, I am viewing your towel catalog and would like to inquire about your wholesale collections.`;
    }

    const itemsList = inquiryProducts
      .map((p, idx) => `${idx + 1}. ${p.name} (${p.sizeLabel}, Code: ${p.itemCode})`)
      .join('\n');

    return `Hello Viraj Rayling Adam,\n\nI am interested in inquiring about the following towel varieties from your catalog:\n${itemsList}\n\nPlease share wholesale pricing, minimum order quantities (MOQ), and pack availability.\n\nThank you!`;
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(generateMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-ink/60 backdrop-blur-xs flex justify-end animate-fade-in">
      <div 
        className="w-full max-w-md bg-surface border-l border-hairline h-full flex flex-col justify-between shadow-2xl animate-slide-left relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-hairline flex items-center justify-between bg-canvas-subtle">
          <div>
            <div className="flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-brand-terracotta" />
              <h3 className="font-serif text-lg text-ink font-medium">Inquiry Selection</h3>
            </div>
            <p className="text-[11px] font-mono text-ink-muted mt-0.5">
              {inquiryProducts.length} {inquiryProducts.length === 1 ? 'item' : 'items'} ready for quotation
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 border border-hairline bg-surface hover:bg-canvas-subtle text-ink transition-colors"
            title="Close Drawer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Product Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 divide-y divide-hairline">
          {inquiryProducts.length === 0 ? (
            <div className="py-16 text-center text-ink-muted">
              <Bookmark className="w-8 h-8 text-hairline-dark mx-auto mb-2 opacity-60" />
              <p className="font-serif text-base text-ink">Your inquiry list is empty</p>
              <p className="text-xs font-sans text-ink-secondary mt-1 max-w-xs mx-auto">
                Click "+ Inquire" or "Add to List" on any towel card to compile your custom wholesale inquiry.
              </p>
            </div>
          ) : (
            inquiryProducts.map((product) => (
              <div key={product.id} className="py-3 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#F4EFE9] border border-hairline p-1 flex items-center justify-center shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm text-ink group-hover:text-brand-terracotta transition-colors">
                      {product.name}
                    </h4>
                    <div className="flex items-center gap-2 text-[11px] font-mono text-ink-muted mt-0.5">
                      <span className="text-ink font-medium">{product.sizeLabel}</span>
                      <span>·</span>
                      <span>{product.itemCode}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveProduct(product.id)}
                  className="p-1.5 text-ink-muted hover:text-red-700 hover:bg-red-50 transition-colors"
                  title="Remove item"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-hairline bg-canvas-subtle flex flex-col gap-3">
          {inquiryProducts.length > 0 && (
            <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted pb-1">
              <span>Direct Quotation to {siteConfig.brandName}</span>
              <button
                onClick={onClearAll}
                className="hover:text-red-700 transition-colors underline"
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
            className="w-full py-3 px-4 bg-ink hover:bg-brand-terracotta text-white font-mono text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-crisp"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Send List on WhatsApp ({siteConfig.contact.phone})</span>
          </a>

          {/* Copy Summary Option */}
          {inquiryProducts.length > 0 && (
            <button
              onClick={handleCopyText}
              className="w-full py-2 px-3 border border-hairline bg-surface hover:bg-canvas-subtle text-ink font-mono text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Summary Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-ink-muted" />
                  <span>Copy Inquiry Text</span>
                </>
              )}
            </button>
          )}

          {/* Direct Phone Call */}
          <div className="pt-2 border-t border-hairline/60 flex items-center justify-between text-xs font-mono text-ink-muted">
            <span>Direct Mill Desk:</span>
            <a 
              href={`tel:${siteConfig.contact.phone}`}
              className="text-ink font-semibold hover:text-brand-terracotta transition-colors flex items-center gap-1"
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
