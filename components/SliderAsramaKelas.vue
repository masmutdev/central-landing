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
          <img
            :src="image"
            alt="Suasana Kelas"
            class="w-full h-full object-cover"
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
          <img :src="image" alt="Asrama" class="w-full h-full object-cover" />
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
  "/IMG_1679-1536x2048.jpg",
  "/IMG_1685-1536x2048.jpg",
  "/IMG_1673-1536x2048.jpg",
  "/dd50d515-1815-45ef-af06-07cf848ef984-1536x1152.jpg",
];

const imagesAsrama = [
  "/716c3a7f-10b8-4873-baba-ac57ea62b65b.jpg",
  "/IMG_3251-1536x1152.jpg",
  "/IMG_3257-1536x864.jpg",
  "/d993e3f2-d258-409b-b94c-db58a2974961.jpg",
];
</script>
