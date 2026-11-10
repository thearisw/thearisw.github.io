// ─────────────────────────────────────────────────────────────
//  All of the site's content lives in this file.
//  Edit text here; you shouldn't need to touch the components.
// ─────────────────────────────────────────────────────────────
import {
  Bot, Clapperboard, Cpu, GraduationCap, KeyRound, LineChart, Gamepad2, Swords, Tent, Trophy, Users, Code2,
  type LucideIcon,
} from "lucide-react";

export const profile = {
  name: "Aris Wong",
  domain: "ariswong.dev",
  tagline: "Robotics Engineer, Game Developer, Content Automation Pipeline",
  intro:
    "Computer Science student and Dean's Scholar at the University of British Columbia. I've programmed award-winning competition robots, built AI-powered content pipelines, and shipped games.",
  lookingFor: "Open to SWE internships & co-op",
  location: "Vancouver, BC",
  email: "thearisw@gmail.com",
  github: "https://github.com/thearisw",
  linkedin: "https://www.linkedin.com/in/-aris-wong/",
  resume: "resume.pdf", // lives in /public
};

export const about = [
  "I started out writing Discord bots back in 2019 and haven't stopped building since. In high school I spent three years designing and programming VEX robots, which took my team to the VEX World Championship, where we won the Create Award, and to #1 in Alberta skills.",
  "Now I'm studying Computer Science at UBC with a 91% average. Outside of class I'm working on ChaoCrypt, an encryption scheme built on chaotic n-body simulations, an AI film pipeline that turns scripts into 3D scenes, and a handful of games.",
];

export const highlights: { value: string; label: string; detail: string; icon: LucideIcon }[] = [
  { value: "Create Award", label: "VEX World Championship", detail: "2025", icon: Trophy },
  { value: "#1 in Alberta", label: "Provincial Skills Champion", detail: "2025", icon: Cpu },
  { value: "91%", label: "Dean's Scholar", detail: "UBC Computer Science", icon: GraduationCap },
];

export type Experience = {
  role: string;
  org: string;
  date: string;
  icon: LucideIcon;
  points: string[];
  tags?: string[];
};

export const experience: Experience[] = [
  {
    role: "Tech Specialist / Camp Counsellor",
    org: "Camp STEAM Canada",
    date: "Jul 2026 – Aug 2026",
    icon: Tent,
    points: [
      "Taught campers block-based coding with Minecraft Education, LEGO Spike, and micro:bit at an engineering summer camp.",
      "Managed and troubleshot camp hardware including 3D printers and Chromebooks.",
      "Worked with other counsellors to design better hands-on learning experiences.",
    ],
  },
  {
    role: "Hackathon Participant",
    org: "Hack the Coast · UBC Science Undergraduate Society",
    date: "Feb 2026",
    icon: Code2,
    points: [
      "Built a social awareness game in GameMaker advocating for homeless shelter and food bank funding.",
      "Combined hand-written GML with AI-assisted code to speed up development, debug complex logic, and tune gameplay.",
    ],
    tags: ["GameMaker", "GML"],
  },
  {
    role: "Robotics Designer & Programmer",
    org: "VEX Robotics Competition",
    date: "Sep 2022 – Jun 2025",
    icon: Trophy,
    points: [
      "Programmed autonomous routing in C++ with PROS, using PID control to improve runtime by 50%.",
      "Designed, prototyped, and built robots for timed scoring tasks under strict hardware constraints.",
      "Won 5 awards in 2025, including the World Championship Create Award and Provincial Champion Skills Award (#1 in Alberta).",
    ],
    tags: ["C++", "PROS", "VEX V5", "PID"],
  },
  {
    role: "Robotics Club Executive",
    org: "Western Canada High School",
    date: "May 2023 – Jun 2025",
    icon: Users,
    points: [
      "Mentored 50 members across 8 teams in mechanical, software, and structural engineering.",
      "Led teams to 10+ provincial and global tournaments, coordinating travel and logistics.",
      "Organized and maintained the club's parts and equipment inventory.",
    ],
  },
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
    tags: ["JavaScript", "three.js", "ElevenLabs API", "AI", "Claude"],
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
    kind: "Game Dev",
    description:
      "A boss-fight action game built in GameMaker, focused on smooth, responsive movement and combat mechanics.",
    tags: ["GameMaker", "GML", "Game Design"],
    icon: Swords,
    gradient: "from-red-500 via-orange-500 to-amber-400",
  },
  {
    title: "S Baiters",
    kind: "Game Dev",
    description:
      "A Roblox game in active development, built with AI-assisted development using Claude to design systems, write scripts, and iterate quickly.",
    tags: ["Roblox Studio", "Luau", "AI-assisted dev"],
    icon: Gamepad2,
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Java", "Python", "C++", "C#", "JavaScript", "R", "GML", "Racket"] },
  { group: "Frameworks & libraries", items: ["three.js", "Node.js", "PROS", "tidyverse", "discord.py", "Nextcord"] },
  { group: "Tools & platforms", items: ["Git / GitHub", "VS Code", "Jupyter", "GameMaker", "Roblox Studio", "VEX V5", "3D printing"] },
];

export const education = {
  school: "University of British Columbia",
  degree: "Bachelor of Science in Computer Science",
  detail: "91% average · Dean's Scholar",
  date: "Sep 2025 – May 2030",
  coursework: ["Computer Systems", "Software Construction (Java)", "Data Structures & Algorithms (C++)", "Data Science (R)"],
};
