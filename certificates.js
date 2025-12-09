/**
 * ====================================
 * CERTIFICATES DATA FILE
 * ====================================
 * HOW TO ADD A CERTIFICATE:
 * 1. Copy the template below
 * 2. Fill in certificate details
 * 3. Add a comma after the previous certificate
 * 4. Save and refresh!
 * 
 * TIPS:
 * - Add completion date or "2024" if no specific month
 * - credentialUrl can be Coursera, Udemy, LinkedIn certificate link
 * - Set credentialUrl: null if no online certificate
 * - Most recent certificates should have lower id numbers (1, 2, 3...)
 */

const certificatesData = [
    // INTERNSHIP CERTIFICATE 1
    {
        id: 1,
        title: "Data Analytics And Visualization Job",
        issuer: "Accenture",
        date: "October 2024",
        credentialUrl: null,  // Add certificate link if available
        skills: ["Data Visualization", "Project Management", "Data Cleaning And Modeling"]
    },
    
    // INTERNSHIP CERTIFICATE 2
    {
        id: 2,
        title: "Cloud Computing", 
        issuer: "Corizo",
        date: "January 2025",
        credentialUrl: null,  // Add certificate link if available
        skills: ["Software Development", "Problem Solving", "Technical Skills"]
    }
];

/* 
====================================
TEMPLATE - COPY THIS TO ADD A CERTIFICATE:
====================================

{
    id: 1,
    title: "Certificate Name",
    issuer: "Organization/Platform Name",
    date: "Month Year",
    credentialUrl: "https://certificate-verification-link.com",  // or null
    skills: ["Skill 1", "Skill 2", "Skill 3"]  // 2-4 skills learned
},

*/

/* 
====================================
EXAMPLES - Popular Certificates:
====================================

// Google Data Analytics Certificate
{
    id: 1,
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google (via Coursera)",
    date: "November 2024",
    credentialUrl: "https://coursera.org/verify/professional-cert/XXXXXXXXX",
    skills: ["Data Analysis", "SQL", "Tableau", "R Programming"]
},

// AWS Certification
{
    id: 2,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "September 2024",
    credentialUrl: "https://aws.amazon.com/verification",
    skills: ["Cloud Computing", "AWS", "Cloud Architecture"]
},

// Python Course
{
    id: 3,
    title: "Python for Data Science and Machine Learning",
    issuer: "Udemy",
    date: "August 2024",
    credentialUrl: null,
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn"]
},

// Free Certificates
{
    id: 4,
    title: "Introduction to Artificial Intelligence",
    issuer: "IBM (via Cognitive Class)",
    date: "July 2024",
    credentialUrl: "https://courses.cognitiveclass.ai/certificates/xxxxx",
    skills: ["AI Fundamentals", "Machine Learning", "Neural Networks"]
}

*/
