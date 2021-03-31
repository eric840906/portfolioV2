<template>
  <div>
    <nav :class="['navbar', 'navbar-expand-lg', 'navbar-light', 'nav-bg', 'fixed-top', `${navShow ? 'nav-show' : 'nav-hide'}`]">
      <div class="container-fluid">
        <button v-if="screenSize < 993" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" @click="toggleNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <transition name="nav-show">
          <div v-show="navbarStatus" :class="['navbar-collapse','text-start']" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0 fs-4 justify-content-evenly w-100">
              <li class="nav-item">
                <a class="text-decoration-none text-nav-link" href="#" @click.prevent="$emit('toProject')">Project</a>
              </li>
              <li class="nav-item">
                <a class="text-decoration-none text-nav-link" href="#" @click.prevent="$emit('toIntro')">Intro</a>
              </li>
              <li class="nav-item">
                <a class="text-decoration-none text-nav-link" href="#" @click.prevent="$emit('toSkills')">Skills</a>
              </li>
              <li class="nav-item">
                <a class="text-decoration-none text-nav-link" href="#" @click.prevent="$emit('toAbout')">About</a>
              </li>
              <li class="nav-item">
                <a class="text-decoration-none text-nav-link" href="#" @click.prevent="$emit('toTop')">Top</a>
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
export default defineComponent({
  emits: [
    'toProject',
    'toIntro',
    'toSkills',
    'toAbout',
    'toTop'
  ],
  props: {
    screenSize: {
      type: Number
    }
  },
  setup () {
    const scroll = ref(0)
    const navShow = ref(true)
    scroll.value = window.scrollY
    const navbarStatus = ref(false)
    const toggleNav = () => {
      navbarStatus.value = !navbarStatus.value
    }
    onMounted(() => {
      window.addEventListener('scroll', () => {
        navShow.value = false
        if (window.window.scrollY < scroll.value) {
          navShow.value = true
        }
        scroll.value = window.scrollY
      })
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', () => {
        navShow.value = false
        if (window.window.scrollY < scroll.value) {
          navShow.value = true
        }
        scroll.value = window.scrollY
      })
    })
    return {
      navbarStatus,
      toggleNav,
      navShow
    }
  }
})
</script>

<style lang="scss" scoped>
.nav-bg {
  background-color: #ffffff47;
}
.theme-color {
  color: #906c64;
}
.contact-info {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  a{
    color: #6c757d;
    &:hover {
      color: #b4685dcc;
    }
  }
}
.navbar {
  z-index: 999;
  width: 100%;
  backdrop-filter: blur(3px);
  transition: all 0.5s ease;
}
.nav-show {
  transform: translateY(0);
}
.nav-hide {
  transform: translateY(-300px);
}
.router-link-active {
  color: #906c64;
}
.navbar-collapse {
  @media (max-height:992px) {
    overflow: hidden;
    transition: height 0.3s ease;
  }
}
.button-group {
  display: flex;
  @media (max-width:992px) {
    flex-direction: column;
  }
  div + div {
    @media (min-width:992px) {
      margin-left: 5px;
    }
    @media (max-width:992px) {
      margin-top: 5px;
    }
  }
}
.nav-show-enter-from, .nav-show-leave-to {
  max-height: 0;
}
.nav-show-enter-to, .nav-show-leave-from {
  max-height: 500px;
}
.nav-show-enter-active, .nav-show-leave-active {
  transition: all 0.8s ease;
}
.top-show-enter-from, .top-show-leave-to {
  transform: scaleY(0);
  opacity: 0;
}
.top-show-enter-to, .top-show-leave-from {
  transform: scaleY(1);
  opacity: 1;
}
.top-show-enter-active, .top-show-leave-active {
  transition: all 0.2s ease;
}
</style>
