<template>
  <div
    class="intro-row d-flex flex-column align-items-center flex-md-row justify-content-md-between"
  >
    <div
      class="card mt-2 bd-filter"
      style="width: 18rem;"
      data-aos="flip-left"
      data-aos-offset="300"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
    >
      <div class="card-body shadow">
        <h5 class="card-title text-center text-muted">
          <fa icon="code" type="fas" class="intro-icon"></fa>
        </h5>
        <h3 class="card-title mt-3 text-center">Coding</h3>
        <p class="card-text text-center">
          I improve my coding skill every day!
        </p>
      </div>
    </div>
    <div
      class="card mt-2 border-end border-start bd-filter"
      style="width: 18rem;"
      data-aos="flip-left"
      data-aos-offset="300"
      data-aos-delay="200"
      data-aos-easing="ease-in-out"
    >
      <div class="card-body shadow">
        <h5 class="card-title text-center text-muted">
          <fa icon="magic" type="fas" class="intro-icon"></fa>
        </h5>
        <h3 class="card-title mt-3 text-center">Web layout</h3>
        <p class="card-text text-center">I can make websites look great!</p>
      </div>
    </div>
    <div
      class="card mt-2 bd-filter"
      style="width: 18rem;"
      data-aos="flip-left"
      data-aos-offset="300"
      data-aos-delay="300"
      data-aos-easing="ease-in-out"
    >
      <div class="card-body shadow">
        <h5 class="card-title text-center text-muted">
          <fa icon="exchange-alt" type="fas" class="intro-icon"></fa>
        </h5>
        <h3 class="card-title mt-3 text-center">API design</h3>
        <p class="card-text text-center">
          Not only front-end, I have back-end knowledge! which helps me on
          cooperation with backend engineers
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>

<style lang="scss" scoped>
.card-body {
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card {
  border: none;
  border-radius: 0;
  width: 18rem;
}
.intro-icon {
  height: 30px;
}
</style>
