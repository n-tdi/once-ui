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
  languages: ["English", "French"], // optional: Leave the array empty if you don't want to display languages
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
  headline: <>Design engineer and builder</>,
  subline: (
    <>
      I'm Nikolai, a computer engineering student with a passion.
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
        Nikolai is a tech-savvy creator with a passion for blending hardware 
        and software into seamless, innovative solutions. As a skilled 
        programmer and aspiring computer engineer, they specialize in embedded 
        systems, robotics, and custom electronics, transforming complex technical 
        challenges into intuitive, functional designs.
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
        name: "MiT BWSIX",
        description: <>Studied ASICs and semiconducter chip design.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Java",
        description: <>Deep understanding of the languages core features, able to build anything.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "C/C++",
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
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
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
    // Coffee House 2025
    {
      src: "/images/gallery/img-15.jpg",
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
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-2.jpg",
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
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
