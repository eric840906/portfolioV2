<template>
  <ul class="list-unstyled">
    <li
      :class="[
        'career-map-block',
        `${index === 0 ? 'mt-3' : index === career.length - 1 ? 'mb-3' : ''}`
      ]"
      v-for="(item, index) in career"
      :key="item.title"
      :data-aos="`${index % 2 ? 'fade-left' : 'fade-right'}`"
      data-aos-offset="0"
      data-aos-delay="500"
      data-aos-once="false"
      data-aos-easing="ease-in-out"
    >
      <div
        class="rounded-circle position-absolute career-point"
        :data-time="item.time"
      ></div>
      <div class="p-3">
        <div class="bd-filter shadow p-3 rounded">
          <h3 class="text-capitalize">{{ item.title }}</h3>
          <p v-html="item.text"></p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const career = ref([
      {
        title: 'Graduation',
        text:
          'I Earned my bachelor degree from eletro-optical department of NTUT.',
        time: 'June, 2018'
      },
      {
        title: 'Military serving',
        text: 'I joined Army after graduation.',
        time: 'July, 2018'
      },
      {
        title: 'First job',
        text:
          'I worked at Edwards Vacuum after serving the army,<br>was resiponsible for managing daily tasks of the crew and analyzing known issues at that time.',
        time: 'January, 2019'
      },
      {
        title: 'Self-taught web dev skills',
        text:
          'The beginning of my journey of porgramming, learning html, css, javascript, Vuejs, nodejs, mongoDB and typescript step by step.',
        time: 'April, 2020'
      },
      {
        title: 'More Challenges',
        text:
          "Improving my coding knowledge & Trying to find a new job with those development skills i've learnt.",
        time: 'Now'
      }
    ])
    return {
      career
    }
  }
})
</script>

<style lang="scss" scoped>
.career-map-block {
  position: relative;
  border-style: dashed;
  border-color: #a9b0bc;
  .career-point {
    width: 1.5rem;
    height: 1.5rem;
    background-color: #64676e;
    top: 50%;
    z-index: 2;
    transform: translateY(-50%);
    transition: 0.5s all ease;
    cursor: pointer;
    &::before {
      content: attr(data-time);
      position: absolute;
      background-color: white;
      white-space: nowrap;
      box-shadow: 0px 0px 3px black;
      border-radius: 10px;
      top: -3rem;
      padding: 0.5rem;
      left: -1rem;
      transition: 0.5s all ease;
      opacity: 0;
    }
    &:hover {
      background-color: rgb(206, 206, 206);
      &::before {
        opacity: 1;
      }
    }
  }
  &:nth-child(2n) {
    border-width: 0 5px 5px 0;
    .career-point {
      right: -0.95rem;
    }
  }
  &:nth-child(2n + 1) {
    border-width: 0 0 5px 5px;
    .career-point {
      left: -0.95rem;
    }
  }
}
</style>
