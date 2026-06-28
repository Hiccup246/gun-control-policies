<script setup lang="ts">
  const props = defineProps<{ error: NuxtError }>();
</script>

<template>
  <div>
    <h1>{{ props.error.statusCode }}</h1>

    <NuxtLink to="/">
      Go back home
    </NuxtLink>
  </div>
</template>