# Nadin Surya S - Personal Portfolio

A modern, responsive, and dynamic personal portfolio website showcasing projects, skills, and experience as a Data Analyst and AI & ML Enthusiast.

## 🎨 Features

- **Modern Design**: Futuristic black and white theme with glowing blue accents
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Dynamic Content**: Easy updates through JSON/JS data files
- **Smooth Animations**: Hover effects, scroll animations, and transitions
- **No Console Errors**: Clean, error-free code
- **Performance Optimized**: Fast loading and smooth scrolling

## 📁 Project Structure

```
/portfolio
├── index.html          # Main HTML file
├── style.css          # All styles and animations
├── script.js          # JavaScript functionality
├── README.md          # This file
├── /data
│   ├── projects.js    # Projects data (EDIT THIS to add new projects)
│   └── internships.js # Internships data (EDIT THIS to add new internships)
└── /assets
    ├── profile.jpg    # Your profile photo (300x300px recommended)
    └── resume.pdf     # Your resume PDF file
```

## 🚀 Getting Started

### 1. Add Your Profile Photo
- Place your profile photo in `/assets/profile.jpg`
- Recommended size: 300x300px or square aspect ratio
- Supported formats: JPG, PNG

### 2. Add Your Resume
- Place your resume PDF in `/assets/resume.pdf`
- If you don't have a resume yet, remove or update the "View Resume" button in `index.html`

### 3. Update Personal Information
Edit `index.html` to update:
- Email address (currently: nadinsuryas15@gmail.com)
- Any other personal details

## 📝 How to Add New Projects

Open `/data/projects.js` and add a new project object to the array:

```javascript
{
    id: 3,
    title: "Your Project Title",
    description: "Brief description of your project",
    technologies: ["Tech1", "Tech2", "Tech3"],
    github: "https://github.com/username/repo",
    demo: "https://your-demo-link.com", // Optional
    featured: true // Set to true to highlight
}
```

**That's it!** The project will automatically appear on your portfolio.

## 💼 How to Add New Internships

Open `/data/internships.js` and add a new internship object:

```javascript
{
    id: 1,
    company: "Company Name",
    role: "Position Title",
    duration: "Month Year - Month Year",
    description: "Brief description of your responsibilities and achievements.",
    location: "City, Country" // Optional
}
```

The internship will automatically display in the Experience section.

## 🎨 Customization

### Change Colors
Edit the CSS variables in `style.css` (lines 6-17):

```css
:root {
    --primary-color: #4a9eff;    /* Main blue color */
    --secondary-color: #6c7aff;  /* Purple accent */
    --accent-color: #00d4ff;     /* Light blue */
    /* ... other colors ... */
}
```

### Update Skills
Edit the Skills section in `index.html` (around line 290).
Add or remove skill items and update progress percentages.

### Modify Sections
All sections are clearly commented in `index.html`:
- Home Section (line 35)
- About Section (line 90)
- Education Section (line 120)
- Projects Section (line 155)
- Internships Section (line 165)
- Skills Section (line 175)
- Contact Section (line 235)

## 🌐 Deployment

### Option 1: GitHub Pages
1. Create a new repository on GitHub
2. Push all files to the repository
3. Go to Settings > Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Netlify
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop the entire portfolio folder
3. Your site will be live instantly

### Option 3: Vercel
1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy with one click

## 🔧 Troubleshooting

### Profile image not showing?
- Make sure the file is named exactly `profile.jpg` in the `/assets` folder
- Check if the file path is correct
- The site will show a placeholder if the image is missing

### Resume button not working?
- Ensure your resume is at `/assets/resume.pdf`
- Check browser console for any errors

### Projects/Internships not appearing?
- Check `/data/projects.js` and `/data/internships.js` for syntax errors
- Ensure the arrays are properly formatted
- Open browser console (F12) to check for JavaScript errors

### Mobile menu not working?
- Clear browser cache
- Check if JavaScript is enabled
- Test in a different browser

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📧 Contact Form

The contact form currently shows a success message on submission. To make it functional:

1. **Option 1: Use a service like Formspree**
   - Sign up at [formspree.io](https://formspree.io)
   - Update the form action in `index.html`

2. **Option 2: Use EmailJS**
   - Sign up at [emailjs.com](https://emailjs.com)
   - Add EmailJS script and configure in `script.js`

3. **Option 3: Backend API**
   - Create your own backend endpoint
   - Update the form submission logic in `script.js`

## 📄 License

This portfolio template is free to use for personal purposes.

## 🙏 Credits

- **Fonts**: [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins)
- **Icons**: [Font Awesome](https://fontawesome.com)
- **Design**: Custom modern minimalist design

## 💡 Tips for Maintenance

1. **Keep it updated**: Regularly add new projects and experiences
2. **Optimize images**: Compress images before uploading
3. **Test responsiveness**: Check on different devices
4. **SEO**: Update meta tags in `index.html` for better search ranking
5. **Performance**: Keep the code clean and minimal

---

**Built with ❤️ by Nadin Surya S**

For questions or issues, reach out via:
- 📧 Email: nadinsuryas15@gmail.com
- 💼 LinkedIn: [linkedin.com/in/nadin-surya-subramaniam-15244a290](https://linkedin.com/in/nadin-surya-subramaniam-15244a290)
- 💻 GitHub: [github.com/NadinSuryaS](https://github.com/NadinSuryaS)
