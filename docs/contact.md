---
title: 联系我们
description: 通过电话、邮件或企业微信联系锦麒行旅游，获取专业的旅行咨询服务。
layout: page
editLink: false
---

<!-- Breadcrumb component or omit -->
<Breadcrumb title="联系我们" :items="[{ text: '主页', link: '/' }, { text: '联系我们' }]" />

<section class="contact-main-area fix section-padding">
    <div class="container">
        <div class="contact-main-wrapper">
            <div class="row g-4">
                <div class="col-lg-6">
                    <div class="contact-content">
                        <div class="section-title mb-2">
                            <span>锦麒天下，尽在咫尺。</span>
                            <h2>联系我们</h2>
                        </div>
                        <p class="mt-4 mt-md-0">
                            我们随时准备为您提供个性化和专业的旅行咨询服务。无论您是商务出行还是休闲度假，我们都能确保您的旅程舒适、高效。
                        </p>
                        <div class="row g-4 mt-3">
                            <div class="col-lg-6">
                                <div class="info-items">
                                    <div class="icon"><i class="fas fa-map-marker-alt"></i></div>
                                    <div class="content"><h5>地址</h5><p>上海市闵行区苏召路1628号</p></div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="info-items">
                                    <div class="icon"><i class="far fa-phone"></i></div>
                                    <div class="content"><h5>电话</h5><a href="tel:+8613100752288">+86 13100752288</a></div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                 <div class="info-items">
                                     <div class="icon"><i class="fal fa-envelope"></i></div>
                                     <div class="content">
                                         <h5>电子邮件</h5>
                                         <p>Harry: <a href="mailto:harry@jinqitrip.com" class="link">harry@jinqitrip.com</a></p>
                                         <p>fQwQf: <a href="mailto:fQwQf@jinqitrip.com" class="link">fQwQf@jinqitrip.com</a></p>
                                         <p>Cirdon: <a href="mailto:huikongjingji@jinqitrip.com" class="link">huikongjingji@jinqitrip.com</a></p>
                                         <p>Xu: <a href="mailto:xu@jinqitrip.com" class="link">xu@jinqitrip.com</a></p>
                                     </div>
                                 </div>
                             </div>
                            <div class="col-lg-6">
                                 <div class="info-items">
                                     <div class="icon"><i class="fa fa-weixin"></i></div>
                                     <div class="content">
                                         <h5>企业微信</h5>
                                         <a href="https://work.weixin.qq.com/ca/cawcded25274db25f6" target="_blank" style="color: #166FD3;text-decoration:underline ;">锦麒行旅游</a>
                                     </div>
                                 </div>
                             </div>
                        </div>
                        <div class="contact-image mt-4"> <!-- Added margin for spacing -->
                            <img src="/assets/img/contact.jpg" alt="锦麒行联系方式">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 mt-5 mt-lg-0">
                   <!-- Vue component for the Contact Form -->
                   <ContactForm />
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Map Section (Commented out in original, omit) -->