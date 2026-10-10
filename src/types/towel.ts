export type CollectionType = 'GEM' | 'Gemini';

export type TowelSize = '27 x 54' | '30 x 60';

export interface TowelProduct {
  id: string;
  itemCode: string;
  collection: CollectionType;
  collectionName: string;
  name: string;
  design: string;
  size: TowelSize;
  sizeLabel: string;
  sizeCategory: string;
  dimensionsMetric: string;
  image: string;
  orientation: 'portrait' | 'landscape';
  colorCount: number;
  paletteColors: string[];
  borderStyle: string;
  description: string;
  isFeatured?: boolean;
}

export type ViewMode = 'lookbook' | 'spec-sheet';

export interface CatalogFilterState {
  collection: 'all' | CollectionType;
  size: 'all' | TowelSize;
  searchQuery: string;
  viewMode: ViewMode;
}

export interface InquiryItem {
  product: TowelProduct;
  addedAt: number;
}
