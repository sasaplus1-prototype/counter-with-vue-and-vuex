import Vue from 'vue';

import store from './store';

import Counter from './Counter.vue';

new Vue({
  el: '#app',
  store,
  render(createElement) {
    return createElement(Counter);
  },
});
