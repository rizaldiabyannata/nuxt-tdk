<template>
  <div class="flex flex-col min-h-screen bg-[#DDDDDD] justify-center items-center py-12 sm:py-16 px-4 sm:px-8 md:px-16">
    <div class="flex flex-col w-full max-w-6xl justify-center items-center">
      <div class="flex flex-col w-full items-start">
        <div>
          <h1 class="text-black text-xl sm:text-2xl font-semibold">{{ title }}</h1>
          <p class="w-full font-bold text-[#EB5523] text-3xl sm:text-4xl md:text-5xl mt-1">{{ subtitle }}</p>
        </div>
        <div class="flex w-full items-end justify-end">
          <a :href="moreLink" class="flex flex-row text-black items-center mt-4 sm:mt-0 hover:text-opacity-75">
            <p class="font-semibold mr-1">More</p>
            <IconsTripleChevronRightIcon />
          </a>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row w-full mt-5 gap-4">
        <HomepageCard
          class="w-full lg:w-1/2"
          :title="mainCard.title"
          :description="mainCard.description"
          :button-text="mainCard.buttonText"
          :image-url="mainCard.imageUrl"
        />
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 w-full lg:w-1/2">
          <HomepageCardSmall
            v-for="(card, index) in smallCards"
            :key="index"
            :title="card.title"
            :description="card.description"
            :image-url="card.imageUrl"
            :navigate-t-o="card.navigateTo"
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
  moreLink: String,
  mainCard: Object,
  smallCards: Array
})
</script>
