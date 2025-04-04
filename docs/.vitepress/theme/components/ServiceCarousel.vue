<template>
    <section class="service-section fix section-padding" :class="$attrs.class">
      <div v-if="!useNumericTitles" class="shape-image">
          <img src="/assets/img/service/shape.png" alt="shape-img">
      </div>
       <div v-if="!useNumericTitles" class="bottom-shape">
          <img src="/assets/img/service/bottom-shape.png" alt="shape-img">
      </div>
      <div class="container">
        <div class="title-section-area">
          <div class="section-title">
            <span v-if="tagline" class="wow fadeInUp">{{ tagline }}</span>
            <h2 class="wow fadeInUp" data-wow-delay=".3s">{{ title }}</h2>
          </div>
          <a v-if="showContactButton" href="/contact" class="theme-btn wow fadeInUp" data-wow-delay=".5s">
            <span>联系我们 <i class="fas fa-chevron-right"></i></span>
          </a>
        </div>
      </div>
      <div class="service-wrapper">
        <swiper
          :modules="[Navigation, Pagination, Autoplay, A11y]"
          :slides-per-view="1"
          :space-between="30"
          :loop="true"
          :autoplay="{ delay: 4000, disableOnInteraction: false }"
          :pagination="{ clickable: true }"
          :navigation="false"
           :breakpoints="{
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 3.5 } // Adjust for desired look
          }"
          class="service-carousel-active"
          v-if="items.length"
        >
          <swiper-slide v-for="(item, index) in items" :key="index">
            <div class="service-card-items">
              <div class="service-content">
                <div v-if="item.iconClass" class="icon">
                  <i :class="item.iconClass"></i>
                </div>
                <div class="content">
                  <h4 v-if="useNumericTitles">{{ String(index + 1).padStart(2, '0') }}</h4>
                  <h4 v-else>{{ String(index + 1).padStart(2, '0') }}</h4> <!-- Keep number for index page -->
                  <h3>
                    <!-- Link might not be needed if content is descriptive -->
                    <!-- <a href="#">{{ item.title }}</a> -->
                     {{ item.title }}
                  </h3>
                  <p v-if="item.description">{{ item.description }}</p>
                </div>
              </div>
              <div v-if="item.image" class="service-image bg-cover" :style="{ backgroundImage: `url(${item.image})` }">
                  <!-- Optional arrow icon link -->
                   <!-- <a href="#" class="arrow-icon"><i class="far fa-arrow-right"></i></a> -->
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
  
  import 'swiper/css';
  import 'swiper/css/pagination'; // Only pagination needed here
  
  defineProps({
    title: { type: String, required: true },
    tagline: String,
    items: { type: Array, default: () => [] },
    showContactButton: { type: Boolean, default: false },
    useNumericTitles: { type: Boolean, default: false }, // Differentiates About page style
  });
  
  // Example default items for the index page (can be overridden via props)
  const defaultItems = ref([
      { iconClass: 'flaticon-blueprint', title: '自动化流程', description: '通过互联网脚本和服务器资源，自动搜集和处理机票积分兑换信息，提高效率。', image: '/assets/img/service/01.jpg' },
      { iconClass: 'flaticon-service', title: '数据分析', description: '分析客户数据和市场趋势，以提供更符合客户需求的服务。', image: '/assets/img/service/02.jpg' },
      { iconClass: 'flaticon-cloud-storage', title: '在线服务平台', description: '通过微信公众号等在线平台，提供便捷的服务和信息获取渠道，增强客户互动。', image: '/assets/img/service/03.jpg' },
      { iconClass: 'flaticon-blueprint', title: '技术整合', description: '将多种技术进行整合，使得团队能够更快速地处理预订和客户咨询，同时也能够提供更加准确的个性化推荐。', image: '/assets/img/service/01.jpg' }, // Repeat image
  ]);
  
  // Use default items if no items prop is passed
  const items = ref(defaultItems.value); // In a real setup, you'd check props: const items = computed(() => props.items.length ? props.items : defaultItems.value);
                                        // For simplicity here, assume props will be passed for About page.
  
  </script>
  
  <style>
  .service-carousel-active .swiper-pagination {
      position: static; /* Reset from absolute if needed */
      margin-top: 30px;
  }
  .service-carousel-active .swiper-pagination-bullet {
      background-color: rgba(0, 0, 0, 0.2);
      opacity: 1;
  }
  .service-carousel-active .swiper-pagination-bullet-active {
      background-color: var(--vp-c-brand-1); /* Use theme color */
  }
  .service-section .title-section-area {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 40px; /* Adjust as needed */
      flex-wrap: wrap; /* Allow wrapping on smaller screens */
  }
  /* Add other specific styles from main.css if needed */
  </style>