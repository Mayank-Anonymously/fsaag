import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "@/views/DashboardView.vue";
import HomeView from "../views/HomeView.vue";
import MemberTreeView from "../views/MemberTreeView.vue";
import WinLossSummaryReportView from "../views/winLossSummaryReportView.vue";

const isAuthenticated = () => {
  return !!localStorage.getItem("authToken");
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      beforeEnter: (to, from, next) => {
        if (isAuthenticated()) {
          next("/dashboard");
        } else {
          next();
        }
      },
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: DashboardView,
      beforeEnter: (to, from, next) => {
        if (isAuthenticated()) {
          next();
        } else {
          next("/");
        }
      },
    },
    {
      path: "/memberTree",
      name: "MemberTree",
      component: MemberTreeView,
      beforeEnter: (to, from, next) => {
        if (isAuthenticated()) {
          next();
        } else {
          next("/");
        }
      },
    },
    {
      path: "/report/winLossSummaryReport",
      name: "WinLossSummaryReportView",
      component: WinLossSummaryReportView,
      beforeEnter: (to, from, next) => {
        if (isAuthenticated()) {
          next();
        } else {
          next("/");
        }
      },
    },
  ],
});

export default router;
