<template>
  <div class="container mx-auto px-4 sm:px-6 md:px-20 pt-[140px]">
    <div class="flex items-center gap-3 mb-8 animate-fade-in-up">
      <div class="relative flex items-center justify-center w-5 h-5">
        <div
          class="absolute inset-0 bg-blue/30 rounded-full animate-ping opacity-75"
        ></div>
        <div
          class="relative w-2 h-2 bg-blue rounded-full shadow-[0_0_8px_rgba(38,84,124,0.6)]"
        ></div>
      </div>
      <h2 class="text-3xl md:text-4xl font-bold gradient-text pb-1">
        {{ t("sections.careerTitle") }}
      </h2>
    </div>

    <!-- Ajout : courte indication sur l'interaction -->
    <p class="text-sm text-gray-500 mb-4 animate-fade-in-up mb-6">
      {{ t("career.hint") }}
    </p>

    <div class="glass-card-strong p-6 sm:p-8">
      <div
        class="h-[500px] sm:h-[400px] md:h-[500px] bg-white/40 backdrop-blur-sm rounded-2xl overflow-hidden shadow-inner border border-white/30"
      >
        <VueFlow
          v-model="elements"
          :default-viewport="defaultViewport"
          :min-zoom="0.2"
          :max-zoom="1.5"
          fit-view-on-init
          class="bg-transparent touch-auto"
          :nodes-draggable="false"
        >
          <!-- EDUCATION -->
          <template #node-education="{ id, data }">
            <div
              class="relative glass-card p-2 sm:p-3 hover-lift min-w-[160px] sm:min-w-[200px] max-w-[220px] flex items-center gap-2 border border-blue/30 bg-gradient-to-br from-blue/10 to-white/40"
            >
              <div
                class="w-8 h-8 rounded-full bg-blue/10 flex items-center justify-center text-lg flex-shrink-0 border border-blue/20"
              >
                🎓
              </div>
              <div class="flex-1">
                <h4 class="text-blue-dark text-xs sm:text-sm font-bold mb-1">
                  {{ t(`career.nodes.${data.nodeKey}.title`) }}
                </h4>
                <p
                  class="text-gray-dark text-[10px] sm:text-xs leading-relaxed mb-1"
                >
                  {{ t(`career.nodes.${data.nodeKey}.description`) }}
                </p>
                <span
                  class="text-xs font-bold text-blue bg-blue/5 px-2 py-0.5 rounded-md border border-blue/10"
                  >{{ t(`career.nodes.${data.nodeKey}.date`) }}</span
                >
              </div>

              <Handle
                v-if="id === '1'"
                type="source"
                position="bottom"
                :id="`${id}-bottom`"
                class="!bg-blue"
              />

              <Handle
                v-if="id === '2'"
                type="source"
                position="left"
                :id="`${id}-left`"
                class="!bg-blue"
              />
              <Handle
                v-if="id === '2'"
                type="source"
                position="right"
                :id="`${id}-right`"
                class="!bg-blue"
              />
            </div>
          </template>

          <!-- EXPERIENCE -->
          <template #node-experience="{ id, data }">
            <div
              class="relative glass-card p-2 sm:p-3 hover-lift min-w-[160px] sm:min-w-[200px] max-w-[220px] flex items-center gap-2 border border-green/30 bg-gradient-to-br from-green/10 to-white/40"
            >
              <div
                class="w-8 h-8 rounded-full bg-green/10 flex items-center justify-center text-lg flex-shrink-0 border border-green/20"
              >
                💼
              </div>
              <div class="flex-1">
                <h4 class="text-green-dark text-xs sm:text-sm font-bold mb-1">
                  {{ t(`career.nodes.${data.nodeKey}.title`) }}
                </h4>
                <p
                  class="text-gray-dark text-[10px] sm:text-xs leading-relaxed mb-1"
                >
                  {{ t(`career.nodes.${data.nodeKey}.description`) }}
                </p>
                <span
                  class="text-xs font-bold text-green bg-green/5 px-2 py-0.5 rounded-md border border-green/10"
                  >{{ t(`career.nodes.${data.nodeKey}.date`) }}</span
                >
              </div>

              <Handle
                type="target"
                position="top"
                :id="`${id}-top`"
                class="!bg-green"
              />

              <Handle
                v-if="['3', '4', '6', '7'].includes(id)"
                type="source"
                position="bottom"
                :id="`${id}-bottom`"
                class="!bg-green"
              />

              <Handle
                v-if="id === '5'"
                type="source"
                position="bottom"
                :id="`${id}-bottom`"
                class="!bg-green"
              />
            </div>
          </template>

          <template #node-project="{ id, data }">
            <div
              class="relative bg-white/60 backdrop-blur-md rounded-xl p-2 shadow-sm border border-orange/40 hover:scale-105 transition-all duration-300 min-w-[80px] max-w-[110px] min-h-[56px] flex items-center justify-center bg-gradient-to-br from-orange/10 to-white/50"
            >
              <h4
                class="text-center text-xs font-bold text-orange-dark leading-tight"
              >
                {{ t(`career.projects.${data.projectKey}`) }}
              </h4>

              <Handle
                type="target"
                position="top"
                :id="`${id}-top`"
                class="absolute -top-3 !bg-orange"
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
import { careerElements } from "../../data/career";

const { t } = useI18n();

const elements = ref(careerElements);


const defaultViewport = ref({ x: 0, y: 0, zoom: 0.4 });
function updateViewportByWidth() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  let zoom;
  if (w < 640)
    zoom = 0.25; // mobile
  else if (w < 1024)
    zoom = 0.35; // tablette
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
  stroke: #8492a6; /* lighter gray-blue */
  stroke-width: 2;
  filter: drop-shadow(0 1px 2px rgba(38, 84, 124, 0.1));
}
:deep(.vue-flow__edge.selected .vue-flow__edge-path) {
  stroke: #26547c; /* primary blue */
  stroke-width: 3;
}
:deep(.vue-flow__handle) {
  width: 8px;
  height: 8px;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
