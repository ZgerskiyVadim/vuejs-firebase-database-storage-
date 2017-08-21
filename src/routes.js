import addClub from './components/AddClub.vue';
import showBlogs from './components/FirstPage.vue';
import singleBlog from './components/DetailsOfClub.vue';

export default [
  { path: '/', component: showBlogs},
  { path: '/add', component: addClub},
  { path: '/club/:id', component: singleBlog}
]