<template>
  <div class="relative min-h-dvh flex flex-col">
    <div class="absolute inset-0 bg-[url('/img/sample/sample-1.jpeg')] bg-cover bg-center brightness-50 -z-10"></div>

    <div class="flex flex-col flex-grow w-full justify-center items-center p-4 mt-[YOUR_NAVBAR_HEIGHT]">
      <div class="flex flex-col w-full max-w-xl sm:w-4/5 md:w-3/5 lg:w-2/5 justify-center items-center text-center">
        <h1 class="font-bold text-xl sm:text-2xl md:text-3xl text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p class="mt-2 text-sm sm:text-base text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi esse accusamus omnis nobis eaque tempore
          ipsam, odit culpa aut, similique eum dolores iure error
          temporibus molestiae, voluptatum natus! Minus!
        </p>
      </div>
      <NuxtLink to="/about-us"
        class="flex flex-row shadow-xl backdrop-blur-lg border border-white rounded-full px-4 py-2 mt-6 text-sm items-center space-x-2 hover:bg-white hover:text-black group transition-colors">
        <icons-icon-arrow-down />
        <p class="font-semibold text-white group-hover:text-black">More Of Our Team</p>
      </NuxtLink>
    </div>
  </div>

  <div class="flex min-h-screen bg-white justify-center items-center p-4 sm:p-8">
    <div
      class="flex flex-col bg-[url(/img/grafisbg.png)] bg-cover bg-no-repeat w-full max-w-3xl lg:max-w-4xl aspect-video sm:aspect-auto sm:min-h-[400px] md:min-h-[500px] rounded-2xl lg:rounded-3xl text-white p-8 sm:p-10 md:p-12 space-y-3 sm:space-y-4 justify-center">
      <p class="font-bold text-2xl sm:text-3xl md:text-4xl">Visi Kami</p>
      <p class="pt-2 sm:pt-4 text-base sm:text-lg md:text-xl">
        Menjadi pemimpin terpercaya dalam perencanaan dan supervisi proyek, menciptakan solusi berkelanjutan dan
        inovatif yang berkontribusi pada pembangunan infrastruktur dan
        kemajuan masyarakat.
      </p>
      <NuxtLink to="about-us"
        class="flex flex-row items-center border-white border w-fit rounded-full px-4 py-2 space-x-2 mt-4 sm:mt-6 hover:bg-white/20 transition-colors">
        <icons-icon-arrow-right />
        <p class="text-white">About Us</p>
      </NuxtLink>
    </div>
  </div>

  <div class="flex flex-col min-h-screen bg-[#DDDDDD] justify-center items-center py-12 sm:py-16 px-4 sm:px-8 md:px-16">
    <div class="flex flex-col w-full max-w-6xl justify-center items-center">
      <div class="flex flex-col w-full items-start">
        <div>
          <h1 class="text-black text-xl sm:text-2xl font-semibold">Our Portfolio</h1>
          <p class="w-full font-bold text-[#EB5523] text-3xl sm:text-4xl md:text-5xl mt-1">Lorem Ipsum</p>
        </div>
        <div class="flex w-full items-end justify-end ">
          <NuxtLink to="/portfolio" class="flex flex-row text-black items-center mt-4 sm:mt-0 hover:text-opacity-75 hover:text-orange-400">
            <p class="font-semibold mr-1">More</p>
            <icons-icon-triple-arrow />
          </NuxtLink>
        </div>
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
  </div>

  <div class="flex flex-col min-h-screen bg-white justify-center items-center py-12 sm:py-16 px-4">
    <div class="flex flex-col w-full max-w-7xl justify-center items-center">
      <div
        class="flex flex-col w-full justify-start items-start sm:items-center text-start sm:text-center mb-6 sm:mb-8">
        <h1 class="text-black text-xl sm:text-2xl font-semibold">News & Report</h1>
        <p class="font-bold text-[#EB5523] text-3xl sm:text-4xl md:text-5xl">Popular News</p>
      </div>

      <div
        class="carousel carousel-center bg-transparent rounded-2xl lg:rounded-3xl w-full max-w-7xl space-x-4 sm:space-x-8 p-4">
        <div class="carousel-item">
          <carousel-card />
        </div>
        <div class="carousel-item">
          <carousel-card />
        </div>
        <div class="carousel-item">
          <carousel-card />
        </div>
        <div class="carousel-item">
          <carousel-card />
        </div>
        <div class="carousel-item">
          <carousel-card />
        </div>
        <div class="carousel-item">
          <carousel-card />
        </div>
        <div class="carousel-item">
          <carousel-card />
        </div>
        <div class="carousel-item">
          <carousel-card />
        </div>
      </div>
    </div>
  </div>

  <div class="logos group bg-white relative overflow-hidden whitespace-nowrap py-12">
    <div class="animate-marquee group-hover:[animation-play-state:paused] inline-block w-max">
      <img class="mx-8 sm:mx-12 md:mx-16 inline h-12 sm:h-16" src="/img/tesla.png" alt="Tesla" />
      <img class="mx-8 sm:mx-12 md:mx-16 inline h-12 sm:h-16" src="/img/porsche.png" alt="Porsche" />
      <img class="mx-8 sm:mx-12 md:mx-16 inline h-12 sm:h-16" src="/img/aston-martin.png" alt="Aston Martin" />
      <img class="mx-8 sm:mx-12 md:mx-16 inline h-12 sm:h-16" src="/img/nike.png" alt="Nike" />
      <img class="mx-8 sm:mx-12 md:mx-16 inline h-12 sm:h-16" src="/img/jordan.png" alt="Jordan" />
      <img class="mx-8 sm:mx-12 md:mx-16 inline h-12 sm:h-16" src="/img/adidas.png" alt="Adidas" />
      <img class="mx-8 sm:mx-12 md:mx-16 inline h-12 sm:h-16" src="/img/bmw.png" alt="BMW" />
    </div>
    <div class="animate-marquee group-hover:[animation-play-state:paused] inline-block w-max" aria-hidden="true">
      <img class="mx-8 sm:mx-12 md:mx-16 inline h-12 sm:h-16" src="/img/tesla.png" alt="Tesla" />
      <img class="mx-8 sm:mx-12 md:mx-16 inline h-12 sm:h-16" src="/img/porsche.png" alt="Porsche" />
      <img class="mx-8 sm:mx-12 md:mx-16 inline h-12 sm:h-16" src="/img/aston-martin.png" alt="Aston Martin" />
      <img class="mx-8 sm:mx-12 md:mx-16 inline h-12 sm:h-16" src="/img/nike.png" alt="Nike" />
      <img class="mx-8 sm:mx-12 md:mx-16 inline h-12 sm:h-16" src="/img/jordan.png" alt="Jordan" />
      <img class="mx-8 sm:mx-12 md:mx-16 inline h-12 sm:h-16" src="/img/adidas.png" alt="Adidas" />
      <img class="mx-8 sm:mx-12 md:mx-16 inline h-12 sm:h-16" src="/img/bmw.png" alt="BMW" />
    </div>
  </div>

  <div class="flex flex-col md:flex-row min-h-screen bg-[#DDDDDD] justify-center items-stretch">
    <div class="flex flex-col w-full md:w-3/5 lg:w-1/2 justify-center p-6 sm:p-8 md:p-12 lg:p-16">
      <h1 class="text-3xl sm:text-4xl font-bold text-black">Contact Us</h1>
      <p class="text-black text-base sm:text-lg md:text-xl pt-4 sm:pt-4">Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Esse perferendis eos
        necessitatibus, totam earum quasi a.</p>
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
          <icons-icon-arrow-right-filled />
          <p class="font-semibold text-black">Send</p>
        </a>
      </form>
    </div>

    <div
      class="hidden md:flex h-auto md:h-full w-full md:w-2/5 lg:w-1/2 bg-[url(/img/form-pict.jpg)] bg-cover bg-center">
    </div>
  </div>

</template>

<style>
  .animate-marquee {
    animation: marquee 25s linear infinite;
    /* Durasi bisa disesuaikan */
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-100%);
    }
  }
</style>