<template>
  <header class="el-header header-bar">
    <div class="header-bar-logo">
      <img src="https://fsaag.velkigames365.cc/assets/logo-awc-1e540571.png" />
    </div>
    <div class="header-bar-right">
      <!---->
      <div
        class="el-dropdown header-bar-lang"
        @click="toggleLanguageSectionOpen"
      >
        <span
          class="el-dropdown-link el-tooltip__trigger el-tooltip__trigger"
          id="el-id-4206-9"
          role="button"
          tabindex="0"
          aria-controls="el-id-4206-10"
          aria-expanded="false"
          aria-haspopup="menu"
          >English
          <i class="el-icon el-icon-arrow-down el-icon--right"
            ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
              <path
                fill="currentColor"
                d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
              ></path></svg></i></span
        ><!--v-if-->
      </div>
      <div class="header-bar-user">
        <i class="el-icon el-icon-user"
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
            <path
              fill="currentColor"
              d="M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z"
            ></path></svg></i
        ><span class="header-bar-user-name">subindidemoag</span
        ><span class="header-bar-user-badge user-badge user-badge-ag">AG</span>
      </div>
      <button
        @click="logout"
        aria-disabled="false"
        type="button"
        class="el-button header-bar-logout btn--xs"
      >
        <!--v-if--><span class="">Log Out</span>
      </button>
    </div>
  </header>

  <div id="el-popper-container-7572">
    <div
      class="el-popper is-pure is-light el-dropdown__popper language-dropdown"
      tabindex="-1"
      aria-hidden="true"
      data-popper-reference-hidden="false"
      data-popper-escaped="false"
      data-popper-placement="bottom"
      :style="[
        isLanguageSectionOpen
          ? 'z-index: 2001; position: absolute; inset: 49.5px auto auto 1100.5px;'
          : 'z-index: 2001; position: absolute; inset: 49.5px auto auto 1100.5px; display: none;',
      ]"
    >
      <div class="el-scrollbar">
        <div class="el-scrollbar__wrap el-scrollbar__wrap--hidden-default">
          <div class="el-scrollbar__view el-dropdown__list" style="">
            <ul
              class="el-dropdown-menu"
              tabindex="-1"
              role="menu"
              aria-labelledby="el-id-7572-0"
              id="el-id-7572-1"
              style="outline: none"
            >
              <!--v-if-->
              <li
                data-el-collection-item=""
                aria-disabled="false"
                class="el-dropdown-menu__item"
                tabindex="-1"
                role="menuitem"
              >
                <!--v-if-->English
              </li>
              <!--v-if-->
              <li
                data-el-collection-item=""
                aria-disabled="false"
                class="el-dropdown-menu__item"
                tabindex="-1"
                role="menuitem"
              >
                <!--v-if-->中文
              </li>
              <!--v-if-->
              <li
                data-el-collection-item=""
                aria-disabled="false"
                class="el-dropdown-menu__item"
                tabindex="-1"
                role="menuitem"
              >
                <!--v-if-->日本語
              </li>
              <!--v-if-->
              <li
                data-el-collection-item=""
                aria-disabled="false"
                class="el-dropdown-menu__item"
                tabindex="-1"
                role="menuitem"
              >
                <!--v-if-->ภาษาไทย
              </li>
              <!--v-if-->
              <li
                data-el-collection-item=""
                aria-disabled="false"
                class="el-dropdown-menu__item"
                tabindex="-1"
                role="menuitem"
              >
                <!--v-if-->Tiếng Việt
              </li>
            </ul>
          </div>
        </div>
        <div class="el-scrollbar__bar is-horizontal" style="display: none">
          <div
            class="el-scrollbar__thumb"
            style="transform: translateX(0%)"
          ></div>
        </div>
        <div class="el-scrollbar__bar is-vertical" style="display: none">
          <div
            class="el-scrollbar__thumb"
            style="transform: translateY(0%)"
          ></div>
        </div>
      </div>
      <span
        class="el-popper__arrow"
        data-popper-arrow=""
        style="position: absolute; left: 0px"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isLanguageSectionOpen: false,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("authToken");
      this.$router.push("/");
    },
    toggleLanguageSectionOpen() {
      this.isLanguageSectionOpen = !this.isLanguageSectionOpen;
    },
  },
};
</script>
