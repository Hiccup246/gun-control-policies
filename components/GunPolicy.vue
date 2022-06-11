<template>
  <div class="policy">
      <h2 class="policy-header">
        {{ name }}
      </h2>

      <slot />
  </div>
</template>

<script>
  export default {
  props: {
    name: String
  },
  setup(props) {
    console.log(props.name)
  }
}
</script>


<style scoped>
  .policy-header {
    font-family: 'Tiro Gurmukhi', serif;
    margin-bottom: 15px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 30px;
    border-bottom: 2px solid black;
    width: fit-content;
  }

  .policy {
    text-align: center;
    margin-bottom: 100px;
  }
</style>