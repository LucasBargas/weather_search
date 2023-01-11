<template>
  <div class="creation-infos">
    <p>
      Este app de
      <strong>Busca de Clima</strong>
      foi desenvolvida com
      <span>♥</span>
      por
      <a
        href="https://projetoslucasbargas.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Lucas Bargas
      </a>
      com base em um layout disponiblizado pelo Matheus Battisti, do
      <a
        href="https://horadecodar.com.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hora de Codar
      </a>
      , em uma aula no Youtube.
    </p>
    <a
      href="https://github.com/LucasBargas/weather_search"
      target="_blank"
      rel="noopener noreferrer"
    >
      Clique aqui para visualizar o repositório no GitHub
    </a>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/styles/variables.scss';

.creation-infos {
  display: grid;
  gap: .625rem;
  padding: 1.25rem;
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  text-shadow: 2px 0px 5px rgba(51,51,51,0.45);
  text-align: center;
  line-height: 1.625rem;

  a {
    font-weight: 700;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
