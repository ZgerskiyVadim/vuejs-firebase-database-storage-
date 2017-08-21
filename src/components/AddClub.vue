<template>
    <div>
        <h2>Add a New Club</h2>
        <form v-if="!submitted">
            <label>Club Name:</label>
            <input type="text" v-model.lazy="club.name" required />
            <label>Club Description:</label>
            <textarea v-model.lazy.trim="club.description"></textarea>
            <hr />
            <label>Picture:</label>
            <DownLoadForm @input="uploadImage"></DownLoadForm>
            <label v-if="download && !done">{{download}}</label>
            <label v-if="done">{{done}}</label>
            <button v-on:click.prevent="post">Add Club</button>
        </form>
        <div v-if="submitted">
            <h3>Thanks for adding your club</h3>
        </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import DownLoadForm from './DownLoadForm.vue'

  export default {
    data () {
      return {
        club: {
          name: '',
          description: '',
          url: '',
          nameOfUrl: ''
        },
        done: '',
        download: '',
        imageDownLoaded: '',
        submitted: false
      }
    },
    components: {DownLoadForm},
    methods: {
      post(){
        const vm = this;
        axios.post('https://test-project-2ecfe.firebaseio.com/clubs.json', this.club).then(response => {
          vm.submitted = true;
        });
      },
      uploadImage(imageObject){
        const randomString = Math.random().toString(36).substring(7);
        imageObject.randomString = randomString;
        this.download = 'Downloading....';
        this.$store.dispatch('getStorageRef');
        const storageRef = this.$store.state.storageRef;
          //dynamically set reference to the file name
          var thisRef = storageRef.child(imageObject.randomString);
        const vm = this;
          //put request upload file to firebase storage
          thisRef.put(imageObject).then(function(snapshot) {
            thisRef.getDownloadURL().then(url => {
                vm.done = 'Done';
                vm.club.url = url;
                vm.club.nameOfUrl = imageObject.randomString;
              })
          });
      }
    }
  }
</script>

<style scoped>
    #add-club *{
        box-sizing: border-box;
    }
    #add-club{
        margin: 20px auto;
        max-width: 600px;
        padding: 20px;
    }
    label{
        display: block;
        margin: 20px 0 10px;
    }
    input[type="text"], textarea, select{
        display: block;
        width: 100%;
        padding: 8px;
    }
    textarea{
        height:200px;
    }
    #preview{
        padding: 10px 20px;
        border: 1px dotted #ccc;
        margin: 30px 0;
    }
    h3{
        margin-top: 10px;
    }
    #checkboxes input{
        display: inline-block;
        margin-right: 10px;
    }
    #checkboxes label{
        display: inline-block;
        margin-top: 0;
    }
    hr{
        display: none;
    }
    button{
        display: block;
        margin: 20px 0;
        background: crimson;
        color: #fff;
        border: 0;
        padding: 14px;
        border-radius: 4px;
        font-size: 18px;
        cursor: pointer;
    }
</style>