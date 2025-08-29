<template>
  <div class="bg-gray-200 min-h-screen font-sans">
    <div class="flex min-h-screen w-full justify-center items-center p-4">
      <div class="flex flex-col lg:flex-row-reverse lg:w-3/5 w-full max-w-4xl h-auto lg:h-[60vh] shadow-2xl rounded-3xl overflow-hidden">
        <div class="relative h-48 lg:h-full lg:w-2/5">
          <img
            src="/img/login-placeholder.png"
            alt="Halaman Login"
            class="w-full h-full object-cover"
            onerror="this.onerror=null;this.src='https://placehold.co/600x800/1E1E1E/FFFBFC?text=Image';"
          />
        </div>

        <form
          @submit.prevent="login"
          class="lg:w-3/5 w-full bg-[#1E1E1E] text-white rounded-b-3xl lg:rounded-b-none lg:rounded-l-3xl flex flex-col p-8 sm:p-10 lg:p-12 justify-center gap-6"
        >
          <!-- Header -->
          <div class="flex flex-col gap-y-2">
            <h1 class="text-2xl lg:text-3xl font-bold text-white">Login to Your Account</h1>
            <p class="text-gray-400">Admin Access Only</p>
          </div>

          <!-- Input Fields -->
          <div class="flex flex-col gap-y-4">
            <div>
              <label for="name" class="block mb-2 text-sm font-medium text-gray-300">Name</label>
              <input
                v-model="name"
                type="text"
                name="name"
                id="name"
                class="p-3 w-full bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-300">Password</label>
              <input
                v-model="password"
                type="password"
                name="password"
                id="password"
                class="p-3 w-full bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            class="flex border border-white w-fit px-6 py-2 rounded-full justify-center items-center gap-x-3 mt-2 hover:bg-white hover:text-black font-semibold transition-all duration-200 ease-in-out"
          >
            <span>Login</span>
            <icons-icon-login />
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { navigateTo, useCookie } from "nuxt/app";

export default {
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const name = this.name;
      const password = this.password;

      try {
        const response = await this.$api.post(
          "user/login",
          { name, password },
          {
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
            withCredentials: true,
          }
        );
        console.log("BERHASIL!!!", response.data);

        const token = response.data.token;
        if (token) {
          const authToken = useCookie("auth_token");
          authToken.value = token;
        }
        await navigateTo("/admin");
      } catch (error) {
        console.log("GAGAL!!!", error);
      }
    },
  },
};
</script>
