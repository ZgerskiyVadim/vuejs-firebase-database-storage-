<template>
    <div>
        <h1>Club name:  {{club.name}}</h1>
        <article>Club description:  {{club.description}}</article>
        <img :src="club.url" alt="">
    </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        id: this.$route.params.id,
        club: {}
      }
    },
    created() {
      axios.get('https://test-project-2ecfe.firebaseio.com/clubs/' + this.id + '.json').then(response => {
        this.club = response.data;
      })
    }
  }
</script>

<style scoped>
    #single-club{
        max-width: 960px;
        margin: 0 auto;
        padding: 20px;
        background: #eee;
        border: 1px dotted #aaa;
    }
    img{
        width: 700px;
        height: 600px;
    }
</style>