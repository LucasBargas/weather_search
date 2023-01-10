<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 370px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 414px) {
    padding: 1.25rem;
  }
}
</style>
