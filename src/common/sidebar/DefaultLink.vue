<script setup>
const props = defineProps({
    routeName: String,
    iconName: String,
    text: String
});
</script>

<template>
    <div class="button__list">
        <router-link class="link__nav" :to="{ name: routeName }">
            <v-icon :icon="iconName" class="list__icon" />
            {{ text }}
        </router-link>

    </div>
</template>

<style scoped>
.button__list {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0 auto;
}

.link__nav {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #fff;
    padding: 1rem;
    font-size: 16px;
    cursor: pointer;
}

.link__nav:hover {
    background: #306396;
}

.list__icon {
    width: 20px;
    text-align: center;
    margin-right: 1rem;
}
</style>