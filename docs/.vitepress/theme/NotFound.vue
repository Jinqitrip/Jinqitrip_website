<template>
    <div class="theme-container custom-not-found">
      <!-- Optional: Breadcrumb for consistency -->
      <Breadcrumb title="404 - 页面未找到" :items="[{ text: '主页', link: '/' }, { text: '404' }]" />
  
      <!-- Main Error Section Content -->
      <div class="error-section fix section-padding">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="error-items text-center">
                <!-- Add a more explicit text message than just the image -->
                <h2 style="margin-bottom: 1rem; font-weight: 600; font-size: 2rem;">页面飞走了...</h2>
                <p style="margin-bottom: 1.5rem; color: var(--vp-c-text-2);">抱歉，我们找不到您要访问的页面。</p>
  
                <!-- Back to Home Button -->
                <a href="/" class="theme-btn"> <!-- Use VitePress base path helper if needed -->
                <!-- <a :href="withBase('/')" class="theme-btn"> -->
                  <span>回到首页 <i class="fas fa-chevron-right"></i></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Import Breadcrumb if it's not globally registered or if needed for clarity
  import Breadcrumb from './components/Breadcrumb.vue';
  
  // Optional: Set the document title dynamically for the 404 page
  import { onMounted } from 'vue';
  import { useData, withBase } from 'vitepress'; // Import withBase if using it for the link
  
  onMounted(() => {
    if (typeof document !== 'undefined') {
      // Use the title from your original 404.html or customize
      document.title = '404 - 页面未找到 | 锦麒行旅游';
    }
  });
  </script>
  
  <style scoped>
  /* Styles specific to the 404 page layout */
  .custom-not-found {
    padding-top: 0; /* Remove default padding if breadcrumb handles top space */
  }
  
  /* Ensure styles for elements used here are loaded globally or defined below */
  .error-section {
    /* padding: 80px 0; */ /* section-padding class should handle this */
  }
  
  .text-center {
    text-align: center;
  }
  
  .justify-content-center {
    justify-content: center;
  }
  
  /* Add any specific styles from your original 404.html's CSS */
  /* that might be needed for .error-items, .error-image, etc. */
  /* if they aren't already covered by your global styles */
  
  /* Example: Ensure theme-btn is styled if not global */
  /* .theme-btn { ... } */
  
  </style>