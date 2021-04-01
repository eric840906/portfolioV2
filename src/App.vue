<template>
  <Progress></Progress>
  <Navbar :screenSize="screenSize" @toProject="toProject" @toSkills="toSkills" @toIntro="toIntro" @toAbout="toAbout" @toTop="toTop"></Navbar>
  <!-- <div class="d-flex flex-wrap p-3 bd-filter shadow rounded">
    <div class="col-md-6 p-3">
      <div class="d-flex justify-content-center p-3">
        <img
          class="img-fluid"
          src="https://i.pinimg.com/originals/c4/0d/7a/c40d7a7060fb74926c257db982b6ddaf.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="col-md-6 p-3">
      <div class="d-flex flex-column justify-content-center align-items-center h-100 p-3">
        <div class="w-100 text-center d-flex my-2">
          <fa icon="address-card" type="far" class="profile-icon"></fa>
          <span class="align-middle mx-auto">Eric Chiu</span>
        </div>
        <div class="w-100 text-center d-flex mb-2">
          <fa icon="envelope" type="far" class="profile-icon"></fa>
          <span class="align-middle mx-auto"
            ><a href="mailto:eric840906@hotmail.com.tw"
              >eric840906@hotmail.com.tw</a
            ></span
          >
        </div>
        <div class="w-100 text-center d-flex mb-2">
          <fa icon="pencil-alt" type="fas" class="profile-icon"></fa>
          <span class="align-middle mx-auto"
            ><a href="https://hackmd.io/@c04lOMyVQZSN-SPA2h-MeA"
              >Hackmd notes</a
            ></span
          >
        </div>
        <div>
          <a
            class=" align-middle mx-auto position-relative overflow-hidden w-100 text-center d-flex my-3 p-3 shadow resume-btn"
            href="https://hackmd.io/@c04lOMyVQZSN-SPA2h-MeA"
            target="blank"
            >Resume Download</a
          >
        </div>
        <div class="w-100 d-flex justify-content-evenly mb-2">
          <a
            href="https://github.com/eric840906"
            target="blank"
            class="p-3 shadow rounded-circle glass-btn link-btn"
          >
            <fa icon="github-alt" type="fab" class="profile-icon"></fa>
          </a>
          <a
            href="https://www.linkedin.com/in/eric-chiu-911a5a174/"
            target="blank"
            class="p-3 shadow rounded-circle glass-btn link-btn"
          >
            <fa icon="linkedin-in" type="fab" class="profile-icon"></fa>
          </a>
        </div>
      </div>
    </div>
  </div> -->
  <div class="container" style="height: 100vh">
    <Me></Me>
  </div>
  <div class="wave-bg" id="intro-block" style="margin-top: 15vh">
    <div class="wave"></div>
    <div class="container">
      <div class="row mb-5">
        <Catehead
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-delay="100"
          data-aos-once="false"
          data-aos-easing="ease-in-out"
          :title="'What i can do'"
        ></Catehead>
        <Intro></Intro>
      </div>
    </div>
  </div>
  <div class="wave-bg" id="skill-block">
    <div class="wave-btm"></div>
    <div class="container">
      <div class="row pb-5 flex-column">
        <Catehead
          data-aos="fade-right"
          data-aos-duration="4000"
          data-aos-offset="300"
          data-aos-once="false"
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
    <div class="row mb-5 flex-column">
      <Catehead
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-delay="100"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        :title="'my projects'"
      ></Catehead>
      <Carousel
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-delay="100"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
      ></Carousel>
    </div>
  </div>
  </div>
  <div class="container" id="about-block">
    <div class="row mb-5 flex-column">
      <Catehead
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-delay="100"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        :title="'about me'"
      ></Catehead>
      <Career></Career>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import Progress from '@/components/progressBar.vue'
import Me from '@/components/nameCard.vue'
import Career from '@/components/careerMap.vue'
import Navbar from '@/components/Navbar.vue'
import Carousel from '@/components/carousel.vue'
import Catehead from '@/components/categoryhead.vue'
import Intro from '@/components/siteIntro.vue'
import Skills from '@/components/skills.vue'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import 'aos/dist/aos.css'
import AOS from 'aos'
AOS.init({
  disable: 'phone'
})
export default defineComponent({
  components: {
    Navbar,
    Progress,
    Me,
    Carousel,
    Catehead,
    Intro,
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
  background-attachment: fixed;
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
