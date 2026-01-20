export default [
  {
    slug: "perfect-pet-finder",
    title: "Perfect Pet Finder",
    type: "Full-Stack App",
    featured: true,
    oneLiner: "Pet adoption platform with filtering, favorites, and user accounts.",
    liveUrl: "https://kenya-p.github.io/Final_Project/",
    repoUrl: "https://github.com/Kenya-P/Final_Project",
    stack: ["React", "Vite", "Node", "Express", "MongoDB", "JWT", "Figma"],
    highlights: [
      "JWT auth with protected routes and persisted sessions",
      "Advanced filtering + favorites stored per user",
      "REST API with validation + centralized error handling",
    ],
    caseStudy: {
      problem: "Users needed a fast way to find adoptable pets matching specific criteria.",
      solution: "Built a filter-driven UI backed by a structured API and per-user saved favorites.",
    },
  },
  {
    slug: "weather-wardrobe",
    title: "What To Wear 👕🌦️",
    type: "React App",
    featured: true,
    oneLiner: "Weather-driven clothing recommendations with saved items and responsive UI.",
    liveUrl: "https://wtwr-kenya.crabdance.com/",
    repoUrl: "https://github.com/Kenya-P/se_project_react",
    stack: ["React", "Context API", "REST", "Responsive CSS"],
    highlights: [
      "Reusable modal + form validation patterns",
      "State managed with context + custom hooks",
      "Mobile-first layout with clean component structure",
    ],
    caseStudy: {
      problem: "Users wanted quick outfit guidance based on local weather and preferences.",
      solution: "Created a clean UI that adapts by temperature and lets users save favorites.",
    },
  },
];
