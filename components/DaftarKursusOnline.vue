<template>
  <section class="min-h-screen pt-0 px-3 text-center">
    <!-- Jumbotron -->
    <div
      class="relative bg-gradient-to-r from-yellow-100 to-yellow-400 rounded-lg p-8 mb-10 flex flex-col items-center justify-between shadow-lg"
    >
      <div class="text-center font-poppins lg:my-[40px]">
        <h2
          class="text-3xl lg:text-[40px] font-bold text-gray-800 mb-4 max-w-[40rem]"
        >
          Pengen bisa lancar ngomong Inggris dalam waktu yang singkat?
        </h2>
        <p class="text-red-700 text-4xl font-bold">Hanya Dengan 99rb</p>
      </div>
      <div
        class="flex lg:flex-row flex-col justify-center lg:justify-between items-start"
      >
        <NuxtImg
          src="/img/model-central.avif"
          alt="Model Central Course"
          width="400"
          height="400"
          sizes="400px"
          quality="80"
          preload
          priority
          format="auto"
          layout="constrained"
          class="rounded-lg transform hover:scale-105 transition-transform"
        />
        <div class="flex flex-col justify-center items-center">
          <div class="text-center font-poppins lg:my-[40px]">
            <h2
              class="text-3xl lg:text-[40px] font-bold text-gray-800 mb-4 max-w-[40rem]"
            >
              kalian bisa belajar bahasa Inggris secara Online!
            </h2>
          </div>
          <a
            href="https://kunjungi.website/admin-mong"
            target="_blank"
            rel="noopener noreferrer"
            @click="trackClick('tombol_atas_online')"
            class="block bg-yellow-700/90 text-lg lg:text-4xl shadow-lg text-white font-semibold py-3 px-6 lg:py-6 lg:px-12 rounded-lg hover:bg-yellow-500 transition duration-300 hover:animate-none animate-pulseSlow"
          >
            Daftar Sekarang
          </a>
        </div>
      </div>

      <div
        class="inline-block p-[4px] rounded-lg bg-[length:200%_200%] bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 animate-borderMove animate-pulseSlow mt-4"
      >
        <span class="sr-only">status indicator</span>
      </div>
    </div>

    <!-- Alasan Section -->
    <h1 class="text-3xl font-poppins font-bold text-gray-900 mb-10 text-center">
      Apakah kalian pernah dalam situasi seperti ini?
    </h1>

    <div class="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
      <div
        class="relative bg-yellow-400/30 rounded-lg shadow-md p-6 flex flex-col lg:flex-row items-center space-x-4"
      >
        <p class="text-gray-700 text-lg text-start">
          Pengen belajar bahasa Inggris tapi malu karena
          <strong>tidak bisa sama sekali</strong>
        </p>
      </div>

      <div
        class="relative bg-yellow-400/30 rounded-lg shadow-md p-6 flex flex-col lg:flex-row items-center space-x-4"
      >
        <p class="text-gray-700 text-lg text-start">
          Ngerti dia ngomong apa tapi <strong>tidak tau mau jawab apa</strong>
        </p>
      </div>

      <div
        class="relative bg-yellow-400/30 rounded-lg shadow-md p-6 flex flex-col lg:flex-row items-center space-x-4"
      >
        <p class="text-gray-700 text-lg text-start">
          <strong>Terlalu sibuk</strong> dan belum bisa belajar langsung ke Pare
        </p>
      </div>

      <div
        class="relative bg-yellow-400/30 rounded-lg shadow-md p-6 flex flex-col lg:flex-row items-center space-x-4"
      >
        <p class="text-gray-700 text-lg text-start">
          Bisa ngomong Inggris tapi <strong>gitu-gitu aja</strong>
        </p>
      </div>

      <div
        class="relative bg-yellow-400/30 rounded-lg shadow-md p-6 flex flex-col lg:flex-row items-center space-x-4"
      >
        <p class="text-gray-700 text-lg text-start">
          Pengen kursus online yang biayanya <strong>super murah</strong>
        </p>
      </div>

      <div
        class="relative bg-yellow-400/30 rounded-lg shadow-md p-6 flex flex-col lg:flex-row items-center space-x-4"
      >
        <p class="text-gray-700 text-lg text-start">
          Pengen bisa berbahasa Inggris
          <strong>dalam waktu yang singkat</strong>
        </p>
      </div>
    </div>

    <section class="py-16 px-6 bg-yellow-50">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
        Gak perlu cemas, YUK JOIN Kelas Online Central Course Kampung Inggris!
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div
          v-for="item in paket"
          :key="item.id"
          class="relative flex items-center bg-yellow-400 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 p-4 cursor-pointer"
        >
          <!-- Gambar Sale di pojok kanan atas -->
          <NuxtImg
            src="/img/certification.avif"
            alt="Top"
            class="absolute top-5 left-2 w-[4rem] h-[4rem]"
          />

          <!-- Isi Card -->
          <div class="relative ml-4 flex-1">
            <div
              class="absolute top-[-25px] left-[-10%] lg:left-[-1rem] bg-green-900 text-white text-xs font-semibold px-2 py-1 rounded-md inline-block mb-1"
            >
              {{ item.level }}
            </div>
            <div class="text-2xl text-gray-800 font-bold">
              {{ item.jenis }}
            </div>
            <div class="text-3xl lg:text-4xl font-bold text-gray-900">
              {{ item.paket }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <div
      class="bg-white rounded-lg overflow-hidden max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row items-center gap-8"
    >
      <div class="w-full lg:w-1/2">
        <h2
          class="text-4xl font-bold text-gray-900 mb-6 text-center lg:text-left"
        >
          "Kalian sudah bisa lancar bahasa Inggris hanya dengan kursus seharga
          <strong class="text-red-500">PAKET INTERNET 1 BULAN</strong>"
        </h2>
        <h2 class="text-[50px] font-bold text-red-500 mb-6 text-center">
          <strong class="text-red-500">ONLY 99K</strong>
        </h2>
      </div>
      <!-- Gambar: di atas untuk mobile, di samping kanan untuk desktop -->
      <div class="w-full lg:w-1/2">
        <NuxtImg
          src="/img/brosur.avif"
          alt="Central Course Model"
          class="w-full h-auto object-contain rounded-lg shadow-lg"
        />
      </div>

      <!-- List Fasilitas -->
    </div>

    <div
      class="bg-white rounded-lg overflow-hidden max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row items-center gap-8"
    >
      <!-- Gambar: di atas untuk mobile, di samping kanan untuk desktop -->
      <div class="w-full lg:w-1/2 hidden lg:flex">
        <NuxtImg
          src="/img/model-central-2.avif"
          alt="Central Course Model"
          class="w-full h-auto object-contain"
        />
      </div>

      <!-- List Fasilitas -->
      <div class="w-full lg:w-1/2">
        <h2
          class="text-2xl font-bold text-gray-900 mb-6 text-center lg:text-left"
        >
          Keunggulan Kelas Online Central Course
        </h2>

        <ul class="space-y-4">
          <li class="flex items-start space-x-3">
            <NuxtImg
              src="/img/checks.avif"
              alt="check icon"
              class="w-6 h-6 mt-1"
            />
            <span class="text-gray-700 text-lg font-medium text-start">
              20x pertemuan dalam 1 bulan (senin-jum’at)
            </span>
          </li>
          <li class="flex items-start space-x-3">
            <NuxtImg
              src="/img/checks.avif"
              alt="check icon"
              class="w-6 h-6 mt-1"
            />
            <span class="text-gray-700 text-lg font-medium text-start"
              >Durasi belajar 75 menit/ pertemuan</span
            >
          </li>
          <li class="flex items-start space-x-3">
            <NuxtImg
              src="/img/checks.avif"
              alt="check icon"
              class="w-6 h-6 mt-1"
            />
            <span class="text-gray-700 text-lg font-medium text-start"
              >Tutor yang ramah dan profesional</span
            >
          </li>
          <li class="flex items-start space-x-3">
            <NuxtImg
              src="/img/checks.avif"
              alt="check icon"
              class="w-6 h-6 mt-1"
            />
            <span class="text-gray-700 text-lg font-medium text-start"
              >Video Replay Class</span
            >
          </li>
          <li class="flex items-start space-x-3">
            <NuxtImg
              src="/img/checks.avif"
              alt="check icon"
              class="w-6 h-6 mt-1"
            />
            <span class="text-gray-700 text-lg font-medium text-start"
              >Konsultasi dengan Tutor secara Intensif</span
            >
          </li>
          <li class="flex items-start space-x-3">
            <NuxtImg
              src="/img/checks.avif"
              alt="check icon"
              class="w-6 h-6 mt-1"
            />
            <span class="text-gray-700 text-lg font-medium text-start">
              Online Via Google Meet
            </span>
          </li>
          <li class="flex items-start space-x-3">
            <NuxtImg
              src="/img/checks.avif"
              alt="check icon"
              class="w-6 h-6 mt-1"
            />
            <span class="text-gray-700 text-lg font-medium text-start"
              >Sertifikat Digital</span
            >
          </li>
        </ul>
      </div>
    </div>

    <div class="flex flex-col justify-center items-center my-12">
      <img
        src="/Arrows-3-pointing-down-arrow-down-animated.webp"
        alt="Animasi panah ke bawah"
        width="auto"
        height="auto"
      />
    </div>
    <div
      class="inline-block p-[4px] rounded-lg bg-[length:200%_200%] bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 animate-borderMove animate-pulseSlow"
    >
      <a
        href="https://kunjungi.website/admin-mong"
        target="_blank"
        rel="noopener noreferrer"
        class="block bg-yellow-700/30 text-2xl shadow-lg text-black font-semibold py-6 px-12 rounded-lg hover:bg-yellow-500 transition duration-300 hover:animate-none animate-pulseSlow"
        @click="trackClick('tombol_bawah_online')"
      >
        Daftar Sekarang
      </a>
    </div>
    <div
      class="aspect-w-16 flex flex-col justify-center items-center aspect-h-9 w-full my-10"
    >
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/mnztuIxaYSI?si=qoY02D9KYKlIgMly"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        referrerpolicy="strict-origin-when-cross-origin"
        class="rounded-lg"
      />
    </div>

    <div>
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12 mt-8">
        Suasana Kelas dan Testimoni
      </h2>
      <TestiKegiatan />
    </div>
    <div
      class="w-full rounded-lg flex flex-col justify-center items-center my-12"
    >
      <NuxtImg
        src="/img/kalender-akademik-online.avif"
        class="rounded-lg shadow-black shadow-lg"
        alt=""
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute();
const { $fbq } = useNuxtApp();

function trackClick(source: string) {
  const fbq = $fbq as (
    event: string,
    action: string,
    data?: Record<string, string>
  ) => void;

  if (route.query.tab === "online") {
    if (typeof fbq === "function") {
      fbq("track", "Lead", {
        content_name: source,
      });
    }
  }
}

const TestiKegiatan = defineAsyncComponent(
  () => import("~/components/TestiKegiatan.vue")
);
const paket = [
  {
    id: 1,
    level: "BASIC",
    jenis: "SPEAKING",
    paket: "99K",
  },
  {
    id: 2,
    level: "INTERMEDIATE",
    jenis: "SPEAKING",
    paket: "99K",
  },
  {
    id: 3,
    level: "BASIC",
    jenis: "GRAMMAR",
    paket: "99K",
  },
  {
    id: 4,
    level: "INTERMEDIATE",
    jenis: "GRAMMAR",
    paket: "99K",
  },
  {
    id: 5,
    level: "BASIC",
    jenis: "PRONUNCIATION",
    paket: "99K",
  },
  {
    id: 6,
    level: "INTERMEDIATE",
    jenis: "PRONUNCIATION",
    paket: "99K",
  },
];
</script>

<style scoped>
@keyframes borderMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-borderMove {
  animation: borderMove 3s linear infinite;
}
</style>
