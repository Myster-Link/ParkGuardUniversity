<script setup>
import Links from './Links.vue';
const props = defineProps({
    sidebarWidth: {
        type: Number,
        default: 0
    },
});
</script>

<template>
    <nav class="nav_sidebar" :style="{ left: `${sidebarWidth}px` }">
        <div class="img_sidebar">
            <img src="@/assets/images/logo_parkguard.jpg" alt="logo-principal">
        </div>

        <v-divider color="white" class="border-opacity-100" :thickness="1"></v-divider>

        <div class="title_sidebar">
            <h3>Menu</h3>
        </div>

        <v-divider color="white" class="border-opacity-100" :thickness="1"></v-divider>


        <Links />
    </nav>
</template>

<style scoped>
.nav_sidebar {
    background: var(--background__primary);
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100%;
    transition: var(--transition__default);
}

.img_sidebar {
    margin: 0.5rem;
    display: flex;
    align-items: center;
    max-height: 150px;
    overflow: hidden;
    border-radius: 15px;
}

.img_sidebar img {
    width: 100%;
    height: 100%;
}

.title_sidebar {
    color: white;
    margin-left: 1rem;
}

.title_sidebar h3 {
    font-size: 25px;
}
</style>