<template>
  <div class="flex min-h-screen bg-white justify-center items-center p-4 sm:p-8">
    <div
      class="flex flex-col bg-[url(/img/grafisbg.png)] bg-cover bg-no-repeat w-full max-w-3xl lg:max-w-4xl aspect-video sm:aspect-auto sm:min-h-[400px] md:min-h-[500px] rounded-2xl lg:rounded-3xl text-white p-8 sm:p-10 md:p-12 space-y-3 sm:space-y-4 justify-center">
      <p class="font-bold text-2xl sm:text-3xl md:text-4xl">{{ title }}</p>
      <p class="pt-2 sm:pt-4 text-base sm:text-lg md:text-xl">
        {{ text }}
      </p>
      <a :href="buttonLink"
        class="flex flex-row items-center border-white border w-fit rounded-full px-4 py-2 space-x-2 mt-4 sm:mt-6 hover:bg-white/20 transition-colors">
        <IconsArrowRightIcon />
        <p class="text-white">{{ buttonText }}</p>
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  text: String,
  buttonText: String,
  buttonLink: String
})
</script>
