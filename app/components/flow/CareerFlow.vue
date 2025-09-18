<template>
  <div class="container mx-auto px-4 sm:px-6 md:px-20 pt-[140px]">
    <h2
      class="text-2xl md:text-3xl font-bold text-blue mb-6 animate-fade-in-up"
    >
      Mon parcours
    </h2>

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
              class="relative bg-white rounded-lg p-2 sm:p-3 shadow-lg border-2 border-pink bg-gradient-to-br from-pink-50 to-pink-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl min-w-[160px] sm:min-w-[200px] max-w-[220px] flex items-center gap-2"
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
                v-if="id === '5'"
                type="source"
                position="bottom"
                :id="`${id}-bottom`"
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
    position: { x: 520, y: 40 },
    data: {
      title: "Concepteur Développeur d'Applications",
      description: "Wild Code School - Titre CDA (Bac +3/4)",
      date: "Fév 2022 - Sept 2023",
    },
  },
  {
    id: "4",
    type: "experience",
    position: { x: 350, y: 220 },
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
    position: { x: 750, y: 220 },
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
    position: { x: 750, y: 390 },
    data: {
      title: "Responsable développement",
      description: "Likewatt - Management équipe & architecture",
      date: "Mai 2024 - Aujourd'hui",
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
