<script setup>
const props = defineProps({
    iconName: String,
    title: String,
    links: Object
});

const toggleMenu = (event) => {
    const listElement = event.currentTarget;

    listElement.classList.toggle('arrow');

    let height = 0;
    let menu = listElement.nextElementSibling;
    if (menu.clientHeight == 0) {
        height = menu.scrollHeight;
    }

    menu.style.height = `${height}px`;
};

</script>

<template>
    <div class="button__list button__list--click" @click="toggleMenu">
        <span class="link__nav link__nav--arrow">
            <span>
                <v-icon :icon="iconName" class="list__icon" />
                {{ title }}
            </span>
            <v-icon icon="mdi-chevron-right " class="list__arrow" />
        </span>
    </div>

    <ul class="list__show">
        <li class="list__inside" v-for="link in links" :key="link.routeName">
            <router-link class="link__nav link__nav--inside" :to="{ name: link.routeName }">
                {{ link.title }}
            </router-link>
        </li>
    </ul>
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

.link__nav--arrow {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.list__icon {
    width: 20px;
    text-align: center;
    margin-right: 1rem;
}

.link__nav--inside {
    border-radius: 6px;
    padding-left: 20px;
    text-align: left;
}

.link__nav--inside:hover {
    background: #306396;
}

.arrow .list__arrow {
    transform: rotate(90deg);
}

.list__arrow {
    margin-right: 1rem;
    transition: transform .3s;
}

.list__show {
    background: #3e576b;
    width: 80%;
    margin-left: auto;
    border-left: 2px solid #FFA500;
    list-style: none;
    transition: height 400ms;
    height: 0;
}
</style>