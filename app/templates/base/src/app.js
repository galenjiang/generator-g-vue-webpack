import Vue from 'vue'
import Container from './container/index.vue'

new Vue({
  el: '#app',
  template: '<container></container>',
  components: {
    container: Container,
  },
})
