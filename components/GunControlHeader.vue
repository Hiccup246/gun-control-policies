<template>
  <div class="header">
    <div class="header-content">
      <div class="title">
          <img src="~/assets/imgs/rifle.webp" alt="Rifle" class="rifle-image" />
        <h1 class="title-text">Gun Control Now</h1>
        <div class="bullet-line"></div>
      </div>
      <h2 class="sub-title">10 Policies To Reduce Gun Violence</h2>
    </div>
  </div>
</template>

<style scoped>
  .header {
    height: 150px;
    background-color: red;
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .header-content {
    height:fit-content;
  }

  .title {
    width: 100%;
    position: relative;
  }

  .title-text {
    margin: 0 auto;
    width: fit-content;
    position: relative;
    font-size: 60px;
    z-index: 3;
    padding: 0 20px;
    background-color: red;
  }

  .sub-title {
    margin: 0 auto;
    width: fit-content;
    font-size: 20px;
  }

  .bullet-line {
    position: absolute;
    top: 0;
    left: 0;
    height: 50%;
    border-bottom: 2px solid white;
    width: calc(100% - 40px);
    margin: 0 20px;
    z-index: 2;
  }

  .gun-image {
    margin-left: 20px;
    height: 100%;
    width: 100px;
    background-color: blue;
    position: absolute;
  }

  .rifle-image {
    transform: rotate(42deg);
    object-fit: scale-down;
    z-index: 3;
    height: 100%;
    width: 100px;
    background-color: red;
    color: white;
    position: absolute;
  }
</style>