# Viraj Rayling Adam — Towel Catalog

A bespoke, high-performance digital catalog for **Viraj Rayling Adam** — *Filament and cotton terry towels*.

Featuring the signature **GEM Series** and **Gemini Series**, standard trade sizes (**2754** & **3060**), 6-color assortment master bundles, and direct WhatsApp wholesale inquiry integration.

---

## 🏛️ Design Philosophy: Zero AI-Giveaways

Built strictly to avoid generic AI-generated templates and design tropes:
- **No Synthetic Gradients**: Warm tactile linen and raw ecru palette (`#FAF8F5`, `#F3EFE9`) with crisp architectural hairline rules (`#DDD6C9`), giving a genuine physical mill swatch book feel.
- **Natural Aspect-Ratio Preservation**: Symmetrical cookie-cutter card grids are replaced with an authentic plate system that respects the orientation of vertical 6-towel stacks and flat-lay fold packs.
- **Dignified Typography Hierarchy**: Headings set in classical *Playfair Display* serif paired with clean *Plus Jakarta Sans* body text and tabular *JetBrains Mono* for technical codes and dimensions.
- **Authentic Mill Data**: Displays real pack assortments (6 vibrant colors: Royal Blue, Rose Magenta, Turquoise Cyan, Scarlet Red, Olive Green, Mustard Gold) and standard mill dimensions.

---

## ✨ Features

- **Dual Viewing Modes**:
  - **Lookbook Mode**: Visual editorial gallery displaying towel packs with high-res photography, colorway indicators, and quick inquiry triggers.
  - **Spec Sheet Mode**: Tabular B2B wholesale order sheet detailing item codes, metric dimensions, and border specifications.
- **Interactive Weave Inspector**:
  - Full-screen modal with interactive **zoom in (up to 300%), zoom out, drag-to-pan, and reset**.
  - Allows wholesale stockists and hotel buyers to inspect terry loop density, dobby relief borders, and hem stitches up close.
- **Multi-Item Wholesale Inquiry Drawer**:
  - Buyers can bookmark multiple towels across series and sizes.
  - Generates a formatted inquiry message sent directly to **WhatsApp (+91 93268 29031)** with all selected item codes and sizes pre-filled.
  - Also includes a "Copy Summary" button for easy email drafts.
- **Dynamic Filtering & Live Search**:
  - Filter by Collection: All, GEM Series (8), Gemini Series (14).
  - Filter by Size: All, 27" × 54" (Bath), 30" × 60" (Large Bath / Pool Sheet).
  - Instant live search by keyword (e.g., *Cabana*, *Diamond*, *Burfy*, *Flower*).

---

## 📦 Current Catalog Inventory (22 Varieties)

### 1. GEM Series (8 Varieties)
* **27" × 54" (Standard Bath Towel · 68 × 137 cm)**:
  - `GEM Diamond` (`VRA-GEM-2754-DIA`) — Geometric diamond jacquard dobby border
  - `GEM Polo` (`VRA-GEM-2754-POL`) — Polo sport athletic jacquard stripe
  - `GEM Flower I` (`VRA-GEM-2754-FL1`) — Floral petal jacquard border
  - `GEM Flower II` (`VRA-GEM-2754-FL2`) — Botanical woven jacquard band
  - `GEM Flower III` (`VRA-GEM-2754-FL3`) — Ornate floral relief header
* **30" × 60" (Large Bath / Pool Towel · 76 × 152 cm)**:
  - `GEM Burfy` (`VRA-GEM-3060-BUR`) — Traditional rhombus burfy dobby border
  - `GEM Flower I (Large)` (`VRA-GEM-3060-FL1`) — Floral dobby jacquard border
  - `GEM Flower II (Large)` (`VRA-GEM-3060-FL2`) — Double floral dobby weave

### 2. Gemini Series (14 Varieties)
* **27" × 54" (Standard Bath Towel · 68 × 137 cm)**:
  - `Gemini Cabana` (`VRA-GMI-2754-CAB`) — Yarn-dyed Mediterranean cabana stripe
  - `Gemini 3D` (`VRA-GMI-2754-3D`) — Three-dimensional relief dobby
  - `Gemini Diamond` (`VRA-GMI-2754-DIA`) — Precision geometric dobby
  - `Gemini Flower I` (`VRA-GMI-2754-FL1`) — Fine floral dobby hem
  - `Gemini Flower II` (`VRA-GMI-2754-FL2`) — Embossed floral jacquard band
* **30" × 60" (Large Bath / Pool Towel · 76 × 152 cm)**:
  - `Gemini 3D Pattern A` (`VRA-GMI-3060-3D1`) — Architectural 3D texture
  - `Gemini 3D Pattern B` (`VRA-GMI-3060-3D2`) — Prismatic 3D relief weave
  - `Gemini Diamond (Large)` (`VRA-GMI-3060-DIA`) — Diamond lattice jacquard
  - `Gemini Flower I (Large)` (`VRA-GMI-3060-FL1`) — Floral blossom dobby band
  - `Gemini Flower II (Large)` (`VRA-GMI-3060-FL2`) — Intricate floral jacquard header
  - `Gemini Flower III (Large)` (`VRA-GMI-3060-FL3`) — Ornate botanical hem band
  - `Gemini Lining` (`VRA-GMI-3060-LIN`) — Pinstripe linear dobby
  - `Gemini Sideline` (`VRA-GMI-3060-SID`) — Sideline frame border
  - `Gemini Sparkle` (`VRA-GMI-3060-SPK`) — Sparkle textured micro-weave

---

## 🛠️ Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite 6
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom tactile color tokens
- **Icons**: Lucide React
- **Typography**: Google Fonts (*Playfair Display*, *Plus Jakarta Sans*, *JetBrains Mono*)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/rajatadam134/Viraj_Rayling_Adam.git

# Navigate to project directory
cd Viraj_Rayling_Adam

# Install dependencies
npm install

# Start local development server
npm run dev
```

The application will be accessible at `http://localhost:5173`.

### Production Build
```bash
npm run build
```
Creates an optimized static production bundle in `dist/`.

---

## 📁 Project Structure

```
├── public/
│   ├── favicon.svg             # Custom minimal textile loom icon
│   └── images/                 # Web-optimized product photographs
│       ├── gem_towels/         # GEM collection high-resolution images
│       └── gemini_towels/      # Gemini collection high-resolution images
├── src/
│   ├── config/
│   │   └── site.ts             # Brand configuration, WhatsApp & phone numbers
│   ├── types/
│   │   └── towel.ts            # Type definitions for products & filters
│   ├── data/
│   │   └── catalog.ts          # Extensible master product database (22 items)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx      # Architectural masthead & search
│   │   │   ├── HeroBanner.tsx  # Editorial introduction & mill registry stamp
│   │   │   └── Footer.tsx      # Colophon, print trigger & contact links
│   │   ├── catalog/
│   │   │   ├── FilterBar.tsx   # Series tabs, size pills & view switcher
│   │   │   ├── ProductCard.tsx # Editorial product plate
│   │   │   ├── ProductGrid.tsx # Natural aspect-ratio grid
│   │   │   ├── ProductModal.tsx# High-resolution weave inspector with zoom
│   │   │   └── SpecSheetView.tsx# Tabular B2B wholesale order sheet
│   │   ├── inquiry/
│   │   │   └── InquiryDrawer.tsx# Multi-item WhatsApp quotation drawer
│   │   └── story/
│   │       └── CraftStory.tsx  # Weaving standards & reactive dyeing notes
│   ├── App.tsx                 # Root application state & layout coordinator
│   ├── index.css               # Tactile color tokens & anti-AI typography rules
│   └── main.tsx                # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## ➕ How to Add New Collections / Varieties

The catalog is engineered to be easily extensible when you add more towels in the future:

1. **Add Images**:
   Drop your product photos into `public/images/your_collection_name/`.
2. **Register in `src/data/catalog.ts`**:
   Add a new product entry:
   ```ts
   {
     id: 'royal-3060-velvet',
     itemCode: 'VRA-RYL-3060-VEL',
     collection: 'Royal',
     collectionName: 'Royal Towels',
     name: 'Royal Velvet',
     design: 'Velvet Dobby',
     size: '30 x 60',
     sizeLabel: '30" × 60"',
     sizeCategory: 'Large Bath / Pool Towel',
     dimensionsMetric: '76 × 152 cm',
     image: '/images/royal_towels/Royal 30 x 60 Velvet.png',
     orientation: 'landscape',
     colorCount: 6,
     paletteColors: standard6Colors,
     borderStyle: 'Plush Velvet Dobby Header',
     description: 'Luxury high-pile velvet border with supreme absorption.',
   }
   ```
   The website will automatically calculate counts, update filters, and render the new varieties seamlessly.

---

## 📞 Contact Information

- **Brand**: Viraj Rayling Adam
- **Phone / WhatsApp**: +91 93268 29031
- **Catalog Edition**: Volume I (2026 / 2027)
