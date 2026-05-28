<template>
  <div class="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
    
    <div class="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[30%]">
      
      <div
        class="w-[600px] h-[600px] rounded-full blur-[160px] opacity-80 dark:opacity-50 transition-opacity duration-500 animate-spin-slow"
        style="background: conic-gradient(from 180deg, #EF3826, #FF8203, #FFBB00, #79BE21, #1D8BD9, #EF3826);"
      ></div>

    </div>
  </div>
</template>

<style scoped>
/* 定义一个极其缓慢的旋转动画，让渐变色块看起来像在自然流转 */
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 5s linear infinite;
}
</style>