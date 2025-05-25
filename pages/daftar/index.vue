<template>
  <div class="pt-[4rem] lg:pt-10">
    <AppNavbar />

    <DaftarKursusOffline v-if="!isOnline" />
    <DaftarKursusOnline v-else />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";

import AppNavbar from "~/components/AppNavbar.vue";
import DaftarKursusOffline from "~/components/DaftarKursusOffline.vue";
import DaftarKursusOnline from "~/components/DaftarKursusOnline.vue";

const route = useRoute();
const isOnline = computed(() => route.query.tab === "online");
</script>
