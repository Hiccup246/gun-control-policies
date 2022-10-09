<template>
  <div class="footer">
    <james-watt-calling-card modal-bg-color="white">
      <div class="footer__created-by-wrapper">
        <p class="footer__created-by">
          Created by James Watt
        </p>
      </div>
    </james-watt-calling-card>
  </div>
</template>

<style scoped>
  .footer {
    height: 100px;
    background-color: red;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .footer__created-by-wrapper {
    background-color: white;
    width: fit-content;
    margin: 0 auto;
    border: 3px solid white;
  }

  .footer__created-by {
    margin: 0;
    font-size: small;
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: red;
    color: white;
    font-weight: bold;
  }

  .footer__created-by-wrapper:hover > .footer__created-by {
    opacity: 0.7;
  }
</style>