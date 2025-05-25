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
            sizes="(min-width: 1024px) 320px, 10vw"
            layout="constrained"
            format="auto"
            preload
            class="rounded-lg object-cover"
          />
          <!-- Teks overlay -->
          <div
            class="absolute bottom-0 pb-7 left-0 right-0 bg-black/40 backdrop-blur text-white text-center text-lg font-semibold py-2"
          >
            Suasana Kelas
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- Slider Asrama -->
    <div>
      <swiper
        :modules="modules"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :loop="true"
        :pagination="{ clickable: true }"
        class="w-80 h-96 lg:mx-auto rounded-lg"
      >
        <swiper-slide
          v-for="(image, index) in imagesAsrama"
          :key="'asrama-' + index"
        >
          <NuxtImg
            :src="image"
            alt="Asrama"
            width="320"
            height="384"
            sizes="(min-width: 1024px) 320px, 10vw"
            layout="constrained"
            format="auto"
            preload
            class="rounded-lg object-cover"
          />
          <!-- Teks overlay -->
          <div
            class="absolute bottom-0 pb-7 left-0 right-0 bg-black/40 backdrop-blur text-white text-center text-lg font-semibold py-2"
          >
            Asrama
          </div>
        </swiper-slide>
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

const imagesAsrama = [
  "/img/kamar-mandi.avif",
  "/img/tempat-tidur1.avif",
  "/img/tempat-tidur2.avif",
  "/img/tempat-tidur3.avif",
];
</script>
