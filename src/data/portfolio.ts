// ─────────────────────────────────────────────────────────────
//  All of the site's content lives in this file.
//  Edit text here; you shouldn't need to touch the components.
// ─────────────────────────────────────────────────────────────
import { Award, Bot, Clapperboard, Gamepad2, KeyRound, LineChart, Medal, Swords, Trophy, type LucideIcon } from "lucide-react";

export const profile = {
  name: "Aris Wong",
  domain: "ariswong.dev",
  tagline: "I build robots, games, and the code behind them.",
  intro:
    "Computer Science student and Dean's Scholar at the University of British Columbia. I've programmed award-winning competition robots, built AI-powered content pipelines, and shipped games.",
  lookingFor: "Open to SWE internships & co-op",
  location: "Vancouver, BC",
  email: "thearisw@gmail.com",
  github: "https://github.com/thearisw",
  linkedin: "", // EDIT: paste your LinkedIn URL here and the icon appears automatically
  resume: "resume.pdf", // lives in /public
};

export const awards: { title: string; detail: string; icon: LucideIcon }[] = [
  { title: "Create Award", detail: "VEX Robotics World Championship, 2025", icon: Trophy },
  { title: "#1 Skills in Alberta", detail: "Provincial Skills Champion, 2025", icon: Medal },
  { title: "3 more provincial awards", detail: "VEX Robotics, Alberta", icon: Award },
];

export type Project = {
  title: string;
  kind: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  gradient: string; // Tailwind gradient classes for the card header
  code?: string; // EDIT: GitHub repo URL
  demo?: string; // EDIT: live demo URL
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "ChaoCrypt",
    kind: "Cryptography",
    description:
      "An encryption scheme based on chaos theory. It uses n-body gravitational simulations, which are extremely sensitive to their starting conditions, as the basis for encrypting data.",
    tags: ["Chaos theory", "N-body simulation", "Encryption"],
    icon: KeyRound,
    gradient: "from-violet-500 via-indigo-500 to-blue-500",
    featured: true,
  },
  {
    title: "Siratonin Films",
    kind: "AI · 3D graphics",
    description:
      "An AI-powered production pipeline that turns scripts into 3D sets in three.js. Shots are composed in JavaScript and tuned for performance, with ElevenLabs voiceover and an automatic caption generator for short-form videos.",
    tags: ["JavaScript", "three.js", "ElevenLabs API", "AI"],
    icon: Clapperboard,
    gradient: "from-blue-500 via-cyan-400 to-teal-400",
    featured: true,
  },
  {
    title: "WNBA Predictor",
    kind: "Machine learning",
    description:
      "A KNN classification model that forecasts WNBA standings from win percentages. Cleaned, transformed, and analyzed the CSV data with the tidyverse. Built for UBC DSCI 100.",
    tags: ["R", "tidyverse", "Jupyter", "KNN"],
    icon: LineChart,
    gradient: "from-orange-400 via-rose-400 to-pink-500",
  },
  {
    title: "Monke Discord Bot",
    kind: "Bot · APIs",
    description:
      "A Discord bot with 50+ economy, entertainment, and moderation commands that simplify rule enforcement for server admins. Built with object-oriented Python on the Discord API.",
    tags: ["Python", "discord.py", "Nextcord", "Node.js"],
    icon: Bot,
    gradient: "from-indigo-500 via-blue-500 to-sky-400",
  },
  {
    title: "Bossfight Game",
    kind: "Game dev",
    description:
      "A boss-fight action game built in GameMaker, focused on smooth, responsive movement and combat mechanics.",
    tags: ["GameMaker", "GML"],
    icon: Swords,
    gradient: "from-red-500 via-orange-500 to-amber-400",
  },
  {
    title: "Roblox Game",
    kind: "Game dev",
    description:
      "A Roblox game in active development, built with AI-assisted development using Claude to design systems, write scripts, and iterate quickly.",
    tags: ["Roblox Studio", "Luau", "AI-assisted dev"],
    icon: Gamepad2,
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
  },
];
