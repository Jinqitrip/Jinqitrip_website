<template>
    <section class="service-counter-section fix">
      <div class="container">
        <div class="service-counter-wrapper">
          <div class="row">
            <div class="col-lg-5">
              <div class="service-counter-content">
                <div class="section-title">
                  <span class="text-white wow fadeInUp">旅行新选择，麟行不负所托。</span>
                  <h2 class="text-white wow fadeInUp" data-wow-delay=".3s">锦麒行旅游——</h2>
                </div>
                <p class="mt-4 mt-md-0 text-white wow fadeInUp" data-wow-delay=".5s">
                  您的一站式出行专家。
                </p>
                <a href="/contact" class="theme-btn bg-white mt-4 wow fadeInUp" data-wow-delay=".7s">
                  <span>联系我们 <i class="fas fa-chevron-right"></i></span>
                </a>
              </div>
            </div>
            <div class="col-lg-7 mt-5 mt-lg-0">
               <!-- Reuse CounterSection logic internally -->
               <div class="counter-wrapper" ref="counterWrapper">
                  <div class="row g-4">
                    <div v-for="(item, index) in counterItems" :key="index" class="col-lg-4 wow fadeInUp" :data-wow-delay="item.delay">
                      <!-- 'active' class is just visual, logic is the same -->
                      <div class="service-counter-items" :class="{ active: item.active }">
                         <div class="icon">
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
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  // Define counter items specific to this section
  const counterItems = ref([
      { iconClass: 'flaticon-earth-globe', target: 35, suffix: '+', label: '合作酒店集团', delay: '.3s', active: false },
      { iconClass: 'flaticon-document-management', target: 853, suffix: '+', label: '合作景点', delay: '.5s', active: true }, // Mark as active for styling
      { iconClass: 'flaticon-financial-profit', target: 35, suffix: '+', label: '合作票务商', delay: '.7s', active: false },
  ]);
  
  
  // --- Counter Animation Logic (Copied & adapted from CounterSection) ---
  const counterWrapper = ref(null);
  const counterRefs = ref([]);
  let observer = null;
  
  const setCounterRef = (el, index) => {
    if (el) {
      // Ensure the target is correctly read from counterItems
      counterRefs.value[index] = { el, target: counterItems.value[index].target, current: 0, animated: false };
    }
  };
  
  const animateCount = (refData) => {
    if (!refData || refData.animated) return; // Check if refData exists
    refData.animated = true;
    const duration = 2000; // Animation duration in ms
    let startTime = null;
  
    const step = (timestamp) => {
       if (!refData.el) return; // Exit if element is gone
  
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      // Ensure target is a number
      const targetValue = Number(refData.target) || 0;
      const increment = Math.min(Math.floor((progress / duration) * targetValue), targetValue);
  
      refData.el.textContent = increment;
  
      if (increment < targetValue) {
        requestAnimationFrame(step);
      } else {
         refData.el.textContent = targetValue; // Ensure final value is exact
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
            // observer.disconnect(); // Optional: stop observing after first animation
          }
        });
      }, { threshold: 0.5 });
  
      if (counterWrapper.value) {
        observer.observe(counterWrapper.value);
      }
    } else {
       counterRefs.value.forEach(refData => {
          if (refData && refData.el) {
              refData.el.textContent = Number(refData.target) || 0;
          }
       });
    }
  });
  
  onUnmounted(() => {
    if (observer) {
      observer.disconnect();
    }
  });
  // --- End Counter Animation Logic ---
  
  </script>
  
  <style scoped>
  /* Add styles from main.css for .service-counter-section, .service-counter-items, .text-white etc. */
  .service-counter-section {
      background-color: var(--vp-c-brand-dark); /* Example background */
      padding: 80px 0; /* Adjust */
      position: relative;
      overflow: hidden;
  }
  .service-counter-items.active {
       background-color: var(--vp-c-brand-1); /* Highlight color */
       /* Add other active styles */
  }
  .service-counter-items.active h2,
  .service-counter-items.active p,
  .service-counter-items.active .icon i {
      color: #fff; /* Adjust text color for active */
  }
  
  </style>