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
    
    <form @submit.prevent="onSubmit">

        
        <label for="email">Email:</label>
        
        <input type="email" id="email" v-model="email" required>

        <label for="password">Password:</label>
        
        <input type="password" id="password" v-model="password" required>

        
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