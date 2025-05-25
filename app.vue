<script setup lang="ts">
import { onMounted } from "vue";

onMounted(async () => {
  if (import.meta.client) {
    const WebFont = await import("webfontloader");
    WebFont.load({
      google: {
        families: ["Bebas Neue", "Poppins:400,500,600,700&display=swap"],
      },
    });
  }
});
</script>

<template>
  <NuxtPage />
</template>
