<script setup>
const props = defineProps({
  dataWeather: Object,
})
</script>

<template>
  <div class="result">
    <h2>
      <i class="fa-solid fa-location-dot"></i>
      <span class="city-name">{{ props.dataWeather.name }}</span>
      <!-- <img
        class="city-flag"
        :src="'https://countryflagsapi.com/png/' + props.dataWeather.sys.country"
        :alt="'Bandeira - ' + props.dataWeather.name"
      /> -->
    </h2>
    <p class="temp">
      <span>{{ Math.round(props.dataWeather.main.temp) }}&deg;C</span>
    </p>
    <div class="result-description">
      <p class="weather">{{ props.dataWeather.weather[0].description }}</p>
      <img
        class="weather-icon"
        :src="'http://openweathermap.org/img/wn/' + props.dataWeather.weather[0].icon + '.png'"
        alt=""
      />
    </div>
    <div class="result-details">
      <p class="humidity">
        <i class="fa-solid fa-droplet"></i>
        <span>{{ Math.round(props.dataWeather.main.humidity) }}%</span>
      </p>
      <p class="humidity">
        <i class="fa-solid fa-wind"></i>
        <span>{{ props.dataWeather.wind.speed.toFixed(1) }} km/h</span>
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/styles/variables.scss';

.result {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 1.75rem;
  text-align: center;

  h2 {
    display: flex;
    align-items: center;
    gap: .5rem;

    .fa-solid {
      font-size: 1rem;
    }
  }

  .temp {
    padding: .75rem 0;

    span {
      display: block;
      font-size: 3.5rem;
    }
  }

  .result-description {
    display: flex;
    align-items: center;

    p {
      text-transform: capitalize;
      font-weight: 700;
      font-size: .9375rem;
    }

    img {
      width: 40px;
    }
  }

  .result-details {
    display: flex;
    align-items: center;
    padding-top: 1rem;

    .humidity {
      display: flex;
      align-items: center;
      gap: .5rem;
      padding: .25rem .625rem;
      font-size: .9375rem;

      &:first-of-type {
        border-right: 1px solid variables.$light-color;
      }
    }
  }
}
</style>
