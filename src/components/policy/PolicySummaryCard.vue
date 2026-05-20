<script setup lang="ts">
//保單查詢結果
// 1. 定義 PolicySummary 型別（上面那四個欄位）
interface PolicySummary {
    policyNo: string           // 保單號
    policyHolderName: string   // 保戶姓名
    productCode: string        // 商品代碼
    policyStatus: string       // 保單狀態
}


// 2. 定義 props：policy（PolicySummary | null）和 loading（boolean）
const props = defineProps<{
    policy: PolicySummary | null
    //可以是 PolicySummary 型別，也可以是 null。這樣設計是為了在沒有查詢結果時能夠表示「尚未查詢資料」的狀態。
    loading: boolean
}>()

</script>

<template>
    <!-- 3. loading 時顯示「資料讀取中...」 -->
     <div v-if="loading">資料讀取中...</div>
    <!-- 4. policy 有值時顯示四個欄位 -->
     <div v-else-if="props.policy">
        <p>保單號碼：{{ props.policy.policyNo }}</p>
        <p>保戶姓名：{{ props.policy.policyHolderName }}</p>
        <p>商品代碼：{{ props.policy.productCode }}</p>
        <p>保單狀態：{{ props.policy.policyStatus }}</p>
     </div>

    <!-- 5. 都沒有時顯示「尚未查詢資料」 -->
    <div v-else>尚未查詢資料</div>
</template>