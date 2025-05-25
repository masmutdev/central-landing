<template>
  <section class="min-h-screen pt-0 px-3 text-center">
    <!-- Jumbotron -->
    <div
      class="relative bg-gradient-to-r from-yellow-100 to-yellow-400 rounded-lg p-8 mb-10 flex flex-col items-center justify-between shadow-lg"
    >
      <div class="text-center font-poppins lg:my-[40px]">
        <h2 class="text-2xl lg:text-[40px] font-bold text-gray-800 mb-4">
          Program Beasiswa 50% Kampung Inggris
        </h2>
        <p class="text-gray-700 text-lg lg:text-[30px]">
          Dapatkan kesempatan belajar dengan potongan biaya 50% di Central
          Course!
        </p>
      </div>
      <NuxtImg
        src="/img/central-course-model.avif"
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
      <div
        class="inline-block p-[4px] rounded-lg bg-[length:200%_200%] bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 animate-borderMove animate-pulseSlow mt-4"
      >
        <a
          href="https://whatsform.com/oeH-r5"
          target="_blank"
          rel="noopener noreferrer"
          class="block bg-yellow-700/30 text-lg lg:text-4xl shadow-lg text-black font-semibold py-3 px-6 lg:py-6 lg:px-12 rounded-lg hover:bg-yellow-500 transition duration-300 hover:animate-none animate-pulseSlow"
        >
          Daftar Sekarang
        </a>
      </div>
    </div>

    <!-- Alasan Section -->
    <h1 class="text-3xl font-poppins font-bold text-gray-900 mb-10 text-center">
      Kenapa Harus Belajar di Central Course?
    </h1>

    <div class="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
      <div
        class="relative bg-yellow-400/30 rounded-lg shadow-md p-6 min-h-[150px] flex items-start gap-4"
      >
        <!-- Pulse -->
        <div
          class="absolute top-2 left-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping"
        >
          <span class="sr-only">status indicator</span>
        </div>
        <div class="absolute top-2 left-2 w-3 h-3 bg-yellow-400 rounded-full">
          <span class="sr-only">status indicator</span>
        </div>
        <!-- Pulse -->
        <div
          class="absolute top-2 right-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping"
        >
          <span class="sr-only">status indicator</span>
        </div>
        <div
          class="absolute top-2 right-[8px] w-3 h-3 bg-yellow-400 rounded-full"
        >
          <span class="sr-only">status indicator</span>
        </div>
        <!-- Icon -->
        <div class="w-16 aspect-[1/1] shrink-0">
          <NuxtImg
            src="/img/ratings.avif"
            alt="icon"
            width="64"
            height="64"
            class="w-full h-full object-contain"
          />
        </div>
        <p class="text-gray-700 text-lg text-start">
          Central Course memiliki metode pembelajaran berkualitas yang dikemas
          secara
          <strong>simple, fun</strong>, dan <strong>mudah dipahami</strong>.
        </p>
      </div>

      <div
        class="relative bg-yellow-400/30 rounded-lg shadow-md p-6 min-h-[150px] flex items-start gap-4"
      >
        <!-- Pulse -->
        <div
          class="absolute top-2 left-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping"
        >
          <span class="sr-only">status indicator</span>
        </div>
        <div class="absolute top-2 left-2 w-3 h-3 bg-yellow-400 rounded-full">
          <span class="sr-only">status indicator</span>
        </div>
        <!-- Pulse -->
        <div
          class="absolute top-2 right-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping"
        >
          <span class="sr-only">status indicator</span>
        </div>
        <div
          class="absolute top-2 right-[8px] w-3 h-3 bg-yellow-400 rounded-full"
        >
          <span class="sr-only">status indicator</span>
        </div>
        <!-- Icon -->
        <div class="w-16 aspect-[1/1] shrink-0">
          <NuxtImg
            src="/img/library.avif"
            alt="icon"
            width="64"
            height="64"
            class="w-full h-full object-contain"
          />
        </div>
        <p class="text-gray-700 text-lg text-start">
          Support <strong>English Area</strong> yang memudahkan teman-teman
          dalam pembiasaan berkomunikasi bahasa Inggris secara aktif.
        </p>
      </div>

      <div
        class="relative bg-yellow-400/30 rounded-lg shadow-md p-6 min-h-[150px] flex items-start gap-4"
      >
        <!-- Pulse -->
        <div
          class="absolute top-2 left-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping"
        >
          <span class="sr-only">status indicator</span>
        </div>
        <div class="absolute top-2 left-2 w-3 h-3 bg-yellow-400 rounded-full">
          <span class="sr-only">status indicator</span>
        </div>
        <!-- Pulse -->
        <div
          class="absolute top-2 right-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping"
        >
          <span class="sr-only">status indicator</span>
        </div>
        <div
          class="absolute top-2 right-[8px] w-3 h-3 bg-yellow-400 rounded-full"
        >
          <span class="sr-only">status indicator</span>
        </div>
        <!-- Icon -->
        <div class="w-16 aspect-[1/1] shrink-0">
          <NuxtImg
            src="/img/teacher.avif"
            alt="icon"
            width="64"
            height="64"
            class="w-full h-full object-contain"
          />
        </div>
        <p class="text-gray-700 text-lg text-start">
          <strong>Pengajar ahli dan berkompeten</strong> dengan pengalaman
          mengajar bertahun-tahun di Kampung Inggris.
        </p>
      </div>

      <div
        class="relative bg-yellow-400/30 rounded-lg shadow-md p-6 min-h-[150px] flex items-start gap-4"
      >
        <!-- Pulse -->
        <div
          class="absolute top-2 left-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping"
        >
          <span class="sr-only">status indicator</span>
        </div>
        <div class="absolute top-2 left-2 w-3 h-3 bg-yellow-400 rounded-full">
          <span class="sr-only">status indicator</span>
        </div>
        <!-- Pulse -->
        <div
          class="absolute top-2 right-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping"
        >
          <span class="sr-only">status indicator</span>
        </div>
        <div
          class="absolute top-2 right-[8px] w-3 h-3 bg-yellow-400 rounded-full"
        >
          <span class="sr-only">status indicator</span>
        </div>
        <!-- Icon -->
        <div class="w-16 aspect-[1/1] shrink-0">
          <NuxtImg
            src="/img/bracelet.avif"
            alt="icon"
            width="64"
            height="64"
            class="w-full h-full object-contain"
          />
        </div>
        <p class="text-gray-700 text-lg text-start">
          Di sini kamu akan menemukan <strong>keluarga baru</strong> dari
          berbagai kota yang siap memberi sejuta kenangan indah.
        </p>
      </div>

      <div
        class="relative bg-yellow-400/30 rounded-lg shadow-md p-6 min-h-[150px] flex items-start gap-4"
      >
        <!-- Pulse -->
        <div
          class="absolute top-2 left-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping"
        >
          <span class="sr-only">status indicator</span>
        </div>
        <div class="absolute top-2 left-2 w-3 h-3 bg-yellow-400 rounded-full">
          <span class="sr-only">status indicator</span>
        </div>
        <!-- Pulse -->
        <div
          class="absolute top-2 right-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping"
        >
          <span class="sr-only">status indicator</span>
        </div>
        <div
          class="absolute top-2 right-[8px] w-3 h-3 bg-yellow-400 rounded-full"
        >
          <span class="sr-only">status indicator</span>
        </div>
        <!-- Icon -->
        <div class="w-16 aspect-[1/1] shrink-0">
          <NuxtImg
            src="/img/expertise.avif"
            alt="icon"
            width="64"
            height="64"
            class="w-full h-full object-contain"
          />
        </div>
        <p class="text-gray-700 text-lg text-start">
          <strong>More Than Just Learning English</strong> — pengalaman belajar
          yang bermakna dan menyenangkan.
        </p>
      </div>

      <div
        class="relative bg-yellow-400/30 rounded-lg shadow-md p-6 min-h-[150px] flex items-start gap-4"
      >
        <!-- Pulse -->
        <div
          class="absolute top-2 left-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping"
        >
          <span class="sr-only">status indicator</span>
        </div>
        <div class="absolute top-2 left-2 w-3 h-3 bg-yellow-400 rounded-full">
          <span class="sr-only">status indicator</span>
        </div>
        <!-- Pulse -->
        <div
          class="absolute top-2 right-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping"
        >
          <span class="sr-only">status indicator</span>
        </div>
        <!-- Icon -->
        <div class="w-16 aspect-[1/1] shrink-0">
          <NuxtImg
            src="/img/school.avif"
            alt="icon"
            width="64"
            height="64"
            class="w-full h-full object-contain"
          />
        </div>
        <p class="text-gray-700 text-lg text-start">
          Selain camp yang nyaman, ada
          <strong>Tutor Pendamping Asrama</strong> yang ramah dan siap jadi
          teman curhatmu di kamar.
        </p>
      </div>
    </div>
    <div
      class="bg-white rounded-lg overflow-hidden max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row items-center gap-8"
    >
      <!-- Gambar: di atas untuk mobile, di samping kanan untuk desktop -->
      <div class="w-full lg:w-1/2">
        <NuxtImg
          src="/img/central-course-model.avif"
          alt="Model Central Course"
          width="400"
          height="400"
          sizes="400px"
          preload
          priority
          format="auto"
          layout="constrained"
          class="mt-6 lg:mt-0 lg:ml-10 rounded-lg transform hover:scale-105 transition-transform"
        />
      </div>

      <!-- List Fasilitas -->
      <div class="w-full lg:w-1/2">
        <h2
          class="text-2xl font-bold text-gray-900 mb-6 text-center lg:text-left"
        >
          Fasilitas Apa yang Akan Kamu Dapatkan?
        </h2>

        <ul class="space-y-4">
          <li class="flex items-start space-x-3">
            <NuxtImg
              src="/img/checks.avif"
              alt="check icon"
              class="w-6 h-6 mt-1"
            />
            <div class="text-gray-700 text-lg font-medium text-start">
              Program 5x Pertemuan/ hari
            </div>
          </li>
          <li class="flex items-start space-x-3">
            <NuxtImg
              src="/img/checks.avif"
              alt="check icon"
              class="w-6 h-6 mt-1"
            />
            <div class="text-gray-700 text-lg font-medium text-start">
              Asrama
            </div>
          </li>
          <li class="flex items-start space-x-3">
            <NuxtImg
              src="/img/checks.avif"
              alt="check icon"
              class="w-6 h-6 mt-1"
            />
            <div class="text-gray-700 text-lg font-medium text-start">
              Sertifikat
            </div>
          </li>
          <li class="flex items-start space-x-3">
            <NuxtImg
              src="/img/checks.avif"
              alt="check icon"
              class="w-6 h-6 mt-1"
            />
            <div class="text-gray-700 text-lg font-medium text-start">
              English Zone
            </div>
          </li>
          <li class="flex items-start space-x-3">
            <NuxtImg
              src="/img/checks.avif"
              alt="check icon"
              class="w-6 h-6 mt-1"
            />
            <div class="text-gray-700 text-lg font-medium text-start">
              Modul atau Buku Panduan
            </div>
          </li>
          <li class="flex items-start space-x-3">
            <NuxtImg
              src="/img/checks.avif"
              alt="check icon"
              class="w-6 h-6 mt-1"
            />
            <div class="text-gray-700 text-lg font-medium text-start">
              Dibimbing Tutor yang Profesional
            </div>
          </li>
          <li class="flex items-start space-x-3">
            <NuxtImg
              src="/img/checks.avif"
              alt="check icon"
              class="w-6 h-6 mt-1"
            />
            <div class="text-gray-700 text-lg font-medium text-start">
              T-Shirt
            </div>
          </li>
          <li class="flex items-start space-x-3">
            <NuxtImg
              src="/img/checks.avif"
              alt="check icon"
              class="w-6 h-6 mt-1"
            />
            <div class="text-gray-700 text-lg font-medium text-start">
              Tote Bag
            </div>
          </li>
          <li class="flex items-start space-x-3">
            <NuxtImg
              src="/img/checks.avif"
              alt="check icon"
              class="w-6 h-6 mt-1"
            />
            <div class="text-gray-700 text-lg font-medium text-start">
              Gratis penjemputan di Bandara Surabaya dan Stasiun Kediri
            </div>
          </li>
        </ul>
      </div>
    </div>

    <section class="py-16 px-6 bg-yellow-50">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
        Biaya Paket Program Beasiswa 50%
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div
          v-for="item in paket"
          :key="item.id"
          class="relative flex items-center bg-yellow-400 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 p-4 cursor-pointer"
        >
          <!-- Gambar Sale di pojok kanan atas -->
          <NuxtImg
            src="/img/sale.avif"
            alt="Sale"
            class="absolute top-[-1px] right-2 w-10 h-10"
          />

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
              {{ item.durasi }}
            </div>
            <div class="text-sm line-through text-gray-800 font-semibold">
              {{ item.hargaNormal }}
            </div>
            <div class="text-3xl lg:text-4xl font-bold text-gray-900">
              {{ item.hargaDiskon }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-16 px-6 bg-white">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
        Sangat Sesuai Diikuti Oleh
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div
          v-for="(item, index) in peserta1"
          :key="item.role"
          class="relative bg-yellow-400/30 rounded-lg shadow p-6 text-center overflow-hidden"
        >
          <!-- Ikon Background di pojok kanan atas, pakai gambar 1.avif sampai 5.avif -->
          <NuxtImg
            :src="`/img/${index + 1}.avif`"
            alt="icon"
            width="40"
            height="40"
            class="absolute top-2 right-2 w-10 h-10 opacity-60 pointer-events-none"
          />

          <!-- Teks Konten -->
          <h3 class="text-xl font-semibold text-gray-800 mb-2 relative z-10">
            {{ item.role }}
          </h3>
          <p class="text-gray-700 text-base relative z-10">
            {{ item.deskripsi }}
          </p>
        </div>
      </div>
      <div
        class="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto mt-[1.5rem]"
      >
        <div
          v-for="(item, index) in peserta2"
          :key="item.role"
          class="relative bg-yellow-400/30 rounded-lg shadow p-6 text-center overflow-hidden"
        >
          <!-- Ikon Background di pojok kanan atas, pakai gambar 1.avif sampai 5.avif -->
          <NuxtImg
            :src="`/img/${index + 4}.avif`"
            alt="icon"
            width="40"
            height="40"
            class="absolute top-2 right-2 w-10 h-10 opacity-60 pointer-events-none"
          />

          <!-- Teks Konten -->
          <h3 class="text-xl font-semibold text-gray-800 mb-2 relative z-10">
            {{ item.role }}
          </h3>
          <p class="text-gray-700 text-base relative z-10">
            {{ item.deskripsi }}
          </p>
        </div>
      </div>
    </section>
    <div>
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
        Asrama dan Suasana Kelas
      </h2>
      <SliderAsramaKelas />
    </div>
    <div class="flex flex-col justify-center items-center my-12">
      <img
        src="/Arrows-3-pointing-down-arrow-down-animated.webp"
        alt="Animasi Panah"
        width="120"
        height="80"
        class="w-40 h-20"
      />
    </div>
    <div
      class="inline-block p-[4px] rounded-lg bg-[length:200%_200%] bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 animate-borderMove animate-pulseSlow"
    >
      <a
        href="https://whatsform.com/oeH-r5"
        target="_blank"
        rel="noopener noreferrer"
        class="block bg-yellow-700/30 text-2xl shadow-lg text-black font-semibold py-6 px-12 rounded-lg hover:bg-yellow-500 transition duration-300 hover:animate-none animate-pulseSlow"
      >
        Daftar Sekarang
      </a>
    </div>

    <div
      class="w-full rounded-lg flex flex-col justify-center items-center my-12"
    >
      <NuxtImg
        src="/img/kalender-akademik-central.avif"
        class="rounded-lg shadow-black shadow-lg"
        alt=""
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const SliderAsramaKelas = defineAsyncComponent(
  () => import("~/components/SliderAsramaKelas.vue")
);
const paket = [
  {
    id: 1,
    durasi: "PAKET 1 MINGGU",
    hargaNormal: "Rp 1.200.000",
    hargaDiskon: "600.000",
  },
  {
    id: 2,
    durasi: "PAKET 2 MINGGU",
    hargaNormal: "Rp 1.800.000",
    hargaDiskon: "900.000",
  },
  {
    id: 3,
    durasi: "PAKET 3 MINGGU",
    hargaNormal: "Rp 2.000.000",
    hargaDiskon: "1.000.000",
  },
  {
    id: 4,
    durasi: "PAKET 1 BULAN",
    hargaNormal: "Rp 2.200.000",
    hargaDiskon: "1.100.000",
  },
  {
    id: 5,
    durasi: "PAKET 2 BULAN",
    hargaNormal: "Rp 4.200.000",
    hargaDiskon: "2.100.000",
  },
  {
    id: 6,
    durasi: "PAKET 3 BULAN",
    hargaNormal: "Rp 6.000.000",
    hargaDiskon: "3.000.000",
  },
];
const peserta1 = [
  {
    role: "Pelajar",
    icon: "🎓",
    deskripsi:
      "Yang ingin ngobrol bahasa Inggris tapi sering kali bingung bagaimana memulainya",
  },
  {
    role: "Mahasiswa",
    icon: "📚",
    deskripsi:
      "Yang ingin belajar berkomunikasi secara aktif dalam waktu yang singkat",
  },
  {
    role: "Guru",
    icon: "👩‍🏫",
    deskripsi: "Yang ingin tahu metode rahasia mengajar anak secara efisien",
  },
];

const peserta2 = [
  {
    role: "Umum",
    icon: "💼",
    deskripsi: "Yang ingin mendapatkan pekerjaan di perusahaan multinasional",
  },
  {
    role: "Pejuang SBMPTN",
    icon: "🎯",
    deskripsi:
      "Yang belum berhasil masuk PTN Idaman tetapi bingung mengisi waktu luang",
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
