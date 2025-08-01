<template>
  <div class="flex flex-col md:flex-row min-h-screen bg-[#DDDDDD] justify-center items-stretch">
    <div class="flex flex-col w-full md:w-3/5 lg:w-1/2 justify-center p-6 sm:p-8 md:p-12 lg:p-16">
      <h1 class="text-3xl sm:text-4xl font-bold text-black">{{ title }}</h1>
      <p class="text-black text-base sm:text-lg md:text-xl pt-4 sm:pt-4">{{ subtitle }}</p>
      <form class="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-900">Name</label>
          <div class="mt-2">
            <input type="text" name="name" id="name"
              class="block w-full rounded-xl py-2 sm:py-2.5 px-3 bg-white text-base text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm leading-6">
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-900">Email</label>
          <div class="mt-2">
            <input type="email" name="email" id="email"
              class="block w-full rounded-xl py-2 sm:py-2.5 px-3 bg-white text-base text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm leading-6">
          </div>
        </div>
        <div>
          <label for="message" class="block text-sm font-medium text-gray-900">Message</label>
          <div class="mt-2">
            <textarea name="message" id="message" rows="5"
              class="block w-full rounded-xl bg-white px-3 py-2 sm:py-2.5 text-base text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm leading-6"></textarea>
          </div>
        </div>
        <a href="#"
          class="inline-flex flex-row items-center justify-center border-black border w-fit rounded-full px-5 py-2 sm:px-6 sm:py-2.5 space-x-2 mt-6 sm:mt-8 text-sm sm:text-base hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-colors">
          <IconsArrowRightIcon color="black" />
          <p class="font-semibold text-black">Send</p>
        </a>
      </form>
    </div>

    <div
      class="hidden md:flex h-auto md:h-full w-full md:w-2/5 lg:w-1/2 bg-[url(/img/form-pict.jpg)] bg-cover bg-center">
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String
})
</script>
