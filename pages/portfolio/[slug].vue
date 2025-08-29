<template>
  <div class="relative h-[50vh] flex flex-col">
    <div class="absolute inset-0 bg-[url('/img/sample/sample-4.jpeg')] bg-cover bg-center brightness-50 -z-10"></div>
    <div class="relative space-y-2 lg:w-1/2 flex flex-col h-full justify-center p-4">
      <h1 class="font-extrabold text-2xl lg:text-5xl text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p class="lg:text-white">By PT. Total Desain Konsultan</p>
    </div>
  </div>
  <div class="w-full flex bg-white">
    <PortoTemplate
      :firstParagraph="portfoliosList.shortDescription"
      :image="portfoliosList.coverImage ? `http://localhost:5000${portfoliosList.coverImage}` : ''"
      :secondParagraph="portfoliosList.description"
    />
  </div>
</template>

<script>
import PortoTemplate from "~/components/portoTemplate.vue";
import axios from "axios";

export default {
  name: 'PortfolioDetail',
  components: {
    PortoTemplate,
  },
  data() {
    return {
      portfoliosList: {},
    };
  },
  async mounted() {
    console.log("Attempting to fetch portfolio data from the API...");
    const slug = this.$route.params.slug;
    console.log("Portfolio slug: ", slug);

    if (!slug) {
      console.error("Slug is missing from the route.");
      return;
    }

    try {
      const response = await axios.get(`http://localhost:5000/api/portfolios/${slug}`);
      console.log("Portfolio data fetched successfully:", response.data);
      this.portfoliosList = response.data.data;
    } catch (error) {
      console.error("Failed to fetch portfolio data:", error);
    }
  },
};
</script>


