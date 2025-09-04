import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Nikolai",
  lastName: "Souza",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Computer Engineer",
  avatar: "/images/avatar.jpg",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Français"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/n-tdi",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/nikolai-souza-a45669288/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:nikolai.a.souza@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Engineer and Developer</>,
  subline: (
    <>
      I'm Nikolai, a Computer Engineering student with a passion.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/nikolai-souza-ntdiworld",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Nikolai Souza is an engineer fueled by curiosity and impact. 
        He approaches every project with a relentless drive to answer the “So what?”—digging 
        past the surface to uncover why the work matters and who it benefits. 
        For him, engineering is not just problem-solving, but meaning-making: turning circuits, 
        code, and design into purposeful solutions that resonate beyond the build. 
        His passion lies in bridging technical innovation with real-world value, ensuring 
        every project tells a story of why it matters.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "P/E Investments",
        timeframe: "Summer of 2021",
        role: "Software Engineer Intern",
        achievements: [ 
          <>
            Worked with software development team members to integrate external databases into a central system that can be queried by the marketing team.
          </>,
          <>
            Developed and maintained backend APIs using Spring Boot and Java.
          </>,
          <>
            Integrated and created CRM solutions to improve client management.
          </>,
          <>
            Collaborated with cross-functional teams to enhance system scalability and performance.
          </>,
        ],
        images: [
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "bASICs @ MiT BWSI",
        description: <>Studied ASICs and semiconductor chip design. Created a wearable histamine sensor that detects allergic reactions and injects epinephrine for anaphylactic shock.</>,
      },
      {
        name: "Quantum Computing @ Brown Pre-College",
        description: <>Introductory courses into Linear Algebra, Quantum Physics, and Quantum Computing using Q#. Created a game to teach quantum gates through the classic game of Pong.</>,
      },
      {
        name: "Introduction to A.I. @ ID-Tech Standford",
        description: <>Learned about artificial intelligence concepts and applications. Created a sentiment analysis tool using natural language processing techniques to moderate online discussions.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Java",
        description: <>Deep understanding of the language's core features. Comfortable with maintaing and expanding enterprise systems.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "C/C++ & Rust",
        description: <>Low level programming with embedded systems, including AVR, ARM, MVR, and x86.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Altium EDA",
        description: <>Experienced with EDA tools for circuit design.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
    ],
  },
  accolades: {
    display: true, // set to false to hide this section
    title: "Accolades",
    awards: [
      {
        title: "Upper School Innovation & Design Award",
        description: <>Awarded @ Brimmer and May 2025</>,
      },
      {
        title: "1st Place Hackathon Winner",
        description: <>Awarded @ Nobles 2024 Hack The Castle</>,
      },
      {
        title: "Outstanding Performance in a Leading Role in a Play",
        description: <>Awarded @ Brimmer and May 2025 Academy Awards</>,
      },
      {
        title: "Outstanding Performance in a Leading Role in a Play",
        description: <>Awarded @ Brimmer and May 2024 Academy Awards</>,
      },
      {
        title: "Outstanding Performance in a Supporting Role in a Play",
        description: <>Awarded @ Brimmer and May 2023 Academy Awards</>,
      },
      {
        title: "Outstanding Performance in a Leading Role in a Musical",
        description: <>Awarded @ Brimmer and May 2022 Academy Awards</>,
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "What am I doing?!",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Projects",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    // euc 2025
    {
      src: "/images/gallery/euc-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/euc-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/euc-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    // asics 2025
    {
      src: "/images/gallery/asics-1.jpeg",
      alt: "image",
      orientation: "horizontal",
    }, 
    {
      src: "/images/gallery/asics-2.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    
    // hadestown 2025
    {
      src: "/images/gallery/hades-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/hades-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    
    // Coffee House 2025
    {
      src: "/images/gallery/ch-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    
    // Puffs
    {
      src: "/images/gallery/img-9.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-16.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "vertical",
    },
    
    // Big Fish
    {
      src: "/images/gallery/img-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-8.jpg",
      alt: "image",
      orientation: "vertical",
    },
    
    // She Kills Monsters
    {
      src: "/images/gallery/img-6.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    // Somethign Rotton
    {
      src: "/images/gallery/img-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-7.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-5.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    // Peter and the Star Catcher
    {
      src: "/images/gallery/peter-img-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/peter-img-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/peter-img-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    // Beauty and the Beast
    {
      src: "/images/gallery/bab-img-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/bab-img-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/bab-img-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    // The Witches
    {
      src: "/images/gallery/tw-img-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/tw-img-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
