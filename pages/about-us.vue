<template>
  <div class="relative h-[50vh] lg:h-screen flex flex-col justify-center items-center">
    <div class="absolute inset-0 bg-[url('/img/sample/aboutus.png')] bg-cover bg-center brightness-50 -z-10"></div>

    <div class="relative space-y-2 lg:w-1/2 flex flex-col items-center p-4">
      <h1 class="font-extrabold text-2xl lg:text-5xl text-center text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p class="lg:text-2xl text-center text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ab magni explicabo quibusdam architecto tenetur?</p>
      <NuxtLink to="/our-services" class="group flex flex-row w-fit border-white border rounded-full px-4 py-2 mt-6 text-sm items-center space-x-2 hover:bg-white transition-colors">
        <icons-icon-arrow-right />
        <p class="font-semibold text-white group-hover:text-black">Our Services</p>
      </NuxtLink>
    </div>
  </div>

  <div class="max-w-screen min-h-screen flex flex-col justify-center px-12 lg:px-24 text-justify space-y-4">
    <div class="flex flex-col w-full space-y-2">
      <h1 class="text-4xl lg:text-6xl font-bold text-[#EB5523]">Our Vision</h1>
      <p class="lg:text-2xl">
        To be a trusted leader in project planning and supervision, creating sustainable and innovative solutions that contribute to infrastructure development and community advancement.
      </p>
    </div>
    <hr />
    <div class="flex flex-col w-full space-y-2">
      <h1 class="text-4xl lg:text-6xl font-bold text-[#EB5523]">Our Mission</h1>
      <ol class="list-decimal pl-6 lg:text-2xl">
        <li>Providing the best planning and supervision services for building, road, bridge, and water resource projects.</li>
        <li>Ensuring efficient construction management that meets client expectations.</li>
        <li>Adopting innovative technologies and practices that prioritize quality, safety, and environmental sustainability.</li>
        <li>Building long-term partnerships based on trust and professionalism.</li>
      </ol>
    </div>
  </div>

  <div class="flex flex-col max-w-screen min-h-screen bg-gray-200 justify-center items-center py-12">
    <h1 class="text-3xl text-[#EB5523] font-bold">Management Structure</h1>

    <!-- Main Director -->
    <div v-if="mainDirector" class="flex flex-col items-center mb-12">
      <h2 class="text-2xl text-[#EB5523] font-semibold mb-4">Main Director</h2>
      <bio-card
        :name="mainDirector.name"
        :title="mainDirector.title"
        :image="mainDirector.image"
      />
    </div>
    <p v-else>Main director not found.</p>

    <!-- Other Directors -->
    <div v-if="otherDirectors.length" class="flex flex-col items-center mb-12">
        <h2 class="text-2xl text-[#EB5523] font-semibold mb-4">Board of Directors</h2>
        <div class="flex flex-col md:flex-row flex-wrap justify-center gap-8">
            <bio-card
                v-for="member in otherDirectors"
                :key="member.name"
                :name="member.name"
                :title="member.title"
                :image="member.image"
            />
        </div>
    </div>

    <!-- General Management -->
    <div v-if="generalManagement.length" class="flex flex-col items-center">
        <h2 class="text-2xl text-[#EB5523] font-semibold mb-4">General Management</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <bio-card
                v-for="member in generalManagement"
                :key="member.name"
                :name="member.name"
                :title="member.title"
                :image="member.image"
            />
        </div>
    </div>
  </div>
</template>

<script>
import BioCard from "~/components/bio-card.vue";

export default {
  name: 'AboutUs',
  components: {
    BioCard,
  },
  data() {
    return {
      managementTeam: [
        { level: 1, name: "John Doe", title: "Main Director", image: "/img/bioprofile.png" },
        { level: 2, name: "Jane Smith", title: "Operational Director", image: "/img/bioprofile.png" },
        { level: 2, name: "Peter Jones", title: "Financial Director", image: "/img/bioprofile.png" },
        { level: 2, name: "Alice Brown", title: "Head of Technical Division", image: "/img/bioprofile.png" },
        { level: 3, name: "Rizky Pratama", title: "Marketing Manager", image: "/img/bioprofile.png" },
        { level: 3, name: "Maya Indah Sari", title: "HR Manager", image: "/img/bioprofile.png" },
        { level: 3, name: "Joko Susilo", title: "Senior Project Manager", image: "/img/bioprofile.png" },
        { level: 3, name: "Citra Kirana", title: "Graphic Design Specialist", image: "/img/bioprofile.png" },
      ],
    };
  },
  computed: {
    // Computed property for the Main Director (level 1)
    mainDirector() {
      return this.managementTeam.find((member) => member.level === 1);
    },
    // Computed property for Other Directors (level 2)
    otherDirectors() {
      return this.managementTeam.filter((member) => member.level === 2);
    },
    // Computed property for General Management (level 3 and up)
    generalManagement() {
      return this.managementTeam.filter((member) => member.level >= 3);
    },
  },
};
</script>
