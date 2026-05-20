<script setup lang="ts">
//共用標題元件
// 1. 定義兩個 props：title（必填）和 subtitle（選填）
const props = defineProps<{
  title: string;
  subtitle?: string;
}>();
</script>

<template>
  <!-- 2. 顯示 title -->
   <h2>{{ title }}</h2>
  <!-- 3. subtitle 有值才顯示 -->
  <p v-if="subtitle">{{ subtitle }}</p>
</template>