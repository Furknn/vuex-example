<template>
  <div>
    <div id="app">
      <h1>Daily Corona Cases in Turkey</h1>
      <div
        class="notificationArea"
        :class="{
          danger: count >= 10000,
          normal: count >= 5000 && count < 10000,
          safe: count < 5000,
        }"
      >
        {{ message }}
      </div>
    </div>
    <Counter />
  </div>
</template>

<script>
import Counter from "./components/Counter";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    Counter,
  },

  computed: {
    message() {
      if (this.count >= 10000) {
        return `Danger!!! Case count is ${this.count}k`;
      } else if (this.count >= 5000 && this.count < 10000) {
        return `Life is normal. Case count is ${this.count}k`;
      } else {
        return `So safe. Case count is ${this.count}`;
      }
    },
    ...mapGetters({ count: "countInK" }),
  },
  mouted() {
    console.log(this);
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.danger {
  background-color: red;
}

.normal {
  background-color: grey;
}

.safe {
  background-color: green;
}

.notificationArea {
  height: 100px;
  padding-top: 60px;
}
</style>
