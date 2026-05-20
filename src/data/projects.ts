export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  category: 'web' | 'mobile' | 'game' | 'desktop';
}

export const projects: Project[] = [
  {
    id: 1,
    title: "FlipCheck",
    description: "A used video game and console price comparison tool built for resellers and collectors. Pulls real market data to help users make smarter buying and selling decisions.",
    technologies: ["React", "TypeScript", "Vite", "Supabase", "Tailwind CSS"],
    githubUrl: "https://github.com/Paulrod20/flip-check-react",
    category: "web"
  },
  {
    id: 2,
    title: "Adopt — Web",
    description: "A web app that helps people discover and connect with local animal shelters. Aggregates shelter listings into one place with map-based search and a clean, approachable interface.",
    technologies: ["React", "TypeScript", "Leaflet", "Vite"],
    githubUrl: "https://github.com/Paulrod20/adopt-react",
    category: "web"
  },
  {
    id: 3,
    title: "Adopt — React Native",
    description: "The mobile counterpart to Adopt. A React Native app for finding local shelters on the go, featuring MapKit integration, a shelter list bottom sheet, and tab navigation.",
    technologies: ["React Native", "TypeScript", "MapKit", "Expo"],
    githubUrl: "https://github.com/Paulrod20/adopt-ios",
    category: "mobile"
  },
  {
    id: 4,
    title: "Project Noise",
    description: "An indie game built in Godot exploring four emotional worlds — Anger, Depression, Anxiety, and Shame. A deeply personal project with original artwork created in collaboration with my wife.",
    technologies: ["Godot", "GDScript"],
    githubUrl: "https://github.com/Paulrod20/project-noise",
    category: "game"
  },
  {
    id: 5,
    title: "Mr. Wooga",
    description: "An iOS chat app powered by the Anthropic API. Built with SwiftUI as a portfolio and practice project exploring AI-driven conversational interfaces on Apple platforms.",
    technologies: ["Swift", "SwiftUI", "Anthropic API", "Xcode"],
    githubUrl: "https://github.com/Paulrod20/mr.wooga",
    category: "mobile"
  },
  {
    id: 6,
    title: "PredatorHelper",
    description: "An open-source Windows utility and alternative to PredatorSense for Acer Helios laptops. Features performance mode switching, fan speed monitoring, battery management, and a dark UI.",
    technologies: ["C#", "WinForms", "WMI"],
    githubUrl: "https://github.com/Paulrod20/p-helper",
    category: "desktop"
  },
];