<template>
  <div class="app">
    <GunControlHeader />
    <div class="app__content">
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

  .app__content {
    flex: 1;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		max-width: 1000px;
		width: 100%;
		padding: 30px 16px;
  }
</style>