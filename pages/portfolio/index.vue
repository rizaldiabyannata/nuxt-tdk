<template>
  <div class="relative h-[50vh] lg:h-screen flex flex-col justify-center items-center">
    <div class="absolute inset-0 bg-[url('/img/sample/sample-4.jpeg')] bg-cover bg-center brightness-50 -z-10"></div>

    <div class="relative space-y-2 lg:w-1/2 flex flex-col items-center p-4">
      <h1 class="font-extrabold text-2xl lg:text-5xl text-center text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h1>
      <p class="lg:text-2xl text-center text-white">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ab magni explicabo quibusdam architecto tenetur?
      </p>
      <a href=""
        class="group flex flex-row w-fit border-white border rounded-full px-4 py-2 mt-6 text-sm items-center space-x-2 hover:bg-white transition-colors">
        <icons-icon-arrow-right />
        <p class="font-semibold text-white group-hover:text-black">Our Services</p>
      </a>
    </div>
  </div>

  <div class="max-w-screen min-h-screen flex flex-col justify-center items-center px-8 md:px-32 py-16">
    <div class="flex flex-col w-full">
      <p>Our Article</p>
      <h1 class="text-3xl font bold text-[#EB5523]">Lorem Ipsum</h1>
    </div>
    <div class="flex flex-col lg:flex-row w-full mt-5 gap-4">
      <homepage-card class="w-full lg:w-1/2" />
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 w-full lg:w-1/2">
        <homepage-card-small class="" />
        <homepage-card-small class="" />
        <homepage-card-small class="" />
        <homepage-card-small class="" />
      </div>
    </div>
  </div>
  <div class="max-w-screen min-h-screen flex flex-col justify-center items-center px-8 md:px-32 py-16 bg-slate-300 gap-8">
    <div class="flex flex-col w-full">
      <p>Our Article</p>
      <h1 class="text-3xl font bold text-[#EB5523]">Lorem Ipsum</h1>
    </div>
    <div class="flex flex-col lg:flex-row w-full mt-5 justify-center items-center">
      <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-24 md:grid-cols-2 md:gap-x-6 w-full gap-y-4">
        <homepage-card class="h-5/6" 
        v-for="portfolio in portfoliosList"
        :title="portfolio.title"
        :shortDescription="portfolio.shortDescription"
        :imageUrl="`http://localhost:5000${portfolio.coverImage}`"
        :slug="portfolio.slug"
        />
        
      </div>
    </div>
    <div class="join">
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
      portfoliosList: []
    }
  },

  mounted() {
    this.fetchPortfolios();
  },

  methods: {
    async fetchPortfolios() {
      console.log("Mencoba mengambil data portfolio dari API...");
      try {
        const response = await this.$api.get("/portfolios?limit5&page=1&status=all");
        console.log("Data portfolio berhasil diambil:", response.data);
        this.portfoliosList = response.data.data;
      } catch (error) {
        console.error("Gagal mengambil data portfolio:", error);
      }
    },

    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.portfolio.coverImage = file;
      }
    },
  }
  
}
</script>