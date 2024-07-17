import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import authRoutes from "./authRoutes";
import dashboardRoutes from "./dashboardRoutes";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: { name: "authLogin" },
  },
  ...authRoutes,
  {
    path: "/admin",
    redirect: { name: "adminDashboard" },
    children: [
      ...dashboardRoutes,
      {
        path: "income",
        name: "adminIncome",
        component: () => import("@/views/IncomeView.vue"),
        meta: {
          title: "Ingresos | AutoServicio San Pedro",
        },
      },
      {
        path: "departures",
        name: "adminDepartures",
        component: () => import("@/views/DeparturesView.vue"),
        meta: {
          title: "Salidas | AutoServicio San Pedro",
        },
      },
      {
        path: "setting",
        name: "adminSetting",
        component: () => import("@/views/SettingView.vue"),
        meta: {
          title: "Configuraciónes | AutoServicio San Pedro",
        },
      },
    ],
  },
  /*{
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFoundView.vue"),
    meta: {
      title: "Página no encontrada (404) | AutoServicio San Pedro",
    },
  },*/
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
