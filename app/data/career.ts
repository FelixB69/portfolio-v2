// Structural data for the interactive career flow (Vue Flow).
// Positions / ids / handles stay here; text is resolved via i18n keys:
//   - experience & education nodes -> career.nodes.<nodeKey>.{title,description,date}
//   - project nodes               -> career.projects.<projectKey>
// Node ids are kept stable ("1".."7", "p*-*") because the handle logic in
// CareerFlow.vue branches on them.
export const careerElements: any[] = [
  // EDUCATION & EXPERIENCE
  {
    id: "1",
    type: "education",
    position: { x: 80, y: 40 },
    data: { nodeKey: "master" },
  },
  {
    id: "3",
    type: "experience",
    position: { x: 80, y: 220 },
    data: { nodeKey: "astree" },
    draggable: true,
  },
  {
    id: "2",
    type: "education",
    position: { x: 580, y: 40 },
    data: { nodeKey: "cda" },
  },
  {
    id: "4",
    type: "experience",
    position: { x: 420, y: 220 },
    data: { nodeKey: "entendsmoi" },
    draggable: true,
  },
  {
    id: "5",
    type: "experience",
    position: { x: 740, y: 220 },
    data: { nodeKey: "likewattDev" },
    draggable: true,
  },
  {
    id: "6",
    type: "experience",
    position: { x: 740, y: 390 },
    data: { nodeKey: "likewattLead" },
    draggable: true,
  },
  {
    id: "7",
    type: "experience",
    position: { x: 1060, y: 220 },
    data: { nodeKey: "kiweeto" },
    draggable: true,
  },

  // MAIN EDGES
  { id: "e1-3", source: "1", sourceHandle: "1-bottom", target: "3", targetHandle: "3-top", type: "smoothstep" },
  { id: "e2-4", source: "2", sourceHandle: "2-left", target: "4", targetHandle: "4-top", type: "smoothstep" },
  { id: "e2-5", source: "2", sourceHandle: "2-right", target: "5", targetHandle: "5-top", type: "smoothstep" },
  { id: "e5-6", source: "5", sourceHandle: "5-bottom", target: "6", targetHandle: "6-top", type: "smoothstep" },
  { id: "e6-7", source: "6", sourceHandle: "6-bottom", target: "7", targetHandle: "7-top", type: "smoothstep" },

  // PROJECTS — Astrée (node 3)
  { id: "p3-1", type: "project", position: { x: 0, y: 430 }, data: { projectKey: "astreeSeo" }, draggable: true },
  { id: "p3-2", type: "project", position: { x: 135, y: 430 }, data: { projectKey: "astreeSite" }, draggable: true },
  { id: "p3-3", type: "project", position: { x: 270, y: 430 }, data: { projectKey: "astreeAutomation" }, draggable: true },
  { id: "e3-p3-1", source: "3", sourceHandle: "3-bottom", target: "p3-1", targetHandle: "p3-1-top", type: "smoothstep" },
  { id: "e3-p3-2", source: "3", sourceHandle: "3-bottom", target: "p3-2", targetHandle: "p3-2-top", type: "smoothstep" },
  { id: "e3-p3-3", source: "3", sourceHandle: "3-bottom", target: "p3-3", targetHandle: "p3-3-top", type: "smoothstep" },

  // PROJECTS — Entends-Moi (node 4)
  { id: "p4-2", type: "project", position: { x: 400, y: 440 }, data: { projectKey: "entendsmoiPdf" }, draggable: true },
  { id: "p4-3", type: "project", position: { x: 550, y: 440 }, data: { projectKey: "entendsmoiStore" }, draggable: true },
  { id: "e4-p4-2", source: "4", sourceHandle: "4-bottom", target: "p4-2", targetHandle: "p4-2-top", type: "smoothstep" },
  { id: "e4-p4-3", source: "4", sourceHandle: "4-bottom", target: "p4-3", targetHandle: "p4-3-top", type: "smoothstep" },

  // PROJECTS — Likewatt / Responsable IT (node 6)
  { id: "p6-1", type: "project", position: { x: 660, y: 660 }, data: { projectKey: "likewattRefonte" }, draggable: true },
  { id: "p6-2", type: "project", position: { x: 795, y: 660 }, data: { projectKey: "likewattLoad" }, draggable: true },
  { id: "p6-3", type: "project", position: { x: 930, y: 660 }, data: { projectKey: "likewattPca" }, draggable: true },
  { id: "e6-p6-1", source: "6", sourceHandle: "6-bottom", target: "p6-1", targetHandle: "p6-1-top", type: "smoothstep" },
  { id: "e6-p6-2", source: "6", sourceHandle: "6-bottom", target: "p6-2", targetHandle: "p6-2-top", type: "smoothstep" },
  { id: "e6-p6-3", source: "6", sourceHandle: "6-bottom", target: "p6-3", targetHandle: "p6-3-top", type: "smoothstep" },

  // PROJECTS — Kiweeto (node 7)
  { id: "p7-1", type: "project", position: { x: 1000, y: 430 }, data: { projectKey: "kiweetoMvp" }, draggable: true },
  { id: "p7-2", type: "project", position: { x: 1135, y: 430 }, data: { projectKey: "kiweetoSupabase" }, draggable: true },
  { id: "p7-3", type: "project", position: { x: 1270, y: 430 }, data: { projectKey: "kiweetoSocket" }, draggable: true },
  { id: "e7-p7-1", source: "7", sourceHandle: "7-bottom", target: "p7-1", targetHandle: "p7-1-top", type: "smoothstep" },
  { id: "e7-p7-2", source: "7", sourceHandle: "7-bottom", target: "p7-2", targetHandle: "p7-2-top", type: "smoothstep" },
  { id: "e7-p7-3", source: "7", sourceHandle: "7-bottom", target: "p7-3", targetHandle: "p7-3-top", type: "smoothstep" },
];
