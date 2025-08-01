<template>
  <div class="card bg-base-100 w-full shadow-lg rounded-2xl overflow-hidden h-96 xl:h-full">
    <div class="card-body bg-white rounded-t-2xl p-4 sm:p-6 h-1/2">
      <h2 class="card-title text-black text-xl sm:text-2xl">{{ title }}</h2>
      <p class="text-black text-sm sm:text-base mt-1">
        {{ description }}
      </p>
      <div class="card-actions justify-start mt-4">
        <button class="btn btn-sm sm:btn-md rounded-full bg-gray-200 hover:bg-gray-300 text-black transition-colors">
          {{ buttonText }}
        </button>
      </div>
    </div>
    <figure class="h-1/2">
      <img :src="imageUrl" :alt="title" class="w-full h-full object-cover" />
    </figure>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Card Title'
  },
  description: {
    type: String,
    default: 'Default description text.'
  },
  buttonText: {
    type: String,
    default: 'More Details'
  },
  imageUrl: {
    type: String,
    default: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
  }
})
</script>