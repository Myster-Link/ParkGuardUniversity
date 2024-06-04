const authRoutes = [
    {
      path: "/auth",
      meta: {
        requiredAuth: false,
        requiredGuest: true,
      },
      children: [
        {
          path: "login",
          name: "authLogin",
          component: () => import("@/modules/auth/views/LoginView.vue"),
          meta: {
            title: "Iniciar Sesión | AutoServicio San Pedro",
          },
        },
        {
          path: "register",
          name: "authRegister",
          component: () => import("@/modules/auth/views/RegisterView.vue"),
          meta: {
            title: "Registrárse | AutoServicio San Pedro",
          },
        },
      ],
    },
  ];
  
  export default authRoutes;
  