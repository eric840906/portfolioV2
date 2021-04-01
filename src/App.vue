<template>
  <!-- <Progress></Progress> -->
  <Navbar :screenSize="screenSize" @toProject="toProject" @toSkills="toSkills" @toIntro="toIntro" @toAbout="toAbout" @toTop="toTop"></Navbar>
  <div class="container" style="height: 100vh">
    <Me></Me>
  </div>
  <div class="wave-bg" id="intro-block" style="margin-top: 15vh">
    <div class="wave"></div>
    <div class="container overflow-hidden">
      <div class="row mb-5">
        <Catehead
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-delay="100"
          data-aos-easing="ease-in-out"
          :title="'What i can do'"
        ></Catehead>
        <Intro></Intro>
      </div>
    </div>
  </div>
  <div class="wave-bg" id="skill-block">
    <div class="wave-btm"></div>
    <div class="container overflow-hidden">
      <div class="row pb-5 flex-column">
        <Catehead
          data-aos="fade-right"
          data-aos-duration="4000"
          data-aos-offset="300"
          data-aos-easing="ease-in-out"
          :title="'my skills'"
        ></Catehead>
        <Skills></Skills>
      </div>
    </div>
  </div>
  <div class="wave-bg" id="project-block">
    <div class="wave"></div>
    <div class="wave-btm"></div>
    <div class="container">
    <div class="row mb-5 flex-column  overflow-hidden">
      <Catehead
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-delay="100"
        data-aos-easing="ease-in-out"
        :title="'my projects'"
      ></Catehead>
      <Carousel
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-delay="100"
        data-aos-easing="ease-in-out"
      ></Carousel>
    </div>
  </div>
  </div>
  <div class="container overflow-hidden" id="about-block">
    <div class="row mb-5 flex-column">
      <Catehead
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-delay="100"
        data-aos-easing="ease-in-out"
        :title="'about me'"
      ></Catehead>
      <Career></Career>
    </div>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, onMounted, onUnmounted, ref } from 'vue'
// import Progress from '@/components/progressBar.vue'
import Me from '@/components/nameCard.vue'
import Navbar from '@/components/Navbar.vue'
// import Carousel from '@/components/carousel.vue'
import Catehead from '@/components/categoryhead.vue'
// import Career from '@/components/careerMap.vue'
// import Intro from '@/components/siteIntro.vue'
// import Skills from '@/components/skills.vue'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import 'aos/dist/aos.css'
import AOS from 'aos'
AOS.init({
  disable: 'phone',
  throttleDelay: 99,
  once: true
})
const Carousel = defineAsyncComponent(() => import('@/components/carousel.vue' /* webpackChunkName:"Carousel" */)
)
const Career = defineAsyncComponent(() => import('@/components/careerMap.vue' /* webpackChunkName:"Career" */)
)
const Intro = defineAsyncComponent(() => import('@/components/siteIntro.vue' /* webpackChunkName:"Intro" */)
)
const Skills = defineAsyncComponent(() => import('@/components/skills.vue' /* webpackChunkName:"Skills" */)
)
export default defineComponent({
  components: {
    Navbar,
    // Progress,
    Me,
    Catehead,
    Intro,
    Carousel,
    Skills,
    Career
  },
  setup () {
    const screenSize = ref(0)
    gsap.registerPlugin(ScrollToPlugin)
    screenSize.value = window.innerWidth
    const toProject = () => {
      gsap.to(window, { duration: 0, scrollTo: '#project-block' })
    }
    const toSkills = () => {
      gsap.to(window, { duration: 0, scrollTo: '#skill-block' })
    }
    const toAbout = () => {
      gsap.to(window, { duration: 0, scrollTo: '#about-block' })
    }
    const toIntro = () => {
      gsap.to(window, { duration: 0, scrollTo: '#intro-block' })
    }
    const toTop = () => {
      gsap.to(window, { duration: 0, scrollTo: 0 })
    }
    onMounted(() => {
      window.addEventListener('resize', e => {
        const w = e.target as Window
        screenSize.value = w.innerWidth
      })
    })
    onUnmounted(() => {
      window.removeEventListener('resize', e => {
        const w = e.target as Window
        screenSize.value = w.innerWidth
      })
    })
    return {
      screenSize,
      toProject,
      toSkills,
      toAbout,
      toIntro,
      toTop
    }
  }
})
</script>

<style lang="scss">
#app {
  font-family: 'Dosis', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-image: url('~@/assets/background.jpg');
  overflow-x: hidden;
}
.wave-bg {
  position: relative;
  // background-attachment: fixed;
  .wave {
    position: absolute;
    background-image: url('~@/assets/wave1.svg');
    background-size: cover;
    top: 0;
    left: 0;
    width: 100%;
    height: 320px;
    animation: wavy 10s linear infinite;
    @media (max-width: 1024px) {
      animation: wavy-mobile 10s linear infinite;
    }
    &::before {
      content: '';
      position: absolute;
      background-image: url('~@/assets/wave1.svg');
      background-size: cover;
      top: 0;
      left: 0;
      width: 100%;
      opacity: 0.6;
      height: 320px;
      animation: wavy-reverse 15s linear infinite;
      @media (max-width: 1024px) {
        animation: wavy-mobile-reverse 15s linear infinite;
      }
    }
    &::after {
      content: '';
      position: absolute;
      background-image: url('~@/assets/wave1.svg');
      background-size: cover;
      top: 0;
      left: 0;
      width: 100%;
      opacity: 0.4;
      height: 320px;
      animation-delay: 5s;
      animation: wavy-reverse 15s linear infinite;
      @media (max-width: 1024px) {
        animation: wavy-mobile-reverse 15s linear infinite;
      }
    }
  }
  .wave-btm {
    position: absolute;
    background-image: url('~@/assets/wave2.svg');
    background-size: cover;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 320px;
    animation: wavy 20s linear infinite;
    @media (max-width: 1024px) {
      animation: wavy-mobile 20s linear infinite;
    }
    &::before {
      content: '';
      position: absolute;
      background-image: url('~@/assets/wave2.svg');
      background-size: cover;
      bottom: 0;
      left: 0;
      width: 100%;
      opacity: 0.6;
      height: 320px;
      animation: wavy-reverse 30s linear infinite;
      @media (max-width: 1024px) {
        animation: wavy-mobile-reverse 30s linear infinite;
      }
    }
    &::after {
      content: '';
      position: absolute;
      background-image: url('~@/assets/wave2.svg');
      background-size: cover;
      bottom: 0;
      left: 0;
      width: 100%;
      opacity: 0.4;
      animation-delay: 5s;
      height: 320px;
      animation: wavy-reverse 30s linear infinite;
      @media (max-width: 1024px) {
        animation: wavy-mobile-reverse 30s linear infinite;
      }
    }
  }
}
@keyframes wavy {
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: 99.4vw;
  }
}
@keyframes wavy-mobile {
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: 1440px;
  }
}
@keyframes wavy-reverse {
  0% {
    background-position-x: 99.4vw;
  }
  100% {
    background-position-x: 0;
  }
}
@keyframes wavy-mobile-reverse {
  0% {
    background-position-x: 1440px;
  }
  100% {
    background-position-x: 0;
  }
}

</style>
