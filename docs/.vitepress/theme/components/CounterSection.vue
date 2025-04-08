<template>
    <section class="counter-section section-padding pt-0" :class="$attrs.class"> <!-- Allow passing classes like section-bg -->
      <div class="line-shape" v-if="showLineShape">
        <img src="/assets/img/line.png" alt="shape-img">
      </div>
      <div class="container">
        <div class="counter-wrapper" ref="counterWrapper">
          <div class="row g-4">
            <div v-for="(item, index) in items" :key="index" :class="columnClasses" class="wow fadeInUp" :data-wow-delay="item.delay">
              <div class="counter-items text-center">
                <div class="icon center">
                  <i :class="item.iconClass"></i>
                </div>
                <div class="content">
                  <h2><span :ref="el => setCounterRef(el, index)">0</span>{{ item.suffix }}</h2>
                  <p>{{ item.label }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const props = defineProps({
      items: {
          type: Array,
          default: () => [ // Default items for index page
              { iconClass: 'flaticon-earth-globe', target: 35, suffix: '+', label: '合作酒店集团', delay: '.3s'},
              { iconClass: 'flaticon-verified', target: 853, suffix: '+', label: '合作景点', delay: '.5s'},
              { iconClass: 'flaticon-financial-profit', target: 55, suffix: '+', label: '合作航空公司', delay: '.7s'},
              { iconClass: 'flaticon-infrastructure', target: 35, suffix: '+', label: '合作票务商', delay: '.9s'},
          ]
      },
      showLineShape: { type: Boolean, default: true },
      columnClasses: { type: String, default: 'col-xl-3 col-lg-4 col-md-6' } // Default columns
  });
  
  const counterWrapper = ref(null);
  const counterRefs = ref([]);
  let observer = null;
  
  const setCounterRef = (el, index) => {
    if (el) {
      counterRefs.value[index] = { el, target: props.items[index].target, current: 0, animated: false };
    }
  };
  
  const animateCount = (refData) => {
    if (refData.animated) return;
    refData.animated = true;
    const duration = 2000; // Animation duration in ms
    const stepTime = Math.abs(Math.floor(duration / refData.target));
    let startTime = null;
  
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const increment = Math.min(Math.floor((progress / duration) * refData.target), refData.target);
  
      refData.el.textContent = increment;
  
      if (increment < refData.target) {
        requestAnimationFrame(step);
      } else {
         refData.el.textContent = refData.target; // Ensure final value is exact
      }
    };
    requestAnimationFrame(step);
  };
  
  onMounted(() => {
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            counterRefs.value.forEach(refData => {
               if (refData && refData.el) { // Check if ref exists
                   animateCount(refData);
               }
            });
            // Optionally disconnect observer after first trigger if animation shouldn't repeat
            // observer.disconnect();
          }
        });
      }, { threshold: 0.5 }); // Trigger when 50% visible
  
      if (counterWrapper.value) {
        observer.observe(counterWrapper.value);
      }
    } else {
        // Fallback for browsers without IntersectionObserver (e.g., just display target number)
         counterRefs.value.forEach(refData => {
              if (refData && refData.el) {
                  refData.el.textContent = refData.target;
              }
         });
    }
  });
  
  onUnmounted(() => {
    if (observer) {
      observer.disconnect();
    }
  });
  </script>
  
  <style scoped>
  /* Styles for counter-items from main.css should apply */
  </style>