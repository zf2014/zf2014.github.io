<script setup lang="ts">
  import { useData } from 'vitepress';
  const { site, frontmatter } = useData();
</script>

<template>
  <div v-if="frontmatter?.home">
    <h1>{{ site.title }}</h1>
    <p>{{ site.description }}</p>
    <ul class="flex list-none">
      <li>
        <a href="/markdown-examples.html">Markdown Examples</a>
      </li>
      <li><a href="/api-examples.html">API Examples</a></li>
    </ul>
  </div>
  <div v-else>
    <a href="/">Home</a>
    <Content />
  </div>
</template>
