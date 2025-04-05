---
# VitePress Frontmatter allows setting page-specific details
#layout: home # Use the default VitePress home layout (or create a custom one)
title: 锦麒行旅游
description: 锦麒行旅游信息咨询有限公司 - 您的一站式出行专家。
# You might need to define features for the default home layout
# Or, more likely, you'll set 'layout: page' and build the content below
# Let's assume 'layout: page' for more control like the original
layout: page
editLink: false # Disable edit link for this page
---

<!-- Vue component for the Hero Slider -->
<HeroSlider />

<!-- Feature Section -->
<FeatureHighlights />

<!-- About Section Snippet -->
<section class="about-section-snippet section-padding pt-0">
  <div class="container">
    <div class="about-wrapper">
      <div class="row">
        <div class="col-lg-6">
          <!-- Image handled via CSS potentially or simple img tag if needed -->
          <div class="about-image-items">
             <div class="border-shape">
                  <img src="/assets/img/about/border-shape.png" alt="shape-img">
              </div>
              <div class="about-image bg-cover" style="background-image: url('/assets/img/about/about.jpg');">
                 <!-- Simple img for the inner one -->
                  <div class="about-image-2">
                      <img src="/assets/img/about/about-2.jpg" alt="about-img">
                  </div>
              </div>
          </div>
        </div>
        <div class="col-lg-6 mt-5 mt-lg-0">
          <div class="about-content">
            <div class="section-title">
              <span>管家服务，贴心至上，锦麒相伴。</span>
              <h2>专业管家服务</h2>
            </div>
            <p class="mt-4 mt-md-0">
              锦麒行旅游提供的专业管家服务旨在为客户提供无缝的旅行体验。管家服务包括但不限于：
            </p>
            <!-- Circle progress bar needs custom component or removal -->
            <ul class="about-list">
              <li><i class="far fa-check me-2"></i>个性化行程规划：<br>根据客户的需求和偏好，制定量身定制的旅行计划。</li>
              <li><i class="far fa-check me-2"></i>预订协助：<br>帮助客户预订酒店、机票和活动票务，确保客户能够享受到最佳的价格和座位。</li>
              <li><i class="far fa-check me-2"></i>现场支持：<br>在客户旅行期间提供实时的协助和建议，解决任何突发情况。</li>
            </ul>
            <div class="about-author">
              <div class="about-button">
                <a href="/about.html" class="theme-btn"> <!-- VitePress handles the .html removal -->
                  <span>探索更多 <i class="fas fa-chevron-right"></i></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Service Section Carousel -->
<ServiceCarousel class="section-bg" title="技术驱动" tagline="锦麒，出行的智能选择。" showContactButton="true" />

<!-- Trusted Client Section / Full Travel Arrangements -->
<TrustedClientSection />

<!-- Brand Section -->
<!--<BrandCarousel title="相关合作伙伴" />-->

<!-- Case Studies Section -->
<CaseStudies />

<!-- Counter Section -->
<CounterSection class="section-bg" />

<!-- Testimonial Section -->
<TestimonialSection title="客户评价" tagline="锦麒，我的旅行专家。" />

<!-- CTA Chat Section -->
<section class="cta-chat-section section-padding pt-0">
    <div class="container">
        <div class="cta-chat-wrapper">
            <div class="chat-items">
                <div class="icon">
                    <i class="flaticon-chat"></i>
                </div>
                <div class="content">
                    <h3>联系我们，享受贴心服务。</h3>
                    <p>旅行新选择，麟行不负所托。</p>
                </div>
            </div>
            <a href="/contact.html" class="theme-btn bg-white">
               <span>联系客服 <i class="fas fa-chevron-right"></i></span>
            </a>
        </div>
    </div>
</section>