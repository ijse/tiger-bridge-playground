<template>
  <div class="bridge-api">
    <button @click="call"> Click to Call API </button>
    <pre>
      <h3> 下面是点击按钮后执行的代码：</h3><code>{{ apiToString }}</code>
    </pre>
  </div>
</template>

<script>
import { callApi } from "./handler.js";

export default {
  name: "BridgeAPI",
  computed: {
    apiToString() {
      return callApi.toString();
    }
  },
  methods: {
    call() {
      callApi();
    }
  }
};
</script>

<style scoped>
button {
  padding: 5px 10px;
}
pre {
  text-align: left;
}
</style>
