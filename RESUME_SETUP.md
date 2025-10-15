# Resume Setup Instructions

## How to Add Your Resume PDF

1. **Save your resume PDF** with the name `resume.pdf`

2. **Place it in the `public` folder** of your project:
   ```
   Portfolio_Website/
   └── public/
       └── resume.pdf  ← Put your resume here
   ```

3. **That's it!** The Resume component is already configured to:
   - Display your resume with a beautiful interactive card
   - Allow visitors to **view** it in a new tab
   - Allow visitors to **download** it as "Aryan_Varshney_Resume.pdf"

## Features Implemented

✅ **Interactive Resume Card**
- Hover animations with scale and rotation effects
- Decorative corner borders in tricolor theme
- Animated PDF badge

✅ **Two Action Buttons**
- 🔍 **View Resume**: Opens PDF in new browser tab
- 📥 **Download PDF**: Downloads with custom filename

✅ **Professional Display**
- Your name and title prominently displayed
- Key highlights (Education, Experience, Skills)
- File information (format, size, last updated)

✅ **Dark Mode Theme**
- Consistent with your portfolio's dark design
- Saffron and green accent colors
- Smooth transitions and hover effects

✅ **Responsive Design**
- Works perfectly on mobile, tablet, and desktop
- Stacked buttons on mobile, side-by-side on desktop

## Customization Options

If you want to update the resume details displayed on the card, edit:
`src/components/Resume.jsx`

Lines to customize:
- Line 51: Your name
- Line 54: Your title
- Line 57: Your bio/description
- Line 63-81: Education, Experience, Skills highlights
- Line 113: File information

## Note

Until you add your actual resume PDF to the `public` folder, the buttons won't work. 
But the component will still display beautifully! 

Just drop your PDF in when you're ready. 🚀
