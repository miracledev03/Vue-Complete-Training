import { createRouter, createWebHistory } from "vue-router";

import CoachDetail from "./pages/coaches/CoachDetail.vue";
import CoachesList from "./page/coaches/CoachesList.vue";
import CoachRegistration from "./page/coaches/CoachRegistration.vue";
import ContactCoach from "./page/requests/ContactCoach.vue";
import RequestsReceived from "./page/requests/RequestsReceived.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachesList },
    {
      path: "/coaches/:id",
      component: CoachDetail,
      children: [
        { path: "/contact", component: ContactCoach }, // coaches/c1/contact
      ],
    },
    { path: "/register", component: CoachRegistration },
    { path: "/requests", component: RequestsReceived },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
