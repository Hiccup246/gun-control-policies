<template>
  <div class="app">
      <GunControlHeader />
        <div class="content">

        </div>
      <GunControlFooter />
  </div>
</template>

<script>


</script>

<style>
  .app {
    display: flex;
		flex-direction: column;
		align-items: center;
		height: 100vh;
  }

  .content {
    flex: 1;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		max-width: 1300px;
		width: 100%;
    /* background-color: #FFF0EE; */
		padding: 0 16px;
  }

  body {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
</style>