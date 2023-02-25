<template>
  <div>
    <Breadcrumb />
    <div class="">
      <div class="title">ВХОДНЫЕ ДАННЫЕ</div>
      <div class="inputs">
        <input class="input-custom" type="text" v-model="firstInput" />
      </div>
      <div class="result">
        <div class="result_title">РЕЗУЛЬТАТ</div>
        <div :style="{ color: result = 'red' }">
          {{ firstInput }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Breadcrumb from "../components/Breadcrumb.vue";

const firstInput = ref("");
</script>

<style lang="scss" scoped>
.title {
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0px 8px 0px;
  color: blue;
}

.inputs {
  display: flex;
  gap: 8px;
}

.input-custom {
  width: 100%;
  height: 20px;
  border: 1px solid #e2e8f0;
  border-radius: 2px;
  padding: 0px 8px;
}

.result {
  padding: 8px 0px;
}

.result_title {
  padding: 8px 0px;
  color: blue;
}
</style>
