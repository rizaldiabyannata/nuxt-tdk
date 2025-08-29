<template>
  <div class="relative min-h-screen flex flex-col md:pl-12 lg:pl-32">
    <div class="absolute inset-0 bg-[url('/img/sample/sample-5.jpeg')] bg-cover bg-center brightness-50 -z-10"></div>

    <div class="relative flex flex-col flex-grow w-full justify-center p-4">
      <div class="flex flex-col w-full md:w-1/2 justify-center items-start">
        <h1 class="font-bold text-xl md:text-5xl text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p class="mt-2 text-sm sm:text-base text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi esse accusamus omnis nobis eaque tempore ipsam, odit culpa aut, similique eum dolores iure error
          temporibus molestiae, voluptatum natus! Minus!
        </p>
      </div>
      <a href=""
        class="group flex flex-row w-fit border-white border rounded-full px-4 py-2 mt-6 text-sm items-center space-x-2 hover:bg-white transition-colors">
        <icons-icon-arrow-right />
        <p class="font-semibold text-white group-hover:text-black">Our Services</p>
      </a>
    </div>
  </div>

  <div class="max-w-screen min-h-screen flex flex-col justify-center lg:px-24 px-8 space-y-2 py-4 ">
    <div class="flex flex-col w-full">
      <p class="text-xl lg:text-3xl">Our Services</p>
      <h1 class="text-3xl lg:text-5xl font-bold text-[#EB5523]">Lorem Ipsum</h1>
    </div>
    <div class="grid xl:grid-cols-3 grid-cols-1 gap-4 lg:gap-16 md:grid-cols-1 w-full pt-8">
      <services-card title="Perencanaan Proyek" :list="list_1" :image="img_1"/>
      <services-card title="Supervisi Proyek" :list="list_2" :image="img_2"/>
      <services-card title="Manajemen Konstruksi" :list="list_3" :image="img_3"/>
    </div>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        list_1: ["Perencanaan konstruksi gedung", "Desain jalan dan jembatan","Proyek irigasi dan sumber daya air"],
        list_2: ["Jaminan kualitas di lokasi", "Kepatuhan terhadap protokol keselamatan","Penyelesaian proyek tepat waktu"],
        list_3: ["Manajemen biaya dan anggaran", "Penjadwalan dan koordinasi","Manajemen risiko dan mitigasi"],
        img_1: "/img/projectPlanning.jpeg",
        img_2: "/img/supervision.jpeg",
        img_3: "/img/management.jpeg",
      }
    }
  }
</script>