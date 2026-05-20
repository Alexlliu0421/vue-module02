<script setup lang="ts">
import LoginOptions from './components/LoginOptions.vue'
import LoginComposition from './components/LoginComposition.vue'
import PolicySummaryPage from './pages/PolicySummaryPage.vue'
import PageBlock from './components/shared/PageBlock.vue'

</script>
<template>
  <h1>練習1 Options API 登入表單</h1>
  <LoginOptions />
  <h1>練習1 Composition API 登入表單</h1>
  <LoginComposition />
  <hr />
  <PageBlock>
    <template #title>
      <h2>練習2 保單查詢 <span style="color:red">（新）</span></h2>
    </template>
    <PolicySummaryPage />
  </PageBlock>


</template>

<style scoped></style>
