new Vue({
    el: '#app',
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Lógica de login aqui
        console.log('Login com usuário:', this.username);
        // Armazenar o nome do usuário no armazenamento local
        localStorage.setItem('loggedInUser', this.username);
        // Redirecionar para a página de filmes
        window.location.href = 'filmes.html';
      },
      register() {
        // Lógica de cadastro aqui
        console.log('Cadastro com usuário:', this.username);
        // Armazenar o nome do usuário no armazenamento local
        localStorage.setItem('loggedInUser', this.username);
        // Redirecionar para a página de filmes
        window.location.href = 'filmes.html';
      },
    },
  });

  