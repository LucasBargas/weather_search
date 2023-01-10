<script setup>
const props = defineProps({
  handleGetDatas: Function,
})

const handleClick = (e) => {
  props.handleGetDatas(e.target.innerText);
}
</script>

<template>
  <nav class="options">
    <ul>
      <li><button type="button" @click="handleClick">Viena</button></li>
      <li><button type="button" @click="handleClick">Copenhague</button></li>
      <li><button type="button" @click="handleClick">Zurique</button></li>
      <li><button type="button" @click="handleClick">Vancouver</button></li>
      <li><button type="button" @click="handleClick">Genebra</button></li>
      <li><button type="button" @click="handleClick">Frankfurt</button></li>
      <li><button type="button" @click="handleClick">Osaka</button></li>
      <li><button type="button" @click="handleClick">Maceió</button></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@use '../assets/styles/variables.scss';

.options {
  padding-top: 1.75rem;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media (max-width: 414px) {
      gap: 1.5rem;
    }

    @media (max-width: 300px) {
      grid-template-columns: 1fr;
      gap: 1rem;
      max-width: 80%;
      margin: 0 auto;
    }

    button {
      display: block;
      width: 100%;
      background: variables.$secondary-color;
      text-shadow: 2px 0px 5px rgba(51,51,51,0.36);
      font-size: .9375rem;
      font-weight: 500;
      opacity: .9;
      transition: .4s;
      border-radius: 1rem;
      padding: .625rem .5rem;

      @media (max-width: 320px) {
        padding: .75rem .5rem;
      }

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
