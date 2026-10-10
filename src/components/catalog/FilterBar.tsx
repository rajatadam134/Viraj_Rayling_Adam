import React from 'react';
import { CollectionType, TowelSize, ViewMode } from '../../types/towel';
import { LayoutGrid, Table } from 'lucide-react';

interface FilterBarProps {
  activeCollection: 'all' | CollectionType;
  onSelectCollection: (col: 'all' | CollectionType) => void;
  activeSize: 'all' | TowelSize;
  onSelectSize: (size: 'all' | TowelSize) => void;
  viewMode: ViewMode;
  onSelectViewMode: (mode: ViewMode) => void;
  totalFilteredCount: number;
  totalCatalogCount: number;
  gemCount: number;
  geminiCount: number;
  size27x54Count: number;
  size30x60Count: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  activeCollection,
  onSelectCollection,
  activeSize,
  onSelectSize,
  viewMode,
  onSelectViewMode,
  totalFilteredCount,
  totalCatalogCount,
  gemCount,
  geminiCount,
  size27x54Count,
  size30x60Count
}) => {
  return (
    <div className="w-full bg-surface border-b border-hairline py-4 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        
        {/* Collection & Size Tabs */}
        <div className="flex flex-wrap items-center gap-y-3 gap-x-6">
          {/* Collection Selector */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-ink-muted mr-1">
              Series:
            </span>
            <div className="inline-flex border border-hairline bg-canvas-subtle p-0.5">
              <button
                onClick={() => onSelectCollection('all')}
                className={`px-3 py-1 text-xs font-mono transition-colors ${
                  activeCollection === 'all'
                    ? 'bg-ink text-white font-medium shadow-crisp'
                    : 'text-ink-secondary hover:text-ink'
                }`}
              >
                All ({totalCatalogCount})
              </button>
              <button
                onClick={() => onSelectCollection('GEM')}
                className={`px-3 py-1 text-xs font-mono transition-colors ${
                  activeCollection === 'GEM'
                    ? 'bg-ink text-white font-medium shadow-crisp'
                    : 'text-ink-secondary hover:text-ink'
                }`}
              >
                GEM ({gemCount})
              </button>
              <button
                onClick={() => onSelectCollection('Gemini')}
                className={`px-3 py-1 text-xs font-mono transition-colors ${
                  activeCollection === 'Gemini'
                    ? 'bg-ink text-white font-medium shadow-crisp'
                    : 'text-ink-secondary hover:text-ink'
                }`}
              >
                Gemini ({geminiCount})
              </button>
            </div>
          </div>

          {/* Size Filter Pills */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-ink-muted mr-1">
              Size:
            </span>
            <div className="inline-flex border border-hairline bg-canvas-subtle p-0.5">
              <button
                onClick={() => onSelectSize('all')}
                className={`px-3 py-1 text-xs font-mono transition-colors ${
                  activeSize === 'all'
                    ? 'bg-ink text-white font-medium shadow-crisp'
                    : 'text-ink-secondary hover:text-ink'
                }`}
              >
                All Sizes
              </button>
              <button
                onClick={() => onSelectSize('27 x 54')}
                className={`px-3 py-1 text-xs font-mono transition-colors ${
                  activeSize === '27 x 54'
                    ? 'bg-ink text-white font-medium shadow-crisp'
                    : 'text-ink-secondary hover:text-ink'
                }`}
              >
                27" × 54" ({size27x54Count})
              </button>
              <button
                onClick={() => onSelectSize('30 x 60')}
                className={`px-3 py-1 text-xs font-mono transition-colors ${
                  activeSize === '30 x 60'
                    ? 'bg-ink text-white font-medium shadow-crisp'
                    : 'text-ink-secondary hover:text-ink'
                }`}
              >
                30" × 60" ({size30x60Count})
              </button>
            </div>
          </div>
        </div>

        {/* View Mode & Result Counter */}
        <div className="flex items-center justify-between lg:justify-end gap-4 border-t lg:border-t-0 pt-3 lg:pt-0 border-hairline/60">
          <div className="text-xs font-mono text-ink-muted">
            Displaying <strong className="text-ink font-semibold">{totalFilteredCount}</strong> of {totalCatalogCount} varieties
          </div>

          {/* View Mode Toggle */}
          <div className="inline-flex border border-hairline bg-canvas-subtle p-0.5">
            <button
              onClick={() => onSelectViewMode('lookbook')}
              title="Visual Lookbook View"
              className={`px-2.5 py-1 text-xs font-mono flex items-center gap-1.5 transition-colors ${
                viewMode === 'lookbook'
                  ? 'bg-surface text-ink font-semibold shadow-crisp border border-hairline'
                  : 'text-ink-secondary hover:text-ink'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Lookbook</span>
            </button>
            <button
              onClick={() => onSelectViewMode('spec-sheet')}
              title="Technical Spec Table View"
              className={`px-2.5 py-1 text-xs font-mono flex items-center gap-1.5 transition-colors ${
                viewMode === 'spec-sheet'
                  ? 'bg-surface text-ink font-semibold shadow-crisp border border-hairline'
                  : 'text-ink-secondary hover:text-ink'
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Spec Sheet</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
