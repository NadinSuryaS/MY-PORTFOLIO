# 📝 How to Add Content to Your Portfolio

This guide shows you **exactly** how to add projects, internships, skills, and certificates to your portfolio.

---

## 🚀 Quick Start - Running Your Portfolio Properly

### ⚠️ IMPORTANT: Don't Open index.html Directly!

If you open `index.html` by double-clicking, you'll see file paths in the URL bar and some links won't work properly.

### ✅ The RIGHT Way:

**Option 1: Use the Batch File (Easiest)**
1. Double-click `start-server.bat`
2. Your portfolio opens automatically at `http://localhost:8000`
3. All links work perfectly!

**Option 2: Manual Python Server**
1. Open Command Prompt in the portfolio folder
2. Type: `python -m http.server 8000`
3. Open browser and go to: `http://localhost:8000`

**Option 3: VS Code Live Server**
1. Install "Live Server" extension in VS Code
2. Right-click `index.html` > "Open with Live Server"

---

## 📂 1. How to Add a NEW PROJECT

### Step 1: Open the File
Open: `data/projects.js` in any text editor (Notepad, VS Code, etc.)

### Step 2: Copy This Template
```javascript
{
    id: 3,  // ⬅️ Change this number (next in sequence)
    title: "Your Project Name",
    description: "One sentence explaining what your project does",
    technologies: ["Python", "React", "MySQL"],  // 3-7 technologies
    github: "https://github.com/YourUsername/repo-name",
    demo: null,  // Add demo URL or leave as null
    featured: true  // true = shows prominently
},
```

### Step 3: Add It to the Array
```javascript
const projectsData = [
    // Existing Project 1
    {
        id: 1,
        title: "SmartPick – AI-Based Product Recommendation System",
        ...
    },
    
    // Existing Project 2
    {
        id: 2,
        title: "Digital Librarian Bot",
        ...
    },  // ⬅️ Make sure there's a comma here!
    
    // ✨ YOUR NEW PROJECT - Paste here
    {
        id: 3,
        title: "Weather Prediction App",
        description: "Built a machine learning model to predict weather patterns with 85% accuracy",
        technologies: ["Python", "TensorFlow", "Flask", "React"],
        github: "https://github.com/NadinSuryaS/weather-predictor",
        demo: "https://weather-predictor.netlify.app",
        featured: true
    }
];
```

### Step 4: Save and Refresh
1. **Save** the file (Ctrl + S)
2. **Refresh** your browser (F5 or Ctrl + R)
3. Your project appears instantly! ✨

### 🎯 Tips for Projects
- Keep descriptions under 150 characters
- List 3-7 technologies
- If no GitHub link yet, use: `github: null`
- If no live demo, use: `demo: null`
- Set `featured: true` for your best 2-3 projects

---

## 💼 2. How to Add an INTERNSHIP

### Step 1: Open the File
Open: `data/internships.js`

### Step 2: Replace the Empty Array
Find this line:
```javascript
const internshipsData = [];
```

Replace it with:
```javascript
const internshipsData = [
    {
        id: 1,
        company: "Company Name",
        role: "Your Position Title",
        duration: "June 2024 - August 2024",  // or "June 2024 - Present"
        description: "What you accomplished. Use numbers: Built X, Improved Y by 20%, Analyzed Z datasets.",
        location: "Remote"  // or "City, Country" or null
    }
];
```

### Step 3: Real Example
```javascript
const internshipsData = [
    {
        id: 1,
        company: "Tech Solutions Pvt Ltd",
        role: "Data Science Intern",
        duration: "June 2024 - Present",
        description: "Developed predictive models using Python and scikit-learn, improving forecast accuracy by 15%. Created automated data pipelines processing 10,000+ records daily.",
        location: "Bangalore, India"
    }
];
```

### Step 4: Add Multiple Internships
```javascript
const internshipsData = [
    {
        id: 1,  // Most recent first
        company: "Current Company",
        role: "Current Role",
        duration: "June 2024 - Present",
        description: "Current achievements...",
        location: "Remote"
    },
    {
        id: 2,  // Previous internship
        company: "Previous Company",
        role: "Previous Role",
        duration: "Jan 2024 - May 2024",
        description: "Past achievements...",
        location: "Mumbai, India"
    }
];
```

### 🎯 Tips for Internships
- Most recent should be `id: 1`
- Focus on **achievements**, not just duties
- Use **numbers** and **results** (e.g., "improved by 20%")
- Duration format: "Month Year - Month Year" or "Present"

---

## 🏆 3. How to Add a CERTIFICATE

### Step 1: Open the File
Open: `data/certificates.js`

### Step 2: Add Your Certificate
```javascript
const certificatesData = [
    {
        id: 1,
        title: "Google Data Analytics Professional Certificate",
        issuer: "Google (via Coursera)",
        date: "November 2024",
        credentialUrl: "https://coursera.org/verify/professional-cert/ABC123",
        skills: ["Data Analysis", "SQL", "Tableau", "R Programming"]
    }
];
```

### Step 3: Add Multiple Certificates
```javascript
const certificatesData = [
    {
        id: 1,
        title: "Machine Learning Specialization",
        issuer: "Stanford University (Coursera)",
        date: "December 2024",
        credentialUrl: "https://coursera.org/verify/ABC123",
        skills: ["Machine Learning", "Python", "TensorFlow"]
    },
    {
        id: 2,
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "October 2024",
        credentialUrl: "https://aws.amazon.com/verification",
        skills: ["Cloud Computing", "AWS", "DevOps"]
    },
    {
        id: 3,
        title: "Python for Data Science",
        issuer: "Udemy",
        date: "September 2024",
        credentialUrl: null,  // No online verification
        skills: ["Python", "Pandas", "NumPy"]
    }
];
```

### 🎯 Tips for Certificates
- Add certificate verification URL if available
- Use `credentialUrl: null` if no online certificate
- List 2-5 key skills learned
- Most recent certificates first (id: 1, 2, 3...)

---

## 🛠️ 4. How to Update SKILLS

Skills are in the main HTML file (not a data file).

### Step 1: Open the File
Open: `index.html`

### Step 2: Find the Skills Section
Press `Ctrl + F` and search for: `Skills Section`

### Step 3: Add a New Skill
Find this pattern and copy it:
```html
<div class="skill-item">
    <div class="skill-info">
        <span class="skill-name">Python</span>
        <span class="skill-level">Advanced</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" data-progress="90"></div>
    </div>
</div>
```

### Step 4: Paste and Edit
```html
<div class="skill-item">
    <div class="skill-info">
        <span class="skill-name">Your New Skill</span>
        <span class="skill-level">Intermediate</span>  <!-- Advanced/Intermediate/Beginner -->
    </div>
    <div class="skill-bar">
        <div class="skill-progress" data-progress="75"></div>  <!-- 0-100 -->
    </div>
</div>
```

### 🎯 Tips for Skills
- **data-progress**: 0-100 (your proficiency level)
- **skill-level**: Use "Advanced", "Intermediate", or "Beginner"
- Group similar skills together (Programming, Databases, Tools)

---

## ❓ Common Questions

### Q: I added content but it's not showing up?
**A:** Make sure to:
1. **Save** the file after editing (Ctrl + S)
2. **Refresh** your browser (Ctrl + R or F5)
3. Check for **syntax errors** (missing commas, brackets)
4. Open browser console (F12) to check for errors

### Q: How do I check for syntax errors?
**A:** 
1. Press **F12** in your browser
2. Click **Console** tab
3. Look for red error messages
4. Common issues:
   - Missing comma between items
   - Missing closing bracket `}`
   - Mismatched quotes `"` or `'`

### Q: Can I delete example projects/internships?
**A:** Yes! Just remove the entire block:
```javascript
// Delete this entire block:
{
    id: 1,
    title: "...",
    ...
},  // ⬅️ Also remove the comma
```

### Q: Links still show file paths?
**A:** You need to run a web server:
1. Use `start-server.bat` (easiest way)
2. OR install Python and run: `python -m http.server 8000`
3. Open browser at: `http://localhost:8000`

### Q: I made a mistake and broke the site!
**A:** 
1. **Undo** your changes (Ctrl + Z)
2. **Save** the file
3. **Refresh** browser
4. Or restore from the template comments in each file

---

## 🎨 Customization Tips

### Change Your Photo
1. Add your photo to `/assets/` folder
2. Name it exactly: `profile.jpg`
3. Refresh browser

### Change Your Resume
1. Add PDF to `/assets/` folder
2. Name it exactly: `resume.pdf`

### Update Contact Info
1. Open `index.html`
2. Search for your email/phone number
3. Update with your information

---

## ✅ Final Checklist Before Going Live

- [ ] Added profile photo (`assets/profile.jpg`)
- [ ] Added resume (`assets/resume.pdf`)
- [ ] Updated email address in HTML
- [ ] Added at least 2 projects
- [ ] Added internships (or left placeholder)
- [ ] Added certificates (if any)
- [ ] Tested all links work
- [ ] Checked on mobile phone
- [ ] No console errors (press F12 to check)
- [ ] Used web server (not file://)

---

## 🆘 Need More Help?

1. **Check README.md** for detailed documentation
2. **Check QUICK_START.md** for deployment guide
3. **Open browser console** (F12) to see errors
4. **Read template comments** in data files

---

## 📚 File Summary

| File | What It Does | Edit This? |
|------|-------------|-----------|
| `data/projects.js` | Your projects | ✅ YES - Add projects here |
| `data/internships.js` | Your internships | ✅ YES - Add internships here |
| `data/certificates.js` | Your certificates | ✅ YES - Add certificates here |
| `index.html` | Main structure | ⚠️ Only for skills/email |
| `style.css` | Visual design | ⚠️ Only if changing colors |
| `script.js` | Functionality | ❌ NO - Don't edit |
| `start-server.bat` | Launch server | ❌ NO - Just double-click it |

---

**🎉 You're all set! Start adding your content and build an amazing portfolio!**

Need help? All templates have detailed comments to guide you.
