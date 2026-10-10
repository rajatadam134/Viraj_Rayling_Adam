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
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
      <div className="bg-surface border border-hairline overflow-x-auto shadow-crisp">
        {/* Table Header Note */}
        <div className="p-4 bg-canvas-subtle border-b border-hairline flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-ink-muted">
          <span className="uppercase tracking-wider">
            Wholesale Catalog Specification Sheet · Viraj Rayling Adam
          </span>
          <span>Showing {products.length} registered varieties</span>
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-hairline bg-surface text-[11px] font-mono uppercase tracking-wider text-ink-muted">
              <th className="py-3 px-4 font-normal">Plate / Image</th>
              <th className="py-3 px-4 font-normal">Item Code</th>
              <th className="py-3 px-4 font-normal">Variety &amp; Design</th>
              <th className="py-3 px-4 font-normal">Series</th>
              <th className="py-3 px-4 font-normal">Standard Size</th>
              <th className="py-3 px-4 font-normal">Metric Size</th>
              <th className="py-3 px-4 font-normal">Border Specification</th>
              <th className="py-3 px-4 font-normal">Assortment</th>
              <th className="py-3 px-4 font-normal text-right">Inquiry</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-hairline text-xs font-sans">
            {products.map((product) => {
              const isInList = inquiryProductIds.has(product.id);
              const waMessage = `Hello Viraj Rayling Adam, I am inquiring regarding wholesale availability for ${product.name} (${product.sizeLabel}), code: ${product.itemCode}.`;

              return (
                <tr 
                  key={product.id}
                  className="hover:bg-canvas-subtle/60 transition-colors group"
                >
                  {/* Thumbnail Plate */}
                  <td className="py-3 px-4">
                    <button
                      onClick={() => onOpenModal(product)}
                      className="w-14 h-14 bg-[#F4EFE9] border border-hairline flex items-center justify-center p-1 group/thumb relative overflow-hidden"
                      title="Click to inspect weave"
                    >
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="max-h-full max-w-full object-contain group-hover/thumb:scale-105 transition-transform" 
                      />
                      <div className="absolute inset-0 bg-ink/10 opacity-0 group-hover/thumb:opacity-100 flex items-center justify-center transition-opacity">
                        <ZoomIn className="w-3 h-3 text-ink" />
                      </div>
                    </button>
                  </td>

                  {/* Item Code */}
                  <td className="py-3 px-4 font-mono text-ink-muted text-[11px] whitespace-nowrap">
                    {product.itemCode}
                  </td>

                  {/* Variety Name */}
                  <td className="py-3 px-4">
                    <button
                      onClick={() => onOpenModal(product)}
                      className="font-serif text-sm text-ink group-hover:text-brand-terracotta text-left transition-colors"
                    >
                      {product.name}
                    </button>
                    <span className="block text-[11px] text-ink-muted font-mono">{product.design}</span>
                  </td>

                  {/* Series */}
                  <td className="py-3 px-4">
                    <span className="px-2 py-0.5 text-[10px] font-mono border border-hairline bg-surface">
                      {product.collection}
                    </span>
                  </td>

                  {/* Standard Size */}
                  <td className="py-3 px-4 font-mono font-medium text-ink whitespace-nowrap">
                    {product.sizeLabel}
                  </td>

                  {/* Metric Dimensions */}
                  <td className="py-3 px-4 font-mono text-ink-muted whitespace-nowrap">
                    {product.dimensionsMetric}
                  </td>

                  {/* Border Style */}
                  <td className="py-3 px-4 text-ink-secondary text-xs">
                    {product.borderStyle}
                  </td>

                  {/* Assortment */}
                  <td className="py-3 px-4 whitespace-nowrap">
                    <span className="text-[11px] font-mono text-ink-secondary">
                      6-Color Pack
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="py-3 px-4 text-right whitespace-nowrap">
                    <div className="inline-flex items-center gap-1.5">
                      <button
                        onClick={() => onToggleInquiry(product)}
                        title={isInList ? "In Inquiry List" : "Add to Inquiry List"}
                        className={`p-1.5 border transition-colors ${
                          isInList
                            ? 'bg-brand-terracotta border-brand-terracotta text-white'
                            : 'bg-surface border-hairline hover:bg-canvas-subtle text-ink'
                        }`}
                      >
                        {isInList ? <Check className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
                      </button>

                      <a
                        href={getWhatsAppLink(waMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="WhatsApp Inquiry"
                        className="px-2.5 py-1.5 bg-ink hover:bg-brand-terracotta text-white font-mono text-[11px] transition-colors inline-flex items-center gap-1"
                      >
                        <MessageCircle className="w-3 h-3 text-emerald-400" />
                        <span>Inquire</span>
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
