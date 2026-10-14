const resume = {
    education: { 
        school: "UC Berkeley",
        date: "Aug 2021 - May 2025", 
        degree: "B.S., Electrical Engineering and Computer Science"
    },

    skills: ["JavaScript", "Python", "Node", "Express.js", "PostgreSQL", "React.js", "HTML / CSS", "Git / GitHub Vite"], 
    experiencesList: [{
        employer: "Software Engineering Intern, LA-Tech.org", 
        experienceDate: "Feb 2026 - May 2026", 
        bulletList: ["Built a React web application that enables users to search and analyze App Store data", 
            "Integrated iTunes Search API with React frontend to enable real-time app search and review data analysis", 
            "Designed responsive React Bootstrap dashboards to visualize app metadata and review analytics", 
            "Implemented concurrent Python threads to fetch and batch iTunes review data in parallel, reducing data retrieval time", 
            "Developed Python logic to analyze review volume and trends across date ranges"
        ]
    }, {
        employer: "Data Science Intern, POiN ", 
        experienceDate: "Jun 2025 - Aug 2025", 
        bulletList: ["Analyzed regional user trends to evaluate business growth opportunities and market potential", 
            "Built Python scripts to clean 4k+ data points and generate trend visualization charts", 
            "Used Pandas to clean and standardize inconsistent data types and improperly formatted user records", 
            "Identified data collection gaps and improved parsing logic to increase quality and rating accuracy"
        ]
    }]
}

export default resume;