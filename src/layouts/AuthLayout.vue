<script setup>
</script>

<template>
    <div class="auth-layout">
        <div class="slot-container">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.auth-layout {
    background: #F5F5F5;
    min-width: 100%;
    min-height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>