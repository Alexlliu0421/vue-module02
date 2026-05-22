// useAuthForm.ts
// 這個 composable 負責管理登入表單的邏輯
// 讓任何需要登入功能的元件都可以重用

import { ref } from 'vue'

// 1. 建立 email、password、message 三個 ref


// 2. 定義 onSubmit 函式

// 3. return 出去，讓元件可以使用
//    注意：要 return 所有元件需要用到的東西
export function useAuthForm() {
    const email = ref('')
    const password = ref('')
    const message = ref('')

    function onSubmit() {
    

    //    - 判斷帳密是否正確（user@example.com / 123456）
    if (email.value === 'user@example.com' && password.value === '123456') {
        message.value = '登入成功'
    } else {
        message.value = '帳號或密碼錯誤'
    }
}

    return {
        email,
        password,
        message,
        onSubmit
    }
}