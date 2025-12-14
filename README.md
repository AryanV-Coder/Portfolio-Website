# 🌟 Personal Portfolio Website

A modern, responsive, and visually stunning personal portfolio website built with **React** and **Tailwind CSS**. This portfolio showcases your projects, skills, and professional journey with a clean, minimalist dark-mode design and subtle animations.

Portfolio - https://aryan-varshney.vercel.app/

## ✨ Features

- **��🇳 Indian Tricolor Theme**: Unique design using the colors of the Indian flag (Saffron, White, Green)
- **⚙️ Rotating Ashoka Chakra Splash Screen**: Beautiful loading animation with navy blue chakra
- **📱 Fully Responsive**: Seamless experience across desktop, tablet, and mobile devices
- **🚀 Dynamic Project Showcase**: Automatically fetches and displays GitHub repositories via API
- **📖 README-Based Descriptions**: Parses README files to generate concise project summaries
- **✍️ Catchy Fallback Descriptions**: Engaging, rhyming descriptions when README is unavailable
- **🎓 Auto-Loading Certifications Carousel**: 3D rotating carousel with modal lightbox view
- **🔄 Smart Auto-Rotation**: Certificates auto-advance every 2 seconds with pause-on-hover
- **🖼️ Click-to-Enlarge**: Modal lightbox for viewing certificate details in full size
- **📂 Zero-Config Certificate System**: Simply add images, auto-detected and displayed
- **📱 Vertical Mobile Layout**: Optimized stack layout for portrait mode viewing
- **🎭 Smooth Animations**: Subtle fade-in effects on scroll and hover animations
- **⚡ Fast Performance**: Optimized for speed with React and Tailwind CSS
- **🎯 SEO Friendly**: Proper meta tags and semantic HTML structure
- **🔧 Easy Customization**: Clear instructions for personalizing all content

## 🎨 Color Palette - Indian Tricolor Theme 🇮🇳

- **Saffron**: `#FF9933` (Primary accent)
- **White**: `#FFFFFF` (Background)
- **Green**: `#138808` (Secondary accent)
- **Navy Blue**: `#000080` (Text and emphasis)
- **Black**: `#000000` (Primary text)
- **Accent Colors**: Pink, Red, Yellow (Used sparingly)

## 📂 Project Structure

```
portfolio-website/
├── public/
│   ├── index.html
│   ├── Aryan_Varshney_Resume.pdf
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── SplashScreen.jsx   # Ashoka Chakra loading screen
│   │   ├── Navbar.jsx          # Sticky navigation bar
│   │   ├── Hero.jsx            # Hero section with intro
│   │   ├── About.jsx           # About section with story
│   │   ├── SkillsOrbit.jsx     # Rotating skills orbit visualization
│   │   ├── Projects.jsx        # Projects section with GitHub API
│   │   ├── ProjectCard.jsx     # Individual project card component
│   │   ├── Journey.jsx         # Education timeline & activities
│   │   ├── Certifications.jsx  # Auto-loading certificates carousel
│   │   ├── Certifications.css  # Carousel & modal styles
│   │   ├── Resume.jsx          # Resume download section
│   │   └── Contact.jsx         # Contact section with social links
│   ├── assets/
│   │   ├── certificates/       # Certificate images & auto-loader
│   │   │   ├── Certificate_1.jpg
│   │   │   ├── Certificate_2.jpg
│   │   │   ├── certificateLoader.js
│   │   │   ├── certificateData.js
│   │   │   └── README.md       # Instructions for adding certificates
│   │   ├── ashok_chakra.png
│   │   └── profile_pic.jpg
│   ├── App.js                  # Main app component
│   ├── index.js                # Entry point
│   └── index.css               # Global styles with Tailwind
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Getting Started

Follow these steps to set up and run the portfolio on your local machine.

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AryanV-Coder/Portfolio.git
   cd Portfolio_Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   
   Or if you're using yarn:
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   
   Or with yarn:
   ```bash
   yarn start
   ```

4. **Open your browser**
   
   The app will automatically open at [http://localhost:3000](http://localhost:3000)

## 🎯 Customization Guide

Make this portfolio truly yours by following these customization steps:

### 1. Personal Information

#### **Hero Section** (`src/components/Hero.jsx`)

- **Line 32-34**: Update your name
  ```jsx
  <span className="gradient-text">Your Name Here</span>
  ```

- **Line 36-38**: Update your title/role
  ```jsx
  <p className="text-2xl md:text-3xl text-accent-teal-light font-medium mb-6">
    Your Title | Your Specialty
  </p>
  ```

- **Line 40-44**: Update your bio
  ```jsx
  <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mb-8">
    Write your personal introduction here...
  </p>
  ```

#### **Add Your Profile Photo**

1. Create an `assets` folder inside `src/`: `src/assets/`
2. Add your profile photo to this folder (e.g., `profile.jpg`)
3. In `src/components/Hero.jsx`, add the import at the top:
   ```jsx
   import profileImage from '../assets/profile.jpg';
   ```
4. Replace the placeholder div (around line 20-22) with:
   ```jsx
   <img src={profileImage} alt="Your Name" className="w-full h-full object-cover" />
   ```

### 2. About Section

Edit `src/components/About.jsx`:

- **Lines 20-50**: Update your personal journey story
- **Lines 55-130**: Customize your core philosophies and values
- **Lines 135-145**: Update your technology stack/skills

### 3. Projects Section (GitHub API)

#### **Set Up GitHub Token** (Required to avoid rate limits)

1. **Create a `.env` file** in the root directory (already created for you!)

2. **Generate a GitHub Personal Access Token**:
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Name it "Portfolio Website"
   - **Don't select any scopes** (no permissions needed for public repos)
   - Click "Generate token"
   - Copy the token

3. **Add token to `.env` file**:
   ```
   REACT_APP_GITHUB_TOKEN=ghp_your_token_here
   ```

4. **Restart dev server**: Stop (Ctrl+C) and run `npm start` again

📖 **See [SETUP_TOKEN.md](./SETUP_TOKEN.md) for detailed instructions**

Edit `src/components/Projects.jsx`:

- **Line 10**: Update with your GitHub username (if different):
  ```jsx
  const GITHUB_USERNAME = 'AryanV-Coder';
  ```

The projects will automatically fetch from your GitHub repositories with README-based descriptions!

### 4. Certifications Section (Auto-Loading System) 🎓

#### **How the Auto-Loading System Works**

Your portfolio includes a smart certificate management system that automatically detects and displays certificates!

**Simply:**
1. Add certificate images to `/src/assets/certificates/`
2. Update certificate details in `certificateData.js`
3. That's it! They appear automatically 🎉

#### **Adding New Certificates** (Step-by-Step)

**Step 1: Add Certificate Image**

Add your certificate image to `/src/assets/certificates/` with this naming pattern:
```
Certificate_1.jpg
Certificate_2.jpg
Certificate_3.jpg
Certificate_4.png   (supports .jpg, .jpeg, .png, .webp)
```

**Important:**
- Use `Certificate_` prefix (capital C)
- Use underscore `_` before the number
- Sequential numbers (1, 2, 3, ...)

**Step 2: Add Certificate Details**

Edit `/src/assets/certificates/certificateData.js`:

```javascript
const certificateMetadata = {
  1: {
    title: 'Certificate Name',
    issuer: 'Issuing Organization',
    date: 'Month Year',
    description: 'Brief description of what this certifies...',
    credentialUrl: 'https://verify-link.com',  // or '#' if none
    skills: ['Skill 1', 'Skill 2', 'Skill 3']
  },
  2: {
    title: 'Another Certificate',
    issuer: 'Organization Name',
    date: 'January 2024',
    description: 'Description here...',
    credentialUrl: '#',
    skills: ['React', 'JavaScript']
  }
  // Add more following the same pattern
};
```

**That's it!** The certificate automatically appears in the carousel.

#### **Certificate Features**

- **🔄 Auto-Rotation**: Certificates rotate every 2 seconds
- **⏸️ Pause on Hover**: Auto-rotation pauses when you hover over carousel
- **🖱️ Click to Enlarge**: Click any certificate to view full-size in modal
- **📱 Mobile Optimized**: Vertical stack layout on mobile devices
- **🎨 3D Effects**: Desktop shows 3 certificates with depth (prev, active, next)
- **⬆️⬇️ Vertical Mobile**: Mobile uses up/down positioning instead of left/right
- **✨ Smooth Transitions**: 1-second smooth animations between certificates

#### **See Full Instructions**

For detailed information, check:
- `/src/assets/certificates/README.md` - Complete guide with examples

### 5. Contact Section

Edit `src/components/Contact.jsx`:

- **Lines 5-10**: Update all social media links and email:
  ```jsx
  const socialLinks = {
    github: 'https://github.com/YourUsername',
    linkedin: 'https://linkedin.com/in/your-username',
    email: 'your.email@example.com',
    twitter: 'https://twitter.com/yourusername',
  };
  ```

- **Line 88**: Update your location information

### 5. Website Title & Meta

Edit `public/index.html`:

- **Line 11**: Update the page title
  ```html
  <title>Your Name | Portfolio</title>
  ```

- **Lines 8-10**: Update the meta description
  ```html
  <meta name="description" content="Your custom description here" />
  ```

### 6. Footer

Edit `src/components/Contact.jsx` (bottom of file):

- **Line 160**: Update the footer text with your name

## 🎨 Customizing Colors

To change the color scheme, edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    dark: '#YourColor',      // Main background
    darker: '#YourColor',    // Darker sections
    light: '#YourColor',     // Card backgrounds
  },
  accent: {
    teal: '#YourColor',      // Primary accent
    'teal-light': '#YourColor',  // Lighter accent
    'teal-dark': '#YourColor',   // Darker accent
  },
}
```

## 📦 Building for Production

When you're ready to deploy:

1. **Create a production build**
   ```bash
   npm run build
   ```
   
   This creates an optimized build in the `build/` folder.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts, and your site will be live!

**Or use the Vercel Dashboard:**
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel will auto-detect React and deploy automatically

### Deploy to Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build and deploy:
   ```bash
   npm run build
   netlify deploy --prod
   ```

**Or use Netlify's drag-and-drop:**
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `build` folder to deploy

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 🛠️ Technologies Used

- **React** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - Promise-based HTTP client for API calls
- **GitHub API** - For fetching repository data
- **PostCSS** - Tool for transforming CSS
- **Google Fonts** - Inter & Fira Code fonts

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio! If you find any bugs or have suggestions for improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💬 Contact

**Aryan Varshney**

- GitHub: [@AryanV-Coder](https://github.com/AryanV-Coder)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)
- Email: your.email@example.com

---

## 🎉 Quick Start Checklist

- [ ] Clone the repository
- [ ] Run `npm install`
- [ ] Update GitHub username in `Projects.jsx`
- [ ] Generate GitHub token and add to `.env`
- [ ] Update personal info in `Hero.jsx`
- [ ] Add your profile photo
- [ ] Update social links in `Contact.jsx`
- [ ] Customize the About section
- [ ] Add your certificates to `/src/assets/certificates/`
- [ ] Update certificate details in `certificateData.js`
- [ ] Update page title in `public/index.html`
- [ ] Test locally with `npm start`
- [ ] Build for production with `npm run build`
- [ ] Deploy to your preferred platform

---

**Made with ❤️ and React**

If you found this helpful, consider giving it a ⭐ on GitHub!
