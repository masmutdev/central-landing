<template>
  <div class="pt-[4rem] lg:pt-10">
    <AppNavbar />

    <component :is="activeComponent" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";

import AppNavbar from "~/components/AppNavbar.vue";
import DaftarKursusOffline from "~/components/DaftarKursusOffline.vue";
import DaftarKursusOnline from "~/components/DaftarKursusOnline.vue";

const route = useRoute();

const activeComponent = computed(() => {
  const tab = route.query.tab;
  if (tab === "online") return DaftarKursusOnline;
  return DaftarKursusOffline;
});
</script>
