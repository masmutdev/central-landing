<template>
  <div
    class="p-3 pb-0 pt-0 fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-white/70"
  >
    <nav class="shadow-md rounded-lg flex justify-center items-center">
      <div class="w-full py-3 flex justify-center">
        <ul class="flex justify-center items-center space-x-6">
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
      </div>
    </nav>
  </div>

  <!-- Tombol WhatsApp -->
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
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const tab = computed(() => route.query.tab || "offline");
</script>
