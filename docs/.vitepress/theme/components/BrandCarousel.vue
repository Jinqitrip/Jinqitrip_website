<template>
    <section class="brand-section fix section-padding pt-0">
      <div class="container">
        <div class="brand-wrapper">
          <h6 v-if="title" class="text-center wow fadeInUp" data-wow-delay=".3s">{{ title }}</h6>
          <swiper
            :modules="[Autoplay, A11y]"
            :slides-per-view="2"
            :space-between="30"
            :loop="true"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :breakpoints="{
              576: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              992: { slidesPerView: 5 },
              1200: { slidesPerView: 6 }
            }"
            class="brand-carousel-active"
            v-if="brands.length"
          >
            <swiper-slide v-for="(brand, index) in brands" :key="index">
              <div class="brand-image">
                <img :src="brand.src" :alt="brand.alt || 'brand-logo'">
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay, A11y } from 'swiper/modules';
  
  import 'swiper/css';
  
  defineProps({
    title: String,
  });
  
  // Placeholder brand images - replace with actual paths
  const brands = ref([
    { src: '/assets/img/brand/01.png', alt: 'Partner 1' },
    { src: '/assets/img/brand/01.png', alt: 'Partner 2' },
    { src: '/assets/img/brand/01.png', alt: 'Partner 3' },
    { src: '/assets/img/brand/01.png', alt: 'Partner 4' },
    { src: '/assets/img/brand/01.png', alt: 'Partner 5' },
    { src: '/assets/img/brand/01.png', alt: 'Partner 6' },
    { src: '/assets/img/brand/01.png', alt: 'Partner 7' },
  ]);
  </script>
  
  <style scoped>
  .brand-image {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }
  .brand-image:hover {
      opacity: 1;
  }
  .brand-image img {
    max-width: 150px; /* Adjust */
    height: auto;
    filter: grayscale(1); /* Optional: make logos grayscale */
  }
  .brand-wrapper h6 {
      margin-bottom: 30px;
  }
  </style>