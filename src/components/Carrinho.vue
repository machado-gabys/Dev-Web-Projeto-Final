<template>
  <div class="cart-container">
    <h2>Carrinho</h2>
    <div v-if="cart.length === 0">
      <p>O carrinho está vazio.</p>
    </div>
    <div v-else>
      <div v-for="(movie, index) in cart" :key="index" class="cart-item">
        <div class="poster">
          <img :src="movie.Poster" alt="Poster não disponível">
        </div>
        <h3>{{ movie.Title }}</h3>
        <div class="movie-info">
          <p><b>Ano:</b> {{ movie.Year }}</p>
          <p><b>Gênero:</b> {{ movie.Genre }}</p>
          <p><b>Diretor:</b> {{ movie.Director }}</p>
          <p><b>Duração:</b> {{ movie.Runtime }}</p>
        </div>
        <button @click="removeFromCart(index)" class="button">Remover</button>
      </div>
    </div>
  </div>
</template>

<script>
import Carrinho from './Carrinho.vue';
export default {
  props: {
    cart: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    removeFromCart(index) {
      this.$emit('remove', index);
    }
  }
}
</script>

<style>
@import url('./style.css');
</style>