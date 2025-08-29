<template>
  <div class="flex flex-col max-w-screen">
    <div class="flex flex-col md:flex-row w-full h-screen">
      <img src="/img/placeholder.png" alt="" class="h-1/2 w-full md:h-full md:w-1/2" />
      <div class="flex flex-col bg-white text-black h-1/2 w-full md:h-full md:w-1/2 items-center justify-center px-4">
        <h1 class="text-2xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, velit?</p>
      </div>
    </div>
    <div class="flex flex-col md:flex-row w-full h-screen justify-center items-center bg-white">
      <div class="flex flex-col w-full md:w-1/2 py-4 space-y-1 px-4 md:space-y-4">
        <h1 class="text-3xl font-bold text-[#EB5523]">Contact Us</h1>
        <p class="text-black text-base sm:text-lg md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse perferendis eos necessitatibus, totam earum quasi a.</p>
        <form @submit.prevent="submitMessage" class="space-y-2 w-full">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-900">Name</label>
            <div class="mt-2">
              <input
                v-model="message.name"
                type="text"
                name="name"
                id="name"
                class="block w-full rounded-xl py-2 sm:py-2.5 px-3 bg-white text-base text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm leading-6"
              />
            </div>
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-900">Email</label>
            <div class="mt-2">
              <input
                v-model="message.email"
                type="email"
                name="email"
                id="email"
                class="block w-full rounded-xl py-2 sm:py-2.5 px-3 bg-white text-base text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm leading-6"
              />
            </div>
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-900">Message</label>
            <div class="mt-2">
              <textarea
                v-model="message.message"
                name="message"
                id="message"
                rows="5"
                class="block w-full rounded-xl bg-white px-3 py-2 sm:py-2.5 text-base text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm leading-6"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            class="inline-flex flex-row items-center justify-center border-black border w-fit rounded-full px-5 py-2 sm:px-6 sm:py-2.5 space-x-2 text-sm sm:text-base hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-colors"
          >
            <icons-icon-arrow-right-filled />
            <p class="font-semibold text-black">Send</p>
          </button>
        </form>
      </div>
      <img src="/img/placeholder.png" alt="" class="h-1/2 w-full md:h-full md:w-1/2" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: {
        name: "",
        email: "",
        message: "",
      },
    };
  },

  methods: {
    async submitMessage() {
      try {
        const response = await this.$api.post("/contact-form/", {
          name: this.message.name,
          email: this.message.email,
          message: this.message.message,
        });

        console.log("Pesan berhasil dikirim", response.data);
        this.tampilanAktif = "daftar";
      } catch (error) {
        console.error("Gagal mengirim pesan:", error);
      }
    },
  },
};
</script>
