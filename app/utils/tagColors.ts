export const getTagColorClass = (tag: string): string => {
  const lower = (tag || "").toLowerCase();

  // Management / Agile / Business / Methodologies
  if (
    lower.includes("scrum") ||
    lower.includes("jira") ||
    lower.includes("team") ||
    lower.includes("lead") ||
    lower.includes("freelance") ||
    lower.includes("pilotage") ||
    lower.includes("management") ||
    lower.includes("full-stack") ||
    lower.includes("ux") ||
    lower.includes("ui")
  ) {
    return "bg-blue/10 text-blue font-medium border border-blue/20 shadow-sm";
  }

  // Frontend / Design / UX / Real-time interactive
  if (
    lower.includes("react") ||
    lower.includes("next") ||
    lower.includes("angular") ||
    lower.includes("tailwind") ||
    lower.includes("css") ||
    lower.includes("html") ||
    lower.includes("front") ||
    lower.includes("socket")
  ) {
    return "bg-pink/10 text-pink font-medium border border-pink/20 shadow-sm";
  }

  // Backend / Languages / Database / Data
  if (
    lower.includes("node") ||
    lower.includes("nest") ||
    lower.includes("typescript") ||
    lower.includes("js") ||
    lower.includes("sql") ||
    lower.includes("supabase") ||
    lower.includes("firebase") ||
    lower.includes("postgres") ||
    lower.includes("api") ||
    lower.includes("tensor")
  ) {
    return "bg-green/10 text-green-dark font-medium border border-green/20 shadow-sm";
  }

  // Infrastructure / Architecture / CI-CD / Quality
  if (
    lower.includes("architecture") ||
    lower.includes("orchestration") ||
    lower.includes("docker") ||
    lower.includes("caprover") ||
    lower.includes("ci/cd") ||
    lower.includes("cloud") ||
    lower.includes("qualité") ||
    lower.includes("pca") ||
    lower.includes("si")
  ) {
    return "bg-blue/10 text-blue font-medium border border-blue/20 shadow-sm";
  }

  // Default color if no match
  return "bg-gray/10 text-gray font-medium border border-gray/20 shadow-sm";
};
