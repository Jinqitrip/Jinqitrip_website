<template>
    <section class="testimonial-section section-padding">
      <div class="container">
        <div class="section-title text-center">
          <span v-if="tagline" class="wow fadeInUp">{{ tagline }}</span>
          <h2 class="wow fadeInUp" data-wow-delay=".3s">{{ title }}</h2>
        </div>
        <swiper
          :modules="[Navigation, Pagination, Autoplay, A11y]"
          :slides-per-view="1"
          :space-between="30"
          :loop="true"
          :autoplay="{ delay: 6000, disableOnInteraction: false }"
          :pagination="{ clickable: true }"
          :navigation="false"
          :breakpoints="{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 }
          }"
          class="testimonial-carousel-active"
          v-if="items.length"
        >
          <swiper-slide v-for="(item, index) in items" :key="index">
            <div class="testimonial-card-items">
              <div class="author-items">
                <!-- Optional Image
                 <div class="author-image bg-cover" :style="{ backgroundImage: `url(${item.image})` }"></div>
                 -->
                <div class="author-content">
                  <h5>{{ item.name }}</h5>
                  <span v-if="item.role">{{ item.role }}</span>
                </div>
              </div>
              <p>{{ item.text }}</p>
              <ul v-if="item.date">
                <li>{{ item.date }}</li>
              </ul>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
  
  import 'swiper/css';
  import 'swiper/css/pagination';
  
  const props = defineProps({
      title: { type: String, default: '客户评价' },
      tagline: String,
      items: {
          type: Array,
          default: () => [ // Default items for index page
               { name: '潘*欣', role: '演唱会爱好者', text: '酒店优惠折扣很大，没有遇到问题，服务很好。机票和保险都是提前订好的，没怎么操心。', date: '2024/3/26' },
               { name: '刘*然', role: '游客', text: '非常满意！服务的速度和质量都很好，酒店真的离个个商区都很近，并且物美价廉。特别喜欢把客户当朋友的态度，对我们的态度既亲切同时也不失专业和礼数。非常完美，留给了我们自主选择的权利，同时帮我们解决了出行住宿等一系列问题', date: '2023/5/15' },
               { name: '裴*豪', role: '商务人士', text: '还算满意，预订住宿，车票都很好；希望可以提供异性朋友同行！！（doge）', date: '2024/1/23' },
          ]
      }
  });
  
  // Computed property in case you want logic based on props later
  const testimonials = computed(() => props.items);
  
  </script>
  
  <style>
  /* Add styles from main.css for .testimonial-card-items */
  .testimonial-carousel-active .swiper-pagination {
      position: static;
      margin-top: 30px;
  }
  .testimonial-carousel-active .swiper-pagination-bullet {
      background-color: rgba(0, 0, 0, 0.2);
      opacity: 1;
  }
  .testimonial-carousel-active .swiper-pagination-bullet-active {
      background-color: var(--vp-c-brand-1);
  }
  .testimonial-card-items {
      /* Ensure minimum height or consistent padding */
      padding: 25px;
      background-color: var(--vp-c-bg-soft);
      border-radius: 8px;
      height: 100%; /* Make cards in a row equal height if needed */
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }
  .testimonial-card-items p {
      flex-grow: 1; /* Allow text to take available space */
      margin-top: 15px;
      margin-bottom: 15px;
  }
  
  </style>