export default {
  GetStorageRef(state, storageRef){
    state.storageRef = storageRef;
  },
  GetAllClubs(state, clubsArray){
    state.clubs = clubsArray;
  },
  UploadImageMut(state, options){
    console.log('MUATTAIA', options);
    state.done = options.done;
    state.url = options.url;
    state.nameOfUrl = options.nameOfUrl;
  }
}
