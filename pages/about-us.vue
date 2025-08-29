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

  <div class="max-w-screen h-screen flex flex-col justify-center px-12 lg:px-24 text-justify space-y-4">
    <div class="flex flex-col w-full space-y-2">
      <h1 class="text-4xl lg:text-6xl font-bold text-[#EB5523]">Our Vision</h1>
      <p class="lg:text-2xl">
        Menjadi pemimpin terpercaya dalam perencanaan dan supervisi proyek, menciptakan solusi berkelanjutan dan inovatif yang berkontribusi pada pembangunan infrastruktur dan
        kemajuan masyarakat.
      </p>
    </div>
    <hr />
    <div class="flex flex-col w-full space-y-2">
      <h1 class="text-4xl lg:text-6xl font-bold text-[#EB5523]">Our Mission</h1>
      <ol class="list-decimal pl-6 lg:text-2xl">
        <li>Memberikan layanan perencanaan dan supervisi terbaik untuk proyek gedung, jalan, jembatan, dan sumber daya air.</li>
        <li>Memastikan manajemen konstruksi yang efisien dan memenuhi ekspektasi klien.</li>
        <li>Mengadopsi teknologi dan praktik inovatif yang memprioritaskan kualitas, keselamatan, dan keberlanjutan lingkungan.</li>
        <li>Membangun kemitraan jangka panjang yang didasarkan pada kepercayaan dan profesionalisme.</li>
      </ol>
    </div>
  </div>
  <div class="flex flex-col max-w-screen min-h-screen bg-gray-200 justify-center items-center py-6">
    <h1 class="text-3xl text-[#EB5523] font-bold">Struktur Manajemen</h1>
    <h2 class="text-2xl text-[#EB5523] font-semibold mb-4">Direktur Utama</h2>
    <div class="flex flex-row w-180 h-fit pt-6">
      <img src="/img/Alireza.jpg" alt="Alireza" class="w-64 h-auto object-cover shadow-lg shadow-gray-400 rounded-lg" />
      <div class="flex flex-col bg-white h-auto w-full my-4 shadow-lg shadow-gray-400 py-6 px-8 justify-center space-y-4 rounded-r-lg">
        <h1 class="text-black font-bold text-2xl">Firman</h1>
        <h2 class="text-black font-semibold text-lg">Direktur Utama</h2>
        <p class="text-black text-justify pt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, sapiente ea ab minima quae alias odio velit labore, mollitia cupiditate delectus, molestias nobis
          eius? Quis rem nobis, perferendis, sit fuga adipisci eum asperiores ad magni, id explicabo molestias minus quidem.
        </p>
        <div class="flex flex-row space-x-6 w-full justify-center items-center">
          <icons-icon-linked-in />
          <icons-icon-facebook />
          <icons-icon-instagram />
          <icons-icon-twitter />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3 items-center gap-12 mt-12">
      <bio-card />
      <bio-card />
      <bio-card />
    </div>

    <!-- <div class="flex justify-center mb-12">
      <BioCard
        v-if="mainDirector"
        :name="mainDirector.name"
        :title="mainDirector.title"
        :image="mainDirector.image"
      />
      <p v-else>Direktur utama tidak ditemukan.</p>
    </div>

    <div class="flex flex-col space-y-2 xl:flex-row mb-12 max-w-screen px-2 space-x-2">
      <BioCard
        v-for="member in otherDirectors"
        :key="member.id"
        :name="member.name"
        :title="member.title"
        :image="member.image"
       class=""/>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8 mb-12">
      <BioCard
        v-for="member in generalManagement"
        :key="member.id"
        :name="member.name"
        :title="member.title"
        :image="member.image"
      />
    </div> -->

    <div class="flex flex-row w-full"></div>
  </div>
</template>

<script>
import { h } from "vue";
import BioCard from "/components/bio-card.vue";

export default {
  data() {
    return {
      managementTeam: [
        { level: 1, name: "John Doe", title: "Direktur Utama", image: "/img/bioprofile.png" },
        { level: 2, name: "Jane Smith", title: "Direktur Operasional", image: "/img/bioprofile.png" },
        { level: 2, name: "Peter Jones", title: "Direktur Keuangan", image: "/img/bioprofile.png" },
        { level: 2, name: "Alice Brown", title: "Kepala Divisi Teknis", image: "/img/bioprofile.png" },
        { level: 3, name: "Rizky Pratama", title: "Manajer Pemasaran", image: "/img/bioprofile.png" },
        { level: 3, name: "Maya Indah Sari", title: "Manajer SDM", image: "/img/bioprofile.png" },
        { level: 3, name: "Joko Susilo", title: "Kepala Proyek Senior", image: "/img/bioprofile.png" },
        { level: 3, name: "Citra Kirana", title: "Spesialis Desain Grafis", image: "/img/bioprofile.png" },
      ],
    };
  },
  computed: {
    // Computed property untuk Direktur Utama (ID 1)
    mainDirector() {
      return this.managementTeam.find((member) => member.level === 1);
    },
    // Computed property untuk Direksi Lainnya (ID 2, 3, 4)
    otherDirectors() {
      return this.managementTeam.filter((member) => member.level === 2);
    },
    // Computed property untuk Manajemen Umum (ID 5 ke atas)
    generalManagement() {
      return this.managementTeam.filter((member) => member.level >= 3);
    },
  },
};
</script>
