<template>
  <div class="relative min-h-dvh flex flex-col">
    <div class="absolute inset-0 bg-[url('/img/sample/sample-1.jpeg')] bg-cover bg-center brightness-50 -z-10"></div>

    <div class="flex flex-col flex-grow w-full justify-center items-center p-4 mt-[YOUR_NAVBAR_HEIGHT]">
      <div class="flex flex-col w-full max-w-xl sm:w-4/5 md:w-3/5 lg:w-2/5 justify-center items-center text-center">
        <h1 class="font-bold text-xl sm:text-2xl md:text-3xl text-white">
          {{ title }}
        </h1>
        <p class="mt-2 text-sm sm:text-base text-white">
          {{ subtitle }}
        </p>
      </div>
      <a :href="buttonLink"
        class="flex flex-row shadow-xl backdrop-blur-lg border border-white rounded-full px-4 py-2 mt-6 text-sm items-center space-x-2 hover:bg-white hover:text-black group transition-colors">
        <IconsArrowDownIcon />
        <p class="font-semibold text-white group-hover:text-black">{{ buttonText }}</p>
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  buttonText: String,
  buttonLink: String
})
</script>
