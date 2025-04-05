<template>
    <section class="trusted-client-section fix section-padding pt-0">
      <div class="container">
        <div class="trusted-client-wrapper">
          <div class="row align-items-center">
            <div class="col-xl-5">
              <div class="trusted-client-image bg-cover" style="background-image: url('/assets/img/feature/trusted.jpg');">
                <div class="counter-main-area">
                  <div class="counter-area">
                    <div class="counter-items">
                      <!-- Simple display, replace with counter component if animation needed -->
                      <h2>35+</h2>
                      <h3>团队客服</h3>
                    </div>
                    <div class="counter-items">
                      <h2>5+</h2>
                      <h3>紧急方案</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-7 mt-5 mt-xl-0">
              <div class="trusted-content">
                <div class="section-title">
                  <span class="wow fadeInUp">只需一步，锦麒帮你搞定所有旅行难题。</span>
                  <h2 class="wow fadeInUp" data-wow-delay=".3s">全方位出行安排</h2>
                </div>
                <p class="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  锦麒行旅游信息咨询有限公司提供的全方位出行安排，确保客户的每一次出行都无忧无虑。
                </p>
                <div class="single-tab-items">
                  <ul class="nav mb-4" role="tablist">
                    <li class="nav-item wow fadeInUp" data-wow-delay=".3s" role="presentation">
                      <a href="#" @click.prevent="activeTab = 'transport'" class="nav-link" :class="{ active: activeTab === 'transport' }" aria-selected="activeTab === 'transport'" role="tab">
                        交通安排
                      </a>
                    </li>
                    <li class="nav-item wow fadeInUp" data-wow-delay=".5s" role="presentation">
                      <a href="#" @click.prevent="activeTab = 'optimize'" class="nav-link" :class="{ active: activeTab === 'optimize' }" aria-selected="activeTab === 'optimize'" role="tab">
                        行程优化
                      </a>
                    </li>
                    <li class="nav-item wow fadeInUp" data-wow-delay=".7s" role="presentation">
                      <a href="#" @click.prevent="activeTab = 'support'" class="nav-link" :class="{ active: activeTab === 'support' }" aria-selected="activeTab === 'support'" role="tab">
                        紧急支持
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div v-show="activeTab === 'transport'" id="mission" class="tab-pane fade" :class="{ 'show active': activeTab === 'transport'}" role="tabpanel">
                      <div class="tab-content-items">
                        <ul class="wow fadeInUp" data-wow-delay=".3s">
                          <li><i class="fas fa-check"></i>私人车辆服务：为追求私密和舒适旅行体验的客户提供专车服务。</li>
                          <li><i class="fas fa-check"></i>租车服务：为喜欢自驾的客户提供各种类型的租车选项。</li>
                          <li><i class="fas fa-check"></i>公共交通建议：为预算有限或希望体验当地生活的客户提供公共交通路线建议。</li>
                        </ul>
                      </div>
                    </div>
                    <div v-show="activeTab === 'optimize'" id="strategy" class="tab-pane fade" :class="{ 'show active': activeTab === 'optimize'}" role="tabpanel">
                      <div class="tab-content-items">
                        <ul>
                          <li><i class="fas fa-check"></i>利用先进的技术和丰富的行业经验，为客户优化行程安排。</li>
                          <li><i class="fas fa-check"></i>通过实时监控交通状况和天气预报，及时调整行程。</li>
                          <li><i class="fas fa-check"></i>避免不必要的延误和等待，确保客户能够高效地完成旅程。</li>
                        </ul>
                      </div>
                    </div>
                    <div v-show="activeTab === 'support'" id="vision" class="tab-pane fade" :class="{ 'show active': activeTab === 'support'}" role="tabpanel">
                      <div class="tab-content-items">
                        <ul>
                          <li><i class="fas fa-check"></i>在客户旅行过程中，如遇任何紧急情况，均可联系我们取得帮助。</li>
                          <li><i class="fas fa-check"></i>客服团队将提供24小时支持，解决如交通延误、行程变更等不可预见的事件。</li>
                          <li><i class="fas fa-check"></i>迅速响应并提供解决方案，确保客户的旅行计划不受影响。</li>
                        </ul>
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
  import { ref } from 'vue';
  const activeTab = ref('transport'); // Default active tab
  </script>
  
  <style scoped>
  /* Add styles for active tab link if not covered by Bootstrap/main.css */
  .nav-link.active {
    /* Example: */
    color: var(--vp-c-brand-1);
    border-bottom: 2px solid var(--vp-c-brand-1);
  }
  .tab-pane {
      display: none; /* Hide inactive tabs */
  }
  .tab-pane.active {
      display: block; /* Show active tab */
  }
  
  /* Ensure background image covers */
  .trusted-client-image {
      min-height: 400px; /* Adjust */
      position: relative;
      /* Add other styles from original CSS */
  }
  </style>