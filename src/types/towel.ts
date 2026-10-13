export type CollectionType = 'GEM' | 'Gemini' | 'Sharmili';

export type TowelSize = '2754' | '3060';

export interface TowelProduct {
  id: string;
  collection: CollectionType;
  name: string;
  quality: string;
  size: TowelSize;
  image: string;
  colorCount: number;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
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
