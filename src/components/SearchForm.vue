<script setup>
import { ref } from 'vue';

const inputRef = ref();

const props = defineProps({
  input: Object,
  handleSubmit: Function,
})

const handleClick = () => inputRef?.value.focus();
</script>

<template>
  <form @submit="handleSubmit">
    <input
      ref="inputRef"
      v-model="props.input.value"
      type="search"
      placeholder="Digite o nome da cidade..."
    />
    <button type="submit" @click="handleClick">
      <i class="fa-solid fa-magnifying-glass"></i>
    </button>
  </form>
</template>

<style scoped lang="scss">
@use '../assets/styles/variables.scss';

form {
  display: flex;
  align-items: center;
  padding: 1rem 0 1.5rem 0;
  gap: .325rem;
  border-bottom: 2px solid variables.$light-color;

  input {
    display: block;
    color: #333333;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    padding: 0 1rem;
    height: 2.25rem;
  }

  button {
    height: 2.25rem;
    border-radius: 4px;
    background: variables.$secondary-color;
    opacity: .9;
    color: variables.$light-color;
    padding: 0 .75rem;
    outline: none;
    transition: .4s;

    &:hover {
      opacity: 1;
    }

    .fa-solid {
      font-size: 1.125rem;
    }
  }
}
</style>
