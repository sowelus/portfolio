/**
 * ------------------------------------f--------------------------------------
 * MOCK DATA (Simulating /src/constants and /src/assets/mock.json)
 * --------------------------------------------------------------------------
 */

export const mockProjectEnglish = [
  {
    id: 1,
    title: "Insurance Portal",
    tags: "React, SCSS, Design System",
    image: "https://picsum.photos/id/1/366/400",
  },
  {
    id: 2,
    title: "Mobile App & Design System",
    tags: "Figma, Tokens, Accessibility",
    image: "./src/assets/projects/lavore-mio.svg",
    role: "UI/UX Designer and Front-End Developer (No-Code - Bubble.io)",
    projectStatus: "MVP",
    keyTechnologies: [
      "Bubble.io (No-Code)",
      "Design System (Figma)",
      "UI/UX Design",
      "Product Strategy",
      "Database (Bubble.io)",
    ],
    description:
      "Lavore Mio is a free professional development platform that provides tools for resume creation, career planning, and, crucially, a continuous feedback system to assist users in interview preparation and skill enhancement.",
    problemSolved: {
      main: "The lack of structured feedback in the selection process.",
      secondary:
        "The absence of clear guidance for users regarding professional improvement areas.",
    },
    goals: [
      "Offer a platform that aids in skill development.",
      "Provide users with a continuous and actionable feedback system.",
    ],
    metrics: {
      launchTime: "MVP",
      usersRegistered: "Not available",
      retentionRate: "Not available",
    },
    styleGuide:
      "Establishing rules and standards to ensure alignment with project objectives, resulting in a cohesive and consistent final product.",
    userInterfaceFocus:
      "Focus on ensuring a simple, direct, and objective user interaction.",
  },
  {
    id: 3,
    title: "Android App (Personal project)",
    tags: "Angular",
    image: "./src/assets/projects/seven-hangul.svg",
  },
];
