<script setup>
const props = defineProps({
    title: String,
});
</script>

<template>
    <div>
        <section class="title__page">
            <h2>{{ title }}</h2>
        </section>

        <v-divider class="border-opacity-75" color="info"></v-divider>

        <section class="content__page">
            <slot></slot>
        </section>

    </div>
</template>

<style scoped>
.title__page {
    border-left: 4px solid #185694;
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
}

.title__page h2 {
    font-size: 30px;
    font-weight: 500;
}
</style>