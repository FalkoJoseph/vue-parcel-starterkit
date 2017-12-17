import app from './app/app.vue';

window.onload = function(){
  new Vue({
    el: 'app',
    components: {
      app
    },
  });
}

if (module.hot) {
  module.hot.accept();
}
