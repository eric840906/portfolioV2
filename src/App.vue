<template>
  <!-- <Progress></Progress> -->
  <Navbar :screenSize="screenSize" @toProject="toProject" @toSkills="toSkills" @toIntro="toIntro" @toAbout="toAbout" @toTop="toTop"></Navbar>
  <div class="container" style="height: 100vh">
    <Me></Me>
  </div>
  <div class="container-fluid wave" id="intro-block">
    <div class="container overflow-hidden">
      <div class="row">
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
  <div class="container-fluid wave-btm">
    <div class="container">
      <div class="row pb-5 flex-column  overflow-hidden">
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
          style="z-index: 2;"
        ></Carousel>
      </div>
    </div>
  </div>
  <div class="container-fluid wave">
    <div class="container overflow-hidden" id="about-block">
      <div class="row mb-5 flex-column">
        <Catehead
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-delay="100"
          data-aos-easing="ease-in-out"
          :title="'about me'"
        ></Catehead>
        <Career style="z-index: 2;"></Career>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, onMounted, onUnmounted, ref } from 'vue'
import Me from '@/components/nameCard.vue'
import Navbar from '@/components/Navbar.vue'
import Catehead from '@/components/categoryhead.vue'
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
.wave {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  margin-bottom: 10rem;
  &::before {
    content: '';
    position: absolute;
    background-image: url('~@/assets/wave1.svg');
    top: 0;
    left: 0;
    width: 300%;
    opacity: 0.6;
    height: 320px;
    transform: translate3d(0%, 0px, 0px);
    animation: wavy-reverse 70s linear infinite;
    @media (max-width: 425px) {
      display: none;
    }
  }
  &::after {
    content: '';
    position: absolute;
    background-image: url('~@/assets/wave1.svg');
    top: 0;
    left: 0;
    width: 300%;
    opacity: 0.4;
    height: 320px;
    transform: translate3d(0%, 0px, 0px);
    animation: wavy 35s linear infinite;
    @media (max-width: 425px) {
      display: none;
    }
  }
}
.wave-btm {
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  &::before {
    content: '';
    position: absolute;
    background-image: url('~@/assets/wave2.svg');
    bottom: 0;
    left: 0;
    width: 300%;
    opacity: 0.6;
    height: 320px;
    transform: translate3d(0%, 0px, 0px);
    animation: wavy-reverse 130s linear infinite;
    @media (max-width: 425px) {
      display: none;
    }
  }
  &::after {
    content: '';
    position: absolute;
    background-image: url('~@/assets/wave2.svg');
    bottom: 0;
    left: 0;
    width: 300%;
    opacity: 0.4;
    animation-delay: 5s;
    height: 320px;
    transform: translate3d(0%, 0px, 0px);
    animation: wavy 65s linear infinite;
    @media (max-width: 425px) {
      display: none;
    }
  }
}

@keyframes wavy {
  0% {
    transform: translate3d(-50%, 0px, 0px);
    opacity: 0.5
  }
  50% {
    transform: translate3d(0%, 0px, 0px);
    opacity: 1
  }
  100% {
    transform: translate3d(-50%, 0px, 0px);
    opacity: 0.5
  }
}

@keyframes wavy-reverse {
  0% {
    transform: translate3d(0%, 0px, 0px);
    opacity: 1
  }
  50% {
    transform: translate3d(-50%, 0px, 0px);
    opacity: 0.5
  }
  100% {
    transform: translate3d(0%, 0px, 0px);
    opacity: 1
  }
}
</style>
