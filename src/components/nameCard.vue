<template>
  <div class="row mb-5 justify-content-center">
    <div class="col-12">
      <div
        class="profile-card d-flex flex-column justify-content-center align-items-center p-3 bd-filter shadow rounded"
      >
        <img
          class="img-fluid user-img"
          src="~@/assets/profilePic.jpg"
          alt=""
          data-aos="zoom-in-up"
        />
        <div>
          <transition-group appear @before-enter="beforeEnter" @enter="enter">
            <div class="text-center d-flex my-2 info-row" v-for="(item, index) in infoArr" :key="item" :data-index="index">
              <fa :icon="item.icon" :type="item.type" class="profile-icon"></fa>
              <span class="align-middle ms-3"><a :href="item.link">{{item.text}}</a></span>
            </div>
          </transition-group>
        </div>
        <div>
          <a
            class=" align-middle mx-auto position-relative overflow-hidden w-100 text-center d-flex my-3 p-3 shadow resume-btn"
            href="https://www.cakeresume.com/eric840906"
            target="blank"
            data-aos="fade-up"
            >Resume Download</a
          >
        </div>
        <div class="w-100 d-flex justify-content-evenly mb-2">
          <transition-group appear @before-enter="beforeEnter" @enter="enter">
            <a
            v-for="(item, index) in linkBtnArr" :key="item.link"
            :href="item.link"
            target="blank"
            class="p-3 shadow rounded-circle glass-btn link-btn"
            :data-index="index"
            >
              <fa :icon="item.icon" type="fab" class="profile-icon"></fa>
            </a>
          </transition-group>
        </div>
        <h1 class="display-1 text-center" id="my-intro">
        </h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import gsap from 'gsap'
import TextPlugin from 'gsap/TextPlugin'

export default defineComponent({
  setup () {
    const infoArr = ref([
      {
        link: '',
        text: 'Eric Chiu',
        icon: 'address-card',
        type: 'far'
      },
      {
        link: 'mailto:eric840906@hotmail.com.tw',
        text: 'eric840906@hotmail.com.tw',
        icon: 'envelope',
        type: 'far'
      },
      {
        link: 'https://hackmd.io/@c04lOMyVQZSN-SPA2h-MeA',
        text: 'Hackmd notes',
        icon: 'pencil-alt',
        type: 'fas'
      }
    ])
    const linkBtnArr = ref([
      {
        link: 'https://github.com/eric840906',
        icon: 'github-alt'
      },
      {
        link: 'https://codepen.io/dyhebcro',
        icon: 'codepen'
      },
      {
        link: 'https://www.linkedin.com/in/eric-chiu-911a5a174/',
        icon: 'linkedin-in'
      }
    ])
    const beforeEnter = (el: HTMLElement) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(10px)'
    }
    const enter = (el: HTMLElement) => {
      if (!el.dataset.index) return
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2 * +el.dataset.index
      })
      el.style.opacity = '1'
      el.style.transform = 'translateY(0px)'
    }
    gsap.registerPlugin(TextPlugin)
    const tl = gsap.timeline()
    onMounted(() => {
      tl.to('#my-intro', { duration: 2, text: 'HI! My name is Eric,<br> a front-end developer.' }, '1')
    })
    return {
      infoArr,
      linkBtnArr,
      beforeEnter,
      enter
    }
  }
})
</script>

<style lang="scss" scoped>

.user-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 100%;
}
.profile-card {
  margin-top: 10vh;
}
.profile-icon {
  height: 30px;
  transition: all 0.5s ease;
}
.resume-btn {
  &::before {
    content: '';
    height: 10%;
    top: 7px;
    /* width: 100%; */
    background-color: #dc989886;
    position: absolute;
    left: 0;
    width: 100%;
    transform: translateX(-101%);
    z-index: -1;
    transition: all 0.5s ease;
  }
  &::after {
    content: '';
    height: 10%;
    bottom: 7px;
    /* width: 100%; */
    background-color: #dc989886;
    position: absolute;
    left: 0;
    width: 100%;
    transform: translateX(101%);
    z-index: -1;
    transition: all 0.5s ease;
  }
  &:hover {
    &::before {
      transform: translateX(0%);
    }
    &::after {
      transform: translateX(0%);
    }
  }
}
.link-btn {
  &:hover {
    .profile-icon {
      color: #dc9898c9;
    }
  }
}
.info-row {
  width: 250px;
}
</style>
