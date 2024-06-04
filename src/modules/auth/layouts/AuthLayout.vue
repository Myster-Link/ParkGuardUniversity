<script setup>
const companyName = "PARK|GUARD"
const companyLetters = companyName.split("");
</script>

<template>
    <div class="auth-layout">
        <div class="company-column">
            <img src="../../../assets/images/logo_parkguard.jpg" alt="logo_parkguard">
            <p v-for="(letter, index) in companyLetters" :key="index">{{ letter }}</p>
            <img src="../../../assets/images/logo_parkguard.jpg" alt="logo_parkguard2">
        </div>

        <div class="slot-container">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.auth-layout {
    min-width: 100%;
    min-height: 100vh;
    background-image: url('../assets/bg_auth.png');
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
}

.company-column {
    width: 5%;
    background: #f5f3f3;
    overflow: hidden;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.company-column img {
    max-width: 100%;
    max-height: 100%;
    z-index: 1;
    border: 2px solid #ccc;
    border-radius: 5px;
}

.company-column p {
    color: #6db9ef;
    font-size: 50px;
    font-weight: bold;
}

.slot-container {
    width: 95%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>