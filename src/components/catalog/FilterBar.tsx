import React from 'react';
import { CollectionType, TowelSize, ViewMode } from '../../types/towel';
import { LayoutGrid, Table, Search } from 'lucide-react';

interface FilterBarProps {
  activeCollection: 'all' | CollectionType;
  onSelectCollection: (col: 'all' | CollectionType) => void;
  activeSize: 'all' | TowelSize;
  onSelectSize: (size: 'all' | TowelSize) => void;
  viewMode: ViewMode;
  onSelectViewMode: (mode: ViewMode) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalFilteredCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  activeCollection,
  onSelectCollection,
  activeSize,
  onSelectSize,
  viewMode,
  onSelectViewMode,
  searchQuery,
  onSearchChange,
  totalFilteredCount,
}) => {
  return (
    <div className="w-full bg-surface border-b border-hairline sticky top-[57px] sm:top-[65px] z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex flex-col md:flex-row md:items-center justify-between gap-2.5">
        
        {/* Horizontal Scrollable Filter Pills for Mobile & Desktop */}
        <div className="flex items-center gap-3 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          
          {/* Series Pills */}
          <div className="inline-flex border border-hairline bg-canvas-subtle p-0.5 shrink-0">
            <button
              onClick={() => onSelectCollection('all')}
              className={`px-2.5 py-1 text-xs font-mono transition-colors ${
                activeCollection === 'all'
                  ? 'bg-ink text-white font-medium shadow-crisp'
                  : 'text-ink-secondary hover:text-ink'
              }`}
            >
              All Series
            </button>
            <button
              onClick={() => onSelectCollection('GEM')}
              className={`px-2.5 py-1 text-xs font-mono transition-colors ${
                activeCollection === 'GEM'
                  ? 'bg-ink text-white font-medium shadow-crisp'
                  : 'text-ink-secondary hover:text-ink'
              }`}
            >
              GEM
            </button>
            <button
              onClick={() => onSelectCollection('Gemini')}
              className={`px-2.5 py-1 text-xs font-mono transition-colors ${
                activeCollection === 'Gemini'
                  ? 'bg-ink text-white font-medium shadow-crisp'
                  : 'text-ink-secondary hover:text-ink'
              }`}
            >
              Gemini
            </button>
            <button
              onClick={() => onSelectCollection('Sharmili')}
              className={`px-2.5 py-1 text-xs font-mono transition-colors ${
                activeCollection === 'Sharmili'
                  ? 'bg-ink text-white font-medium shadow-crisp'
                  : 'text-ink-secondary hover:text-ink'
              }`}
            >
              Sharmili
            </button>
          </div>

          {/* Size Designation Pills: 2754 & 3060 */}
          <div className="inline-flex border border-hairline bg-canvas-subtle p-0.5 shrink-0">
            <button
              onClick={() => onSelectSize('all')}
              className={`px-2.5 py-1 text-xs font-mono transition-colors ${
                activeSize === 'all'
                  ? 'bg-ink text-white font-medium shadow-crisp'
                  : 'text-ink-secondary hover:text-ink'
              }`}
            >
              All Sizes
            </button>
            <button
              onClick={() => onSelectSize('2754')}
              className={`px-2.5 py-1 text-xs font-mono transition-colors ${
                activeSize === '2754'
                  ? 'bg-ink text-white font-medium shadow-crisp'
                  : 'text-ink-secondary hover:text-ink'
              }`}
            >
              2754
            </button>
            <button
              onClick={() => onSelectSize('3060')}
              className={`px-2.5 py-1 text-xs font-mono transition-colors ${
                activeSize === '3060'
                  ? 'bg-ink text-white font-medium shadow-crisp'
                  : 'text-ink-secondary hover:text-ink'
              }`}
            >
              3060
            </button>
          </div>

          {/* Compact View Switcher */}
          <div className="inline-flex border border-hairline bg-canvas-subtle p-0.5 shrink-0">
            <button
              onClick={() => onSelectViewMode('lookbook')}
              className={`p-1 text-xs transition-colors ${
                viewMode === 'lookbook'
                  ? 'bg-surface text-ink shadow-crisp'
                  : 'text-ink-secondary hover:text-ink'
              }`}
              title="Grid Catalog"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onSelectViewMode('spec-sheet')}
              className={`p-1 text-xs transition-colors ${
                viewMode === 'spec-sheet'
                  ? 'bg-surface text-ink shadow-crisp'
                  : 'text-ink-secondary hover:text-ink'
              }`}
              title="Table View"
            >
              <Table className="w-3.5 h-3.5" />
            </button>
          </div>

          <span className="text-[11px] font-mono text-ink-muted shrink-0 hidden lg:inline">
            ({totalFilteredCount} items)
          </span>
        </div>

        {/* Compact Search Box */}
        <div className="relative w-full md:w-56 shrink-0">
          <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-ink-muted pointer-events-none" />
          <input
            type="text"
            placeholder="Search (e.g. Diamond, Cabana)..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-8 pr-6 py-1 text-xs bg-canvas-subtle border border-hairline focus:outline-none focus:border-ink font-sans placeholder:text-ink-muted/70 transition-colors"
          />
          {searchQuery && (
            <button 
              onClick={() => onSearchChange('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-ink-muted hover:text-ink text-xs font-mono"
            >
              ✕
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
