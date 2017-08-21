<template>
  <div>
    <h1>All Club Articles</h1>
    <input type="text" v-model="search" placeholder="search clubs" />
    <div v-for="club in clubsFilterByName" class="single-club">
      <router-link v-bind:to="'/club/' + club.id"><h2>{{ club.name}}</h2></router-link>
      <img :src="club.url" alt="">
        <button @click="DeleteClub(club.id, club.nameOfUrl)">Delete club</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        clubs: [],
        search: ''
      }
    },
    computed: {
      clubsFilterByName: function (value) {
        return this.$store.getters.getClubs.filter(club => {
          const name = club.name.toLowerCase();
          const search = this.search.toLowerCase();
          return name.match(search);
        })
      }
    },
    methods: {
      DeleteClub(id, nameOfUrl){
        const options = {id: id, nameOfUrl: nameOfUrl};
        this.$store.dispatch('deleteClub', options);
        this.$store.state.clubs = this.$store.state.clubs.filter(function (filteritem) {
          return filteritem.id != id;
        })
      }
    },
    created() {
      this.$store.dispatch('getAllClubs');
    }
  }
</script>

<style scoped>
  #show-clubs{
    max-width: 800px;
    margin: 0 auto;
  }
  .single-club{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
    border: 1px dotted #aaa;
  }
  #show-clubs a{
    color: #444;
    text-decoration: none;
  }
  input[type="text"]{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
  }
  img{
    width: 200px;
    height: 170px;
  }
  button {
    background: rgb(17, 104, 200);
    padding: .5em 1.3em;
    border: none;
    border-radius: 5px;
  }

  button:hover { background: rgb(74, 204, 232); } /* при наведении курсора мышки */
  button:active { background: rgb(27, 63, 152); } /* при клике мыши */
</style>