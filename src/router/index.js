import { createRouter, createWebHistory } from "vue-router";
import authRoutes from "@/modules/auth/routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: { name: "authLogin" },
      meta: {
        requiredAuth: false,
      },
    },
    ...authRoutes,
  ],
});

export default router;