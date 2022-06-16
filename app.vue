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
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Oswald:wght@700&family=Tiro+Devanagari+Sanskrit&family=Tiro+Gurmukhi&display=swap" rel="stylesheet">
    </Head>

    <NuxtLayout name="base-layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
  useHead({
    htmlAttrs: {
      lang: 'en',
    },
    script: [
      {
        //<!-- Global site tag (gtag.js) - Google Analytics -->
        src: "https://www.googletagmanager.com/gtag/js?id=G-SPMP6XEW4B",
        async: true,
      },
      {
        src: "ga.js",
      },
    ]
  })
</script>