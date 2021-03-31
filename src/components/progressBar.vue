<template>
  <div class="progress-bar" :style="{width: `${currentProgress}%`}">
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  setup () {
    const currentProgress = ref(0)
    onMounted(() => {
      window.addEventListener('scroll', () => {
        if (window.scrollY === 0) {
          currentProgress.value = 0
        } else {
          const fullHeight = document.body.offsetHeight
          currentProgress.value = (window.scrollY + window.innerHeight) / fullHeight * 100
        }
      })
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', () => {
        if (window.scrollY === 0) {
          currentProgress.value = 0
        } else {
          const fullHeight = document.body.offsetHeight
          currentProgress.value = (window.scrollY + window.innerHeight) / fullHeight * 100
        }
      })
    })
    return {
      currentProgress
    }
  }
})
</script>

<style lang="scss" scoped>
.progress-bar {
    z-index: 99999;
    height: 4px;
    border-radius: 10px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #dc9898c9;
}
</style>
