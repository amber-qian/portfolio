
export type ProjectUpdate = {
  date: string;
  title: string;
  description: string;
  type: "feature" | "fix" | "release" | "documentation";
  commitUrl?: string;
};

export const projectHistory: Record<string, ProjectUpdate[]> = {
  "oauth-platform": [],
  "enterprise-api": [],
  "data-migration": [],
};
