<template>
  <div id="app">
    <span>{{ $store.state.count }}</span>
    <br>
    <span>isOdd: {{ isOdd }}</span>
    <br>
    <span>isEven: {{ isEven }}</span>
    <br>
    <input type="button" value="inc" @click="increment">
    <input type="button" value="dec" @click="decrement">
  </div>
</template>

<script>
import {
  mapActions,
  mapGetters,
} from 'vuex';

export default {
  /**
   * map getters to computed
   */
  computed: mapGetters([
    'isOdd',
    'isEven',
  ]),
  /**
   * map actions to methods
   */
  methods: mapActions([
    'increment',
    'decrement',
  ]),
  /**
   * it equals to:
   */
  /*
  methods: {
    increment() {
      this.$store.dispatch('increment');
    },
    decrement() {
      this.$store.dispatch('decrement');
    }
  },
  */
};
</script>
