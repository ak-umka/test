<template>
  <div class="layout">
    <Sidebar />
    <div class="layout-content">
      <main class="layout-content__main">
        <div class="layout-content__main-container">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "../components/Sidebar.vue";
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  height: 100vh;
}

.layout-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
}

.layout-content__main {
  display: flex;
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
}

.layout-content__main-container {
  max-width: 100%;
//   margin-left: auto;
//   margin-right: auto;
  padding: 8px 16px;
}
</style>
