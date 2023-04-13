<template>
  <div :style="{ background: `url(${bg})` }" class="box">
    <div class="box-left">
      <RouterLink to="/reg">REG</RouterLink>
      <RouterLink to="/">LOG</RouterLink>
    </div>
    <div class="box-center">
      <div id="china"></div>
    </div>
    <div class="box-right">
      <RouterView></RouterView>
    </div>
    <div>
      
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import bg from "./assets/1.png";
import * as echarts from "echarts";
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
body,
html,
#app {
  height: 100%;
  overflow: hidden;
}
.box {
  height: 100%;
  display: flex;
  overflow: hidden;
  &-left {
    width: 400px;
    background: red;
  }
  &-center {
    flex: 1;
  }
  &-right {
    width: 400px;
    background: green;
  }
}
</style>
