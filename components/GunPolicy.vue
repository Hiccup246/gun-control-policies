<template>
  <div class="policy">
    <h2 class="policy__header">
      {{ name }}
    </h2>

    <slot />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      required: true,
      type: String
    }
  }
};
</script>

<style scoped>
  .policy {
    text-align: center;
    margin-bottom: 100px;
  }

  .policy__header {
    font-family: 'Tiro Gurmukhi', serif;
    margin-bottom: 15px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 30px;
    border-bottom: 2px solid black;
    width: fit-content;
  }
</style>
