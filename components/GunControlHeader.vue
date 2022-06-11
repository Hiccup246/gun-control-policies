<template>
  <div class="header">
    <div class="header__content">
      <div class="title">
          <img src="~/assets/svgs/rifle.svg" alt="Rifle" class="rifle-image" />
          <img src="~/assets/imgs/usa.png" alt="Rifle" class="usa-image" />
        <h1 class="title__text">Gun Control Now</h1>
        <div class="title__bullet-line"></div>
      </div>
      <h2 class="title__sub-title">10 Policies To Reduce Gun Violence</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "@/assets/css/variables.scss";

  .header {
    height: 150px;
    background-color: red;
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .header__content {
    height:fit-content;
  }

  .title {
    width: 100%;
    position: relative;
  }

  .title__text {
    font-family: 'Oswald', sans-serif;
    margin: 0 auto;
    width: fit-content;
    position: relative;
    font-size: 60px;
    z-index: 3;
    padding: 0 20px;
    background-color: red;
  }

  .title__sub-title {
    margin: 0 auto;
    width: fit-content;
    font-family: 'Tiro Gurmukhi', serif;
  }

  .title__bullet-line {
    position: absolute;
    top: 0;
    left: 0;
    height: 50%;
    border-bottom: 2px solid white;
    width: calc(100% - 40px);
    margin: 0 20px;
    z-index: 2;
  }

  .rifle-image {
    margin-left: 20px;
    padding-right: 20px;
    z-index: 3;
    height: 100%;
    width: 140px;
    background-color: red;
    position: absolute;
  }

  .usa-image {
    width: 50px;
    right: 12px;
    top: 47px;
    object-fit: scale-down;
    position: absolute;
    transform: rotate(90deg);
  }

  @media (max-wdith: $tablet) {
    .rifle-image {
      display: none;
    }
  }

  @media (max-wdith: $small-tablet) {
    .rifle-image,
    .title__bullet-line,
    .usa-image {
      display: none;
    }
  }
</style>