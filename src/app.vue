<template>
  <div>
    <div class="header">
      <img src="./assets/uni.png" alt="Logo" class="logo">
      <h1 class="brand">UniContent On Demand</h1>
    </div>

    <div class="main-container">
      <div class="container">
        <input type="text" v-model="title" placeholder="Digite o título do filme" class="input">
        <button @click="getMovieData" class="button">Buscar</button>
        <filme-card :filme="movieData"></filme-card>

        <div v-if="movieData" class="movie-details">
  <filmes :filme="movieData"></filmes>
</div>


        <div v-if="showOptions" class="options-container">
          <button @click="addToCart" class="button">Adicionar ao Carrinho</button>
          <button @click="rentMovie" class="button">Alugar Filme</button>
        </div>

        <p v-if="error" class="error">{{ error }}</p>
      </div>
    </div>

    <carrinho :cart="cart" @remove="removeFromCart"></carrinho>
  </div>
</template>

<script>
import axios from 'axios';
import Carrinho from './components/Carrinho.vue';
import Filmes from './components/Filmes.vue';


export default {
  components: {
    Carrinho,
    Filmes
  },
  data() {
    return {
      title: '',
      movieData: null,
      error: '',
      showOptions: false,
      cart: []
    };
  },
  methods: {
    async getMovieData() {
      const formattedTitle = this.title.split(' ').join('+');
      try {
        const response = await axios.get(`https://www.omdbapi.com/?t=${formattedTitle}&apikey=e2f64982`);
        if (response.data.Response === "False") {
          this.error = 'Filme não encontrado! Por favor, verifique o título e tente novamente.';
          this.movieData = null;
          this.showOptions = false;
        } else {
          this.movieData = response.data;
          this.showOptions = true;
          this.error = '';
        }
      } catch (error) {
        console.error(error);
        this.error = 'Ocorreu um erro ao buscar os dados do filme. Por favor, tente novamente mais tarde.';
        this.movieData = null;
        this.showOptions = false;
      }
    },
    addToCart() {
      if (this.movieData) {
        this.cart.push(this.movieData);
        this.clearSearch();
      }
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    rentMovie() {
      // Lógica para alugar o filme
      console.log('Filme alugado:', this.movieData.Title);
    },
    clearSearch() {
      this.title = '';
      this.movieData = null;
      this.showOptions = false;
      this.error = '';
    }
  }
}
</script>

<style>
@import url('./components/style.css');
</style>
