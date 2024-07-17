const authRoutes = [
  {
    path: "/auth",
    children: [
      {
        path: "login",
        name: "authLogin",
        component: () => import("@/views/LoginView.vue"),
        meta: {
          title: "Iniciar Sesión | AutoServicio San Pedro",
        },
      },
      {
        path: "register",
        name: "authRegister",
        component: () => import("@/views/RegisterView.vue"),
        meta: {
          title: "Registrárse | AutoServicio San Pedro",
        },
      },
    ],
  },
];

export default authRoutes;
