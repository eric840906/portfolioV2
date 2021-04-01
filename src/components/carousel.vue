<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button mx-2"
        :class="{ active: carouselIndex === index }"
        v-for="(item, index) in carouselArr"
        :key="item.id"
        @click="carouselIndex = index"
      ></button>
    </div>
    <div class="carousel-inner shadow rounded">
      <div class="carousel-item h-100 bd-filter">
        <transition :name="transitionName" mode="out-in">
          <div
            class="h-100 d-flex flex-wrap justify-content-center p-3 overflow-hidden"
            :key="carouselArr[carouselIndex].id"
          >
            <div
              class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-sm-center w-100"
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="200"
              data-aos-once="false"
              data-aos-easing="ease-in-out"
            >
              <img
                class="carousel-img"
                :src="carouselArr[carouselIndex].url"
                alt=""
              />
            </div>
            <div class="col-12 d-flex flex-column text-md-start text-center">
              <h3
                class="mt-md-0 mt-3 text-uppercase text-center"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="500"
                data-aos-once="false"
                data-aos-easing="ease-in-out"
              >
                {{ carouselArr[carouselIndex].title }}
              </h3>
              <p
                class="text-center"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="700"
                data-aos-once="false"
                data-aos-easing="ease-in-out"
              >
                {{ carouselArr[carouselIndex].text }}
              </p>
              <h3
                class="text-center"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="900"
                data-aos-once="false"
                data-aos-easing="ease-in-out"
              >
                Stack
              </h3>
              <div
                class="mt-auto d-flex flex-wrap justify-content-evenly"
                data-aos="fade-up"
                data-aos-offset="400"
                data-aos-delay="1000"
                data-aos-once="false"
                data-aos-easing="ease-in-out"
              >
                <div
                  class="mb-3 text-center"
                  v-for="item in carouselArr[carouselIndex].stack"
                  :key="item"
                >
                  <span class="text-cneter">{{ item }}</span>
                </div>
              </div>
              <div class="d-flex mx-auto mb-5" data-aos="zoom-in"
              data-aos-offset="500"
              data-aos-delay="1200"
              data-aos-once="false"
              data-aos-easing="ease-in-out">
                <a
                  class="text-center text-md-end text-capitalize bd-filter me-3 px-3 shadow glass-btn"
                  :href="carouselArr[carouselIndex].repo"
                  target="blank"
                  >Repo</a
                >
                <a
                  class="text-center text-md-end text-capitalize bd-filter px-3 shadow glass-btn"
                  :href="carouselArr[carouselIndex].demo"
                  target="blank"
                  >Site</a
                >
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <button
      class="carousel-control carousel-control-prev"
      type="button"
      @click="carouselControl(-1)"
    >
      <fa icon="chevron-left" type="fas" class="control-icon left"></fa>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control carousel-control-next"
      type="button"
      @click="carouselControl(1)"
    >
      <fa icon="chevron-right" type="fas" class="control-icon right"></fa>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup () {
    const carouselIndex = ref(0)
    const carouselArr = ref([
      {
        url: require('@/assets/project1.png'),
        id: 0,
        title: 'Fullstack E-commerce',
        text: 'E-commerce website with self-built backend',
        stack: ['Vuejs', 'Typescript', 'Nodejs', 'Express', 'MongoDB'],
        repo: '#',
        demo: '#',
        author: {
          name: 'Lynn',
          image: 'https://i.imgur.com/J9DkbOj.png'
        }
      },
      {
        url: require('@/assets/project2.png'),
        id: 1,
        title: 'Weight helper',
        text: 'Simple web app to caculate daily calories and nutrition',
        stack: ['Vuejs', 'Javascript', 'Nodejs', 'Express', 'MongoDB'],
        repo: 'https://github.com/eric840906/WeightHelper',
        demo: 'https://eric840906.github.io/WeightHelper/#/',
        author: {
          name: 'Lann',
          image: 'https://i.imgur.com/ZhhA0LG.png'
        }
      },
      {
        url: require('@/assets/project3.png'),
        id: 2,
        title: 'E-commerce demo',
        text: 'E-commerce website with dummy product api provided by online course',
        stack: ['Vuejs', 'javascript', 'scss', 'JQuery'],
        repo: 'https://github.com/eric840906/vuecli3Project1',
        demo: 'https://eric840906.github.io/vuecli3Project1/#/home',
        author: {
          name: 'Vella',
          image: 'https://i.imgur.com/FWcLGNn.png'
        }
      },
      {
        url: require('@/assets/project5.png'),
        id: 3,
        title: 'Protfolio V1',
        text: 'First portfolion page, inspired by glass morphism design',
        stack: ['Vuejs', 'Javascript', 'html', 'css'],
        repo: 'https://github.com/eric840906/portfolio',
        demo: 'https://eric840906.github.io/portfolio/#/',
        author: {
          name: 'Vella',
          image: 'https://i.imgur.com/FWcLGNn.png'
        }
      },
      {
        url: require('@/assets/project4.png'),
        id: 4,
        title: 'Mask map',
        text: 'Mask map to track store available during covid-19 burst time',
        stack: ['Javascript', 'html', 'css'],
        repo: 'https://github.com/eric840906/javascript-practice-maskMap',
        demo: 'https://eric840906.github.io/javascript-practice-maskMap/',
        author: {
          name: 'Vella',
          image: 'https://i.imgur.com/FWcLGNn.png'
        }
      }
    ])
    const transitionName = ref('')
    const carouselControl = (move: number) => {
      transitionName.value = move > 0 ? 'fade' : 'fadereverse'
      carouselIndex.value =
        (carouselIndex.value + move + carouselArr.value.length) %
        carouselArr.value.length
    }
    return {
      // carousel,
      carouselIndex,
      carouselControl,
      carouselArr,
      transitionName
    }
  }
})
</script>

<style lang="scss" scoped>
.carousel-item {
  display: block;
}
.project-icon {
  width: 20px;
}
.carousel-img {
  object-fit: contain;
  height: 33rem;
  width: 100%;
  @media (max-width: 768px) {
    height: 100%;
  }
}
.carousel-indicators {
  bottom: 0;
  button {
    border: none;
    width: 2rem;
    margin: 0 10px 0 10px;
    background-color: #6c757d;
  }
  .active {
    background-color: #dc9898c9;
  }
}
.control-icon {
  width: 25px;
  color: #000000a3;
  position: absolute;
  transition: all 0.2s ease;
}
.carousel-control {
  &:hover {
    .control-icon {
      color: #dc9898c9;
    }
  }
}
.author-info {
  background-color: #eef0f14a;
  backdrop-filter: blur(6px);
  border-radius: 100px;
  img {
    height: 3rem;
    width: 3rem;
    border-radius: 100%;
  }
}
.carousel-control {
  @media (min-width: 768px) {
    width: 5%;
  }
}
.fade-enter-from {
  transform: translate(-33%, 30%);
  opacity: 0;
}
.fade-leave-to {
  transform: translate(33%, -30%);
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active,
.fadereverse-enter-active,
.fadereverse-leave-active {
  transition: all 0.8s ease;
}
.fadereverse-enter-from {
  transform: translate(33%, -30%);
  opacity: 0;
}
.fadereverse-leave-to {
  transform: translate(-33%, 30%);
  opacity: 0;
}
</style>
