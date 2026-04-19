export type ContentPart = string | { bold: string };

export interface Section {
  index: string;
  label: string;
  content: ContentPart[];
}

export const SECTIONS: Section[] = [
  {
    index: "01",
    label: "About",
    content: [
      "I'm Ryodgie Barnatia. I design and build interfaces — based in the Philippines, driven by a quiet obsession with getting the details right.",
    ],
  },
  {
    index: "02",
    label: "How I got here",
    content: [
      "I spent over a decade in the safe zone. Good enough job, steady enough life — and a creative instinct I kept telling myself I'd get to eventually. Eventually has a way of running out. I just started. Raw curiosity, hands-on work, figuring it out as I went.",
    ],
  },
  {
    index: "03",
    label: "Experience",
    content: [
      "A decade in customer experience across major American publications — ",
      { bold: "Tribune Publishing" },
      ", ",
      { bold: "Los Angeles Times" },
      ", ",
      { bold: "Chicago Tribune" },
      ", ",
      { bold: "New York Daily News" },
      ", ",
      { bold: "Baltimore Sun" },
      ", and more — then a hard pivot into tech. Front-end development at ",
      { bold: "MC2" },
      ", visual design for AI training models at ",
      { bold: "Wirestock" },
      ". Different worlds, same attention to how things work for real people.",
    ],
  },
  {
    index: "04",
    label: "What I work with",
    content: [
      "My toolkit spans both sides of the work. On the design side — ",
      { bold: "Figma" },
      ", ",
      { bold: "Framer" },
      ", ",
      { bold: "Adobe CC" },
      ", ",
      { bold: "Affinity" },
      ". On the dev side — ",
      { bold: "React" },
      ", ",
      { bold: "Vue" },
      ", ",
      { bold: "TypeScript" },
      ", ",
      { bold: "JavaScript" },
      ", ",
      { bold: "Framer Motion" },
      ", and ",
      { bold: "Git" },
      ". I also work with AI tools daily. The tools change. The curiosity doesn't. I'm always picking something up — a new framework, a design trend, a better way to solve something I thought I already knew.",
    ],
  },
  {
    index: "05",
    label: "Outside of work",
    content: [
      "I'm drawn to ",
      { bold: "slow mornings" },
      ". Good coffee. Oldies on my AirPods. A camera in hand and no particular subject in mind. ",
      { bold: "Quiet spaces" },
      ", and ",
      { bold: "dogs" },
      " — always. That part was never up for debate.",
    ],
  },
];
