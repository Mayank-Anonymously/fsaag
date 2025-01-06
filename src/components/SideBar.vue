<template>
  <label :class="[
    isSidebarOpen
      ? 'el-checkbox menuController checkboxOpen'
      : 'el-checkbox is-checked menuController checkboxClose',
  ]">
    <span class="el-checkbox__input" :class="[
      isSidebarOpen ? 'el-checkbox__input' : 'el-checkbox__input is-checked',
    ]">
      <input class="el-checkbox__original" type="checkbox" aria-hidden="false" :checked="isSidebarOpen" @click.prevent
        value="false" />
      <span class="el-checkbox__inner"></span></span>
    <span class="el-checkbox__label" @click="$emit('toggle-sidebar')">
      Click
      <!--v-if--></span></label>

  <aside class="el-aside asideMenu" style="--el-aside-width: auto">
    <ul role="menubar" :class="[
      !isSidebarOpen
        ? 'el-menu el-menu--vertical el-menu--collapse v-enter-to'
        : 'el-menu el-menu--vertical v-enter-to',
    ]" style="--el-menu-level: 0">
      <li class="el-menu-item is-active" role="menuitem" tabindex="-1">
        <router-link :aria-current="[isActiveDashboard ? 'page' : '']" to="/dashboard" :class="{
          'router-link-active router-link-exact-active': isActiveDashboard,
          '': !isActiveDashboard,
        }">My Profile</router-link>
      </li>
      <li class="el-menu-item" role="menuitem" tabindex="-1">
        <!-- <a href="/memberTree" class="">Member Tree</a> -->
        <router-link :aria-current="[isActiveMember ? 'page' : '']" :class="{
          'router-link-active router-link-exact-active': isActiveMember,
          '': !isActiveMember,
        }" to="/memberTree">Member Tree</router-link>
      </li>
      <li :class="[isOpenReport ? 'el-sub-menu is-opened' : 'el-sub-menu']" role="menuitem" ariahaspopup="true"
        :aria-expanded="[isOpenReport ? true : 'false']">
        <div class="el-sub-menu__title" @click="toggleMenuReport">
          Report<i class="el-icon el-sub-menu__icon-arrow" :style="[
            isOpenReport ? 'transform: rotateZ(180deg)' : 'transform:none',
          ]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
              <path fill="currentColor"
                d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z">
              </path>
            </svg>
          </i>
        </div>
        <ul role="menu" class="el-menu el-menu--inline" :style="[
          isOpenReport
            ? '--el-menu-level: 1'
            : '--el-menu-level: 1; display: none;',
        ]">
          <li class="el-sub-menu" role="menuitem" ariahaspopup="true"
            :aria-expanded="[isOpenWinLoseReport ? true : false]">
            <div class="el-sub-menu__title" @click="toggleWinLoseReport">
              <i class="el-icon el-icon-caret-right"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                  <path fill="currentColor" d="M384 192v640l384-320.064z"></path>
                </svg>
              </i>
              Win / Loss Report<i class="el-icon el-sub-menu__icon-arrow" :style="[
                isOpenWinLoseReport
                  ? 'transform: rotateZ(180deg);'
                  : 'transform: none',
              ]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                  <path fill="currentColor"
                    d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z">
                  </path>
                </svg></i>
            </div>
            <ul role="menu" class="el-menu el-menu--inline" :style="[
              isOpenWinLoseReport
                ? '--el-menu-level: 2'
                : '--el-menu-level: 2; display: none',
            ]">
              <li class="el-menu-item" role="menuitem" tabindex="-1">
                <!-- <a href="/report/winLossSummaryReport" class=""
                  >Win / Loss Summary</a
                > -->
                <router-link :aria-current="[isActiveWinLossSummary ? 'page' : '']" :class="{
                  'router-link-active router-link-exact-active':
                    isActiveWinLossSummary,
                  '': !isActiveWinLossSummary,
                }" to="/report/winLossSummaryReport">Win / Loss Summary</router-link>
              </li>
              <li class="el-menu-item" role="menuitem" tabindex="-1">
                <router-link :aria-current="[isActiveAdjustmentDetails ? 'page' : '']" :class="{
                  'router-link-active router-link-exact-active':
                    isActiveAdjustmentDetails,
                  '': !isActiveAdjustmentDetails,
                }" to="/report/adjustment-details">Adjustment Detail</router-link>
              </li>
            </ul>
          </li>

          <li class="el-sub-menu" role="menuitem" ariahaspopup="true"
            :aria-expanded="[isTransitionHistory ? true : false]">
            <div class="el-sub-menu__title" @click="toggleTransitionHistory">
              <i class="el-icon el-icon-caret-right"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                  <path fill="currentColor" d="M384 192v640l384-320.064z"></path>
                </svg></i>
              Transaction History<i class="el-icon el-sub-menu__icon-arrow" :style="[
                isTransitionHistory
                  ? 'transform: rotateZ(180deg)'
                  : 'transform: none',
              ]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                  <path fill="currentColor"
                    d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z">
                  </path>
                </svg></i>
            </div>
            <ul role="menu" class="el-menu el-menu--inline" :style="[
              isTransitionHistory
                ? '--el-menu-level: 2'
                : '--el-menu-level: 2; display: none',
            ]">
              <li class="el-menu-item" role="menuitem" tabindex="-1">
                <router-link :aria-current="[isActivePlayerSummary ? 'page' : '']" :class="{
                  'router-link-active router-link-exact-active':
                    isActivePlayerSummary,
                  '': !isActivePlayerSummary,
                }" to="/transaction/player-summary">Player Summary</router-link>
              </li>
              <li class="el-menu-item" role="menuitem" tabindex="-1">
                <router-link :aria-current="[isActivePlayerTransaction ? 'page' : '']" :class="{
                  'router-link-active router-link-exact-active':
                    isActivePlayerTransaction,
                  '': !isActivePlayerTransaction,
                }" to="/transaction/player-transaction">Player Transaction</router-link>
              </li>
              <li class="el-menu-item" role="menuitem" tabindex="-1">
                <router-link :aria-current="[isActiveByGameGroundReport ? 'page' : '']" :class="{
                  'router-link-active router-link-exact-active':
                    isActiveByGameGroundReport,
                  '': !isActiveByGameGroundReport,
                }" to="/transaction/player-ground-report">By Game Ground Report</router-link>
              </li>

            </ul>
          </li>

          <li class="el-sub-menu" role="menuitem" ariahaspopup="true" :aria-expanded="[isGameReport]">
            <div class="el-sub-menu__title" @click="toggleGameReport">
              <i class="el-icon el-icon-caret-right"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                  <path fill="currentColor" d="M384 192v640l384-320.064z"></path>
                </svg></i>
              Game Report<i class="el-icon el-sub-menu__icon-arrow" style="transform: none" :style="[
                isGameReport
                  ? 'transform: rotateZ(180deg);'
                  : 'transform: none',
              ]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                  <path fill="currentColor"
                    d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z">
                  </path>
                </svg></i>
            </div>
            <ul role="menu" class="el-menu el-menu--inline" :style="[
              isGameReport
                ? '--el-menu-level: 2;'
                : '--el-menu-level: 2; display: none',
            ]">

              <li class="el-menu-item" role="menuitem" tabindex="-1">
                <router-link :aria-current="[isActiveGameDailySummary ? 'page' : '']" :class="{
                  'router-link-active router-link-exact-active':
                    isActiveGameDailySummary,
                  '': !isActiveGameDailySummary,
                }" to="/game/game-summary">Game History</router-link>
              </li>
              <li class="el-menu-item" role="menuitem" tabindex="-1">
                <router-link :aria-current="[isActiveGameDailyReport ? 'page' : '']" :class="{
                  'router-link-active router-link-exact-active':
                    isActiveGameDailyReport,
                  '': !isActiveGameDailyReport,
                }" to="/game/game-daily-summary">Game Daily</router-link>
              </li>

            </ul>
          </li>
          <li class="el-menu-item" role="menuitem" tabindex="-1">
            <router-link :aria-current="[isActiveAccountStatement ? 'page' : '']" :class="{
              'router-link-active router-link-exact-active':
                isActiveAccountStatement,
              '': !isActiveAccountStatement,
            }" to="/account/account-statement">Account Statement</router-link>
          </li>

        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "SideBar",
  props: {
    isSidebarOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isOpenReport: false,
      isOpenWinLoseReport: false,
      isTransitionHistory: false,
      isGameReport: false,
    };
  },
  methods: {
    toggleMenuReport() {
      this.isOpenReport = !this.isOpenReport;
    },
    toggleWinLoseReport() {
      this.isOpenWinLoseReport = !this.isOpenWinLoseReport;
    },
    toggleTransitionHistory() {
      this.isTransitionHistory = !this.isTransitionHistory;
    },
    toggleGameReport() {
      this.isGameReport = !this.isGameReport;
    },
  },
  computed: {
    isActiveDashboard() {
      this.isOpenReport = this.$route.path === "/dashboard" ? false : true;
      this.isOpenWinLoseReport =
        this.$route.path === "/dashboard" ? false : true;
      return this.$route.path === "/dashboard";
    },
    isActiveMember() {
      this.isOpenReport = this.$route.path === "/memberTree" ? false : true;
      this.isOpenWinLoseReport =
        this.$route.path === "/memberTree" ? false : true;
      return this.$route.path === "/memberTree";
    },
    isActiveWinLossSummary() {
      this.isOpenReport =
        this.$route.path === "/report/winLossSummaryReport" ? true : false;
      this.isOpenWinLoseReport =
        this.$route.path === "/report/winLossSummaryReport" ? true : false;
      return this.$route.path === "/report/winLossSummaryReport";
    },
    isActiveAdjustmentDetails() {
      this.isOpenReport =
        this.$route.path === "/report/adjustment-details" ? true : false;
      this.isOpenWinLoseReport =
        this.$route.path === "/report/adjustment-details" ? true : false;
      return this.$route.path === "/report/adjustment-details";
    },
    isActivePlayerSummary() {
      this.isOpenReport =
        this.$route.path === "/transaction/player-summary" ? true : false;
      this.isOpenWinLoseReport =
        this.$route.path === "/transaction/player-summary" ? true : false;
      return this.$route.path === "/transaction/player-summary";
    },
    isActivePlayerTransaction() {
      this.isOpenReport =
        this.$route.path === "/transaction/player-transaction" ? true : false;
      this.isOpenWinLoseReport =
        this.$route.path === "/transaction/player-transaction" ? true : false;
      return this.$route.path === "/transaction/player-transaction";
    },
    isActiveByGameGroundReport() {
      this.isOpenReport =
        this.$route.path === "/transaction/player-ground-report" ? true : false;
      this.isOpenWinLoseReport =
        this.$route.path === "/transaction/player-ground-report" ? true : false;
      return this.$route.path === "/transaction/player-ground-report";
    },
    isActiveGameDailySummary() {
      this.isOpenReport =
        this.$route.path === "/game/game-summary" ? true : false;
      this.isOpenWinLoseReport =
        this.$route.path === "/game/game-summary" ? true : false;
      return this.$route.path === "/game/game-summary";
    },
    isActiveGameDailyReport() {
      this.isOpenReport =
        this.$route.path === "/game/game-daily-summary" ? true : false;
      this.isOpenWinLoseReport =
        this.$route.path === "/game/game-daily-summary" ? true : false;
      return this.$route.path === "/game/game-daily-summary";
    },
    isActiveAccountStatement() {
      this.isOpenReport =
        this.$route.path === "/account/account-statement" ? true : false;
      this.isOpenWinLoseReport =
        this.$route.path === "/account/account-statement" ? true : false;
      return this.$route.path === "/account/account-statement";
    },
  },
};
</script>
