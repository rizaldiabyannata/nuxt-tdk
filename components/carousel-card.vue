<template>
  <div class="w-full max-w-xs sm:max-w-sm bg-[#F5EE9E] shadow-lg rounded-2xl flex flex-col p-6">
    <h1 class="text-black text-2xl sm:text-3xl font-semibold leading-tight break-words">
      {{ title }}
    </h1>
    <p class="text-black text-sm sm:text-base pt-4 sm:pt-6">{{ author }}</p>
    <div class="flex-grow"></div>
    <div class="flex items-center mt-6 sm:mt-8">
      <a :href="readMoreLink" class="text-black font-semibold hover:text-[#EB5523] transition-colors duration-200">
        Read More
      </a>
      <IconsCardArrowIcon />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  author: {
    type: String,
    default: 'By John Doe'
  },
  readMoreLink: {
    type: String,
    default: '#'
  }
})
</script>