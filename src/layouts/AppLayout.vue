<script setup>
import { ref } from 'vue'
import SideBar from '@/common/sidebar/SideBar.vue';
import HeaderContainer from '@/common/header/HeaderContainer.vue'

const sidebarWidth = ref(0);
const contentWidth = ref(300)

const toggleSidebar = () => {
    sidebarWidth.value = sidebarWidth.value === 0 ? -300 : 0;
    contentWidth.value = contentWidth.value === 0 ? 300 : 0;
};


</script>

<template>
    <div class="admin_layout">
        <SideBar :sidebarWidth="sidebarWidth" />

        <div class="content" :style="{ marginLeft: `${contentWidth}px` }">
            <header class="header_content">
                <HeaderContainer @changeSidebar="toggleSidebar" />
            </header>

            <main class="main_content">
                <slot></slot>

            </main>
        </div>
    </div>
</template>

<style scoped>
.admin_layout {
    display: flex;
    height: 100vh;
    min-height: 100%;
}

.content {
    flex: 1;
    transition: var(--transition__default);
    background: #f1f1f1;
}

.header_content {
    position: sticky;
    top: 0;
    z-index: 200;
}

.main_content {
    background: #fff;
    margin: 0.5rem;
    padding: 0.5rem;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
}
</style>
