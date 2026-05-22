<script setup lang="ts">
import LoginOptions from './components/LoginOptions.vue'
import LoginComposition from './components/LoginComposition.vue'
import PolicySummaryPage from './pages/PolicySummaryPage.vue'
import PageBlock from './components/shared/PageBlock.vue'
import { ref } from 'vue'
const isLoggedIn = ref(false)

</script>
<template>
  <div v-if="!isLoggedIn" class="page">
    <h1>練習1 Options API 登入表單 <small>（僅示範語法，不跳轉）</small></h1>
    <LoginOptions />
    <h1>練習1 Composition API 登入表單</h1>
    <LoginComposition @login-success="isLoggedIn = true" />
  </div>

  <div v-else class="page">
  <button class="logout-btn" @click="isLoggedIn = false">登出</button>
    <PageBlock>
      <template #title>
        <h2>練習2 保單查詢 <span style="color:red">（新）</span></h2>
      </template>
      <PolicySummaryPage />
    </PageBlock>
  </div>

</template>

<style scoped>
.page {
  max-width: 800px;
  margin: 0 auto;
  padding: 32px 24px;
}

.logout-btn {
  padding: 8px 16px;
  background-color: #f3f4f6;
  color: #374151;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 16px;
  transition: background-color 0.2s;
}

.logout-btn:hover {
  background-color: #e5e7eb;
}
</style>
