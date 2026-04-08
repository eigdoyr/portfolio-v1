export type ContentPart = string | { bold: string };

export interface Section {
  index: string;
  label: string;
  content: ContentPart[];
}

export interface ExperienceItem {
  company: string;
  role: string;
}

export const SECTIONS: Section[] = [
  {
    index: "01",
    label: "Background",
    content: [
      "I'm ",
      { bold: "Ryodgie Barnatia" },
      ", a ",
      { bold: "Visual and Web Designer and Developer" },
      " based in the ",
      { bold: "Philippines" },
      " - creating digital experiences that feel intentional, structured, and culturally aware.",
    ],
  },
  {
    index: "02",
    label: "Path",
    content: [
      "My path wasn't linear. For more than a decade, I stayed in the safe zone — moving through a steady career while quieting a creative instinct I've carried since childhood. But comfort has a ceiling. Eventually, the fear of staying still outweighed the fear of starting over.",
    ],
  },
  {
    index: "03",
    label: "Experience",
    content: [
      "I've since worked across design and development — from building front-end components in ",
      { bold: "Vue.js" },
      " at ",
      { bold: "MC2" },
      ", to crafting visual assets that contributed to ",
      { bold: "AI model training" },
      " at ",
      { bold: "Wirestock" },
      ". And nearly a decade supporting customers at the ",
      { bold: "Los Angeles Times" },
      " and ",
      { bold: "Tribune Publishing" },
    ],
  },
  {
    index: "04",
    label: "Philosophy",
    content: [
      "My philosophy is simple: ",
      { bold: "less, but better" },
      ". Every layout, component, and interaction I build is shaped by one question — does this make someone's experience ",
      { bold: "easier" },
      ", or just busier?",
    ],
  },
  {
    index: "05",
    label: "Offline",
    content: [
      "Outside of work, I'm drawn to ",
      { bold: "slow mornings" },
      ", ",
      { bold: "quiet spaces" },
      ", ",
      { bold: "photography" },
      ", and the kind of focus that only comes with a ",
      { bold: "good cup of coffee" },
      ". And ",
      { bold: "dogs" },
      ". That part's non-negotiable.",
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  { company: "Wirestock", role: "Visual Designer" },
  { company: "MC2", role: "Front-End Developer" },
  { company: "Tribune Publishing", role: "Customer Experience" },
  { company: "Los Angeles Times", role: "Digital and Website Services" },
];
