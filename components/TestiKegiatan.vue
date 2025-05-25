<template>
  <div
    class="flex flex-col lg:flex-row justify-center items-center gap-12 mb-12"
  >
    <!-- Slider Suasana Kelas -->
    <div>
      <swiper
        :modules="modules"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :loop="true"
        :pagination="{ clickable: true }"
        class="w-80 h-96 lg:mx-auto rounded-lg"
      >
        <swiper-slide
          v-for="(image, index) in imagesKelas"
          :key="'kelas-' + index"
          class="relative"
        >
          <NuxtImg
            :src="image"
            alt="Suasana Kelas"
            width="320"
            height="384"
            sizes="(max-width: 640px) 100vw, 320px"
            layout="constrained"
            format="auto"
            quality="50"
            loading="lazy"
            class="rounded-lg object-cover"
          />
          <!-- Teks overlay -->
        </swiper-slide>
        <div
          class="absolute z-[10] bottom-0 pb-2 left-0 right-0 bg-black/40 backdrop-blur text-white text-center text-lg font-semibold py-2"
        >
          Suasana Kelas
        </div>
      </swiper>
    </div>

    <!-- Slider Testimoni -->
    <div>
      <swiper
        :modules="modules"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :loop="true"
        :pagination="{ clickable: true }"
        class="w-80 h-96 lg:mx-auto rounded-lg"
      >
        <swiper-slide v-for="(image, index) in testi" :key="'testi-' + index">
          <NuxtImg
            :src="image"
            alt="Testimoni"
            width="320"
            height="384"
            sizes="(max-width: 640px) 100vw, 320px"
            layout="constrained"
            format="auto"
            quality="50"
            loading="lazy"
            class="rounded-lg object-contain"
          />
          <!-- Teks overlay -->
        </swiper-slide>
        <div
          class="absolute z-[10] bottom-0 pb-2 left-0 right-0 bg-black/40 backdrop-blur text-white text-center text-lg font-semibold py-2"
        >
          Testimoni
        </div>
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const modules = [Autoplay, Pagination];

const imagesKelas = [
  "/img/suasana-kelas-1.avif",
  "/img/suasana-kelas-2.avif",
  "/img/suasana-kelas-3.avif",
  "/img/suasana-kelas-4.avif",
  "/img/suasana-kelas-5.avif",
  "/img/suasana-kelas-6.avif",
  "/img/suasana-kelas-7.avif",
  "/img/suasana-kelas-8.avif",
  "/img/suasana-kelas-9.avif",
  "/img/suasana-kelas-10.avif",
  "/img/suasana-kelas-11.avif",
  "/img/suasana-kelas-12.avif",
];

const testi = [
  "/img/testi1.avif",
  "/img/testi2.avif",
  "/img/testi3.avif",
  "/img/testi4.avif",
  "/img/testi5.avif",
  "/img/testi6.avif",
];
</script>
