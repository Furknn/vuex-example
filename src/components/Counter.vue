<template>
  <div class="counter-container">
    <button @click="decrease">Decrease</button>
    <span>{{ $store.state.count }}k</span>
    <button @click="increase">Increase</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Counter",

  methods: {
    decrease() {
      this.$store.dispatch("userDecreased");
    },
    increase() {
      this.$store.dispatch("userIncreased");
    },
    ...mapActions(["userIncreased", "userIncreased"]),
  },
};
</script>
<style scoped>
.counter-container {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
}
</style>