<template>
  <div class="flex flex-col min-h-screen bg-white justify-center items-center py-12 sm:py-16 px-4">
    <div class="flex flex-col w-full max-w-7xl justify-center items-center">
      <div
        class="flex flex-col w-full justify-start items-start sm:items-center text-start sm:text-center mb-6 sm:mb-8">
        <h1 class="text-black text-xl sm:text-2xl font-semibold">{{ title }}</h1>
        <p class="font-bold text-[#EB5523] text-3xl sm:text-4xl md:text-5xl">{{ subtitle }}</p>
      </div>

      <div
        class="carousel carousel-center bg-transparent rounded-2xl lg:rounded-3xl w-full max-w-7xl space-x-4 sm:space-x-8 p-4">
        <div v-for="(article, index) in articles" :key="index" class="carousel-item">
          <CarouselCard
            :title="article.title"
            :author="article.author"
            :read-more-link="article.readMoreLink"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  articles: Array
})
</script>
