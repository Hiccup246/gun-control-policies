<template>
  <div>
    <Head>
      <Title>Gun Control Policies</Title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0">
      <meta name="author" content="James Watt">
      <Meta name="description" content="A site litsting 10 gun control policies" />
      <meta name="keywords" content="Gun Control, Gun Control Policies, Gun, Gun Policies, Gun Violence, Gun Reform">
	    <link rel="canonical" href="https://www.guncontrolpolicies.com/">
      <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml">
    </Head>

    <NuxtLayout name="base-layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
  const config = useRuntimeConfig();

  useHead({
    htmlAttrs: {
      lang: 'en',
    },
    script: [
      {
        //<!-- Umami Analytics -->
        "data-website-id": config.UMAMI_WEBSITE_ID,
        src: config.UMAMI_WEBSITE_URL,
        async: true,
        defer: true
      },
      {
        src: "https://unpkg.com/james-watt-calling-card/index.js",
        type: "module"
      }
    ]
  })
</script>