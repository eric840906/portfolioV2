<template>
  <!-- <Progress></Progress> -->
  <Navbar :screenSize="screenSize" @toProject="toProject" @toSkills="toSkills" @toIntro="toIntro" @toAbout="toAbout" @toTop="toTop"></Navbar>
  <div class="container" style="height: 100vh">
    <Me></Me>
  </div>
  <div class="container-fluid wave" id="intro-block">
    <div class="container">
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
    <div class="container" id="project-block">
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
  // background-image: url('~@/assets/background.jpg');
  overflow-x: hidden;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23c7c7c7' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%230a0001'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
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
