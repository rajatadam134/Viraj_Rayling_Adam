import React from 'react';
import { TowelProduct } from '../../types/towel';
import { getWhatsAppLink } from '../../config/site';
import { MessageCircle, Bookmark, Check, ZoomIn } from 'lucide-react';

interface SpecSheetViewProps {
  products: TowelProduct[];
  onOpenModal: (product: TowelProduct) => void;
  onToggleInquiry: (product: TowelProduct) => void;
  inquiryProductIds: Set<string>;
}

export const SpecSheetView: React.FC<SpecSheetViewProps> = ({
  products,
  onOpenModal,
  onToggleInquiry,
  inquiryProductIds
}) => {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8">
      <div className="bg-surface border border-hairline overflow-x-auto shadow-crisp">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-hairline bg-canvas-subtle text-[11px] font-mono uppercase tracking-wider text-ink-muted">
              <th className="py-2.5 px-3 font-normal">Photo</th>
              <th className="py-2.5 px-3 font-normal">Variety</th>
              <th className="py-2.5 px-3 font-normal">Quality</th>
              <th className="py-2.5 px-3 font-normal">Series</th>
              <th className="py-2.5 px-3 font-normal">Size</th>
              <th className="py-2.5 px-3 font-normal">Pack</th>
              <th className="py-2.5 px-3 font-normal text-right">Inquire</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-hairline text-xs font-sans">
            {products.map((product) => {
              const isInList = inquiryProductIds.has(product.id);
              const waMessage = `Hello Viraj Rayling Adam, I am inquiring about ${product.name} (Size: ${product.size}). Quality: ${product.quality}. Please share price.`;

              return (
                <tr 
                  key={product.id}
                  className="hover:bg-canvas-subtle/60 transition-colors"
                >
                  {/* Thumbnail */}
                  <td className="py-2 px-3">
                    <button
                      onClick={() => onOpenModal(product)}
                      className="w-12 h-12 bg-[#F4EFE9] border border-hairline flex items-center justify-center p-1 group/thumb relative overflow-hidden"
                      title="Inspect"
                    >
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="max-h-full max-w-full object-contain" 
                      />
                      <div className="absolute inset-0 bg-ink/10 opacity-0 group-hover/thumb:opacity-100 flex items-center justify-center">
                        <ZoomIn className="w-3 h-3 text-ink" />
                      </div>
                    </button>
                  </td>

                  {/* Variety Name */}
                  <td className="py-2 px-3">
                    <button
                      onClick={() => onOpenModal(product)}
                      className="font-serif text-sm text-ink hover:text-brand-terracotta text-left transition-colors"
                    >
                      {product.name}
                    </button>
                  </td>

                  {/* Quality */}
                  <td className="py-2 px-3 font-mono text-ink-secondary">
                    {product.quality}
                  </td>

                  {/* Series */}
                  <td className="py-2 px-3">
                    <span className="px-1.5 py-0.5 text-[10px] font-mono border border-hairline bg-surface">
                      {product.collection}
                    </span>
                  </td>

                  {/* Size: 2754 or 3060 */}
                  <td className="py-2 px-3 font-mono font-bold text-ink">
                    {product.size}
                  </td>

                  {/* Pack */}
                  <td className="py-2 px-3 text-[11px] font-mono text-ink-muted whitespace-nowrap">
                    {product.colorCount} Colors
                  </td>

                  {/* Actions */}
                  <td className="py-2 px-3 text-right whitespace-nowrap">
                    <div className="inline-flex items-center gap-1.5">
                      <button
                        onClick={() => onToggleInquiry(product)}
                        className={`p-1 border transition-colors ${
                          isInList
                            ? 'bg-brand-terracotta border-brand-terracotta text-white'
                            : 'bg-surface border-hairline hover:bg-canvas-subtle text-ink'
                        }`}
                        title={isInList ? "In List" : "Add to List"}
                      >
                        {isInList ? <Check className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
                      </button>

                      <a
                        href={getWhatsAppLink(waMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-1 bg-emerald-700 hover:bg-emerald-800 text-white font-mono text-[11px] transition-colors inline-flex items-center gap-1"
                        title="WhatsApp"
                      >
                        <MessageCircle className="w-3 h-3" />
                        <span className="hidden sm:inline">Inquire</span>
                      </a>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
