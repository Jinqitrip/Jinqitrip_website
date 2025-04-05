<template>
    <section class="feature-section fix section-padding">
      <div class="shape-image">
        <img src="/assets/img/shape.png" alt="shape-img">
      </div>
      <div class="container">
        <div class="row g-4">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="col-xxl-4 col-xl-6"
            :class="feature.wowClass"
            :data-wow-delay="feature.delay"
          >
            <div class="single-feature-items" :class="{ active: feature.active }">
              <div class="content">
                <span>{{ feature.category }}</span>
                <h3>{{ feature.title }}</h3>
              </div>
              <div class="icon">
                <img :src="feature.icon" alt="icon-img">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const features = ref([
    { category: '特色', title: '技术驱动', icon: '/assets/img/feature/icon-1.svg', active: false, wowClass: 'wow fadeInUp', delay: '.3s' },
    { category: '特色', title: '全方位出行安排', icon: '/assets/img/feature/icon-2.svg', active: true, wowClass: 'wow fadeInUp', delay: '.5s' },
    { category: '特色', title: '专业管家服务', icon: '/assets/img/feature/icon-3.svg', active: false, wowClass: 'wow fadeInUp', delay: '.7s' },
  ]);
  
  // Note: WOW.js animation classes are kept for structure,
  // but full animation requires integrating WOW.js initialization
  // or using a Vue animation library / CSS animations.
  </script>
  
  <style scoped>
  /* Add styles if needed, but should mostly rely on main.css */
  </style>