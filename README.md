# Appscrip-task-candidate

This is an e-commerce product listing page built with Next.js, React, and TypeScript.

## Features

- Server-side rendering (SSR) for optimal performance and SEO
- Responsive design for mobile, tablet, and desktop
- Product filtering system
- Clean code structure with reusable components
- SEO optimization with meta tags and schema markup
- API integration with FakeStore API
- Client-side state management

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Plain CSS (no framework as required)
- **Deployment**: Netlify

## SEO Optimizations

- Proper page titles and descriptions
- H1 and H2 tags used appropriately
- Schema.org markup for product listings
- Alt text for all images
- SEO-friendly image naming
- Semantic HTML structure

## Project Structure

- `/src/app` - Next.js app router
- `/src/app/components` - Reusable UI components
- `/src/app/products` - Product listing page with SSR
- `/src/types` - TypeScript type definitions
- `/src/utils` - Utility functions and API handling
- `/src/styles` - Global CSS styles
- `/public` - Static assets like images

## How to Run Locally

1. Clone the repository

```bash
git clone https://github.com/yourusername/Appscrip-task-candidate.git
cd Appscrip-task-candidate
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build and Deployment

1. Build the project

```bash
npm run build
```

2. Preview the production build locally

```bash
npm start
```

3. The project is set up for automatic deployment to Netlify

## Code Structure and Naming Conventions

- **Components**: Pascal case (e.g., `ProductCard.tsx`)
- **Utilities**: Camel case (e.g., `fetchProducts.ts`)
- **CSS Modules**: Component name + `.module.css` (e.g., `ProductCard.module.css`)
- **TypeScript Types**: Interface-based with descriptive names

## Performance Optimizations

- Next.js Image component for optimized images
- Minimized DOM size with clean component structure
- Server-side rendering for faster initial load
- CSS modules for scoped styles
- Lazy loading of images

## Future Improvements

- Add authentication
- Implement product detail page
- Add shopping cart functionality
- Add search functionality
- Implement more advanced filtering options

## License

This project is part of an assignment and not licensed for public use.
