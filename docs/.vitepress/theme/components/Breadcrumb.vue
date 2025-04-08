<template>
    <div class="breadcrumb-wrapper section-padding bg-cover" :style="wrapperStyle">
      <div class="container">
        <div class="page-heading">
          <!-- Use title prop for H1 -->
          <h1 class="wow fadeInUp" data-wow-delay=".3s">{{ title }}</h1>
          <!-- Generate breadcrumb items from props -->
          <ul class="breadcrumb-items wow fadeInUp" data-wow-delay=".5s" v-if="items && items.length > 0">
            <li v-for="(item, index) in items" :key="item.text">
              <!-- Link for items with a 'link' property -->
              <a v-if="item.link" :href="withBase(item.link)">{{ item.text }}</a>
              <!-- Span for the last item or items without a link -->
              <span v-else>{{ item.text }}</span>
              <!-- Separator, not shown for the last item -->
              <i v-if="index < items.length - 1" class="fal fa-minus separator"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { withBase } from 'vitepress'; // Helper to prepend base path if needed
  
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    // Array of breadcrumb items: [{ text: 'Home', link: '/' }, { text: 'Current Page' }]
    items: {
      type: Array,
      default: () => []
    },
    // Optional background image override
    backgroundImage: {
      type: String,
      default: '/assets/img/breadcrumb.jpg' // Default image from your original code
    }
  });
  
  // Compute the background style dynamically
  const wrapperStyle = computed(() => {
    return {
      backgroundImage: `url('${withBase(props.backgroundImage)}')`
    };
  });
  
  // Note: WOW.js animation classes are included but require WOW.js
  // initialization to actually animate. You might remove them or
  // replace with Vue-based transitions/animations if preferred.
  </script>
  
  <style scoped>
  /* Styles copied/adapted from main.css/style.css for breadcrumbs */
  /* Ensure these styles don't conflict heavily with global ones */
  
  .breadcrumb-wrapper {
    position: relative;
    z-index: 1;
    /* padding-top: 100px; */ /* Already handled by section-padding */
    /* padding-bottom: 100px; */ /* Already handled by section-padding */
  }
  
  .breadcrumb-wrapper::before { /* Optional overlay like in some themes */
    /* content: ""; */
    /* position: absolute; */
    /* left: 0; */
    /* top: 0; */
    /* width: 100%; */
    /* height: 100%; */
    /* background-color: rgba(0, 0, 0, 0.5); */ /* Example dark overlay */
    /* z-index: -1; */
  }
  
  .page-heading {
    text-align: center;
    position: relative;
    z-index: 2;
  }
  
  .page-heading h1 {
    font-size: 2.5rem; /* Adjust size */
    color: #ffffff;
    margin-bottom: 15px;
    font-weight: 700;
    text-transform: capitalize;
  }
  
  .breadcrumb-items {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px; /* Spacing between items */
  }
  
  .breadcrumb-items li {
    display: flex; /* Align item and separator */
    align-items: center;
  }
  
  .breadcrumb-items a,
  .breadcrumb-items span {
    color: #e0e0e0; /* Lighter color for breadcrumbs */
    font-size: 1rem;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  
  .breadcrumb-items a:hover {
    color: var(--vp-c-brand-1); /* Use brand color on hover */
    text-decoration: none;
  }
  
  /* Style the current page differently if needed */
  .breadcrumb-items span {
     color: #ffffff; /* White for the current page */
     font-weight: 600;
  }
  
  
  .breadcrumb-items .separator {
    color: #e0e0e0;
    font-size: 0.8em;
    margin-left: 10px; /* Space before separator */
  }
  </style>