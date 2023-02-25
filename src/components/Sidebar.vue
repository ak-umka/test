<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <span class="sidebar__header" @click="toggleSidebar">
      <svg
        class="svg-custom"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M4 17H20M4 12H20M4 7H20"
            stroke="#ffffff"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
      </svg>
      <div class="sidebar__header__text" :class="{ collapsed }">
        <span v-if="collapsed"></span>
        <span v-else>Functions</span>
      </div>
    </span>

    <RouterLink to="/function1" class="sidebar__header my-2">
      <svg
        class="svg-custom"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            opacity="0.1"
            d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
            fill="#323232"
          ></path>
          <path
            d="M17 17L21 21"
            stroke="#323232"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
            stroke="#323232"
            stroke-width="2"
          ></path>
        </g>
      </svg>
      <div class="sidebar__header__text" :class="{ collapsed }">
        <span v-if="collapsed"></span>
        <span v-else>Function 1</span>
      </div>
    </RouterLink>

    <RouterLink to="/function2" class="sidebar__header">
      <svg
        style="width: 24px; height: 24px"
        fill="#000000"
        viewBox="0 0 1920 1920"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M1807.059 1637.706c0 31.172-25.412 56.47-56.47 56.47H169.411c-31.06 0-56.47-25.298-56.47-56.47V225.94h590.907L854.4 451.824H225.882v112.94H1807.06v1072.942ZM990.269 451.824 764.385 113H0v1524.706c0 93.402 76.01 169.412 169.412 169.412h1581.176c93.403 0 169.412-76.01 169.412-169.412V451.824H990.268Z"
            fill-rule="evenodd"
          ></path>
        </g>
      </svg>
      <div class="sidebar__header__text" :class="{ collapsed }">
        <span v-if="collapsed"></span>
        <span v-else>Function 2</span>
      </div>
    </RouterLink>

    <RouterLink to="/function3" class="sidebar__header my-2">
      <svg
        viewBox="0 0 1024 1024"
        style="width: 24px; height: 24px"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M541.44 103.68l126.72 256 282.88 42.24-204.8 198.4L794.88 883.2 541.44 750.08 288 883.2l48.64-282.88-204.8-198.4 282.88-42.24z"
            fill="#fbff00"
          ></path>
          <path
            d="M794.88 896c-2.56 0-3.84 0-6.4-1.28L541.44 764.16 294.4 894.72c-3.84 2.56-8.96 1.28-14.08-1.28-3.84-2.56-6.4-7.68-5.12-12.8l47.36-275.2L122.88 410.88c-3.84-3.84-5.12-8.96-3.84-12.8s5.12-7.68 10.24-8.96l276.48-39.68 124.16-250.88c3.84-8.96 19.2-8.96 23.04 0l124.16 250.88 276.48 39.68c5.12 1.28 8.96 3.84 10.24 8.96 1.28 5.12 0 10.24-3.84 12.8L760.32 605.44l47.36 275.2c1.28 5.12-1.28 10.24-5.12 12.8-2.56 1.28-5.12 2.56-7.68 2.56zM541.44 737.28c2.56 0 3.84 0 6.4 1.28l230.4 121.6-43.52-256c-1.28-3.84 1.28-8.96 3.84-11.52l185.6-181.76-257.28-37.12c-3.84 0-7.68-3.84-10.24-6.4l-115.2-232.96-115.2 232.96c-1.28 3.84-5.12 6.4-10.24 6.4l-257.28 37.12L345.6 591.36c2.56 2.56 3.84 7.68 3.84 11.52l-43.52 256 230.4-121.6h5.12z"
            fill="#231C1C"
          ></path>
        </g>
      </svg>
      <div class="sidebar__header__text" :class="{ collapsed }">
        <span v-if="collapsed"></span>
        <span v-else>Function 3</span>
      </div>
    </RouterLink>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { collapsed, toggleSidebar, sidebarWidth } from "../store/toggle.js";

window.addEventListener("resize", () => {
  if (window.outerWidth <= 768) {
    collapsed.value = true;
  }
  if (window.outerWidth > 768) {
    collapsed.value = false;
  }
});
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: black;
}
.sidebar {
  display: flex;
  flex-direction: column;
  background-color: #e4e4e4;
  color: black;
  transition: 0.2s all ease-out;
  float: left;
  //   position: fixed;
  //   z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 16px;
}

.svg-custom {
  width: 24px;
  height: 24px;
  fill: none;
  stroke: #ffffff;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.sidebar__header {
  display: flex;
  align-items: center;
}

.sidebar__header__text {
  margin-left: 8px;
  font-size: 16px;
  font-weight: 500;
}

.my-2 {
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>
