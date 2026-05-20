<template>
    <section>
        <header>
            <!-- named slot：名稱叫 title -->
            <slot name="title">
                <h2>預設標題</h2>
            </slot>
        </header>
        <div>
            <!-- 預設 slot -->
            <slot>
                <p>預設內容</p>
            </slot>
        </div>
    </section>
</template>

<style scoped>
section {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
}

header {
  border-bottom: 1px solid #eee;
  margin-bottom: 12px;
}
</style>