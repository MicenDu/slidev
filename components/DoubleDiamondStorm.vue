<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const phase = ref(0)
const timers: number[] = []

const chips = [
  { label: '竞品', x0: '-44%', y0: '-33%', x1: '-20%', y1: '-11%', tone: 'warm' },
  { label: '流程', x0: '-8%', y0: '-39%', x1: '-8%', y1: '-18%', tone: 'neutral' },
  { label: '抱怨', x0: '31%', y0: '-31%', x1: '12%', y1: '-13%', tone: 'danger' },
  { label: '排队', x0: '46%', y0: '-8%', x1: '20%', y1: '-1%', tone: 'neutral' },
  { label: '指标', x0: '34%', y0: '26%', x1: '11%', y1: '11%', tone: 'warm' },
  { label: '误触', x0: '0%', y0: '37%', x1: '-5%', y1: '18%', tone: 'danger' },
  { label: '旅客', x0: '-36%', y0: '27%', x1: '-17%', y1: '11%', tone: 'neutral' },
  { label: '场景', x0: '-51%', y0: '3%', x1: '-24%', y1: '1%', tone: 'warm' },
]

onMounted(() => {
  timers.push(window.setTimeout(() => { phase.value = 1 }, 180))
  timers.push(window.setTimeout(() => { phase.value = 2 }, 1480))
  timers.push(window.setTimeout(() => { phase.value = 3 }, 2520))
})

onBeforeUnmount(() => {
  timers.forEach(timer => window.clearTimeout(timer))
})
</script>

<template>
  <div class="storm-shell" :class="`phase-${phase}`">
    <div class="storm-label">双钻转折</div>

    <svg class="storm-svg" viewBox="0 0 1000 620" aria-hidden="true">
      <defs>
        <linearGradient id="diamondGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f4c08a" />
          <stop offset="100%" stop-color="#c86f3d" />
        </linearGradient>
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(242,188,141,0.55)" />
          <stop offset="100%" stop-color="rgba(242,188,141,0)" />
        </radialGradient>
      </defs>

      <circle class="glow" cx="500" cy="310" r="170" fill="url(#centerGlow)" />

      <polygon
        class="diamond left"
        points="190,310 360,150 510,310 360,470"
      />
      <polygon
        class="diamond right"
        points="490,310 640,150 810,310 640,470"
      />

      <line class="beam beam-a" x1="50" y1="90" x2="420" y2="250" />
      <line class="beam beam-b" x1="930" y1="86" x2="590" y2="246" />
      <line class="beam beam-c" x1="108" y1="556" x2="434" y2="374" />
      <line class="beam beam-d" x1="900" y1="530" x2="576" y2="378" />
    </svg>

    <div
      v-for="chip in chips"
      :key="chip.label"
      class="chip"
      :class="chip.tone"
      :style="{
        '--x0': chip.x0,
        '--y0': chip.y0,
        '--x1': chip.x1,
        '--y1': chip.y1,
      }"
    >
      {{ chip.label }}
    </div>

    <div class="core-copy">
      <div class="core-title">真正的问题定义</div>
      <div class="core-statement">
        我们不是在优化机器
      </div>
      <div class="core-statement accent">
        而是在降低旅客在值机场景下的焦虑
      </div>
    </div>
  </div>
</template>

<style scoped>
.storm-shell {
  position: relative;
  width: min(100%, 960px);
  height: 560px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 36px;
  background:
    radial-gradient(circle at 50% 35%, rgba(242, 188, 141, 0.14), transparent 36%),
    linear-gradient(160deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.01)),
    #130f0d;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.08),
    0 40px 80px rgba(0, 0, 0, 0.28);
}

.storm-label {
  position: absolute;
  top: 28px;
  left: 34px;
  z-index: 3;
  font-size: 12px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: rgba(248, 236, 223, 0.58);
}

.storm-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.glow {
  opacity: 0;
  transform-origin: center;
  transition: opacity 700ms ease, transform 1200ms ease;
}

.diamond {
  fill: none;
  stroke: url(#diamondGlow);
  stroke-width: 2.2;
  stroke-linejoin: round;
  opacity: 0.18;
  stroke-dasharray: 1200;
  stroke-dashoffset: 1200;
  transition:
    opacity 700ms ease,
    stroke-dashoffset 1200ms cubic-bezier(0.2, 1, 0.2, 1);
}

.beam {
  stroke: rgba(242, 188, 141, 0.48);
  stroke-width: 1.3;
  stroke-dasharray: 10 12;
  opacity: 0;
  transition: opacity 400ms ease;
}

.chip {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  padding: 10px 16px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(8px);
  font-size: 15px;
  letter-spacing: 0.04em;
  color: #f9efe4;
  opacity: 0;
  transform: translate(var(--x0), var(--y0)) scale(0.85);
  transition:
    transform 1100ms cubic-bezier(0.16, 1, 0.3, 1),
    opacity 900ms ease,
    filter 700ms ease;
}

.chip.warm {
  background: rgba(200, 111, 61, 0.18);
  box-shadow: 0 0 28px rgba(200, 111, 61, 0.14);
}

.chip.neutral {
  background: rgba(246, 234, 223, 0.1);
}

.chip.danger {
  background: rgba(180, 90, 78, 0.2);
  box-shadow: 0 0 28px rgba(180, 90, 78, 0.12);
}

.core-copy {
  position: absolute;
  inset: auto 0 56px 0;
  z-index: 4;
  text-align: center;
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 700ms ease, transform 800ms cubic-bezier(0.2, 1, 0.2, 1);
}

.core-title {
  margin-bottom: 16px;
  font-size: 12px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(248, 236, 223, 0.55);
}

.core-statement {
  font-size: 34px;
  line-height: 1.3;
  color: #f8ecdf;
}

.core-statement.accent {
  color: #f2bc8d;
}

.phase-1 .chip {
  opacity: 1;
  transform: translate(var(--x1), var(--y1)) scale(1);
}

.phase-1 .beam {
  opacity: 1;
}

.phase-2 .glow,
.phase-3 .glow {
  opacity: 1;
  transform: scale(1.04);
}

.phase-2 .diamond,
.phase-3 .diamond {
  opacity: 0.92;
  stroke-dashoffset: 0;
}

.phase-2 .chip,
.phase-3 .chip {
  opacity: 0.2;
  filter: blur(1px);
}

.phase-3 .core-copy {
  opacity: 1;
  transform: translateY(0);
}

.phase-3 .beam {
  opacity: 0.12;
}
</style>
