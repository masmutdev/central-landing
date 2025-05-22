<template>
  <div class="min-h-screen bg-[#011a2b] lg:p-4">
    <div
      class="h-screen overflow-hidden relative flex flex-col items-center justify-start lg:justify-start text-center rounded-lg backdrop-container"
      style="
        background: linear-gradient(
            rgba(255, 220, 12, 0.9),
            rgba(255, 220, 12, 0.4)
          ),
          url('/bg-card.webp');
        background-size: cover;
        background-position: center;
      "
    >
      <div
        class="relative z-10 mt-[10px] lg:mt-[50px] flex flex-col items-center justify-center px-4"
      >
        <img
          src="/logo.png"
          alt="Central Course Logo"
          class="w-[100px] h-[100px] mb-6"
        />
        <h1 class="text-4xl lg:text-[60px] font-extrabold text-gray-900">
          CENTRAL COURSE
        </h1>
      </div>

      <p
        class="relative flex flex-col z-10 text-lg lg:text-[40px] lg:mt-5 font-medium text-gray-900 px-4 leading-snug mb-4"
      >
        <span>Situs Resmi Informasi dan pendaftaran</span>
        <span>Central Course Kampung Inggris</span>
      </p>

      <p class="relative flex flex-col z-10 text-gray-900 mt-[20px]">
        <span class="font-poppins text-lg lg:text-[30px] font-medium"
          >Sudah Terverifikasi dan Terdaftar di Dinas Pendidikan</span
        >
        <span class="font-bebas mt-[10px] text-lg lg:text-[30px]"
          >NO. SK Diknas 421.9/7845/418.20/2024</span
        >
      </p>

      <!-- Tombol Daftar -->
      <div class="relative z-10 mt-6 flex flex-wrap justify-center gap-4 px-4">
        <NuxtLink
          to="/daftar"
          class="w-[200px] lg:w-[240px] bg-white text-black font-semibold px-4 py-2 lg:py-3 rounded-md shadow hover:bg-yellow-50 hover:scale-105 hover:-translate-y-1 transition duration-200 ease-in-out text-sm lg:text-base text-center"
        >
          Daftar Kursus Offline
        </NuxtLink>
        <NuxtLink
          to="/daftar-kursus-online"
          class="w-[200px] lg:w-[240px] bg-white text-black font-semibold px-4 py-2 lg:py-3 rounded-md shadow hover:bg-yellow-50 hover:scale-105 hover:-translate-y-1 transition duration-200 ease-in-out text-sm lg:text-base text-center"
        >
          Daftar Kursus Online
        </NuxtLink>
        <a
          href="https://centralcourseofficial.com/central-toefl-page/"
          target="_blank"
          rel="noopener"
          class="w-[200px] lg:w-[240px] bg-white text-black font-semibold px-4 py-2 lg:py-3 rounded-md shadow hover:bg-yellow-50 hover:scale-105 hover:-translate-y-1 transition duration-200 ease-in-out text-sm lg:text-base text-center inline-flex justify-center items-center"
        >
          Daftar Tes TOEFL Online
        </a>
      </div>

      <!--Waves Container-->
      <div class="absolute bottom-0 rounded-lg w-full z-10">
        <svg
          class="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g class="parallax">
            <use
              xlink:href="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7)"
            />
            <use
              xlink:href="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlink:href="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
      <!--Waves end-->
    </div>
    <a
      href="https://wa.me/6289510056758"
      target="_blank"
      class="fixed bottom-6 right-3 lg:right-[30px] z-50"
    >
      <img
        src="/whatsapp.png"
        alt="Chat WhatsApp"
        class="w-14 h-14 lg:w-[100px] lg:h-[100px] drop-shadow-lg hover:scale-110 transition-transform animate-float"
      />
    </a>
    <transition name="fade-slide">
      <div
        v-if="showNotif"
        class="fixed bottom-6 left-6 z-50 bg-white text-sm shadow-xl p-4 rounded-lg w-[300px] border border-yellow-400 flex gap-3 items-start"
      >
        <div class="text-green-500 mt-1">
          <IconCheck class="w-6 h-6" />
        </div>
        <div>
          <p class="text-gray-800 font-medium leading-snug">{{ notifText }}</p>
          <p class="text-xs text-gray-500 mt-2">{{ notifTime }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { IconCheck } from "@tabler/icons-vue";

const showNotif = ref(false);
const notifText = ref("");
const notifTime = ref("");

const names = [
  "Andi",
  "Sari",
  "Budi",
  "Rina",
  "Dewi",
  "Eko",
  "Tono",
  "Maya",
  "Rudi",
  "Lina",
  "Dian",
  "Arif",
  "Yuni",
  "Bayu",
  "Intan",
  "Hadi",
  "Ayu",
  "Riko",
  "Sinta",
  "Galih",
  "Tina",
  "Imam",
  "Wulan",
  "Fajar",
  "Nina",
  "Joko",
  "Tari",
  "Agus",
  "Citra",
  "Ivan",
  "Mega",
  "Rio",
  "Fani",
  "Danu",
  "Dira",
  "Taufik",
  "Putri",
  "Yudha",
  "Salma",
  "Iqbal",
  "Lani",
  "Reza",
  "Zahra",
  "Rangga",
  "Nadia",
  "Rama",
  "Nisa",
  "Aditya",
  "Salsa",
  "Farhan",
  "Mira",
  "Vina",
  "Ilham",
  "Selvi",
  "Ridho",
  "Cindy",
  "Gilang",
  "Dinda",
  "Alif",
  "Bella",
  "Jihan",
  "Tomi",
  "Shinta",
  "Kevin",
  "Elsa",
  "Dicky",
  "Yana",
  "Anjas",
  "Melati",
  "Ferry",
  "Riska",
  "Arman",
  "Santi",
  "Fikri",
  "Della",
  "Anton",
  "Rahma",
  "Gilbert",
  "Desi",
  "Adnan",
  "Kartika",
  "Zaki",
  "Nurul",
  "Oki",
  "Rafa",
  "Sheila",
  "Bagas",
  "Alisa",
  "Andre",
  "Karina",
  "Hana",
  "Fadil",
  "Sekar",
  "Leo",
  "Meli",
  "Rendi",
  "Yessi",
  "Bobby",
  "Latif",
  "Tiara",
];
const cities = [
  "Jakarta",
  "Bandung",
  "Surabaya",
  "Yogyakarta",
  "Malang",
  "Denpasar",
  "Makassar",
  "Padang",
  "Semarang",
  "Bekasi",
  "Depok",
  "Bogor",
  "Tangerang",
  "Medan",
  "Palembang",
  "Pekanbaru",
  "Batam",
  "Balikpapan",
  "Samarinda",
  "Banjarmasin",
  "Pontianak",
  "Manado",
  "Gorontalo",
  "Ambon",
  "Jayapura",
  "Kupang",
  "Mataram",
  "Kendari",
  "Jambi",
  "Bengkulu",
  "Cilegon",
  "Cimahi",
  "Tegal",
  "Tasikmalaya",
  "Cirebon",
  "Solo",
  "Magelang",
  "Salatiga",
  "Kediri",
  "Blitar",
  "Probolinggo",
  "Pasuruan",
  "Banyuwangi",
  "Lumajang",
  "Jember",
  "Sidoarjo",
  "Gresik",
  "Mojokerto",
  "Serang",
  "Karawang",
  "Subang",
  "Purwakarta",
  "Sukabumi",
  "Garut",
  "Cianjur",
  "Majalengka",
  "Indramayu",
  "Sumedang",
  "Kuningan",
  "Banjar",
  "Brebes",
  "Pemalang",
  "Kebumen",
  "Purworejo",
  "Wonosobo",
  "Temanggung",
  "Klaten",
  "Boyolali",
  "Sragen",
  "Wonogiri",
  "Ngawi",
  "Madiun",
  "Tuban",
  "Bojonegoro",
  "Ponorogo",
  "Pacitan",
  "Trenggalek",
  "Nganjuk",
  "Magetan",
  "Situbondo",
  "Bondowoso",
  "Pamekasan",
  "Sampang",
  "Bangkalan",
  "Sumenep",
  "Langsa",
  "Lhokseumawe",
  "Tual",
  "Tidore",
  "Ternate",
  "Singaraja",
  "Tabanan",
  "Klungkung",
  "Buleleng",
  "Badung",
  "Gianyar",
  "Dompu",
  "Bima",
  "Sumbawa",
  "Waingapu",
];
const kelasList = [
  {
    name: "Kursus Offline",
    harga: [
      "1 Minggu Rp. 600.000",
      "2 Minggu Rp. 900.000",
      "3 Minggu Rp. 1.000.000",
      "1 Bulan Rp. 1.100.000",
      "2 Bulan Rp. 2.100.000",
      "3 Bulan Rp. 3.000.000",
    ],
  },
  {
    name: "Kursus Online",
    harga: ["Rp. 99.000"],
  },
  {
    name: "Tes Toefl Online",
    harga: ["Rp. 175.000"],
  },
];

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

function generateNotif() {
  const name = getRandom(names);
  const city = getRandom(cities);
  const kelas = getRandom(kelasList);

  let waktu = "";
  let harga = "";

  if (kelas.name === "Kursus Offline") {
    const paket = getRandom(kelas.harga);
    waktu = paket.split(" Rp")[0];
    harga = "Rp" + paket.split("Rp")[1];
    notifText.value = `${name} dari ${city} telah melakukan pemesanan ${kelas.name} selama ${waktu} seharga ${harga}`;
  } else {
    harga = kelas.harga[0];
    notifText.value = `${name} dari ${city} telah melakukan pemesanan ${kelas.name} seharga ${harga}`;
  }

  notifTime.value = new Date().toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });

  showNotif.value = true;

  setTimeout(() => {
    showNotif.value = false;
  }, 4000);

  const nextDelay = Math.floor(Math.random() * 7000) + 5000;
  setTimeout(generateNotif, nextDelay);
}

onMounted(() => {
  setTimeout(generateNotif, Math.floor(Math.random() * 7000) + 5000);
});
</script>

<style>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.backdrop-container::before {
  content: "";
  position: absolute;
  inset: 0;
  backdrop-filter: blur(0px);
  z-index: 0;
}

.waves {
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px;
  min-height: 100px;
  max-height: 150px;
}

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
@media (max-width: 768px) {
  .waves {
    height: 80px;
    min-height: 40px;
  }
  .content {
    height: 50vh;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 2.5s ease-in-out infinite;
}

@keyframes typing {
  0% {
    width: 0;
  }
  5% {
    width: 100%;
  }
  95% {
    width: 100%;
  }
  100% {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

.typewriter {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid #000;
  width: 0;
  animation: typing 30s steps(15, end) infinite, blink 1s step-end infinite;
}
</style>
