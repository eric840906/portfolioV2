<template>
  <h1 class="display-6 text-uppercase my-5 title position-relative" :data-title="title">
    <span class="title-main">{{ title }}</span>
  </h1>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String
    }
  }
})
</script>

<style lang="scss" scoped>
.title {
   .title-main {
    z-index: 10;
    position: relative;
    margin-left: 15rem;
    }
  &::after {
    content: attr(data-title);
    position: absolute;
    z-index: 2;
    font-size: 5rem;
    color: #dc9898c9;
    left: 4rem;
    top: -3rem;
  }
  @media (max-width: 768px) {
    .title-main {
      margin-left: 0;
    }
    &::after {
      display: none;
    }
  }
}
</style>
