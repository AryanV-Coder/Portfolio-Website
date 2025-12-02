# 📜 Certificates Folder - Auto-Loading System

## 🚀 How to Add New Certificates

### Step 1: Add Certificate Image

Simply add your certificate image to this folder with the naming pattern:
```
Certificate_1.jpg
Certificate_2.jpg
Certificate_3.jpg
Certificate_4.jpg
... and so on
```

**Supported formats:** `.jpg`, `.jpeg`, `.png`, `.webp`

**Important:**
- Use underscores (`_`) between "Certificate" and the number
- Use sequential numbers (1, 2, 3, etc.)
- The system automatically detects and loads them!

---

### Step 2: Add Certificate Details

Open `certificateData.js` and add your certificate information:

```javascript
const certificateMetadata = {
  1: {
    title: 'Google Cloud Certified Professional',
    issuer: 'Google Cloud',
    date: 'January 2024',
    description: 'Professional certification for cloud architecture and engineering.',
    credentialUrl: 'https://credential-url.com',
    skills: ['GCP', 'Cloud Architecture', 'DevOps']
  },
  2: {
    title: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'March 2024',
    description: 'AWS certification for designing distributed systems.',
    credentialUrl: 'https://aws-verify.com',
    skills: ['AWS', 'Cloud Computing', 'System Design']
  }
  // Add more as needed...
};
```

---

## 📋 Complete Example

Let's say you have 3 certificates:

### Files in this folder:
```
certificates/
├── Certificate_1.jpg    ← Your first certificate image
├── Certificate_2.png    ← Your second certificate image
├── Certificate_3.jpg    ← Your third certificate image
├── certificateData.js   ← Certificate details
├── certificateLoader.js ← Auto-loader (don't modify)
└── README.md           ← This file
```

### certificateData.js:
```javascript
const certificateMetadata = {
  1: {
    title: 'React Developer Certification',
    issuer: 'Meta',
    date: 'June 2024',
    description: 'Advanced React and modern web development certification.',
    credentialUrl: 'https://verify.meta.com/cert123',
    skills: ['React', 'JavaScript', 'Frontend']
  },
  2: {
    title: 'Python for Data Science',
    issuer: 'IBM',
    date: 'July 2024',
    description: 'Comprehensive Python programming for data analysis.',
    credentialUrl: 'https://ibm.com/verify/xyz',
    skills: ['Python', 'Data Science', 'ML']
  },
  3: {
    title: 'Full Stack Web Development',
    issuer: 'freeCodeCamp',
    date: 'August 2024',
    description: 'Complete full-stack development certification.',
    credentialUrl: 'https://freecodecamp.org/cert/abc',
    skills: ['HTML', 'CSS', 'React', 'Node.js', 'MongoDB']
  }
};
```

That's it! Your certificates will automatically appear on the website! ✨

---

## 🔄 Adding More Certificates Later

Just follow the same pattern:
1. Add `Certificate_4.jpg` to this folder
2. Add entry for `4:` in `certificateData.js`
3. Done! The website automatically updates

---

## ⚙️ How It Works

The system uses **webpack's require.context** to:
1. Scan this folder for images matching the pattern `Certificate_#.jpg/png/etc`
2. Automatically import them
3. Sort them by number
4. Match with metadata from `certificateData.js`
5. Display them in the carousel

**You don't need to modify `Certifications.jsx` or any other code!**

---

## 📝 Notes

- **Order matters:** Certificates display in numerical order (1, 2, 3...)
- **Missing numbers:** If you skip a number (e.g., 1, 2, 4), it's fine - system handles it
- **No image?** If metadata exists but no image, placeholder icon is shown
- **No metadata?** If image exists but no metadata, default text is used

---

## 🎯 Quick Checklist

- [ ] Add certificate image: `Certificate_X.jpg`
- [ ] Update `certificateData.js` with details
- [ ] Refresh website
- [ ] Certificate appears automatically! 🎉
