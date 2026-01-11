<template>
  <div class="container mx-auto px-4 sm:px-6 md:px-20 pt-[140px]">
    <div class="flex items-center gap-4 mb-8 animate-fade-in-up">
      <div class="w-1.5 h-10 bg-blue rounded-full"></div>
      <h2 class="text-3xl md:text-4xl font-bold text-blue">Mon parcours</h2>
    </div>

    <!-- Ajout : courte indication sur l'interaction -->
    <p class="text-sm text-gray-500 mb-4 animate-fade-in-up mb-6">
      Vous pouvez déplacer le plan, les cartes "expérience" et la caméra en
      maintenant le clic gauche (ou le pad) tout en déplaçant la souris ou le
      doigt.
    </p>

    <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-lg">
      <div
        class="h-[500px] sm:h-[400px] md:h-[500px] bg-gray-50 rounded-2xl overflow-hidden shadow-inner border border-gray-200"
      >
        <VueFlow
          v-model="elements"
          :default-viewport="defaultViewport"
          :min-zoom="0.2"
          :max-zoom="1.5"
          fit-view-on-init
          class="bg-gray-50 touch-auto"
          :nodes-draggable="false"
        >
          <!-- EDUCATION -->
          <template #node-education="{ id, data }">
            <div
              class="relative bg-white rounded-lg p-2 sm:p-3 shadow-lg border-2 border-blue bg-gradient-to-br from-blue-50 to-blue-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl min-w-[160px] sm:min-w-[200px] max-w-[220px] flex items-center gap-2"
            >
              <div class="text-2xl flex-shrink-0">🎓</div>
              <div class="flex-1">
                <h4 class="text-gray-800 text-xs sm:text-sm font-semibold mb-1">
                  {{ data.title }}
                </h4>
                <p
                  class="text-gray-600 text-[10px] sm:text-xs leading-relaxed mb-1"
                >
                  {{ data.description }}
                </p>
                <span
                  class="text-xs font-medium text-gray-500 bg-white/70 px-2 py-0.5 rounded-md"
                  >{{ data.date }}</span
                >
              </div>

              <Handle
                v-if="id === '1'"
                type="source"
                position="bottom"
                :id="`${id}-bottom`"
              />

              <Handle
                v-if="id === '2'"
                type="source"
                position="left"
                :id="`${id}-left`"
              />
              <Handle
                v-if="id === '2'"
                type="source"
                position="right"
                :id="`${id}-right`"
              />
            </div>
          </template>

          <!-- EXPERIENCE -->
          <template #node-experience="{ id, data }">
            <div
              class="relative bg-white rounded-lg p-2 sm:p-3 shadow-lg border-2 border-green bg-gradient-to-br from-emerald-50 to-emerald-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl min-w-[160px] sm:min-w-[200px] max-w-[220px] flex items-center gap-2"
            >
              <div class="text-2xl flex-shrink-0">💼</div>
              <div class="flex-1">
                <h4 class="text-gray-800 text-xs sm:text-sm font-semibold mb-1">
                  {{ data.title }}
                </h4>
                <p
                  class="text-gray-600 text-[10px] sm:text-xs leading-relaxed mb-1"
                >
                  {{ data.description }}
                </p>
                <span
                  class="text-xs font-medium text-gray-500 bg-white/70 px-2 py-0.5 rounded-md"
                  >{{ data.date }}</span
                >
              </div>

              <Handle type="target" position="top" :id="`${id}-top`" />

              <Handle
                v-if="['3', '4', '6', '7'].includes(id)"
                type="source"
                position="bottom"
                :id="`${id}-bottom`"
              />

              <Handle
                v-if="id === '5'"
                type="source"
                position="bottom"
                :id="`${id}-bottom`"
              />
            </div>
          </template>

          <template #node-project="{ id, data }">
            <div
              class="relative bg-white rounded-md p-2 shadow-sm border-2 border-orange-400 bg-gradient-to-br from-orange-50 to-orange-100 transition-all duration-200 min-w-[80px] max-w-[110px] min-h-[56px] flex items-center justify-center"
            >
              <h4 class="text-center text-sm font-bold text-orange-800">
                {{ data.title }}
              </h4>

              <Handle
                type="target"
                position="top"
                :id="`${id}-top`"
                class="absolute -top-3"
              />
            </div>
          </template>

          <Controls />
        </VueFlow>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { VueFlow, Handle } from "@vue-flow/core";
import { Controls } from "@vue-flow/controls";

const elements = ref([
  {
    id: "1",
    type: "education",
    position: { x: 80, y: 40 },
    data: {
      title: "Master Management de Projet",
      description: "IAE Saint-Etienne - Mention TB (Bac +5)",
      date: "2016-2018",
    },
  },
  {
    id: "3",
    type: "experience",
    position: { x: 80, y: 220 },
    data: {
      title: "Chargé de projet Marketing",
      description: "Astrée Software - Communication digitale & Webmarketing",
      date: "Sept 2017 - Déc 2021",
    },
    draggable: true,
  },

  {
    id: "2",
    type: "education",
    position: { x: 580, y: 40 },
    data: {
      title: "Concepteur Développeur d'Applications",
      description: "Wild Code School - Titre CDA (Bac +3/4)",
      date: "Fév 2022 - Sept 2023",
    },
  },
  {
    id: "4",
    type: "experience",
    position: { x: 420, y: 220 },
    data: {
      title: "Développeur Front-end",
      description: "EntendsMoi - React/Redux/Node.js",
      date: "Sept 2022 - Sept 2023",
    },
    draggable: true,
  },
  {
    id: "5",
    type: "experience",
    position: { x: 740, y: 220 },
    data: {
      title: "Développeur Full-Stack",
      description: "Likewatt - React/Node/Nest.js",
      date: "Sept 2023 - Mai 2024",
    },
    draggable: true,
  },
  {
    id: "6",
    type: "experience",
    position: { x: 740, y: 390 },
    data: {
      title: "Responsable développement IT",
      description: "Likewatt - Management d'équipe et gestion de projet",
      date: "Mai 2024 - Aujourd'hui",
    },
    draggable: true,
  },
  {
    id: "7",
    type: "experience",
    position: { x: 1060, y: 220 },
    data: {
      title: "Lead Dev - Freelance",
      description: "Kiweeto - Next.js, Supabase, Architecture",
      date: "Oct 2024 - Aujourd'hui",
    },
    draggable: true,
  },

  {
    id: "e1-3",
    source: "1",
    sourceHandle: "1-bottom",
    target: "3",
    targetHandle: "3-top",
    type: "smoothstep",
  },

  {
    id: "e2-4",
    source: "2",
    sourceHandle: "2-left",
    target: "4",
    targetHandle: "4-top",
    type: "smoothstep",
  },

  {
    id: "e2-5",
    source: "2",
    sourceHandle: "2-right",
    target: "5",
    targetHandle: "5-top",
    type: "smoothstep",
  },

  {
    id: "e5-6",
    source: "5",
    sourceHandle: "5-bottom",
    target: "6",
    targetHandle: "6-top",
    type: "smoothstep",
  },

  {
    id: "e6-7",
    source: "6",
    sourceHandle: "6-bottom",
    target: "7",
    targetHandle: "7-top",
    type: "smoothstep",
  },

  // Projects for node 3 (Chargé de projet Marketing)
  {
    id: "p3-1",
    type: "project",
    position: { x: 0, y: 430 },
    data: {
      title: "Campagne SEO/SEA",
    },
    draggable: true,
  },
  {
    id: "p3-2",
    type: "project",
    position: { x: 135, y: 430 },
    data: {
      title: "Création de site",
    },
    draggable: true,
  },
  {
    id: "p3-3",
    type: "project",
    position: { x: 270, y: 430 },
    data: {
      title: "Intégration marketing automation",
    },
    draggable: true,
  },

  {
    id: "e3-p3-1",
    source: "3",
    sourceHandle: "3-bottom",
    target: "p3-1",
    targetHandle: "p3-1-top",
    type: "smoothstep",
  },
  {
    id: "e3-p3-2",
    source: "3",
    sourceHandle: "3-bottom",
    target: "p3-2",
    targetHandle: "p3-2-top",
    type: "smoothstep",
  },
  {
    id: "e3-p3-3",
    source: "3",
    sourceHandle: "3-bottom",
    target: "p3-3",
    targetHandle: "p3-3-top",
    type: "smoothstep",
  },

  // Projects for node 4 (Développeur Front-end)

  {
    id: "p4-2",
    type: "project",
    position: { x: 400, y: 390 },
    data: {
      title: "Export PDF",
    },
    draggable: true,
  },
  {
    id: "p4-3",
    type: "project",
    position: { x: 550, y: 390 },
    data: {
      title: "Implémentation store",
    },
    draggable: true,
  },

  {
    id: "e4-p4-1",
    source: "4",
    sourceHandle: "4-bottom",
    target: "p4-1",
    targetHandle: "p4-1-top",
    type: "smoothstep",
  },
  {
    id: "e4-p4-2",
    source: "4",
    sourceHandle: "4-bottom",
    target: "p4-2",
    targetHandle: "p4-2-top",
    type: "smoothstep",
  },
  {
    id: "e4-p4-3",
    source: "4",
    sourceHandle: "4-bottom",
    target: "p4-3",
    targetHandle: "p4-3-top",
    type: "smoothstep",
  },

  // Projects for node 6 (Responsable développement IT)
  {
    id: "p6-1",
    type: "project",
    position: { x: 660, y: 600 },
    data: {
      title: "Refonte totale du logiciel",
    },
    draggable: true,
  },
  {
    id: "p6-2",
    type: "project",
    position: { x: 795, y: 600 },
    data: {
      title: "Lancement nouveau SaaS",
    },
    draggable: true,
  },
  {
    id: "p6-3",
    type: "project",
    position: { x: 930, y: 600 },
    data: {
      title: "Plan de continuité d'activité",
    },
    draggable: true,
  },

  {
    id: "e6-p6-1",
    source: "6",
    sourceHandle: "6-bottom",
    target: "p6-1",
    targetHandle: "p6-1-top",
    type: "smoothstep",
  },
  {
    id: "e6-p6-2",
    source: "6",
    sourceHandle: "6-bottom",
    target: "p6-2",
    targetHandle: "p6-2-top",
    type: "smoothstep",
  },
  {
    id: "e6-p6-3",
    source: "6",
    sourceHandle: "6-bottom",
    target: "p6-3",
    targetHandle: "p6-3-top",
    type: "smoothstep",
  },

  // Projects for node 7 (Kiweeto - Lead Dev Freelance)
  {
    id: "p7-1",
    type: "project",
    position: { x: 1000, y: 430 },
    data: {
      title: "App web Next.js",
    },
    draggable: true,
  },
  {
    id: "p7-2",
    type: "project",
    position: { x: 1135, y: 430 },
    data: {
      title: "Architecture Supabase",
    },
    draggable: true,
  },
  {
    id: "p7-3",
    type: "project",
    position: { x: 1270, y: 430 },
    data: {
      title: "Pilotage projet",
    },
    draggable: true,
  },

  {
    id: "e7-p7-1",
    source: "7",
    sourceHandle: "7-bottom",
    target: "p7-1",
    targetHandle: "p7-1-top",
    type: "smoothstep",
  },
  {
    id: "e7-p7-2",
    source: "7",
    sourceHandle: "7-bottom",
    target: "p7-2",
    targetHandle: "p7-2-top",
    type: "smoothstep",
  },
  {
    id: "e7-p7-3",
    source: "7",
    sourceHandle: "7-bottom",
    target: "p7-3",
    targetHandle: "p7-3-top",
    type: "smoothstep",
  },
]);

const defaultViewport = ref({ x: 0, y: 0, zoom: 0.4 });
function updateViewportByWidth() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  let zoom;
  if (w < 640) zoom = 0.25; // mobile
  else if (w < 1024) zoom = 0.35; // tablette
  else zoom = 0.4; // desktop

  defaultViewport.value.zoom = zoom;

  if (w < 640) {
    const node6 = elements.value.find((n) => n.id === "6");
    if (node6 && node6.position) {
      // Calcul approximatif pour centrer le node sur l'écran.
      // Vue Flow utilise viewport.x/y comme translation en pixels appliquée après le scale (zoom).
      // On positionne la caméra de sorte que le point (node.x, node.y) soit au centre de la fenêtre.
      const centerX = w / 2;
      const centerY = h / 2 - 80; // léger décalage vers le haut pour tenir compte du header/padding
      defaultViewport.value.x = -node6.position.x * zoom + centerX;
      defaultViewport.value.y = -node6.position.y * zoom + centerY;
      return;
    }
  }

  // fallback / comportement par défaut : recentrage simple
  defaultViewport.value.x = 0;
  defaultViewport.value.y = 0;
}
onMounted(() => {
  updateViewportByWidth();
  window.addEventListener("resize", updateViewportByWidth);
});
onUnmounted(() => {
  window.removeEventListener("resize", updateViewportByWidth);
});
</script>

<style scoped>
:deep(.vue-flow__edge-path) {
  stroke: #b0b9c7;
  stroke-width: 2;
}
:deep(.vue-flow__edge.selected .vue-flow__edge-path) {
  stroke: #b0b9c7;
  stroke-width: 3;
}
:deep(.vue-flow__controls) {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
:deep(.vue-flow__minimap) {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>
