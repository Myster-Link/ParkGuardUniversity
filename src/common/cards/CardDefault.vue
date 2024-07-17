<script setup>
const props = defineProps({
    title: String,
});
</script>

<template>
    <div class="card_container">
        <div class="header_card">
            <h2>{{ title }}</h2>
        </div>

        <div class="content_card">
            <img src="@/assets/images/garaje-inteligente.png" alt="img">
            <h2>30</h2>
        </div>
    </div>
</template>

<style scoped>
.card_container {
    width: 250px;
    background-color: white;
    border: 1px solid #DDDDDD;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin: 20px;
    text-align: center;
    transition: all 0.3s ease;
}

.card_container:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
}

.header_card {
    background-color: #3498DB;
    color: #fff;
    padding: 10px;
}

.header_card h2 {
    margin: 0;
    font-size: 16px;
}

.content_card {
    padding: 20px;
}

.content_card img {
    width: 100px;
    /* Tamaño de la imagen ajustado */
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 10px;
}

.content_card h2 {
    font-size: 24px;
    margin: 0;
    color: #333;
}
</style>