<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const handleLoginClick = () => {
    router.push({ name: "adminDashboard" });
};
</script>

<template>
    <AuthLayout>
        <div class="login_container">
            <h2>Bienvenido a ParkGuard</h2>
            <v-text-field label="Usuario" variant="solo-filled" class="w-100" clearable></v-text-field>
            <v-text-field label="Contraseña" type="password" variant="solo-filled" class="w-100"
                clearable></v-text-field>

            <v-btn color="light-green-darken-2" size="large" class="w-100" @click="handleLoginClick">
                Iniciar Sesión
            </v-btn>

            <router-link :to="{ name: 'authRegister' }" class="link_login">¿Olvidó su Contraseña?</router-link>
            <router-link :to="{ name: 'authRegister' }" class="link_login">¿No tienes cuenta? Regístrate</router-link>

        </div>
    </AuthLayout>
</template>

<style scoped>
.login_container {
    background: #3498DB;
    color: #fff;
    padding: 3rem;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    width: 600px;
    height: 500px;
}

.login_container h2 {
    margin-bottom: 2rem;
    font-size: 40px;
}

.login_container button {
    margin-bottom: 2rem;
}

.link_login {
    color: #fff;
    width: 100%;
}

.link_login:hover {
    opacity: 0.7;
}
</style>