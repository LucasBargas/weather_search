<template>
  <div class="loading-icon-container">
    <div class="loading-icon">
      <div></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/styles/variables.scss';

@keyframes loading-icon-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading-icon-container {
  display: flex;
  justify-content: center;
  padding: .5rem 0;
  position: relative;

  .loading-icon {
    position: relative;
    top: -2px;
    left: -7px;
    width: 40px;
    height: 40px;

    &:after {
      content: " ";
      display: block;
      width: 35px;
      height: 35px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid variables.$light-color;
      border-color: variables.$light-color transparent variables.$light-color transparent;
      animation: loading-icon-animation 1s linear infinite;
    }
  }
}
</style>
