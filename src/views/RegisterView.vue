<script setup>
import AuthLayout from '../layouts/AuthLayout.vue';
</script>

<template>
    <AuthLayout>
        <div class="login-container">
            <h2>Únete a ParkGuard</h2>
            <v-text-field label="Nombre" variant="solo-filled" density="compact" class="w-100"></v-text-field>
            <v-text-field label="Apellidos" variant="solo-filled" density="compact" class="w-100"></v-text-field>
            <v-text-field label="Correo electroníco" variant="solo-filled" density="compact" class="w-100"></v-text-field>
            <v-text-field label="Contraseña" type="password" variant="solo-filled" density="compact"
                class="w-100"></v-text-field>

            <v-btn color="light-green-darken-2" size="large" class="w-100">
                Regístrarme
            </v-btn>

            <router-link :to="{ name: 'authLogin' }" class="link-login">¿Ya tienes cuenta? Iniciar Sesión</router-link>

        </div>
    </AuthLayout>
</template>

<style scoped>
.login-container {
    background: #3498DB;
    width: 600px;
    height: 500px;
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