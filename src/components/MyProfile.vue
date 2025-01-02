<template>
  <div class="wrapper">
    <main :class="[!isSidebarOpen ? 'el-main isExtend' : 'el-main']">
      <div class="profile">
        <h1>My Profile</h1>
        <div class="box">
          <h2>Basic Information</h2>
          <button
            aria-disabled="false"
            type="button"
            class="el-button btn--xs btn--icon"
            @click="toggleEdit"
          >
            <i class="el-icon"
              ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                <path
                  fill="currentColor"
                  d="M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"
                ></path>
                <path
                  fill="currentColor"
                  d="m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"
                ></path></svg></i
            ><span class="">Edit</span>
          </button>
          <div class="el-descriptions box-user-edit">
            <!--v-if-->
            <div class="el-descriptions__body">
              <table class="el-descriptions__table">
                <tbody>
                  <tr>
                    <td class="el-descriptions__cell" colspan="1">
                      <span class="el-descriptions__label">User ID</span
                      ><span class="el-descriptions__content"
                        ><span class="box-user-edit-name">{{
                          userData.userId
                        }}</span></span
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <hr />
          <div class="box-data">
            <div class="el-descriptions">
              <!--v-if-->
              <div class="el-descriptions__body">
                <table class="el-descriptions__table">
                  <tbody>
                    <tr>
                      <td class="el-descriptions__cell">
                        <span class="el-descriptions__label">Username</span
                        ><span class="el-descriptions__content">{{
                          userData.username
                        }}</span>
                      </td>
                      <td class="el-descriptions__cell">
                        <span class="el-descriptions__label">Account Type</span
                        ><span class="el-descriptions__content"
                          ><span class="user-badge user-badge-ag">{{
                            userData.accountType
                          }}</span
                          ><span class="user-badge-full"
                            >Sub Account</span
                          ></span
                        >
                      </td>
                      <td class="el-descriptions__cell">
                        <span class="el-descriptions__label">Status</span
                        ><span class="el-descriptions__content"
                          ><span class="user-stage user-stage-active"
                            ><i></i> {{ userData.status }}</span
                          ></span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td class="el-descriptions__cell" colspan="3">
                        <span class="el-descriptions__label">Currency</span>
                        <span
                          v-for="(currency, index) in userData.currency"
                          :key="index"
                          class="currency"
                        >
                          {{ currency }}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class="el-descriptions__cell">
                        <span class="el-descriptions__label">Created Time</span
                        ><span class="el-descriptions__content">{{
                          userData.createdTime
                        }}</span>
                      </td>
                      <td class="el-descriptions__cell" colspan="2">
                        <span class="el-descriptions__label">Last Login</span
                        ><span class="el-descriptions__content">{{
                          userData.lastLogin
                        }}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="el-descriptions">
              <!--v-if-->
              <div class="el-descriptions__body">
                <table class="el-descriptions__table is-bordered">
                  <tbody>
                    <tr v-for="(row, index) in userData.tableData" :key="index">
                      <td
                        v-for="(cell, cellIndex) in row"
                        :key="cellIndex"
                        class="el-descriptions__cell"
                        :class="
                          cellIndex % 2 === 0
                            ? 'el-descriptions__cell el-descriptions__label is-bordered-label'
                            : 'el-descriptions__cell el-descriptions__content is-bordered-content'
                        "
                      >
                        {{ cell }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="box">
          <h2>Product Information</h2>
          <div class="el-tabs el-tabs--top el-tabs--card">
            <div class="el-tabs__header is-top">
              <!---->
              <div class="el-tabs__nav-wrap is-top">
                <!---->
                <div class="el-tabs__nav-scroll">
                  <div
                    class="el-tabs__nav is-top"
                    role="tablist"
                    style="transform: translateX(0px)"
                  >
                    <!---->
                    <div
                      v-for="(item, index) in userData.productInfo"
                      :key="item.id"
                      :class="[
                        item.key === userData.activePane
                          ? 'el-tabs__item is-top is-active'
                          : 'el-tabs__item is-top',
                      ]"
                      :id="[item._id]"
                      role="tab"
                      :aria-controls="'pane-' + item.key"
                      :aria-selected="[
                        item.key === userData.activePane ? true : false,
                      ]"
                      :tabindex="[
                        item.key === userData.activePane ? '0' : '-1',
                      ]"
                      @click="setActivePane(item.key)"
                    >
                      {{ item.key }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="el-tabs__content">
              <div v-for="(item, index) in userData.productInfo" :key="item.id">
                <div
                  :id="'pane-' + item.key"
                  class="el-tab-pane"
                  role="tabpanel"
                  aria-hidden="true"
                  :aria-labelledby="[item._id]"
                  :style="[
                    item.key === userData.activePane
                      ? 'display: block'
                      : 'display: none',
                  ]"
                >
                  <div
                    class="el-table--fit el-table--striped el-table--scrollable-x el-table--enable-row-hover el-table--enable-row-transition el-table el-table--layout-fixed is-scrolling-right"
                    data-prefix="el"
                    style="width: 100%"
                  >
                    <div class="el-table__inner-wrapper">
                      <div class="hidden-columns">
                        <div></div>
                        <div></div>
                        <div></div>
                        <!---->
                        <div></div>
                      </div>
                      <div class="el-table__header-wrapper">
                        <table
                          class="el-table__header"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          style="width: 1100px"
                        >
                          <colgroup>
                            <col name="el-table_2_column_8" width="120" />
                            <col name="el-table_2_column_9" width="780" />
                            <col name="el-table_2_column_10" width="80" />
                            <col name="el-table_2_column_11" width="120" />
                          </colgroup>
                          <thead class="">
                            <tr class="">
                              <th
                                class="el-table_2_column_8 is-leaf el-table__cell"
                                colspan="1"
                                rowspan="1"
                              >
                                <div class="cell">Platform<!----><!----></div>
                              </th>
                              <th
                                class="el-table_2_column_9 is-leaf el-table__cell"
                                colspan="1"
                                rowspan="1"
                              >
                                <div class="cell">
                                  Supported Currency<!----><!---->
                                </div>
                              </th>
                              <th
                                class="el-table_2_column_10 is-leaf el-table__cell"
                                colspan="1"
                                rowspan="1"
                              >
                                <div class="cell">
                                  My Pt Allow<!----><!---->
                                </div>
                              </th>
                              <th
                                class="el-table_2_column_11 is-leaf el-table__cell"
                                colspan="1"
                                rowspan="1"
                              >
                                <div class="cell">Bet Limit<!----><!----></div>
                              </th>
                            </tr>
                          </thead>
                        </table>
                      </div>
                      <div class="el-table__body-wrapper">
                        <div class="el-scrollbar">
                          <div
                            class="el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
                          >
                            <div
                              class="el-scrollbar__view"
                              style="
                                display: inline-block;
                                vertical-align: middle;
                              "
                            >
                              <table
                                class="el-table__body"
                                cellspacing="0"
                                cellpadding="0"
                                border="0"
                                style="table-layout: fixed; width: 1100px"
                              >
                                <colgroup>
                                  <col name="el-table_2_column_8" width="120" />
                                  <col name="el-table_2_column_9" width="780" />
                                  <col name="el-table_2_column_10" width="80" />
                                  <col
                                    name="el-table_2_column_11"
                                    width="120"
                                  />
                                </colgroup>
                                <!--v-if-->
                                <tbody>
                                  <tr
                                    v-for="(tdata, i) in item.tableData"
                                    :id="[tdata.id]"
                                    :class="[
                                      i % 2 === 0
                                        ? 'el-table__row el-table__row--striped'
                                        : 'el-table__row',
                                    ]"
                                  >
                                    <td
                                      class="el-table_2_column_8 el-table__cell"
                                      :rowspan="[1]"
                                      :colspan="[1]"
                                    >
                                      <div class="cell">
                                        {{ tdata.paltform }}
                                      </div>
                                    </td>
                                    <td
                                      class="el-table_2_column_9 el-table__cell"
                                      rowspan="1"
                                      colspan="1"
                                    >
                                      <div class="cell">
                                        <!---->
                                        <div
                                          v-for="(
                                            _, ind
                                          ) in tdata.supportedCurrency"
                                          :id="[ind]"
                                          class="currency"
                                        >
                                          {{ _ }}
                                        </div>
                                      </div>
                                    </td>
                                    <td
                                      class="el-table_2_column_10 el-table__cell"
                                      rowspan="1"
                                      colspan="1"
                                    >
                                      <div class="cell">
                                        <!---->{{ tdata.myPtAllow }}
                                      </div>
                                    </td>
                                    <td
                                      class="el-table_2_column_11 el-table__cell"
                                      rowspan="1"
                                      colspan="1"
                                    >
                                      <div class="cell">
                                        <!----><span>-</span>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--v-if--><!--v-if-->
                            </div>
                          </div>

                          <div
                            class="el-scrollbar__bar is-horizontal el-scrollbar-fade-enter-to"
                            style="display: none"
                          >
                            <div
                              class="el-scrollbar__thumb"
                              style="transform: translateX(0%)"
                            ></div>
                          </div>
                          <div
                            class="el-scrollbar__bar is-vertical"
                            style="display: none"
                          >
                            <div
                              class="el-scrollbar__thumb"
                              style="transform: translateY(0%)"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <!--v-if--><!--v-if-->
                    </div>
                    <div
                      class="el-table__column-resize-proxy"
                      style="display: none"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>

  <div v-if="isEditing" class="el-overlay" style="z-index: 2005">
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Edit My Profile"
      aria-describedby="el-id-2897-37"
      class="el-overlay-dialog"
    >
      <div class="el-dialog el-dialog--center" tabindex="-1">
        <header class="el-dialog__header">
          <span role="heading" class="el-dialog__title">Edit My Profile</span
          ><button
            aria-label="Close this dialog"
            class="el-dialog__headerbtn"
            type="button"
            @click="toggleEdit"
          >
            <i class="el-icon el-dialog__close"
              ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                <path
                  fill="currentColor"
                  d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
                ></path></svg
            ></i>
          </button>
        </header>
        <div id="el-id-2897-37" class="el-dialog__body">
          <form class="el-form el-form--default el-form--label-right">
            <div class="edit-form-user">
              <span class="edit-form-user-title">User ID</span
              ><span class="edit-form-user-id">subindidemoag</span
              ><span class="user-badge user-badge-ag">AG</span>
            </div>
            <div class="el-form-item is-required is-no-asterisk asterisk-left">
              <label
                id="el-id-2897-39"
                for="el-id-2897-42"
                class="el-form-item__label"
                >Password</label
              >
              <div class="el-form-item__content">
                <div class="el-input el-input--suffix">
                  <!-- input --><!-- prepend slot --><!--v-if-->
                  <div class="el-input__wrapper">
                    <!-- prefix slot --><!--v-if--><input
                      class="el-input__inner"
                      modelmodifiers="[object Object]"
                      maxlength="40"
                      type="password"
                      autocomplete="off"
                      tabindex="0"
                      id="el-id-2897-42"
                    /><!-- suffix slot --><span class="el-input__suffix"
                      ><span class="el-input__suffix-inner"
                        ><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--></span
                      ></span
                    >
                  </div>
                  <!-- append slot --><!--v-if-->
                </div>
              </div>
            </div>
            <div class="el-form-item is-required is-no-asterisk asterisk-left">
              <label
                id="el-id-2897-40"
                for="el-id-2897-43"
                class="el-form-item__label"
                >New Password</label
              >
              <div class="el-form-item__content">
                <div class="el-input el-input--suffix">
                  <!-- input --><!-- prepend slot --><!--v-if-->
                  <div class="el-input__wrapper">
                    <!-- prefix slot --><!--v-if--><input
                      class="el-input__inner"
                      modelmodifiers="[object Object]"
                      maxlength="40"
                      type="password"
                      autocomplete="off"
                      tabindex="0"
                      placeholder="Min 8 characters"
                      id="el-id-2897-43"
                    /><!-- suffix slot --><span class="el-input__suffix"
                      ><span class="el-input__suffix-inner"
                        ><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--></span
                      ></span
                    >
                  </div>
                  <!-- append slot --><!--v-if-->
                </div>
              </div>
            </div>
            <div class="el-form-item is-no-asterisk asterisk-left">
              <label
                id="el-id-2897-41"
                for="el-id-2897-44"
                class="el-form-item__label"
                >Confirm Password</label
              >
              <div class="el-form-item__content">
                <div class="el-input el-input--suffix">
                  <!-- input --><!-- prepend slot --><!--v-if-->
                  <div class="el-input__wrapper">
                    <!-- prefix slot --><!--v-if--><input
                      class="el-input__inner"
                      modelmodifiers="[object Object]"
                      maxlength="40"
                      type="password"
                      autocomplete="off"
                      tabindex="0"
                      id="el-id-2897-44"
                    /><!-- suffix slot --><span class="el-input__suffix"
                      ><span class="el-input__suffix-inner"
                        ><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--></span
                      ></span
                    >
                  </div>
                  <!-- append slot --><!--v-if-->
                </div>
              </div>
            </div>
            <!---->
            <div class="dialog-footer">
              <button
                aria-disabled="false"
                type="button"
                class="el-button btn--s btn--border"
                @click="toggleEdit"
              >
                <!--v-if--><span class="">Cancel</span></button
              ><button
                aria-disabled="false"
                type="button"
                class="el-button btn--s btn--gold"
              >
                <!--v-if--><span class="">Save</span>
              </button>
            </div>
          </form>
        </div>
        <!--v-if-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyProfile",
  props: {
    isSidebarOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isEditing: false,
      isLanguageSectionOpen: false,
      userData: {
        userId: "subindidemoag",
        username: "subindidemoag",
        accountType: "AG",
        status: "Active",
        currency: ["IDR", "INR", "KES", "MXN", "PHP"],
        createdTime: "16-12-2024 20:02:37",
        lastLogin: "26-12-2024 16:19:07",
        tableData: [
          // Row 1
          ["Prefix", "wnr", "Wallet Type", "Single Wallet"],
        ],
        activePane: "EGAME",
        productInfo: [
          {
            id: 1,
            _id: "tab-EGAME",
            key: "EGAME",
            active: true,
            tableData: [
              {
                id: 1,
                paltform: "JDB",
                supportedCurrency: ["IDR", "INR", "KES", "MXN", "PHP"],
                myPtAllow: "0%",
                betLimit: "",
              },
              {
                id: 2,
                paltform: "PP",
                supportedCurrency: ["IDR", "INR", "KES", "MXN", "PHP"],
                myPtAllow: "0%",
                betLimit: "",
              },
              {
                id: 3,
                paltform: "PP",
                supportedCurrency: ["IDR", "INR", "KES", "MXN"],
                myPtAllow: "0%",
                betLimit: "",
              },
            ],
          },
          {
            id: 2,
            key: "Fish",
            _id: "tab-FH",
            active: false,
            tableData: [
              {
                id: 1,
                paltform: "JDB",
                supportedCurrency: ["IDR", "INR", "KES", "MXN", "PHP"],
                myPtAllow: "0%",
                betLimit: "",
              },
              {
                id: 2,
                paltform: "JILI",
                supportedCurrency: ["IDR", "INR", "KES", "MXN", "PHP"],
                myPtAllow: "0%",
                betLimit: "",
              },
            ],
          },
          {
            id: 3,
            key: "LIVE",
            _id: "tab-LIVE",
            active: false,
            tableData: [
              {
                id: 1,
                paltform: "PP",
                supportedCurrency: ["IDR", "INR", "KES", "MXN", "PHP"],
                myPtAllow: "0%",
                betLimit: "",
              },
            ],
          },
          {
            id: 4,
            key: "SLOT",
            _id: "tab-SLOT",
            active: false,
            tableData: [
              {
                id: 1,
                paltform: "JDB",
                supportedCurrency: ["IDR", "INR", "KES", "MXN", "PHP"],
                myPtAllow: "0%",
                betLimit: "",
              },
              {
                id: 2,
                paltform: "JILI",
                supportedCurrency: ["IDR", "INR", "KES", "MXN", "PHP"],
                myPtAllow: "0%",
                betLimit: "",
              },
              {
                id: 3,
                paltform: "PP",
                supportedCurrency: ["IDR", "INR", "KES", "MXN", "PHP"],
                myPtAllow: "0%",
                betLimit: "",
              },
            ],
          },
          {
            id: 5,
            key: "TABLE",
            _id: "tab-TABLE",
            active: false,
            tableData: [
              {
                id: 1,
                paltform: "JDB",
                supportedCurrency: ["IDR", "INR", "KES", "MXN", "PHP"],
                myPtAllow: "0%",
                betLimit: "",
              },
              {
                id: 2,
                paltform: "JILI",
                supportedCurrency: ["IDR", "INR", "KES", "MXN", "PHP"],
                myPtAllow: "0%",
                betLimit: "",
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    toggleEdit() {
      this.isEditing = !this.isEditing;
    },
    setActivePane(pane) {
      this.userData.activePane = pane;
    },
  },
};
</script>
