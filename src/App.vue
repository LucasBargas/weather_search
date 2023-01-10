<script setup>
import { reactive, ref } from 'vue';
import AppContainer from './components/AppContainer.vue';
import OptionsPanel from './components/OptionsPanel.vue';
import SearchResult from './components/SearchResult.vue';
import SearchForm from './components/SearchForm.vue';
import AppLoading from './components/AppLoading.vue';
import AppCreationInfos from './components/AppCreationInfos.vue';

const dataWeather = ref(null);

const state = reactive({
  input: {
    value: ''
  },
  searching: false,
  loading: false,
  error: false,
})

const handleChangeBackground = (value) => {
  return document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?${value}")`;
}

const handleReqDatas = async (url) => {
  const res = await fetch(url);
  const json = await res.json();

  return {
    res, json
  }
}

const handleGetDatas = async (value) => {
  state.searching = true;
  state.input.value = '';
  state.loading = true;
  state.error = false;

  const weather = await handleReqDatas(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(value)}&appid=${import.meta.env.VITE_API_KEY}&units=metric&lang=pt_br`);

  if (weather.res.status === 404) {
    state.loading = false;
    dataWeather.value = null;
    state.error = true;
    return;
  }

  state.loading = false;
  state.error = false;
  dataWeather.value = weather.json;
  handleChangeBackground(weather.json.name);
}

const handleSubmit = (e) => {
  e.preventDefault();

  if (state.input.value.length === 0) return;
  handleGetDatas(state.input.value);
}
</script>

<template>
  <section class="home">
    <AppContainer>
      <div class="home-wrapper">
        <h1>Confira o clima de uma cidade:</h1>
        <SearchForm :input="state.input" :handleSubmit="handleSubmit" />

        <template v-if="!state.searching">
          <OptionsPanel :handleGetDatas="handleGetDatas" />
        </template>

        <template v-else>
          <AppLoading v-if="state.loading" />

          <span v-if="!state.loading && state.error" class="error-status">
            Ocorreu um erro, tente novamente mais tarde!
          </span>

          <SearchResult
            v-if="!state.loading && !state.error && dataWeather"
            :dataWeather="dataWeather"
          />
        </template>
      </div>
    </AppContainer>

    <AppCreationInfos />
  </section>
</template>

<style scoped lang="scss">
@use './assets/styles/variables.scss';

.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background: rgba(51,51,51,.4);

  &-wrapper {
    background-color: variables.$primary-color;
    box-shadow: 0px 0px 32px 1px rgba(51,51,51,0.55);
    padding: 2rem;

    @media (max-width: 414px) {
      padding: 1.25rem;
    }

    @media (max-width: 300px) {
      padding: 1rem;
    }

    h1 {
      font-size: 1.25rem;
    }

    .error-status {
      display: block;
      font-size: .975rem;
      margin-top: 1.75rem;
      text-align: center;
    }
  }
}
</style>
