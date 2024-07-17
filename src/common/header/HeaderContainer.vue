<script setup>

const emit = defineEmits(['changeSidebar'])
const emitEvento = () => {
    emit('changeSidebar');
};

</script>

<template>
    <div class="header_container">
        <div class="menu_icon_container">
            <v-icon icon="mdi-menu" size="large" class="btn_menu" @click="emitEvento"></v-icon>

            <v-menu transition="slide-x-transition">
                <template v-slot:activator="{ props }">
                    <v-btn append-icon="mdi-account" color="blue-darken-1" v-bind="props">
                        Cuenta
                    </v-btn>
                </template>
                <v-list class="text-center">
                    <v-list-item>
                        <v-divider></v-divider>
                        <v-list-item-title>
                            <v-btn color="blue-darken-1">
                                Cerrar Sesion
                            </v-btn>
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
    </div>
</template>

<style scoped>
.header_container {
    background: var(--background__secondary);
}

.menu_icon_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 1rem;
}

.btn_menu {
    padding: 1.5rem;
    color: white;
}

.btn_menu:hover {
    background: rgba(255, 255, 255, 0.2);
    transition: var(--transition__default);
}
</style>