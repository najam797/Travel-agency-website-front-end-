# Travel Website - ReactJS Assignment

## Setup Instructions

### 1. Install dependencies
```bash
npm install
```

### 2. Add your images
Place your images inside `src/assets/img/`:
- `header-image.jpg`
- `showcase-photo1.jpg`
- `showcase-photo3.jpg`
- `company-img.jpg`

Then update the import statements in:
- `src/components/HeroHeader.jsx` → uncomment the import and update `src`
- `src/components/Showcase.jsx` → uncomment the imports and update `src`
- `src/pages/Contact.jsx` → uncomment the import and update `src`

### 3. Update social media links
In `src/components/Footer.jsx`, replace `YOUR_USERNAME` with your actual social media usernames.

### 4. Run the project
```bash
npm start
```

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        ← Navigation bar (shared)
│   ├── Footer.jsx        ← Footer with social media links
│   ├── HeroHeader.jsx    ← Home page hero section
│   ├── Showcase.jsx      ← Travel destination cards
│   └── Features.jsx      ← Adventure / Price / Experience boxes
│
├── pages/
│   ├── Home.jsx          ← Home page
│   ├── About.jsx         ← About page (AboutInfo, Counts, CTABanner)
│   └── Contact.jsx       ← Contact page (CompanyAddress, ContactForm)
│
├── assets/img/           ← Put your images here
├── App.js                ← React Router setup
├── App.css               ← All styles
└── index.js              ← Entry point
```

## Optional (Bonus Marks)
- Push to GitHub and share the repo link
- Deploy to Netlify: `npm run build` then drag the `build/` folder to netlify.com
