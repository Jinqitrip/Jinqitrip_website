---
title: 关于 - 锦麒行旅游
description: 了解锦麒行旅游的公司概述、目标市场、竞争优势和服务性质。
layout: page
editLink: false
---

<!-- Breadcrumb component or omit -->
<!-- <Breadcrumb title="关于" :items="[{ text: '主页', link: '/' }, { text: '关于' }]" /> -->

<!-- About Section -->
<section class="about-section fix section-padding">
    <div class="container">
        <div class="about-wrapper">
            <div class="row">
                <div class="col-lg-6">
                   <div class="about-image-items">
                       <div class="border-shape">
                           <img src="/assets/img/about/border-shape.png" alt="shape-img">
                       </div>
                       <div class="about-image bg-cover" style="background-image: url('/assets/img/about/about.jpg');">
                           <div class="about-image-2">
                               <img src="/assets/img/about/about-2.jpg" alt="about-img">
                           </div>
                       </div>
                   </div>
                </div>
                <div class="col-lg-6 mt-5 mt-lg-0">
                    <div class="about-content">
                        <div class="section-title">
                            <span>麒行，引领您的旅程。</span>
                            <h2>公司概述</h2>
                        </div>
                        <p class=" mt-4 mt-md-0">
                            锦麒行旅游信息咨询有限公司致力于为商务旅客和高端休闲旅客提供一站式出行服务，涵盖酒店代订、机票预定、演唱会票务预定及车辆安排。通过特色管家服务、会员代订、积分预定和独家内部票等多种方式，确保客户享受最优质、最便捷的服务。
                        </p>
                        <br><br><br>

                        <h2>目标市场</h2>
                        <ul class="about-list">
                            <li><i class="far fa-check me-2"></i>学生及其亲戚朋友：需要高效、便捷的出行服务。</li>
                            <li><i class="far fa-check me-2"></i>商务旅客：需要高效、便捷的出行安排。</li>
                            <li><i class="far fa-check me-2"></i>高端休闲旅客：追求高质量的旅行体验。</li>
                            <li><i class="far fa-check me-2"></i>演唱会爱好者：希望获得优质票务服务。</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Competitive Advantage Section (using Service Carousel component) -->
<ServiceCarousel class="section-bg" title="竞争优势" tagline="麒行天下，尽在咫尺。" :useNumericTitles="true" :items="competitiveAdvantages" />

<!-- Manage It Section (Tabs) -->
<ManageItSection />

<!-- Service Details Section -->
<section class="service-details fix section-padding">
    <div class="container">
        <div class="service-details-wrapper">
             <div class="row g-5">
                 <div class="col-12 col-lg-8"> <!-- Adjust column width as needed -->
                     <div class="service-details-items">
                         <div class="details-content">
                             <h3>服务性质</h3>
                             <p>锦麒行旅游信息咨询有限公司出行的服务性质为中介服务，我们为客户提供出行安排和预订服务，但不直接参与客户与供应商之间的交易行为。</p>
                             <h4>责任约定</h4>
                             <p>为了保障客户的权益，锦麒行旅游信息咨询有限公司出行将与客户签订书面合同，明确约定以下责任：</p>
                             <ul>
                                 <li>锦麒行旅游信息咨询有限公司出行仅对中介服务行为负责，对于客户与供应商之间的交易行为不承担任何责任。</li>
                                 <li>锦麒行旅游信息咨询有限公司出行有权代客户支付相关费用，但必须保证客户资金（除中介费用外）的安全，不得挪作他用。</li>
                                 <li>若锦麒行旅游信息咨询有限公司出行未及时为客户购买相应的出行服务，或挪用客户资金，将承担相应的法律责任，并保障客户的维权权利。</li>
                             </ul>
                         </div>
                     </div>
                 </div>
                 <!-- Add other columns if present in original -->
             </div>
        </div>
    </div>
</section>

<!-- Service Counter Section -->
<ServiceCounterSection />

<!-- Team Section (Commented out in original, omit or create component if needed) -->
<!-- Testimonial Section (Commented out in original, omit or use <TestimonialSection />) -->
<!-- Brand Section (Commented out in original, omit or use <BrandCarousel />) -->
<!-- News Section (Commented out in original, omit or create component if needed) -->