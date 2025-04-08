<template>
    <section class="hero-section hero-1">
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="0"
        :loop="true"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        :navigation="true"
        :effect="'fade'"
        class="hero-slider-active"
        v-if="slides.length"
      >
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <div class="slide-bg bg-cover" :style="{ backgroundImage: `url(${slide.img})` }">
            <div class="container">
              <div class="row g-4 justify-content-between align-items-center">
                <div class="col-lg-8">
                  <div class="hero-content">
                    <!-- Use v-if to conditionally render elements -->
                    <h4 v-if="slide.tagline" class="fs-lg animated">{{ slide.tagline }}</h4>
                    <h1 v-if="slide.titleLine1" class="fs-lg animated">
                      {{ slide.titleLine1 }}<br v-if="slide.titleLine2"/>{{ slide.titleLine2 }}
                    </h1>
                    <div class="hero-button">
                      <a href="/contact" class="theme-btn hover-white fs-lg animated">
                        <span>联系我们 <i class="fas fa-chevron-right"></i></span>
                      </a>
                    </div>
                  </div>
                </div>
                 <div class="col-lg-3">
                     <div v-if="slide.showFrame" class="frame-shape fs-lg animated">
                         <img src="/assets/img/hero/frame-shape.png" alt="shape-img">
                     </div>
                 </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <!-- Add SVG definitions if needed, though likely handled by CSS/FA now -->
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation, Pagination, Autoplay, EffectFade, A11y } from 'swiper/modules';
  
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/effect-fade';
  
  const modules = ref([Navigation, Pagination, Autoplay, EffectFade, A11y]);
  
  const slides = ref([
    { img: '/assets/img/hero/hero-1.jpg', tagline: '欢迎来到锦麒行旅游', titleLine1: '锦麒行旅游信息咨询有限公司——', titleLine2: '您的一站式出行专家。', showFrame: true },
    { img: '/assets/img/hero/hero-2.jpg', tagline: '酒店代订', titleLine1: '精选全球优质酒店，确保您的住宿舒适安心。', showFrame: true },
    { img: '/assets/img/hero/hero-3.jpg', tagline: '机票预定', titleLine1: '合作多家航空公司，为您提供最优惠的机票价格。', showFrame: true },
    { img: '/assets/img/hero/hero-4.jpg', tagline: '演唱会票务', titleLine1: '独家票源，让您不错过任何精彩瞬间。', showFrame: true },
    { img: '/assets/img/hero/hero-5.jpg', tagline: '车辆安排', titleLine1: '从豪华轿车到舒适巴士，满足您的各种需求。', showFrame: true },
  ]);
  </script>
  
  <style>
  /* Basic Swiper overrides - adjust colors as needed */
  .hero-slider-active .swiper-button-prev,
  .hero-slider-active .swiper-button-next {
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    transition: background-color 0.3s ease;
  }
  .hero-slider-active .swiper-button-prev:hover,
  .hero-slider-active .swiper-button-next:hover {
      background-color: rgba(0, 0, 0, 0.6);
  }
  
  .hero-slider-active .swiper-button-prev::after,
  .hero-slider-active .swiper-button-next::after {
    font-size: 16px;
    font-weight: bold;
  }
  
  .hero-slider-active .swiper-pagination-bullet {
    background-color: rgba(255, 255, 255, 0.7);
    opacity: 1;
    transition: background-color 0.3s ease;
  }
  
  .hero-slider-active .swiper-pagination-bullet-active {
    background-color: var(--vp-c-brand-1); /* Or your theme's primary color */
  }
  
  .slide-bg {
    min-height: 600px; /* Adjust as needed */
    display: flex;
    align-items: center;
    background-position: center;
    background-size: cover;
  }
  
  /* Replicate animation effects minimally or remove if not crucial */
  .animated {
    /* Add simple fade-in perhaps */
    animation: fadeIn 0.8s ease forwards;
    opacity: 0;
  }
  @keyframes fadeIn {
    to { opacity: 1; }
  }
  .fs-lg.animated[data-animation-in="fadeInRight"] { /* Basic simulation */
      animation-delay: var(--delay, 0.2s); /* Use CSS vars if needed */
  }
  h4.fs-lg.animated { --delay: 0.2s; }
  h1.fs-lg.animated { --delay: 0.5s; }
  .hero-button .fs-lg.animated { --delay: 0.7s; }
  .frame-shape.fs-lg.animated { --delay: 0.5s; }
  
  </style>