<template>
    <section class="case-studies-1 section-padding fix pt-0">
      <div class="container">
        <div class="case-studies-wrapper">
          <div class="row g-0">
            <div class="col-xl-7">
              <div class="case-studies-content-area">
                <div class="section-title">
                  <span class="wow fadeInUp">专业、便捷、贴心，锦麒值得信赖。</span>
                  <h2 class="wow fadeInUp" data-wow-delay=".3s">业务实例</h2>
                </div>
                <p class="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  感受我们专业的一站式服务
                </p>
                <div class="case-studies-items">
                  <!-- Simplified: Static content for the single example -->
                  <h4 style="color:rgb(239, 239, 239); margin-top: 20px;">客户需求：</h4>
                  <p style="color:rgb(239, 239, 239); padding-left: 7px;">
                      一家三口计划在国庆节期间前往云南旅游，希望体验当地的自然风光和民族文化。
                  </p>
                  <h4 style="color:rgb(239, 239, 239)">服务流程：</h4>
                  <p style="color:rgb(239, 239, 239); padding-left: 7px;">
                   旅行规划： 我们的管家服务团队与客户进行深入沟通，了解他们对旅行的具体期望，包括景点偏好、酒店要求和餐饮限制。<br>
                   机票预定： 根据客户的时间安排，我们为他们预定了从上海出发到昆明的往返机票，并确保航班时间与整个旅行计划相匹配。<br>
                   酒店代订： 我们为客户预定了昆明市中心的高端酒店，方便他们游览周边的著名景点。<br>
                   行程安排： 安排了一系列的旅游活动，包括参观石林、游览大理古城和丽江古镇，以及体验云南少数民族的文化和美食。<br>
                   车辆安排： 提供了私家车服务，确保客户在旅行期间的交通便利和舒适。<br>
                   特色体验： 安排客户参加了当地的民族节庆活动，让他们深入体验云南的民族风情。<br>
                   客户反馈： 客户对于整个旅行安排感到非常满意，特别是对我们提供的个性化服务和细致的行程规划表示赞赏。
                  </p>
  
                  <!-- Example structure if you had multiple switchable cases -->
                  <!--
                  <div class="case-studies-content">
                      <div class="content wow fadeInUp" data-wow-delay=".3s">
                          <h5 class="mb-2">示例1</h5>
                          <h3>
                              <a href="#" @mouseover="changeImage('/assets/img/project/01.jpg')" class="changeImage2 wow fadeInUp pt-0 clicked">
                              云南家庭游
                              </a>
                          </h3>
                      </div>
                       <div class="content wow fadeInUp" data-wow-delay=".5s">
                          <h5 class="mb-2">示例2</h5>
                          <h3>
                              <a href="#" @mouseover="changeImage('/assets/img/project/02.jpg')" class="changeImage2 wow fadeInUp pt-0 clicked">
                              商务差旅安排
                              </a>
                          </h3>
                      </div>
                  </div>
                  -->
                </div>
              </div>
            </div>
            <div class="col-xl-5 mt-5 mt-xl-0">
              <div class="image case-studies-image">
                <img :src="currentImage" alt="业务实例图片">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Default image for the single static example
  const currentImage = ref('/assets/img/project/01.jpg');
  
  // Function to change image (if using hover/click links)
  // const changeImage = (newImage) => {
  //   currentImage.value = newImage;
  // };
  </script>
  
  <style scoped>
  .case-studies-image img {
    width: 100%;
    height: auto;
    object-fit: cover; /* Adjust as needed */
  }
  /* Add original styles for .case-studies-content-area, etc. */
  .case-studies-content-area {
      padding: 30px; /* Example padding */
      background-color: var(--vp-c-bg-soft); /* Match theme */
       min-height: 500px; /* Match image height roughly */
  }
  /* Style the links if using hover effect */
  .case-studies-items a {
      cursor: pointer;
      text-decoration: none;
      color: var(--vp-c-text-1);
      transition: color 0.3s;
  }
  .case-studies-items a:hover {
      color: var(--vp-c-brand-1);
  }
  </style>