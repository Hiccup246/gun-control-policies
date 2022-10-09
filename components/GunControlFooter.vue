<template>
  <div class="footer">
    <james-watt-calling-card modal-bg-color="white">
      <button class="footer__created-by-button">
        <p class="footer__created-by-text">
          Created by James Watt
        </p>
      </button>
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

  .footer__created-by-button {
    background-color: white;
    width: fit-content;
    margin: 0 auto;
    padding: 0;
    border: 3px solid white;
  }

  .footer__created-by-text {
    margin: 0;
    font-size: small;
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: red;
    color: white;
    font-weight: bold;
  }

  .footer__created-by-button:hover > .footer__created-by-text {
    opacity: 0.7;
  }

  james-watt-calling-card {
    margin: 0 auto;
  }
</style>