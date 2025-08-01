<template>
  <div class="logos group bg-white relative overflow-hidden whitespace-nowrap py-12">
    <div class="animate-marquee group-hover:[animation-play-state:paused] inline-block w-max">
      <img v-for="(logo, index) in logos" :key="index" class="mx-8 sm:mx-12 md:mx-16 inline h-12 sm:h-16" :src="logo.src" :alt="logo.alt" />
    </div>
    <div class="animate-marquee group-hover:[animation-play-state:paused] inline-block w-max" aria-hidden="true">
      <img v-for="(logo, index) in logos" :key="index" class="mx-8 sm:mx-12 md:mx-16 inline h-12 sm:h-16" :src="logo.src" :alt="logo.alt" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  logos: Array
})
</script>

<style scoped>
  .animate-marquee {
    animation: marquee 25s linear infinite;
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-100%);
    }
  }
</style>
