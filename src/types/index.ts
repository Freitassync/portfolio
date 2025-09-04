// This file defines TypeScript types and interfaces used throughout the application.

export interface Project {
    id: string;
    title: string;
    description: string;
    link: string;
}

export interface SocialLink {
    platform: string;
    url: string;
}

export interface Language {
    code: string;
    name: string;
}