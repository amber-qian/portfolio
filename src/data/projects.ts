
export type Project = {
  slug: string;
  title: string;
  description: string;
  overview: string;
  highlights: string[];
  technologies: string[];
  category: "Web Application" | "API" | "Data";
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "oauth-platform",
    title: "OAuth Authentication Platform",
    description:
      "An authentication platform supporting token-based authorization and single sign-on across web applications.",
    overview:
      "This project involved developing an authentication platform using Python, Django, React, and Azure Active Directory. The platform supported authentication and token-based authorization, helping web applications integrate with a shared sign-in experience.",
    highlights: [
      "Implemented authentication and token authorization workflows.",
      "Worked with Azure Active Directory to support single sign-on.",
      "Developed backend APIs and business logic.",
      "Built administrative features for users, clients, products, and subscriptions.",
    ],
    technologies: ["Python", "Django", "React", "Azure AD"],
    category: "Web Application",
    featured: true,
  },
  {
    slug: "enterprise-api",
    title: "Enterprise API Services",
    description:
      "REST API services providing calculated data to internal applications and database procedures.",
    overview:
      "This project involved backend development with C# and .NET Core, including REST APIs for calculated fracturing data. Related work also included SOAP services and support for data retrieval workflows.",
    highlights: [
      "Developed REST API functionality using C# and .NET Core.",
      "Worked with database procedures and SQL scripts.",
      "Supported SOAP-based services and related data retrieval workflows.",
    ],
    technologies: ["C#", ".NET Core", "REST APIs", "SQL Server"],
    category: "API",
    featured: true,
  },
  {
    slug: "data-migration",
    title: "Data Migration Solutions",
    description:
      "Data migration and transformation solutions for moving legacy application data into modern databases.",
    overview:
      "This project represents enterprise data migration and transformation work across application environments. The work included preparing data, developing supporting applications, and helping move legacy data into upgraded systems.",
    highlights: [
      "Developed data migration and transformation solutions.",
      "Created supporting applications using C# and VBA.",
      "Worked with database upgrades and reporting requirements.",
    ],
    technologies: ["C#", "SQL", "VBA", "Database Migration"],
    category: "Data",
    featured: true,
  },
];
