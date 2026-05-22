<script setup lang="ts">
// 1. 從 composable 引入 useAuthForm
// 2. 解構取出需要的東西
import { useAuthForm } from '../composables/useAuthForm'
const { email, password, message, onSubmit } = useAuthForm()
const emit = defineEmits<{ loginSuccess: [] }>()
function handleSubmit() {
    onSubmit()
    if (message.value === '登入成功') {
        emit('loginSuccess')
    }
}
</script>


<template>
    <!-- 
        @submit.prevent：監聽表單送出事件
        .prevent：阻止瀏覽器預設行為（防止頁面重新整理）
        "handleSubmit"：送出時執行 methods 裡的 handleSubmit 函式
    -->
    <form @submit.prevent="handleSubmit">

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

<style scoped>
form {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 360px;
    padding: 24px;
    border: 1px solid #dce3ed;
    border-radius: 8px;
    background-color: #ffffff;
}

label {
    font-size: 14px;
    font-weight: 600;
    color: #374151;
}

input {
    padding: 8px 12px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s;
}

input:focus {
    border-color: #2563eb;
}

button {
    padding: 10px;
    background-color: #2563eb;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
}

button:hover {
    background-color: #1d4ed8;
}
</style>