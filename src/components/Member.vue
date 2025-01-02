<template>
  <div class="wrapper">
    <main :class="[!isSidebarOpen ? 'el-main isExtend' : 'el-main']">
      <h1>Member Tree</h1>
      <div class="box box-member-tree">
        <div class="box-filter">
          <form class="el-form el-form--default el-form--label-right">
            <div class="el-input el-input--suffix">
              <!-- input --><!-- prepend slot --><!--v-if-->
              <div class="el-input__wrapper">
                <!-- prefix slot --><!--v-if--><input
                  class="el-input__inner"
                  modelmodifiers="[object Object]"
                  type="text"
                  autocomplete="off"
                  tabindex="0"
                  placeholder="Input User ID"
                  id="el-id-7572-89"
                /><!-- suffix slot --><!--v-if-->
              </div>
              <!-- append slot --><!--v-if-->
            </div>
            <div class="el-select internalSelect">
              <div
                class="select-trigger el-tooltip__trigger el-tooltip__trigger"
              >
                <div
                  class="el-input el-input--suffix"
                  ref="inputStatusSelected"
                  @click.stop="toggle(1)"
                >
                  <div class="el-input__wrapper">
                    <!-- prefix slot --><!--v-if--><input
                      class="el-input__inner"
                      type="text"
                      readonly=""
                      autocomplete="off"
                      tabindex="0"
                      :placeholder="[isInternalStatusSelected]"
                      :value="[isInternalStatusSelected]"
                      id="el-id-7572-94"
                    /><!-- suffix slot --><span class="el-input__suffix"
                      ><span class="el-input__suffix-inner"
                        ><i class="el-icon el-select__caret el-select__icon"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1024 1024"
                          >
                            <path
                              fill="currentColor"
                              d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
                            ></path></svg></i
                        ><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--></span
                      ></span
                    >
                  </div>
                  <!-- append slot --><!--v-if-->
                </div>
              </div>
            </div>
            <div class="el-select statusSelect">
              <div
                class="select-trigger el-tooltip__trigger el-tooltip__trigger"
              >
                <!--v-if--><!-- fix: https://github.com/element-plus/element-plus/issues/11415 --><!--v-if-->
                <div
                  class="el-input el-input--suffix"
                  ref="inputStatusSelected"
                  @click.stop="toggle(2)"
                >
                  <!-- input --><!-- prepend slot --><!--v-if-->
                  <div class="el-input__wrapper">
                    <!-- prefix slot --><!--v-if--><input
                      class="el-input__inner"
                      type="text"
                      readonly=""
                      autocomplete="off"
                      tabindex="0"
                      :placeholder="[isStatusSelected]"
                      :value="[isStatusSelected]"
                      id="el-id-7572-95"
                    /><!-- suffix slot --><span class="el-input__suffix"
                      ><span class="el-input__suffix-inner"
                        ><i class="el-icon el-select__caret el-select__icon"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1024 1024"
                          >
                            <path
                              fill="currentColor"
                              d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
                            ></path></svg></i
                        ><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--></span
                      ></span
                    >
                  </div>
                  <!-- append slot --><!--v-if-->
                </div>
              </div>
            </div>
            <div class="box-filter_btns">
              <button
                aria-disabled="false"
                type="button"
                class="el-button btn--s btn--gold"
              >
                <!--v-if--><span class="">Submit</span></button
              ><button
                aria-disabled="false"
                type="button"
                class="el-button btn--s btn--black"
              >
                <!--v-if--><span class="">Export</span>
              </button>
            </div>
          </form>
        </div>
        <hr />
        <div class="box-level user-badge-level"><!----></div>
        <div class="box-data">
          <div
            class="el-table--fit el-table--striped el-table--scrollable-x el-table--enable-row-hover el-table el-table--layout-fixed is-scrolling-left"
            data-prefix="el"
            style="width: 100%"
          >
            <div class="el-table__inner-wrapper">
              <div class="hidden-columns">
                <div></div>
                <!---->
                <div></div>
                <div></div>
                <div></div>
                <!---->
                <div></div>
                <!----><!----><!----><!---->
                <div></div>
                <div></div>
              </div>
              <div class="el-table__header-wrapper">
                <table
                  class="el-table__header"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  style="width: 1098px"
                >
                  <colgroup>
                    <col name="el-table_6_column_21" width="268" />
                    <col name="el-table_6_column_22" width="160" />
                    <col name="el-table_6_column_23" width="120" />
                    <col name="el-table_6_column_24" width="100" />
                    <col name="el-table_6_column_25" width="240" />
                    <col name="el-table_6_column_26" width="120" />
                    <col name="el-table_6_column_27" width="90" />
                  </colgroup>
                  <thead class="">
                    <tr class="">
                      <th
                        class="el-table_6_column_21 is-leaf el-table__cell"
                        colspan="1"
                        rowspan="1"
                      >
                        <div class="cell">User ID<!----><!----></div>
                      </th>
                      <th
                        class="el-table_6_column_22 is-leaf el-table__cell"
                        colspan="1"
                        rowspan="1"
                      >
                        <div class="cell">User Name<!----><!----></div>
                      </th>
                      <th
                        class="el-table_6_column_23 is-leaf el-table__cell"
                        colspan="1"
                        rowspan="1"
                      >
                        <div class="cell">Status<!----><!----></div>
                      </th>
                      <th
                        class="el-table_6_column_24 is-leaf el-table__cell"
                        colspan="1"
                        rowspan="1"
                      >
                        <div class="cell">View<!----><!----></div>
                      </th>
                      <th
                        class="el-table_6_column_25 is-leaf el-table__cell"
                        colspan="1"
                        rowspan="1"
                      >
                        <div class="cell">Currency<!----><!----></div>
                      </th>
                      <th
                        class="el-table_6_column_26 is-leaf el-table__cell"
                        colspan="1"
                        rowspan="1"
                      >
                        <div class="cell">Login Failure<!----><!----></div>
                      </th>
                      <th
                        class="el-table_6_column_27 is-leaf el-table__cell"
                        colspan="1"
                        rowspan="1"
                      >
                        <div class="cell">Password Lock<!----><!----></div>
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
                      style="display: inline-block; vertical-align: middle"
                    >
                      <table
                        class="el-table__body"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        style="table-layout: fixed; width: 1098px"
                      >
                        <colgroup>
                          <col name="el-table_6_column_21" width="268" />
                          <col name="el-table_6_column_22" width="160" />
                          <col name="el-table_6_column_23" width="120" />
                          <col name="el-table_6_column_24" width="100" />
                          <col name="el-table_6_column_25" width="240" />
                          <col name="el-table_6_column_26" width="120" />
                          <col name="el-table_6_column_27" width="90" />
                        </colgroup>
                        <!--v-if-->
                        <tbody></tbody>
                      </table>
                      <div
                        class="el-table__empty-block"
                        style="height: 100%; width: 1080px"
                      >
                        <span class="el-table__empty-text"
                          >Please search for user ID to view player
                          information.</span
                        >
                      </div>
                      <!--v-if-->
                    </div>
                  </div>
                  <div
                    class="el-scrollbar__bar is-horizontal el-scrollbar-fade-enter-to"
                    style="display: none"
                  >
                    <div
                      class="el-scrollbar__thumb"
                      style="transform: translateX(0%); width: 1050.52px"
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
          <div class="el-pagination is-background">
            <button
              type="button"
              class="btn-prev is-first"
              disabled=""
              aria-label="Go to previous page"
              aria-disabled="true"
            >
              <i class="el-icon"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="currentColor"
                    d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
                  ></path></svg
              ></i>
            </button>
            <ul class="el-pager">
              <li
                class="is-active number"
                aria-current="true"
                aria-label="page 1"
                tabindex="0"
              >
                1
              </li>
              <!--v-if--><!--v-if--><!--v-if-->
            </ul>
            <button
              type="button"
              class="btn-next is-last"
              disabled=""
              aria-label="Go to next page"
              aria-disabled="true"
            >
              <i class="el-icon"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="currentColor"
                    d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
                  ></path></svg
              ></i>
            </button>
          </div>
        </div>
      </div>
      <!---->
    </main>
  </div>

  <div
    class="el-popper is-pure is-light el-select__popper"
    tabindex="-1"
    aria-hidden="true"
    role="tooltip"
    id="el-id-539-26"
    data-popper-reference-hidden="false"
    data-popper-escaped="false"
    data-popper-placement="bottom-start"
    :style="[
      isInternalStatus
        ? 'z-index: 2009; position: absolute; inset: 230.5px auto auto 675px;'
        : 'z-index: 2009; position: absolute; inset: 230.5px auto auto 675px; display: none;',
    ]"
  >
    <div class="el-select-dropdown" style="min-width: 162px">
      <div class="el-scrollbar" style="">
        <div
          class="el-select-dropdown__wrap el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
        >
          <ul class="el-scrollbar__view el-select-dropdown__list" style="">
            <!--v-if-->
            <li
              v-for="(_, i) in isInternalStatusList"
              :key="i"
              @click="selectInternalStatus(_)"
              :class="[
                isInternalStatusSelected === _
                  ? 'el-select-dropdown__item selected hover'
                  : 'el-select-dropdown__item',
              ]"
            >
              <span>{{ _ }}</span>
            </li>
          </ul>
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
      <!--v-if-->
    </div>
    <span
      class="el-popper__arrow"
      data-popper-arrow=""
      style="position: absolute; left: 0px"
    ></span>
  </div>

  <div
    class="el-popper is-pure is-light el-select__popper"
    tabindex="-1"
    aria-hidden="true"
    role="tooltip"
    id="el-id-539-27"
    data-popper-reference-hidden="false"
    data-popper-escaped="false"
    data-popper-placement="bottom-start"
    :style="[
      isStatus
        ? 'z-index: 2007; position: absolute; inset: 230.5px auto auto 847px;'
        : 'z-index: 2007; position: absolute; inset: 230.5px auto auto 847px; display: none;',
    ]"
  >
    <div class="el-select-dropdown" style="min-width: 162px">
      <div class="el-scrollbar" style="">
        <div
          class="el-select-dropdown__wrap el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
        >
          <ul class="el-scrollbar__view el-select-dropdown__list" style="">
            <li
              v-for="(_, i) in isStatusList"
              :key="i"
              @click="selectStatus(_)"
              :class="[
                isStatusSelected === _
                  ? 'el-select-dropdown__item selected'
                  : 'el-select-dropdown__item',
              ]"
            >
              <span>{{ _ }}</span>
            </li>
          </ul>
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
      <!--v-if-->
    </div>
    <span
      class="el-popper__arrow"
      data-popper-arrow=""
      style="position: absolute; left: 0px"
    ></span>
  </div>
</template>
<script>
export default {
  name: "Member",
  props: {
    isSidebarOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isInternalStatusList: ["Real/Test", "Test", "Real"],
      isStatusList: ["Status", "Active", "Suspended", "Locked"],
      isInternalStatus: false,
      isStatus: false,
      isInternalStatusSelected: "Real/Test",
      isStatusSelected: "Status",
    };
  },
  methods: {
    handleClickOutside(event) {
      const dropdown = this.$refs.inputStatusSelected;
      if (dropdown && !dropdown.contains(event.target)) {
        this.isStatus = false;
        this.isInternalStatus = false;
      }
    },
    selectStatus(param) {
      this.isStatusSelected = param;
      this.isStatus = !this.isStatus;
    },
    selectInternalStatus(param) {
      this.isInternalStatusSelected = param;
      this.isInternalStatus = !this.isInternalStatus;
    },
    toggle(param) {
      if (param === 1) {
        this.isInternalStatus = !this.isInternalStatus;
        if (this.isStatus) {
          this.isStatus = !this.isStatus;
        }
      } else {
        this.isStatus = !this.isStatus;
        if (this.isInternalStatus) {
          this.isInternalStatus = !this.isInternalStatus;
        }
      }
    },
  },
  mounted() {
    // Add click event listener to the document
    document.addEventListener("click", this.handleClickOutside, true);
  },
  beforeUnmount() {
    // Remove click event listener from the document
    document.removeEventListener("click", this.handleClickOutside, true);
  },
};
</script>
