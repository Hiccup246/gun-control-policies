<template>
  <div class="app">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Oswald:wght@700&family=Tiro+Devanagari+Sanskrit&family=Tiro+Gurmukhi&display=swap" rel="stylesheet">
      <GunControlHeader />
        <div class="content">
          <div class="policy">
            <h2 class="policy-header">1. Gun Control Policy One</h2>
            <p>m Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>

          <div class="policy">
            <h2 class="policy-header">2. Gun Control Policy One</h2>
            <p>m Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>

          <div class="policy">
            <h2 class="policy-header">3. Gun Control Policy One</h2>
            <p>m Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
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

  body {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  p {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
  }

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