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
    lower.includes("full-stack")
  ) {
    return "bg-blue text-white font-medium";
  }

  // Frontend / Design / UX / Real-time interactive
  if (
    lower.includes("react") ||
    lower.includes("next") ||
    lower.includes("angular") ||
    lower.includes("ux") ||
    lower.includes("ui") ||
    lower.includes("tailwind") ||
    lower.includes("css") ||
    lower.includes("html") ||
    lower.includes("front") ||
    lower.includes("socket")
  ) {
    return "bg-pink text-white font-medium";
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
    return "bg-green text-gray-dark font-medium";
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
    return "bg-blue text-white font-medium";
  }

  // Default color if no match
  return "bg-gray text-white font-medium";
};
