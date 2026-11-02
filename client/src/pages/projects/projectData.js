import insyteCover from "../../assets/insyteCover.png"
import cineTrackCover from "../../assets/cineCover.png"
const projectArray = [
    {
        id: 0, 
        name: "Insyte", 
        image: insyteCover,
        githubUrl: "https://github.com/isabellachakmakian/Insyte",
        description: [
            "Built a full-stack web application using React and Django to search and analyze mobile app data.",
            "Connected the iTunes Search API to fetch, organize, and display live App Store ratings and customer reviews.",
            "Designed clean dashboard components to view app rating trends and highlight user reviews."
        ],
        skills: ["React", "JavaScript", "Python", "HTML / CSS"]
    },
    {
        id: 1, 
        name: "CineTrack", 
        image: cineTrackCover,
        githubUrl: "https://github.com/ashlyMartinez/cineTrack",
        description: [
            "Developing a full-stack movie tracking app using React to explore, rate, and discover films.",
            "Built responsive, reusable React UI components for interactive movie cards, detail views, and rating controls.",
            "Drafted custom database schemas and backend models to support user ratings and personalized recommendations."
        ],
        skills: ["React", "JavaScript", "Supabase", "HTML / CSS"]
    }
]


export default projectArray;
