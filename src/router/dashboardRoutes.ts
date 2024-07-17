const dashboardRoutes = [
  {
    path: "dashboard",
    name: "adminDashboard",
    component: () => import("@/views/DashboardView.vue"),
    meta: {
      title: "Dashboard | AutoServicio San Pedro",
    },
  },
];

export default dashboardRoutes;
