<template>
  <div class="w-100 d-flex flex-wrap">
    <div class="col-12 col-md-4 my-3 m-md-0 px-3" v-for="(item,index) in skills" :key="item.category">
      <div
        class="d-flex flex-column align-items-center shadow bd-filter p-3 skill-card"
        data-aos="fade-up"
        data-aos-offset="300"
        :data-aos-delay="100*index"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
      >
        <h3
          class="w-100 text-start text-capitalize skill-head position-relative text-end"
        >
          {{item.category}}
        </h3>
        <ul class="w-100 lh-lg">
          <li v-for="skill in item.list" :key="skill">{{skill}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const skills = ref([
      {
        category: 'Front-end',
        list: ['Javascript', 'HTML5', 'CSS', 'SCSS', 'JQuery', 'Vue']
      },
      {
        category: 'Back-end',
        list: ['Nodejs', 'Express', 'MongoDB']
      },
      {
        category: 'Other',
        list: ['Git', 'Visual Studio Code', 'Affinity photo']
      }
    ])
    return { skills }
  }
})
</script>

<style lang="scss" scoped>
.skill-head {
  &::after {
    content: '';
    width: 100%;
    background-color: black;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
.skill-card {
  min-height: 20rem;
}
</style>
