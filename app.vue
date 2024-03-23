<template>
  <div>
    <Head>
      <Title>Gun Control Policies</Title>

      <Meta name="author" content="James Watt" />
      <Meta name="description" content="A site listing 10 gun control policies" />
      <Meta name="keywords" content="Gun Control Policies, A list of gun control policies, Gun Reform, Gun Buy Back, Gun Insurance" />
      <Meta name="robots" content="index, follow" />

      <Link rel="icon" href="/favicon.ico" />
      <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <Link rel="manifest" href="/site.webmanifest" />
      <Link rel="canonical" href="https://www.guncontrolpolicies.com/" />
      <Link href="https://www.guncontrolpolicies.com/" rel="publisher" />
    </Head>

    <div class="app">
      <GunControlHeader />

      <div class="app__content">
        <NuxtPage />
      </div>

      <GunControlFooter />
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

useHead({
  htmlAttrs: {
    lang: "en"
  },
  script: [
    {
      // <!-- Umami Analytics -->
      "data-website-id": config.UMAMI_WEBSITE_ID,
      src: config.UMAMI_WEBSITE_URL,
      async: true,
      defer: true
    },
    {
      src: "https://unpkg.com/james-watt-calling-card/index.js",
      type: "module",
    }
  ]
});
</script>

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
