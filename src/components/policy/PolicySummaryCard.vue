<script setup lang="ts">
//保單查詢結果
import type { PolicySummary } from '@/types/insurance'


// 2. 定義 props：policy（PolicySummary | null）和 loading（boolean）
const props = defineProps<{
    policy: PolicySummary | null
    //可以是 PolicySummary 型別，也可以是 null。這樣設計是為了在沒有查詢結果時能夠表示「尚未查詢資料」的狀態。
    loading: boolean
}>()

</script>

<template>
    <!-- 3. loading 時顯示「資料讀取中...」 -->
     <div v-if="loading" class="loading">資料讀取中...</div>
    <!-- 4. policy 有值時顯示四個欄位 -->
     <div v-else-if="props.policy" class="card">
        <p>保單號碼:<span>{{ props.policy.policyNo }}</span></p>
        <p>保戶姓名:<span>{{ props.policy.policyHolderName }}</span></p>
        <p>商品代碼:<span>{{ props.policy.productCode }}</span></p>
        <p>保單狀態:<span>{{ props.policy.policyStatus }}</span></p>
     </div>

    <!-- 5. 都沒有時顯示「尚未查詢資料」 -->
    <div v-else class="empty">尚未查詢資料</div>
</template>

<style scoped>
.card {
  margin-top: 16px;
  padding: 20px 24px;
  border: 1px solid #dce3ed;
  border-radius: 8px;
  background-color: #f8fafc;
}

.card p {
  margin: 8px 0;
  font-size: 14px;
  color: #374151;
}

.card p span {
  font-weight: 600;
  color: #111827;
}

.loading {
  margin-top: 16px;
  font-size: 14px;
  color: #6b7280;
}

.empty {
  margin-top: 16px;
  font-size: 14px;
  color: #9ca3af;
}
</style>