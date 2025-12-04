# Business Consulting Firm - Multipurpose HTML Template

A professional, modern HTML template for Business Consulting Firm. Perfect for consulting businesses, agencies, and service-based companies. Fully responsive with dark mode support, clean design, and comprehensive features.

## Features

- ✅ **Bootstrap 5** based responsive design
- ✅ **Dark Mode + Light Mode** toggle
- ✅ **RTL Support** (Arabic/Hebrew compatible)
- ✅ **SEO-optimized** semantic HTML
- ✅ **Fully responsive** (mobile-first)
- ✅ **Reusable components** (navbar, footer, cards, buttons, forms)
- ✅ **Clean folder structure** with comments
- ✅ **Accessibility** features (ARIA labels, keyboard navigation)

## Folder Structure

```
Business consulting firm/
│
├── index.html                 # Main entry point (Home Page 1)
├── README.md                  # Project documentation
├── .gitignore                 # Git ignore file
│
├── assets/
│   ├── css/
│   │   └── style.css          # Main stylesheet with theme variables
│   ├── js/
│   │   ├── theme.js           # Dark/Light mode & RTL toggle
│   │   ├── main.js            # Common functionality
│   │   ├── services.js        # Services page grid/list toggle
│   │   ├── blog.js            # Blog search and filtering
│   │   ├── pricing.js         # Pricing toggle functionality
│   │   └── navbar-footer.js   # Navbar and footer components
│   └── images/
│       ├── favicon.svg        # Site favicon
│       └── README.md          # Images folder documentation
│
└── pages/
    ├── home-1.html            # Home - General Services Landing
    ├── home-2.html            # Home - Niche/SaaS Landing
    ├── about.html             # About Us page
    ├── services.html          # Services page (with grid/list toggle)
    ├── service-details.html   # Service detail page
    ├── blog.html              # Blog listing page (with search & filters)
    ├── pricing.html           # Pricing page (with monthly/yearly toggle)
    ├── contact.html           # Contact page with map and form
    ├── login.html             # Login page
    └── register.html          # Registration page
```

## Navbar Features

The navbar includes all required items:
- Logo (Left)
- Home (Dropdown with General Services & Niche/SaaS options)
- About Us
- Services
- Blog
- Pricing
- Contact
- Login / Register
- Dark/Light Toggle
- RTL Toggle
- Call-To-Action Button → "Get Consultation"

## Pages Included

### Public Website Pages

1. **Home Page 1** - General Services Landing
   - Hero section with CTA
   - Services grid
   - Why choose us
   - Testimonials carousel
   - Brands/Clients
   - Blog preview
   - Lead capture form

2. **Home Page 2** - Niche (SaaS / Digital Agency)
   - SaaS-style hero
   - Feature comparison
   - Pricing snippet
   - Case studies
   - App screenshots

3. **About Us**
   - Company mission
   - Vision
   - Timeline / History
   - Team section
   - Testimonials

4. **Services Page**
   - Services in grid + list toggle
   - Icons
   - Hover effects
   - Category filters

5. **Service Details Page**
   - Deep service description
   - FAQ accordion
   - Pricing table
   - Inquiry CTA

6. **Blog Page**
   - Search functionality
   - Category filters (Strategy, Finance, Operations, Technology)
   - Grid layout with blog posts
   - Pagination

7. **Pricing Page**
   - 3–4 pricing tiers
   - Feature comparison
   - Monthly/Yearly toggle

8. **Contact Us**
   - Google Map embed
   - Full contact form
   - Address, phone, email
   - Social links

### Authentication Pages

- **Login Page** - Clean authentication form with social login options
- **Register Page** - Registration form with password strength indicator

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- JavaScript (Vanilla JS)
- Bootstrap 5.3.0
- Bootstrap Icons
- Google Fonts (Inter)

## Getting Started

### Quick Start

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Navigate through the pages using the navigation menu

### Local Development

Since this is a static HTML website, you can:
- Open files directly in your browser
- Use a local server like Python's `python -m http.server` or Node's `http-server`
- Deploy to any static hosting service (GitHub Pages, Netlify, Vercel, etc.)

## Customization

### Theme Colors

Edit CSS variables in `assets/css/style.css`:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  /* ... */
}
```

### Dark Mode

Dark mode is automatically handled via CSS variables and the theme toggle system. The user's preference is saved in localStorage.

### RTL Support

RTL support is implemented via the `dir` attribute and CSS. Toggle is available in the navbar.

## Deployment

This template can be deployed to various static hosting platforms:

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings → Pages
3. Select the main branch and `/` root directory
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop the project folder to Netlify
2. Or connect your GitHub repository for continuous deployment

### Vercel
1. Import your GitHub repository to Vercel
2. Vercel will automatically detect and deploy your static site

## File Organization

- All HTML pages are organized in the `/pages` directory
- Static assets (CSS, JS, images) are in the `/assets` directory
- Main entry point is `index.html` in the root directory

## Notes

- All dependencies (Bootstrap, Icons, Fonts) are loaded via CDN - no build step required
- Images use external placeholder services (Unsplash, Pravatar) - replace with your own images
- Google Maps embed requires a valid API key for production use

## License

This template is ready for commercial use and can be sold on marketplaces like ThemeForest and TemplateMonster.

## Support

For questions or support, please refer to the documentation or contact the template author.

