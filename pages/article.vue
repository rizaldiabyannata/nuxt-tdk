<template>
  <div class="relative h-[50vh] lg:h-screen flex flex-col justify-center text-black overflow-hidden">
    <!-- Background image overlay with brightness -->
    <div class="absolute inset-0 bg-[url('/img/sample/sample-2.jpeg')] bg-cover bg-center brightness-50 -z-10"></div>

    <!-- Konten tetap terang -->
    <div class="w-9/10 pl-12 space-y-2 lg:pl-24 lg:w-1/2 relative z-10">
      <h1 class="font-extrabold text-2xl lg:text-5xl text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h1>
      <p class="lg:text-2xl text-white">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ab magni explicabo
        quibusdam architecto tenetur?
      </p>
      <a
        href=""
        class="flex flex-row w-fit shadow-xl backdrop-blur-sm text-white border rounded-full px-4 py-2 mt-6 text-sm items-center space-x-2 hover:backdrop-blur-lg transition-colors hover:text-black"
      >
        <icons-icon-arrow-right />
        <p class="font-semibold text-white">Our Services</p>
      </a>
    </div>
  </div>

  <!-- Tetap gunakan bagian ini tanpa perubahan -->
  <div class="max-w-screen min-h-screen flex flex-col justify-center items-center px-8 md:px-32 py-16">
    <div class="flex flex-col w-full">
      <p>Our Article</p>
      <h1 class="text-3xl font bold text-[#EB5523]">Lorem Ipsum</h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-2 md:gap-14 md:mt-8">
      <article-card v-for="article in articleList" :key="article.slug" :title="article.title" :content="article.content" :imageUrl="`http://localhost:5000${article.coverImage}`" :author="article.author"/>

    </div>
    <div class="join mt-4">
      <button class="join-item btn bg-white text-black">1</button>
      <button class="join-item btn bg-white text-black">2</button>
      <button class="join-item btn bg-white text-black">...</button>
      <button class="join-item btn bg-white text-black">99</button>
      <button class="join-item btn bg-white text-black">100</button>
    </div>
  </div>
</template>

<script>
export default{
  data() {
    return{
      articleList: []
    }
  },

  mounted() {
    this.fetchArticles();
  },

  methods: {
    async fetchArticles() {
      console.log("Mencoba mengambil data article dari API...");
      try {
        const response = await this.$api.get("/blogs?limit=2&page=1");
        console.log("Data article berhasil diambil:", response.data);
        this.articleList = response.data.data;
      } catch (error) {
        console.error("Gagal mengambil data article:", error);
      }
    },

    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.article.coverImage = file;
      }
    },
  }
  
}
</script>