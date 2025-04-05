<template>
    <!-- Root element is the section itself -->
    <section class="about-section fix section-padding">
      <div class="container">
        <div class="about-wrapper">
          <div class="row">
            <div class="col-lg-6">
                <div class="about-image-items">
                    <div class="border-shape">
                        <!-- Using self-closing tags is good practice in Vue templates -->
                        <img src="/assets/img/about/border-shape.png" alt="shape-img" />
                    </div>
                    <div class="about-image bg-cover" style="background-image: url('/assets/img/about/about.jpg');">
                        <div class="about-image-2 wow fadeInUp" data-wow-delay=".5s">
                            <img src="/assets/img/about/about-2.jpg" alt="about-img" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 mt-5 mt-lg-0">
              <div class="about-content">
                <div class="section-title">
                  <!-- Add wow classes back if desired, ensuring WOW is initialized -->
                  <span class="wow fadeInUp">麒行，引领您的旅程。</span>
                  <h2 class="wow fadeInUp" data-wow-delay=".3s">
                    公司概述
                  </h2>
                </div>
                <p class="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  锦麒行旅游信息咨询有限公司致力于为商务旅客和高端休闲旅客提供一站式出行服务，涵盖酒店代订、机票预定、演唱会票务预定及车辆安排。通过特色管家服务、会员代订、积分预定和独家内部票等多种方式，确保客户享受最优质、最便捷的服务。
                </p>
                <br><br><br>
  
                <h2 class="wow fadeInUp" data-wow-delay=".3s">
                  目标市场
                </h2>
                <ul class="about-list wow fadeInUp" data-wow-delay=".7s">
                  <li>
                    <i class="far fa-check me-2"></i>
                    学生及其亲戚朋友：需要高效、便捷的出行服务。
                  </li>
                  <li>
                    <i class="far fa-check me-2"></i>
                    商务旅客：需要高效、便捷的出行安排。
                  </li>
                  <li>
                    <i class="far fa-check me-2"></i>
                    高端休闲旅客：追求高质量的旅行体验。
                  </li>
                  <li>
                    <i class="far fa-check me-2"></i>
                    演唱会爱好者：希望获得优质票务服务。
                  </li>
                </ul>
  
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // Import the nested component if it's not registered globally
  // If AboutImageBlock is globally registered in theme/index.js, this import is not needed.
  // import AboutImageBlock from './AboutImageBlock.vue';
  
  // No other script logic needed for this specific component
  </script>
  
  <style scoped>
  /* Add component-specific styles here only if necessary */
  /* Global styles for .about-section, .about-wrapper, .about-content etc. */
  /* from main.css / style.css should apply */
  </style>