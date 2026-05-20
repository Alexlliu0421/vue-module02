<script setup lang="ts">
// 保單搜尋表單
// 負責讓使用者輸入保單號並送出查詢。
// 1. 引入 ref
import { ref } from 'vue'
// 2. 定義 props：loading（boolean）
const props = defineProps<{
    loading: boolean
}>()
// 3. 定義 emit：submit 事件，帶一個 policyNo string 參數
//policyNo是保單號碼的意思，submit事件會帶上這個保單號碼作為參數，讓父組件知道使用者輸入了哪個保單號碼並觸發相應的查詢邏輯。
const emit = defineEmits<{
    submit: [policyNo: string] 
}>()
// 4. 用 ref 建立 policyNo，初始值空字串
const policyNo = ref("");
// 5. 定義 onSubmit 函式，emit submit 事件並帶上 policyNo 的值
const onSubmit = () => {
    emit("submit", policyNo.value);
}
</script>

<template>
    <form @submit.prevent="onSubmit">
        <label for="policyNo">保單號碼：</label>
        <input id="policyNo" v-model="policyNo" type="text" placeholder="請輸入保單號碼" />
        <button type="submit" :disabled="loading || !policyNo.trim()">{{ loading ? "查詢中..." : "查詢" }}</button>
        <!-- !policyNo.trim() 代表當輸入的保單號碼為空或只有空白時，按鈕會被禁用，這樣可以防止使用者提交空的保單號碼。 -->
    </form>
    <!-- 1. form 元素，使用 @submit.prevent 綁定 onSubmit 方法 -->
    <!-- 2. label 元素，for="policyNo" -->
    <!-- 3. input 元素，id="policyNo"，v-model 綁定 policyNo，type="text"，placeholder 提示文字 -->
    <!-- 4. button 元素，type="submit"，disabled 綁定 loading，文字根據 loading 狀態切換 -->
    <!-- 5. 使用 props.loading 控制按鈕狀態和文字 -->
    <!-- 6. form 表單，送出時觸發 onSubmit -->
    <!-- 7. policyNo 的 label + input，v-model 綁定 -->
    <!-- 8. 送出按鈕，loading 時 disabled 且文字改為「查詢中...」 -->
</template>