import app from './app/app.vue';

window.onload = () => {
  /* eslint-disable */
  new Vue({
    /* eslint-enable */
    el: 'app',
    components: {
      app,
    },
  });
};

if (module.hot) {
  module.hot.accept();
}
