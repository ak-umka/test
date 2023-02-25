<template>
  <div class="breadcrumb">{{ breadcrumb }}</div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const url = computed(() => route.path);

const breadcrumb = computed(() => {
  const path = route.path;
  const pathArray = path.split("/");
  pathArray.shift();
  const breadcrumb = pathArray.map((item) => {
    return item.charAt(0).toUpperCase() + item.slice(1);
  });
  return breadcrumb.join(" > ");
});
</script>

<style lang="scss" scoped>
.breadcrumb {
  padding: 8px 0px ;
}
</style>
