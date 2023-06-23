<template>
    <div class="movie-details">
      <div class="poster">
        <img :src="filme.Poster" alt="Poster não disponível">
      </div>
      <h2>{{ filme.Title }}</h2>
      <p><b>Ano:</b> {{ filme.Year }}</p>
      <p><b>Gênero:</b> {{ filme.Genre }}</p>
      <p><b>Diretor:</b> {{ filme.Director }}</p>
      <p><b>Duração:</b> {{ filme.Runtime }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['filme']
  };
  </script>
  
  <style>
  @import url('./style.css');
  </style>
  