<template>
  <div
    class="fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-white/70 p-3 pb-0 pt-0"
  >
    <nav
      class="shadow-md rounded-lg flex items-center justify-between px-4 py-3"
    >
      <!-- Logo dengan teks -->
      <div class="flex items-center space-x-2">
        <NuxtImg
          src="/img/logo.avif"
          alt="Logo"
          width="40"
          height="40"
          class="w-10 h-10 object-contain"
          priority
        />
        <div class="leading-tight">
          <div class="text-base font-bold">CENTRAL</div>
          <div class="text-base font-bold">COURSE</div>
        </div>
      </div>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-6 items-center">
        <li>
          <NuxtLink
            :to="{ path: '/daftar', query: { tab: 'offline' } }"
            :class="[
              'text-center px-4 py-2 rounded-full transition-all',
              tab === 'offline'
                ? 'bg-gradient-to-r from-yellow-100 to-yellow-400 text-gray-700 font-medium'
                : 'text-gray-700 hover:text-blue-500',
            ]"
          >
            Kursus Offline
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            :to="{ path: '/daftar', query: { tab: 'online' } }"
            :class="[
              'text-center px-4 py-2 rounded-full transition-all',
              tab === 'online'
                ? 'bg-gradient-to-r from-yellow-100 to-yellow-400 text-gray-700 font-medium'
                : 'text-gray-700 hover:text-blue-500',
            ]"
          >
            Kursus Online
          </NuxtLink>
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <button class="md:hidden" @click="toggleMenu">
        <IconMenu2 class="w-6 h-6 text-gray-700" />
      </button>
    </nav>

    <!-- Backdrop -->
    <div
      v-if="menuOpen"
      class="absolute inset-0 h-screen bg-black/30"
      @click="toggleMenu"
    ></div>

    <!-- Mobile Sidebar -->
    <transition name="slide">
      <div v-if="menuOpen" class="fixed inset-0 z-40">
        <!-- Sidebar -->
        <div
          class="absolute z-[99] top-0 left-0 w-64 h-screen bg-white shadow-lg p-6 space-y-4"
        >
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-semibold">Menu</h2>
            <button @click="toggleMenu">
              <IconX class="w-6 h-6 text-gray-700 hover:text-red-500" />
            </button>
          </div>
          <NuxtLink
            :to="{ path: '/daftar', query: { tab: 'offline' } }"
            :class="[
              'block px-4 py-2 rounded-lg transition-all',
              tab === 'offline'
                ? 'bg-gradient-to-r from-yellow-100 to-yellow-400 text-gray-700 font-medium'
                : 'text-gray-700 hover:text-blue-500',
            ]"
            @click="toggleMenu"
          >
            Kursus Offline
          </NuxtLink>

          <NuxtLink
            :to="{ path: '/daftar', query: { tab: 'online' } }"
            :class="[
              'block px-4 py-2 rounded-lg transition-all',
              tab === 'online'
                ? 'bg-gradient-to-r from-yellow-100 to-yellow-400 text-gray-700 font-medium'
                : 'text-gray-700 hover:text-blue-500',
            ]"
            @click="toggleMenu"
          >
            Kursus Online
          </NuxtLink>
        </div>
      </div>
    </transition>
  </div>

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

  <!-- Tombol WhatsApp -->
  <a
    href="https://wa.me/6289510056758"
    target="_blank"
    class="fixed bottom-6 right-3 lg:right-[30px] z-50"
  >
    <NuxtImg
      src="/img/whatsapp.avif"
      alt="Chat WhatsApp"
      width="100"
      height="100"
      sizes="(min-width: 1024px) 100px, 56px"
      layout="constrained"
      format="auto"
      class="w-14 h-14 lg:w-[100px] lg:h-[100px] drop-shadow-lg hover:scale-110 transition-transform animate-float"
    />
  </a>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { IconMenu2, IconCheck, IconX } from "@tabler/icons-vue";

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getRandom = (arr: string | any[]) =>
  arr[Math.floor(Math.random() * arr.length)];

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

const route = useRoute();
const tab = computed(() => route.query.tab || "offline");
const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-enter-to {
  transform: translateX(0%);
}
.slide-leave-from {
  transform: translateX(0%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
