<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import SectionSeparator from "@/common/SectionSeparator.vue"
import CardDefault from "@/common/cards/CardDefault.vue"
</script>

<template>
    <AppLayout>
        <SectionSeparator title="Dashboard">
            <div class="cards">
                <CardDefault title="VEHICULOS ESTACIONADOS HOY">
                </CardDefault>
                <CardDefault title="VEHICULOS ESTACIONADOS HOY">
                </CardDefault>
                <CardDefault title="VEHICULOS ESTACIONADOS HOY">
                </CardDefault>
                <CardDefault title="VEHICULOS ESTACIONADOS HOY">
                </CardDefault>
                <CardDefault title="VEHICULOS ESTACIONADOS HOY">
                </CardDefault>
                <CardDefault title="VEHICULOS ESTACIONADOS HOY">
                </CardDefault>
                <CardDefault title="VEHICULOS ESTACIONADOS HOY">
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