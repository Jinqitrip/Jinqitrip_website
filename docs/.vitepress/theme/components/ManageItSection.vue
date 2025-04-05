<template>
    <section class="manage-it-section fix section-padding">
      <div class="container">
        <div class="manage-it-wrapper">
          <div class="row justify-content-between">
            <div class="col-lg-6">
              <div class="manage-it-content">
                <div class="section-title">
                  <span class="wow fadeInUp">锦麒携手，共赴精彩。</span>
                  <h2 class="wow fadeInUp" data-wow-delay=".3s">公司概述</h2>
                </div>
                <div class="single-tab-items mt-4 mt-md-0">
                  <ul class="nav mb-4" role="tablist">
                    <li class="nav-item wow fadeInUp" data-wow-delay=".3s" role="presentation">
                      <a href="#" @click.prevent="activeTab = 'background'" class="nav-link" :class="{ active: activeTab === 'background' }" aria-selected="activeTab === 'background'" role="tab">
                        公司背景
                      </a>
                    </li>
                    <li class="nav-item wow fadeInUp" data-wow-delay=".5s" role="presentation">
                      <a href="#" @click.prevent="activeTab = 'mission'" class="nav-link" :class="{ active: activeTab === 'mission' }" aria-selected="activeTab === 'mission'" role="tab">
                        公司使命
                      </a>
                    </li>
                    <li class="nav-item wow fadeInUp" data-wow-delay=".7s" role="presentation">
                      <a href="#" @click.prevent="activeTab = 'vision'" class="nav-link" :class="{ active: activeTab === 'vision' }" aria-selected="activeTab === 'vision'" role="tab">
                        公司愿景
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div v-show="activeTab === 'background'" id="approach" class="tab-pane fade" :class="{ 'show active': activeTab === 'background'}" role="tabpanel">
                      <div class="tab-content-items">
                        <p><br>锦麒行旅游信息咨询有限公司计划成立于2024年，注册地位于上海，注册资金100万元人民币。公司由一群热爱旅行和科技的人士创立，旨在通过技术手段提升出行服务的效率和质量。</p>
                      </div>
                    </div>
                    <div v-show="activeTab === 'mission'" id="project" class="tab-pane fade" :class="{ 'show active': activeTab === 'mission'}" role="tabpanel">
                      <div class="tab-content-items">
                        <p><br>我们的使命是提供优质、便捷、个性化的出行服务，让每一次出行都成为美好的体验。</p>
                      </div>
                    </div>
                    <div v-show="activeTab === 'vision'" id="advisory" class="tab-pane fade" :class="{ 'show active': activeTab === 'vision'}" role="tabpanel">
                      <div class="tab-content-items">
                        <p><br>我们的愿景是成为国内领先的出行服务提供商，赢得广大客户的信赖和认可。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5 mt-5 mt-lg-0 wow fadeInUp" data-wow-delay=".4s">
              <div class="manage-image bg-cover" style="background-image: url('/assets/img/about/about-7.jpg');">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const activeTab = ref('background'); // Default active tab
  </script>
  
  <style scoped>
  /* Shared tab styles with TrustedClientSection */
  .nav-link.active {
    color: var(--vp-c-brand-1);
    border-bottom: 2px solid var(--vp-c-brand-1);
  }
  .tab-pane {
      display: none;
  }
  .tab-pane.active {
      display: block;
  }
  .manage-image {
      min-height: 450px; /* Adjust */
      background-position: center;
      background-size: cover;
      border-radius: 8px; /* Optional */
  }
  /* Add other relevant styles */
  </style>