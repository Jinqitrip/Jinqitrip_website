---
title: 文章中心
description: 浏览锦麒行旅游的所有文章、游记、攻略和行业资讯。
layout: page
editLink: false
---

<Breadcrumb title="文章中心" :items="[{ text: '主页', link: '/' }, { text: '文章中心' }]" />

<script setup>
// This special `data` object will be populated by the config script
import { data } from './posts.data.js'
</script>

<div class="post-list">
  <article v-for="post of data" :key="post.url" class="post-item">
    <h2 class="post-title">
      <a :href="post.url">{{ post.frontmatter.title }}</a>
    </h2>
    <p class="post-meta">
      <span><i class="far fa-calendar-alt"></i> {{ post.frontmatter.date }}</span>
      <span v-if="post.frontmatter.author"><i class="far fa-user"></i> {{ post.frontmatter.author }}</span>
    </p>
    <p v-if="post.frontmatter.description" class="post-excerpt">
      {{ post.frontmatter.description }}
    </p>
    <div class="post-tags" v-if="post.frontmatter.tags?.length">
      <i class="fas fa-tags"></i>
      <span v-for="tag in post.frontmatter.tags" :key="tag" class="tag-item">{{ tag }}</span>
    </div>
    <a :href="post.url" class="read-more">阅读全文 →</a>
  </article>
</div>

<style scoped>
/* Using classes defined in main.css where possible for consistency */
.post-list {
  margin-top: 2rem;
  max-width: 800px; /* Optional: Limit width for readability */
  margin-left: auto;
  margin-right: auto;
}

.post-item {
  background-color: var(--vp-c-bg-soft); /* Use a soft background for separation */
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px; /* Add rounded corners */
  padding: 1.5rem 2rem; /* Increase padding */
  margin-bottom: 2rem;
  transition: border-color 0.25s, box-shadow 0.25s;
}

.post-item:hover {
  border-color: var(--vp-c-brand-1); /* Highlight border on hover */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); /* Add subtle shadow on hover */
}

.post-item:last-child {
  margin-bottom: 0;
}

.post-title {
  font-size: 1.8rem; /* Slightly larger title */
  font-weight: 600;
  margin-bottom: 0.75rem;
  border-top: none;
  padding-top: 0;
  line-height: 1.3;
}

.post-title a {
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: color 0.25s;
}

.post-title a:hover {
  color: var(--vp-c-brand-1);
}

.post-meta {
  color: var(--vp-c-text-2);
  font-size: 0.85em; /* Slightly smaller meta */
  margin-bottom: 1rem;
  display: flex; /* Align items horizontally */
  flex-wrap: wrap; /* Allow wrapping */
  gap: 0.5rem 1.5rem; /* Add gap between meta items */
}

.post-meta span {
  margin-right: 0; /* Remove margin, use gap instead */
  white-space: nowrap; /* Prevent wrapping within a single meta item */
}

.post-meta i {
  margin-right: 5px;
  vertical-align: middle; /* Align icons better */
}

.post-excerpt {
  color: var(--vp-c-text-2); /* Use slightly muted color for excerpt */
  line-height: 1.7;
  margin-bottom: 1.25rem;
  font-size: 0.95em;
}

.post-tags {
    margin-bottom: 1.5rem; /* More space before read more */
    font-size: 0.9em;
    color: var(--vp-c-text-2);
    line-height: 1.8; /* Improve spacing if tags wrap */
}

.post-tags i {
    margin-right: 6px;
    vertical-align: middle;
}

.tag-item {
    display: inline-block;
    color: var(--vp-c-brand-1); /* Use brand color for tags */
    background-color: var(--vp-c-bg-mute); /* Slightly different background */
    border: 1px solid var(--vp-c-divider-light);
    padding: 3px 10px; /* Adjust padding */
    border-radius: 15px; /* Pill shape */
    margin-right: 8px;
    margin-bottom: 8px;
    font-size: 0.8em; /* Smaller tags */
    text-decoration: none; /* If you make tags links later */
    transition: background-color 0.25s, color 0.25s;
}

.tag-item:hover {
    background-color: var(--vp-c-brand-soft);
    color: var(--vp-c-brand-dark);
}


/* Use theme-btn styling for consistency, potentially override if needed */
.read-more {
  /* Inherit from global .theme-btn or define specific styles */
  display: inline-block;
  padding: 8px 16px;
  background-color: transparent; /* Make it look like a link button */
  color: var(--vp-c-brand-1);
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.25s, color 0.25s;
  font-size: 0.9em;
}

.read-more:hover {
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-dark);
  text-decoration: none;
}
</style>