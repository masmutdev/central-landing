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
    href="https://kunjungi.website/admin-mong"
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
  "Zulfan Hasan Nurdin",
  "Endang Puspitasari",
  "Novia Sri Wahyuni",
  "Musymiratul Fauziah",
  "Fadillah Lubis",
  "Wanda Anggraini",
  "Achmad Ridwan",
  "Heri Setiawan",
  "Nicholas Bumiputera",
  "Bayu Fitrah Niaga",
  "Rayhan Islahuddin Al Rasyid",
  "Trisya Seira Aurawaty",
  "Rohwidya Anisa Suci Pangesti",
  "ADINDA HERMAWATI",
  "INTAN ANUGRAHSARI",
  "Rizal Muflih",
  "Ni G. A. L Iga Ambarawati",
  "WINI WIHELMINA",
  "Laudia Permata Widiasari",
  "Akhmad Zainuril",
  "EVITA VERENT LAUDE",
  "Ratih ananda",
  "Al Daffa Naufal Lufthi",
  "Alfiyah Ratri Rahmah",
  "MUHAMMAD RISYAF RAYNALDI",
  "Nazella Efri Yolianda",
  "Suci Ananda Rakhmatika",
  "Dzacky Nanda Ferdi",
  "Erick Sambuari Lie",
  "YUYUN APRILIA",
  "Ellena Ihza Katerina",
  "Elgi Hikmat Syah",
  "Rizqy Sukma Wulandari",
  "Salwa Nurazizah",
  "David Fernando Sianipar",
  "Miftha huljanna",
  "Daffa Annora Salsabila",
  "Dyah Regita Pramestiningrum",
  "Muhammad Fadilah",
  "Vieri Lodian",
  "Anisa Padlilla",
  "Rahman Pambekti",
  "Lidia Hosana Pangalo",
  "Nadhifa Rahmi Triatma",
  "Dwi Setyo Rini",
  "Muhamad Fathurrahman",
  "Fariza Nurhidayah",
  "Widya Iswanty",
  "Imam Nur Muttaqin",
  "Octarindra Aurelia Talita Sakhi",
  "Deninta Ibtisaamah Fibriani",
  "Tiffany Sofyandi",
  "Mulyanah",
  "Desy Putriyanti",
  "Sarah Nur Iliyyin",
  "Naomi Indira Kusumaningputri",
  "Bagus Satrio Rohadi",
  "BENI AMAR",
  "Singgih Widyantoro",
  "Ahmad Fahmi Jamaludin",
  "Nurul Zahra Febriyanti",
  "Silfi Novita Nur Imani",
  "Hafid Firman Febrian",
  "Recky Silvanus Aguslan",
  "Muhammad Hanif Raihan",
  "Dwi Oktarini",
  "Aziizah Diandi Putri",
  "Ayudita Mayfiani",
  "NUR FADHILAH",
  "Rizky Tedy Maireza",
  "Shofiya Nurfadilah",
  "Anisa Riatul Adhari",
  "Sawung Prakoso",
  "Mirza Sultan F",
  "Fadya Rizki Yufenda",
  "Fahrezy Maulana Haz",
  "Lersina Barasa",
  "Gusti Muhammad Riyadh",
  "Tiara Alifahrani Husada",
  "Amir Fatah",
  "NURUL FAKHRIYYAH",
  "Rifkhan Muthalib",
  "Revin Iqbal Ramadhan",
  "Alfin Sulistyo Wahyudi",
  "Rida Mauizah",
  "Rifki Acmad",
  "SRI OKTARIYANI",
  "SITI NUR QHOLISA",
  "Meydira Viliandiniza",
  "Viky Bagus Nugrahanto",
  "Nada Ghaisani",
  "Eka Rima Septiana",
  "Syahidah Putri",
  "Agustina Rindu Larasati",
  "Alisya Fahza Nur Rahmah",
  "Aura Syafa Maharani",
  "Mohamad Habil",
  "Ahmad Faizal Wahidin",
  "Yoga Firmansyah",
  "Kamila Nurul Qalbi",
  "Azka Rizki Achmadi",
  "Eka Prihatiningtyas",
  "Ahmad Rofiki",
  "Elilina Rizka",
  "TRI VALENTINA SIBURIAN",
  "Saifudin",
  "bregas",
  "Ummi Syarifah",
  "Muhammad Al Fadly Pratama",
  "Muhamad Iqbal Rifadly",
  "SHAVA NUR OKTAVIA",
  "Miftah Putri Ramadhani",
  "Luthfia Sakina",
  "Zarel Saessatya",
  "Risang Harimurti",
  "Zavier Orlando",
  "Putri Apriliantin Dwi Wahyudi",
  "ALIYAH SAFITRI",
  "Sapri Tri Putra",
  "ROHMA SYARIFAH AZ ZAROH",
  "Melati Putri Sekar Ingtyas",
  "Dewi Lestari",
  "Lastrin Maulidda",
  "DEBBY REDYKA PUTRA",
  "Bariyah Septiani",
  "Ismiatul Hasanah",
  "Restu Arief Pramuja",
  "Heni Jumiati",
  "Amalia Putri Maharani",
  "Rafli Gati Prakarsa",
  "EMILIA DUA KETIK",
  "EZAR SHOFI",
  "Ati Rukmana",
  "Anung Fauziah Zein",
  "Ripaldi",
  "Mutiara Egha Liasty Sukmana",
  "Sari Andriani Zahra",
  "Jesika Nanda Naibaho",
  "Siti Nur Aisyah",
  "VIRA REZA",
  "Ferdianto",
  "Nursantri Yanti",
  "Siti Nur Hadiah",
  "Jumiatri Rongre",
  "Latifah Mardini",
  "Linarotul Fitriah",
  "Anugrah Pratama Syahputra",
  "Ahmad Beryliumsyah I",
  "Muhammad Dzikrillah Alfathony",
  "rose takey",
  "Riska Yulia Zarni",
  "Chalisa Fikratuha",
  "Andra Rezha Putra Syamsudin",
  "Aldi Krisnata",
  "Agnes Jesica",
  "Silvitasari Buulolo",
  "Haura Lutfiyah",
  "Agfia Rizkmaylia",
  "Naura Athifa Choirina",
  "Vitri Rospitasari",
  "I Gede Made Rapriananta Pande",
  "Siti Rodhiah",
  "Diya Annisaul Fauziah",
  "Faninda Putri Sulastri",
  "Nurain Ibrahim",
  "Filemon Kristanto Dini",
  "Syaifullah Hr. C. Maddi",
  "ANGGRAINI SETYOWATI",
  "Anggita Dwi Savira",
  "Alfian Nur Rahman",
  "VIVIAN DHEA SALSABILA",
  "BERTHA INDRIYANI",
  "Achmad Muafi",
  "TINA",
  "Muhammad Dimas Hadi Pratama",
  "Rosa ayu pranata",
  "Nopianti",
  "Indah Mubalighoh",
  "Muhammad Nadhif Nararyasena Kusuma",
  "Albert Fast Sulistho",
  "Loviona Novita Ramadhania",
  "Firhan Nurfaizi",
  "STEVANUS HARI TRIHARTANTO",
  "Wandira Aulia Salafiah",
  "Andina Ardana Ramadhani",
  "Andara Dwi Puspita Ningrum",
  "Vonny Fricella Octariza",
  "Devry Mairizky Faturahman",
  "ANGRYANI DWIJAYA",
  "Monica Titis Widi W",
  "Isri Rahmawati pasi",
  "Tiara Aprilia",
  "Uzifatun Nur YF Lapatta",
  "Lailatul Azqiyah",
  "Arya Dhani Sucipto",
  "Anggun Willis Jelita",
  "Ferdinand Paturu",
  "Siti Rahayu",
  "Luluk Khoiriah",
  "Irni Khairunnisa",
  "Gigih Ragasajiwo",
  "Novitasari Putri Utami",
  "Noviyanti Lapenangga",
  "Erik Extrada",
  "William Timothy Setiawan",
  "Hilmi Zaki Andhika",
  "Felicia Servina Djuang",
  "LIN",
  "Achmad Nur Ichwan Hidayat",
  "Annisa Nur Purnama Sari",
  "Rizza Rahmadiani",
  "Pramudhitha Bayu Tresna",
  "Hana Asilah Mumtaz",
  "Rizki Rifani",
  "Carolina Margaretha",
  "Alyssa Thirza Putri",
  "Dicky Andreas Saragih",
  "Fatih Ahmad Muzhaffar",
  "Abiyyu Rakha Athaya Ridwan Ritonga",
  "Melisa Kawilarang",
  "Nawang Wulan",
  "Novia Suci Safitri",
  "Shabrina",
  "Najjla Nur Ghisaa",
  "Dinda Arya Dwivani Y",
  "Nissa Amanda",
  "Dewi Hilmiatul Mufidah",
  "Dhiemas Adji Pratama",
  "Abielya Athaya",
  "Ummu Aiman",
  "Muh. Syarifuddin Syam",
  "Desiyanti Dwi Pratiwi",
  "Bartholomews Kislew Subroto",
  "FARAH ANNISA NUR SAFFANA",
  "FRENKY FERNANDES",
  "Nadia Anggita Hardianzah",
  "Abdulkonie",
  "Arif Rahmat Azani",
  "Muhammad Ibnu Inzaqi",
  "Nofal Ramadhan",
  "Muhammad Yudha Pratama",
  "Juan Fajar Samuel Simangunsong",
  "RELATAMI SUCITA ABBAS",
  "Septia Tri Ananda",
  "Anurinta Devi Ariyanti",
  "Asti Uki Utari",
  "LELICARTIKA METAK",
  "Meidiana Safitri",
  "Raden Muhammad Vargas Nidalsava Djunaedi",
  "Saarah Huwaida",
  "Fadliansyah",
  "YOGI DIRYADI",
  "Elly Kartikasari",
  "Valeneyna Kayla Hendartha",
  "Mochd Dafryan Afriansyah",
  "Nuur Anisa Aprilianintyas",
  "Hubba Lillah AlMaula",
  "Vinka Robbicha",
  "Shafiah Khalida",
  "Cut Putri Afriyusna",
  "Reynandra Jakshia Sushander",
  "Andina Krisna Lucky",
  "Nadia Nur Sabrina",
  "Bima Pramudya Waskito Adji",
  "naylah puang maharani andi sufarid",
  "Putri Wulandari Azzahra",
  "Salva Fearnisya",
  "Angga Dwi Prasetyo",
  "Raden Roro Hanun Sakina Fauzianoor",
  "Mega Ayu Permata Negara",
  "Ayunda Nurdini",
  "Khaila Zufi Azzahra",
  "DEWI SARTIKA",
  "Naura Gisita Moray",
  "Muhammad Hakim Ramadhan",
  "JIHAN DWI TAMIRA",
  "RIFKY IMAM MUARIF",
  "Rifan Muliadi",
  "Okwini Alisa",
  "Bima Sena Dwi Nanda",
  "Marsanda Alpriani",
  "Livya Asifah Magfira Ngabito",
  "Zahra Andini",
  "Fernando",
  "SYLVIA NIKA PUSPITASARI",
  "Abdul Rasyid",
  "Sovita Aidah Bahri",
  "SITI ZUBAIDAH",
  "Krisologus Genesa Ruby Atmadja",
  "Viola Sekti Nadhewi",
  "Vitus Yolentus Muni",
  "M. kafah darmawan",
  "Nica Andini Nur Yulita",
  "Aida Khairun Nisa",
  "WIWIEK T.H",
  "nindya putri pungkasari",
  "Javier Rakha Utomo",
  "Tamya Purnama Putrie",
  "Lena Amalia",
  "Lamtama Sianipar",
  "Haris Zuhair Effendi",
  "Muhammad Fachrizal Hamdani",
  "Rizki Romadhon",
  "Chintia Noviela Pitensah",
  "IIS NURAZIJAH",
  "Isratul Ayinun Jariah",
  "Alamsyah Primanata",
  "Indira Widia Putri",
  "Anugrah Sophia Andalucia Sjahrial",
  "Dela Farhana",
  "Mega Dwi Jayanti",
  "Yonathan Crystyan",
  "Ganjar Fauzan Nugraha",
  "Mispan",
  "Yeiza Fiksi Putieca",
  "Nadila",
  "Muhammad Rojab",
  "DEWI FATONAH",
  "Muhammad Rizky Darmawangsa",
  "Agung afriansyah",
  "Uswatun Hasanah",
  "NURUL HIKMAH FITRIA SANTI",
  "Sandi Hermawan",
  "Nofa Arsyadana Syauqus Syahid",
  "RIDA AYU CAHYA ALAM",
  "Farah Yaumi Azis",
  "Tifani Rika Amelya",
  "Gabriella Ananda Wibyantri",
  "Adi Jodi Nainggolan",
  "Doni oktaviana",
  "Michael Manutur Sirait",
  "Chintia Stevani",
  "Maretha Tri Herawati",
  "ALFIANSYAH",
  "Rezki Amaliah Darman",
  "Kresna Bayu Putra",
  "Rizky Kurniawan Syah Putra",
  "Yesica Dwitama",
  "Rizka Lestari",
  "RENITA RATNASARI",
  "Fadilla Novita",
  "Abielya Athaya",
  "Deka Guspa Sari",
  "Telyawar H Amarduan",
  "Khoridatur Rifah",
  "Chandra Aprilando Purba",
  "Ridha Arifa",
  "Muhammad Fathin Zahir",
  "Maulana Ishak",
  "Litha Kurnia Nurhidayah",
  "Amelia",
  "NUR FAIZZATUS SYAFAAH",
  "NUR HAFITA",
  "Puri Dwi Purwanti",
  "Iyant Rudyanto Setiawan",
  "Alfi Nasdi",
  "BERNADETA ANDRIANTI IWA",
  "Marwan Tonni Putra Kase",
  "Aulia Reyzifa Husin Putri",
  "Maria Rosari Dua Loke",
  "Putri Beata Manurung",
  "HESTI LIANA",
  "Ida Ayu Putu Diah Jayadi",
  "Fajar Dwi Laksono",
  "Shelly Harfida Novsah",
  "Rizki Maulana",
  "Tiara Renata Maharani",
  "Muhamad Fikri Aulia",
  "Fany Fadilah Azzahra",
  "Nurul Husnul Dzan",
  "NITA SAFIRA DEWI",
  "Tasya Brillianty Putri Dessuitanio Loho",
  "Oktavia Deta Riawan",
  "Tria Betania",
  "Yusuf Afandi",
  "Panji Anggrio",
  "Qaisra Alya Safina",
  "Rindi Dwi Cahyati",
  "Prihatini Monia Putri Tuanaya",
  "Fera Puspita Anggraeni",
  "Maria Yuniana Restuningtyas",
  "Naufal Abhinaya Purnomo",
  "Een Maylina",
  "Gita apriliana",
  "Azhar Al Rafi",
  "Zaky Fajeriah Ramadhiani",
  "LULU FIRDAUSI",
  "Muhammad Suhaimi",
  "Fathan Farras Aufaa",
  "Muhamad Luthfi Syarifudin",
  "Rochmatin Lailatis Sholawati",
  "Rizna Nur Azizah",
  "Wafiq Zakiyyah",
  "Rihadatul Aisy Nafia Putri",
  "Caleb Timothy Hans",
  "Alfiah Nur Saadah",
  "Dila Suci Prismaya Dewi",
  "NURHADI HANIF QUSHOY",
  "Khairunisa",
  "hasbi sukma febrian",
  "Putri Ayu Ningsi",
  "MARIA ASYSYIFA RAHMASARI",
  "Pebi Tri Amaliah",
  "Moch Esa Ari Al-Hakim",
  "FERIZKY RUDIATNA",
  "Reza Rachma",
  "Elsa Priskariaty",
  "Aldino Putro Adhi",
  "NIKEN LARASINGTYAS",
  "GEDE AMERTA YASA",
  "Kartika Windra Septiana Putri",
  "Alief Diaz Alfajri",
  "PATRISIA CHATRIEN SAPE TIMA",
  "Ahmad Saiful Ila",
  "Muhammad Efriandi Hutama",
  "LUTHFIYAH CIKAL HENDRAWATI",
  "Yeskhiel Bara Santika",
  "Katarina Indah Puspasari",
  "Putri Ramadhan",
  "DEVIN LEMUEL SINAGA",
  "aulia shofia",
  "NURI EKA MAULIDA",
  "Ambar Dyna Hasanah",
  "Abdul Hanis",
  "Rosalinda Abir Hanifah",
  "Achya kaffa syazwana",
  "Nur Alamsyah",
  "Lentina Lasmaria Sinaga",
  "Dzaid Thoriq Fauzan",
  "Dea Ananda",
  "Ahmad Najiullah",
  "SITI AISYAH",
  "wita dewanti antuge",
  "Ayuninda Nur Saffanah",
  "Surya Febrianto",
  "Linda Alvianni",
  "Alicia Caecariaz Khoirullisa",
  "Cindy Triand Sofie Rahmadhani",
  "Suryandari Prihatiningsih",
  "Bonaventura Bentara Panggrahiro",
  "SONIA SANO",
  "ALVEN NURJA HARIYA",
  "EKA MIRQOTUSSAADAH",
  "Muhamad Iwan Setyawan",
  "mitha suci putri indianie",
  "Ossy Anita Pratiwi",
  "Susma Azura Ray",
  "Abdillah Mabrur",
  "sena muhamad anwar",
  "Pix Berlian Waruwu",
  "Andi",
  "Aqila Aurora",
  "Ratih Laraswati Dwi Cahyanti",
  "Ida Rosilawati",
  "Firnanda Etacho",
  "Rr. Wahyu Krisnamurti Hario C.",
  "Roudzotul Jannah Jamil",
  "Putri Karisma Sari",
  "Sheva Irmatahati Putri Saksana",
  "Ana Yulita Novitri",
  "Marcell Bhayangkara Lawoliyo",
  "Danar Trihandi Saputra",
  "Kholilah Husni",
  "Romero Ibrahim Wijaya",
  "Muhammad Zhafran Akram",
  "Bayu Rama Wicaksana",
  "FIKRY ABDUL MALIK",
  "ISFANDA DEVI MAHARANI FIJRI",
  "lia ulfa dwi shofiyati",
  "Nur Ihda Rahmaning Putri",
  "Annisah Putri Medika",
  "I Nyoman Gargita",
  "Silvia Annabila",
  "Alya Nisha Amini",
  "Yusni Susanti Lahmutu",
  "Kamalludin",
  "Istiqomah",
  "Azril Maulana Saleh",
  "FACHREZAL RAIHAN",
  "Nasruddin",
  "Rony Fasillah",
  "Silvia Sefty Adisty",
  "Ahmad Sukran",
  "Lia Patmawati",
  "Meisa Nazwa Zeba",
  "Essi Ramadanti",
  "Ghivanny Alyleri",
  "Ahmad Syafii Maarif",
  "Difa Dhamara Viguna",
  "Salfitrianti",
  "Ilham Tegar Prahara",
  "Vinsen",
  "Fionita",
  "Carolus A Girsang",
  "Hashiful Muluk",
  "ANDI AYESHA AGUNG",
  "Fatmawati Abdul Razak",
  "Dewi Purnamasari",
  "Septi Dian Rahmawati",
  "Nayla Atha Aqilia",
  "Deslinlianty",
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
    name: "Kelas Online",
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
