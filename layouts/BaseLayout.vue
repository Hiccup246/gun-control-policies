<template>
  <div class="app">
    <GunControlHeader />
    <div class="content">
      <slot />
    </div>
    <GunControlFooter />
  </div>
</template>


<style scoped>
  .app {
    display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 100vh;
  }

  .content {
    flex: 1;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		max-width: 1000px;
		width: 100%;
    /* background-color: #FFF0EE; */
		padding: 30px 16px;
  }
</style>