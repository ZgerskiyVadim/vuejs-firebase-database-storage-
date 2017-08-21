import axios from 'axios'
import firebase from 'firebase'

const config = {
  storageBucket: "gs://test-project-2ecfe.appspot.com"
};
firebase.initializeApp(config);
const storageRef = firebase.storage().ref();

export default {
  getStorageRef,
  deleteClub,
  getAllClubs
}

function getAllClubs({commit}) {
  axios.get('https://test-project-2ecfe.firebaseio.com/clubs.json').then(response => {
    const blogsArray = [];
    for (let key in response.data) {
      response.data[key].id = key;
      blogsArray.push(response.data[key]);
    }
    commit('GetAllClubs', blogsArray);
  });
}

function deleteClub({commit}, options) {
  axios.delete('https://test-project-2ecfe.firebaseio.com/clubs/' + options.id + '.json').then(response => {
    const desertRef = storageRef.child(options.nameOfUrl);
    desertRef.delete().then(() => {
      console.log('Image deleted');
    }).catch(error => {
      console.log('Error', error);
    });
})
}

function getStorageRef({commit}) {
  commit('GetStorageRef', storageRef);
}
