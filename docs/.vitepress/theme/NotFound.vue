<template>
    <div class="theme-container">
      <main class="page">
          <!-- Optional: Breadcrumb -->
         <!-- <div class="breadcrumb-wrapper section-padding bg-cover" style="background-image: url('/assets/img/breadcrumb.jpg');">
             <div class="container">
                 <div class="page-heading">
                     <h1>404</h1>
                     <ul class="breadcrumb-items">
                         <li><a href="/">主页</a></li>
                         <li><i class="fal fa-minus"></i></li>
                         <li>404</li>
                     </ul>
                 </div>
             </div>
         </div> -->
  
          <div class="error-section fix section-padding">
              <div class="container">
                  <div class="row justify-content-center">
                      <div class="col-lg-8">
                          <div class="error-items text-center">
                              <h1>页面未找到</h1>
                              <div class="error-image mt-4 mb-4">
                                  <img src="/assets/img/error.png" alt="404 Not Found">
                              </div>
                              <p class="mb-4">抱歉，您访问的页面不存在。</p>
                              <a href="/" class="theme-btn">
                                  <span>回到首页 <i class="fas fa-chevron-right"></i></span>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </main>
    </div>
  </template>
  
  <script setup>
  // No specific script needed for basic 404
  </script>
  
  <style scoped>
  /* Add specific styles from 404.html or main.css if needed */
  .error-section {
    padding: 80px 0;
  }
  .error-items h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
  }
  .error-image img {
      max-width: 100%;
      height: auto;
  }
  .text-center {
      text-align: center;
  }
  /* Add styles for theme-btn if not globally available */
  </style>