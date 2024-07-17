<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import SectionSeparator from "@/common/SectionSeparator.vue"
import CardDefault from "@/common/cards/CardDefault.vue"

</script>

<template>
    <AppLayout>
        <SectionSeparator title="Configuraciónes">
            <div class="cards">
                <CardDefault title="Configuración">
                </CardDefault>
                <CardDefault title="Configuración">
                </CardDefault>
                <CardDefault title="Configuración">
                </CardDefault>
            </div>
        </SectionSeparator>
    </AppLayout>
</template>

<style scoped>
.cards {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
</style>