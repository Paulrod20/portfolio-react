
export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    icon: string; // 'code' or 'mobile
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "A responsive portfolio website built with HTML, CSS, and JavaScript featuring smooth scrolling navigation and animated project cards.",
        technologies: ["Swift", "SwiftUI", "Xcode (Apple's IDE)"],
        githubUrl: "https://github.com/Paulrod20/portfolio-react",
        icon: "code"
    },
    {
        id: 2,
        title: "Adopt - Find a Pet",
        description: "Adopt is my biggest project to date. Adopt is a web app designed to make it easier for people to discover and connect with local animal shelters. It aggregates shelter listings into one place, lets users search by location, and presents results in a clean, user-friendly interface.",
        technologies: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/Paulrod20/adopt-react",
        icon: "code"
    },
    {
        id: 3,
        title: "Focus Flow - Todo List",
        description: "Focus Flow is a productivity app that helps users plan and complete tasks in structured, distraction-free sessions. It combines simple to-do management with a timer-based 'flow' system so you can stay focused, track progress, and build consistent work habits.",
        technologies: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/Paulrod20/focus-flow",
        icon : "code"
    },
    {
        id: 4,
        title: "Smart Watch Landing Page",
        description: "Watch Landing Page is a sleek, responsive landing page designed to showcase a watch brand or product. It highlights features and pricing in a modern, minimal layout with clear calls-to-action, optimized for both desktop and mobile visitors.",
        technologies: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/Paulrod20/smart-watch-page",
        icon : "code"
    },
    {
        id: 5,
        title: "The Mak App",
        description: "The Mak App is an iOS application I built to practice Swift and Apple's latest SwiftUI framework. It features a gallery of my wife's photos where each image acts as a button; tapping a photo reveals a personal description of that memory.",
        technologies: ["Swift", "SwiftUI", "Xcode (Apple's IDE)"],
        githubUrl: "https://github.com/Paulrod20/The-Mak-App",
        icon: "mobile"
    },
    {
        id: 6,
        title: "Image Editor",
        description: "Image Editor Script is a Python tool that applies custom edits to images directly through code. Users can adjust effects, transformations, and enhancements programmatically, making it easy to automate and experiment with image processing.",
        technologies: ["Python"],
        githubUrl: "https://github.com/Paulrod20/ImageEditor",
        icon: "code"}   
];