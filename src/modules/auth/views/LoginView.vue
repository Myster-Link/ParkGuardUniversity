<script setup>
import AuthLayout from '../layouts/AuthLayout.vue';
</script>

<template>
    <AuthLayout>
        <div class="login-container">
            <h2>Bienvenido a ParkGuard</h2>
            <v-text-field label="Usuario" variant="solo-filled" density="compact" class="w-100"></v-text-field>
            <v-text-field label="Contraseña" type="password" variant="solo-filled" density="compact"
                class="w-100"></v-text-field>

            <v-btn color="blue-lighten-1" size="large" class="w-100">
                Iniciar Sesión
            </v-btn>

            <router-link :to="{ name: 'authRegister' }" class="link-login">¿Olvidó su Contraseña?</router-link>
            <router-link :to="{ name: 'authRegister' }" class="link-login">¿No tienes cuenta? Regístrate</router-link>

        </div>
    </AuthLayout>
</template>

<style scoped>
.login-container {
    background: rgba(44, 124, 216, 0.95);
    width: 500px;
    height: 400px;
    border-radius: 15px;
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
}

.login-container h2 {
    width: 100%;
    text-align: center;
    font-size: 30px;
    color: #fff;
}

.link-login {
    width: 100%;
    text-align: center;
    color: #fff;
    text-decoration: none;
}

.link-login:hover {
    opacity: 0.5;
}
</style>