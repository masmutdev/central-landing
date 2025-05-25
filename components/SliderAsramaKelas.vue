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
  "/suasana-kelas-1.jpg",
  "/suasana-kelas-2.jpg",
  "/suasana-kelas-3.jpg",
  "/suasana-kelas-4.jpg",
  "/suasana-kelas-5.jpg",
  "/suasana-kelas-6.jpg",
  "/suasana-kelas-7.jpg",
  "/suasana-kelas-8.jpg",
  "/suasana-kelas-9.jpg",
  "/suasana-kelas-10.jpg",
  "/suasana-kelas-11.jpg",
  "/suasana-kelas-12.jpg",
];

const imagesAsrama = [
  "/kamar-mandi.jpg",
  "/tempat-tidur1.jpg",
  "/tempat-tidur2.jpg",
  "/tempat-tidur3.jpg",
];
</script>
