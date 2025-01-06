import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "@/views/DashboardView.vue";
import HomeView from "@/views/HomeView.vue";
import MemberTreeView from "@/views/MemberTreeView.vue";
import WinLossSummaryReportView from "@/views/WinLossSummaryReportView.vue";
import AdjustmentDetails from "@/views/AdjustmentDetails.vue";
import PlayerSummaryView from "@/views/Transactions/PlayerSummaryView.vue";
import PlayerTransactions from "@/views/Transactions/PlayerTransactions.vue";
import ByGameGroundReport from "@/views/Transactions/ByGameGroundReport.vue";
import GameDailyView from "@/views/GameReport/GameDailyView.vue";
import GameHistoryView from "@/views/GameReport/GameHistoryView.vue";
import AccountStatementView from "../views/AccountStatment/AccountStatementView.vue";

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
    {
      path: "/report/adjustment-details",
      name: "AdjustmentdetailsView",
      component: AdjustmentDetails,
      beforeEnter: (to, from, next) => {
        if (isAuthenticated()) {
          next();
        } else {
          next("/");
        }
      },
    },
    {
      path: "/transaction/player-summary",
      name: "PlayerSummary",
      component: PlayerSummaryView,
      beforeEnter: (to, from, next) => {
        if (isAuthenticated()) {
          next();
        } else {
          next("/");
        }
      },
    },
    {
      path: "/transaction/player-transaction",
      name: "PlayerTransaction",
      component: PlayerTransactions,
      beforeEnter: (to, from, next) => {
        if (isAuthenticated()) {
          next();
        } else {
          next("/");
        }
      },
    },
    {
      path: "/transaction/player-ground-report",
      name: "PlayerGroundReport",
      component: ByGameGroundReport,
      beforeEnter: (to, from, next) => {
        if (isAuthenticated()) {
          next();
        } else {
          next("/");
        }
      },
    },
    {
      path: "/game/game-summary",
      name: "GameDailyReport",
      component: GameHistoryView,
      beforeEnter: (to, from, next) => {
        if (isAuthenticated()) {
          next();
        } else {
          next("/");
        }
      },
    },
    {
      path: "/game/game-daily-summary",
      name: "GameDailySummary",
      component: GameDailyView,
      beforeEnter: (to, from, next) => {
        if (isAuthenticated()) {
          next();
        } else {
          next("/");
        }
      },
    },
    {
      path: "/account/account-statement",
      name: "AccountStatement",
      component: AccountStatementView,
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
