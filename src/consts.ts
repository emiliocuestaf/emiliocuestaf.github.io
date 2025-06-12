import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "emiliocuestaf",
  DESCRIPTION: "Personal blog",
  EMAIL: "emiliocuestaf@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 0,
  NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Hello!",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of write-ups",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of projects",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/emiliocuestaf",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/emiliocuestaf/",
  },
];
