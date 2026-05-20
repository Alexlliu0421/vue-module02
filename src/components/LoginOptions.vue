<script lang="ts">
export default {
    // 1. 定義這個元件的資料，email 和 password 初始值都是空字串
    data() {
        return {
            email: '',
            password: '',
            message: ''
        }
    },
    // 2. 定義方法，送出表單時用 console.log 印出 email 和 password
    //    注意：在 Options API 裡面要用 this 來存取 data 的資料
    methods: {
        onSubmit() {
            if (this.email === 'user@example.com' && this.password === '123456') {
                this.message = '登入成功';
            } else {
                this.message = '帳號或密碼錯誤';
            }
        } // ✓ 結束 onSubmit
    } // ✓ 結束 methods
} // ✓ 結束 export default

//提示： 加一個 data 欄位 message 初始空字串

// onSubmit 裡判斷 email 和 password 是否符合假資料

// 符合就把 message 設為「登入成功」

// 不符合就設為「帳號或密碼錯誤」

// template 裡用 v-if 顯示 message

</script>

<template>
    <!-- 
        @submit.prevent：監聽表單送出事件
        .prevent：阻止瀏覽器預設行為（防止頁面重新整理）
        "onSubmit"：送出時執行 methods 裡的 onSubmit 函式
    -->
    <form @submit.prevent="onSubmit">

        <!-- 
            label for="email"：點這段文字，游標會自動跳到 id="email" 的 input
        -->
        <label for="email">Email:</label>
        <!-- 
            type="email"：瀏覽器驗證格式（要有 @）
            id="email"：對應上面 label 的 for
            v-model="email"：輸入的值即時同步到 data 裡的 email 變數
            required：空白不能送出
        -->
        <input type="email" id="email" v-model="email" required>

        <label for="password">Password:</label>
        <!-- 
            type="password"：輸入的字顯示為 ●●●●
        -->
        <input type="password" id="password" v-model="password" required>

        <!-- 
            type="submit"：按下去觸發整個 form 的 submit 事件
        -->
        <button type="submit">Login</button>
        <div v-if="message" :style="{ color: message === '登入成功' ? 'green' : 'red' }">
            {{ message }}
        </div>
    </form>
</template>

<style scoped></style>