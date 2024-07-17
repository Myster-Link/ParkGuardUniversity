<script setup>
import DefaultLink from './DefaultLink.vue';
import DropdownLink from './DropdownLink.vue';

const iconNames = {
    dashboard: "mdi-monitor-dashboard ",
    ingresos: "mdi-boom-gate-arrow-up",
    salidas: "mdi-boom-gate-arrow-down",
    setting: "mdi-cog"
}

const routeNames = {
    dashboard: "adminDashboard",
    income: "adminIncome",
    departures: "adminDepartures",
    setting: "adminSetting"
}
</script>

<template>
    <ul class="list__nav">

        <li class="item__list">
            <DefaultLink :route-name="routeNames.dashboard" :icon-name="iconNames.dashboard" text="Inicio" />
        </li>
        <li class="item__list">
            <DefaultLink :route-name="routeNames.income" :icon-name="iconNames.ingresos" text="Ingresos" />
        </li>
        <li class="item__list">
            <DefaultLink :route-name="routeNames.departures" :icon-name="iconNames.salidas" text="Salidas" />
        </li>
        <li class="item__list">
            <DefaultLink :route-name="routeNames.setting" :icon-name="iconNames.setting" text="Configuración" />
        </li>

    </ul>
</template>

<style scoped>
ul {
    list-style: none;
    padding: 0;
}

.list__nav {
    width: 100%;
    height: 100%;
}

.item__list {
    list-style: none;
    width: 100%;
    overflow: hidden;
}
</style>