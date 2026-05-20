<script setup lang="ts">
//這是頁面層級元件，負責整合搜尋表單和顯示結果的卡片。
// 1. 引入 ref
import { ref } from 'vue'
// 2. 引入三個子元件：PageSectionTitle、PolicySearchForm、PolicySummaryCard
import PageSectionTitle from '@/components/shared/PageSectionTitle.vue'
import PolicySearchForm from '@/components/policy/PolicySearchForm.vue'
import PolicySummaryCard from '@/components/policy/PolicySummaryCard.vue'
// 3. 定義 PolicySummary 型別（跟 Card 一樣的四個欄位）
interface PolicySummary {
    policyNo: string           // 保單號
    policyHolderName: string   // 保戶姓名
    productCode: string        // 商品代碼
    policyStatus: string       // 保單狀態
}
// 4. 用 ref 建立 policy（PolicySummary | null，初始 null）
const policy = ref<PolicySummary | null>(null)
// 5. 用 ref 建立 loading（boolean，初始 false）
const loading = ref(false)
// 6. 用 ref 建立 errorMessage（string，初始空字串）
const errorMessage = ref("")
// 7. 定義 search 函式，接收 policyNo 參數
function search(policyNo: string) {
    loading.value = true;
    errorMessage.value = "";
    // 假資料：直接給 policy 一筆假資料（不用真的打 API）
    setTimeout(() => {
        if (policyNo === "A001") {
            policy.value = {
                policyNo: "A001",
                policyHolderName: "王小明",
                productCode: "P12345",
                policyStatus: "有效"
            }
        } else if (policyNo === "A002") {
            policy.value = {
                policyNo: "A002",
                policyHolderName: "李小華",
                productCode: "P67890",
                policyStatus: "失效"
            }

        } else {
            errorMessage.value = "查無此保單號碼";
            policy.value = null;
        }
        loading.value = false;
    }, 1500)
}
//    - 把 loading 設為 true
//    - 清空 errorMessage
//    - 假資料：直接給 policy 一筆假資料（不用真的打 API）
//    - 把 loading 設為 false
</script>

<template>
    <!-- 8. PageSectionTitle，傳入 title 和 subtitle -->
    <PageSectionTitle title="保單查詢" subtitle="請輸入保單號碼查詢保單摘要資訊" />
    <!-- 9. PolicySearchForm，傳入 loading，監聽 submit 事件執行 search -->
    <!-- props 向下：把 loading 狀態傳給子元件，子元件不自己管 loading
         emit 向上：子元件送出保單號，父元件決定要做什麼-->

    <PolicySearchForm :loading="loading" @submit="search" />
    <!-- 10. 有 errorMessage 時顯示錯誤訊息 -->
    <div v-if="errorMessage" style="color: red; margin-top: 10px;">{{ errorMessage }}</div>
    <!-- 11. PolicySummaryCard，傳入 policy 和 loading -->
    <PolicySummaryCard :policy="policy" :loading="loading" />
</template>