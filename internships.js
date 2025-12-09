/**
 * ====================================
 * INTERNSHIPS DATA FILE
 * ====================================
 * HOW TO ADD AN INTERNSHIP:
 * 1. Remove the empty array line 20 (internshipsData = [])
 * 2. Copy the template below
 * 3. Fill in your internship details
 * 4. For multiple internships, add a comma and paste another copy
 * 5. Save and refresh!
 * 
 * TIPS:
 * - Most recent internship should be id: 1 (show first)
 * - Use format: "Month Year - Month Year" or "Present" for current
 * - Describe achievements, not just duties
 * - location can be "Remote", "City, Country", or null
 */

// If you DON'T have internships yet, keep this as is:
const internshipsData = [
    {
        id: 1,
        company: "Corizo",
        role: "Machine learning Intern",
        duration: "October 2024 - November 2024",  // or "June 2024 - Present"
        description: "Showed Diligence,Consistency,Determination,Innovation throughtout this period",
        location: "Remote"  // or "Bangalore, India" or null
    },
    
    // INTERNSHIP 2 - Add if you have multiple (don't forget the comma above!)
    {
        id: 2,
        company: "CodeBindTechnologies",
        role: "Web Devlopment Intern",
        duration: "July 2025",
        description: "Your key achievements and responsibilities here.",
        location: " Salem"
    }
];

// When you GET an internship, REPLACE the line above with this format:
/*
const internshipsData = [
    // INTERNSHIP 1 - Most Recent
    {
        id: 1,
        company: "Company Name (e.g., Google, Microsoft, Startup Name)",
        role: "Your Position (e.g., Data Analyst Intern, ML Intern)",
        duration: "June 2024 - August 2024",  // or "June 2024 - Present"
        description: "What you accomplished: Built X, Analyzed Y, Improved Z by 20%. Use numbers and results!",
        location: "Remote"  // or "Bangalore, India" or null
    },
    
    // INTERNSHIP 2 - Add if you have multiple (don't forget the comma above!)
    {
        id: 2,
        company: "Previous Company Name",
        role: "Previous Position",
        duration: "January 2024 - May 2024",
        description: "Your key achievements and responsibilities here.",
        location: "City, Country"
    }
];
*/

/* 
====================================
QUICK EXAMPLE - COPY & EDIT THIS:
====================================

const internshipsData = [
    {
        id: 1,
        company: "Tech Solutions Pvt Ltd",
        role: "Data Science Intern",
        duration: "June 2024 - Present",
        description: "Developed predictive models using Python and scikit-learn, improving accuracy by 15%. Created automated data pipelines processing 10,000+ records daily.",
        location: "Remote"
    }
];
*/
