<template>
  <div id="app">
    <h1> Welcome to TigerBridge Live! </h1>
    <p> Current: {{ version }} </p>
    <p>
      <label for="isDebug">
        <input id="isDebug" type="checkbox" v-model="isDebug" /> Debug Mode (echo api call params)
      </label>
    </p>
    <BridgeAPI />
    <p>
      <pre>
        {{ error }}
      </pre>
    </p>
    <data>i am here</data>
  </div>
</template>

<script>
import BridgeAPI from "./components/BridgeAPI";
export default {
  name: "App",
  components: {
    BridgeAPI
  },
  data: () => ({
    isDebug: false,
    error: null,
    version: TigerBridge.version
  }),
  watch: {
    isDebug: {
      handler(debug) {
        TigerBridge.setDebug(debug);
      },
      immediate: true
    }
  },
  errorCaptured(err, vm, message) {
    console.log(err);
    this.error = err;
    window.onerror = function(e) {
      this.error = e;
    };
  }
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
</style>
