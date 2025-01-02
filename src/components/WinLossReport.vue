<template>
  <div class="wrapper">
    <main class="el-main">
      <h1>Win / Loss Summary <span></span></h1>

      <div class="box">
        <div class="box-filter">
          <form
            class="el-form el-form--default el-form--label-top el-form--inline"
          >
            <div
              class="el-form-item is-success is-required asterisk-left"
              role="group"
              aria-labelledby="el-id-2773-7"
            >
              <div id="el-id-2773-7" class="el-form-item__label">
                Date and Time
              </div>
              <div class="el-form-item__content">
                <div
                  class="el-date-editor el-date-editor--datetimerange el-input__wrapper el-range-editor el-tooltip__trigger el-tooltip__trigger"
                  aria-controls="el-id-2773-8"
                  aria-expanded="false"
                  aria-haspopup="dialog"
                >
                  <i class="el-icon el-input__icon el-range__icon"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1024 1024"
                    >
                      <path
                        fill="currentColor"
                        d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32z"
                      ></path></svg></i
                  ><input
                    autocomplete="off"
                    name=""
                    placeholder="Start"
                    class="el-range-input"
                  /><span class="el-range-separator">-</span
                  ><input
                    autocomplete="off"
                    name=""
                    placeholder="End"
                    class="el-range-input"
                  /><i
                    class="el-icon el-input__icon el-range__close-icon el-range__close-icon--hidden"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1024 1024"
                    >
                      <path
                        fill="currentColor"
                        d="m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
                      ></path></svg
                  ></i>
                </div>
              </div>
            </div>
            <div class="el-form-item is-required asterisk-left">
              <label
                id="el-id-2773-9"
                for="el-id-2773-30"
                class="el-form-item__label"
                >Time Zone</label
              >
              <div class="el-form-item__content">
                <div class="el-select el-select-gmt">
                  <div
                    class="select-trigger el-tooltip__trigger el-tooltip__trigger"
                  >
                    <!--v-if--><!-- fix: https://github.com/element-plus/element-plus/issues/11415 --><!--v-if-->
                    <div class="el-input el-input--suffix">
                      <!-- input --><!-- prepend slot --><!--v-if-->
                      <div class="el-input__wrapper">
                        <!-- prefix slot --><!--v-if--><input
                          class="el-input__inner"
                          type="text"
                          readonly=""
                          autocomplete="off"
                          tabindex="0"
                          placeholder="Time Zone"
                          id="el-id-2773-30"
                          style="height: 40px"
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
              </div>
            </div>
            <!----><!----><!---->
            <div class="el-form-item is-success is-required asterisk-left">
              <label
                id="el-id-2773-11"
                for="el-id-2773-31"
                class="el-form-item__label"
                >Platform</label
              >
              <div class="el-form-item__content">
                <div
                  class="el-cascader cascader el-tooltip__trigger el-tooltip__trigger"
                >
                  <div class="el-input el-input--suffix">
                    <!-- input --><!-- prepend slot --><!--v-if-->
                    <div class="el-input__wrapper">
                      <!-- prefix slot --><!--v-if--><input
                        class="el-input__inner"
                        type="text"
                        readonly=""
                        autocomplete="off"
                        tabindex="0"
                        placeholder=""
                        id="el-id-2773-31"
                        style="height: 40px"
                      /><!-- suffix slot --><span class="el-input__suffix"
                        ><span class="el-input__suffix-inner"
                          ><i class="el-icon el-input__icon icon-arrow-down"
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 1024 1024"
                            >
                              <path
                                fill="currentColor"
                                d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
                              ></path></svg></i
                          ><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--></span
                        ></span
                      >
                    </div>
                    <!-- append slot --><!--v-if-->
                  </div>
                  <div class="el-cascader__tags">
                    <span
                      class="el-tag is-closable el-tag--info el-tag--default el-tag--light"
                      ><span class="el-tag__content"><span>JDB</span></span
                      ><i class="el-icon el-tag__close"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 1024 1024"
                        >
                          <path
                            fill="currentColor"
                            d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
                          ></path></svg></i></span
                    ><span
                      class="el-tag el-tag--info el-tag--default el-tag--light"
                      ><span class="el-tag__content"
                        ><span class="el-tooltip__trigger">+ 3</span></span
                      ><!--v-if--></span
                    ><!--v-if-->
                  </div>
                </div>
              </div>
            </div>
            <div class="el-form-item is-success is-required asterisk-left">
              <label
                id="el-id-2773-13"
                for="el-id-2773-32"
                class="el-form-item__label"
                >Type</label
              >
              <div class="el-form-item__content">
                <div
                  class="el-cascader cascader el-tooltip__trigger el-tooltip__trigger"
                >
                  <div class="el-input el-input--suffix">
                    <!-- input --><!-- prepend slot --><!--v-if-->
                    <div class="el-input__wrapper">
                      <!-- prefix slot --><!--v-if--><input
                        class="el-input__inner"
                        type="text"
                        readonly=""
                        autocomplete="off"
                        tabindex="0"
                        placeholder=""
                        id="el-id-2773-32"
                        style="height: 40px"
                      /><!-- suffix slot --><span class="el-input__suffix"
                        ><span class="el-input__suffix-inner"
                          ><i class="el-icon el-input__icon icon-arrow-down"
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 1024 1024"
                            >
                              <path
                                fill="currentColor"
                                d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
                              ></path></svg></i
                          ><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--></span
                        ></span
                      >
                    </div>
                    <!-- append slot --><!--v-if-->
                  </div>
                  <div class="el-cascader__tags">
                    <span
                      class="el-tag is-closable el-tag--info el-tag--default el-tag--light"
                      ><span class="el-tag__content"><span>EGAME</span></span
                      ><i class="el-icon el-tag__close"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 1024 1024"
                        >
                          <path
                            fill="currentColor"
                            d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
                          ></path></svg></i></span
                    ><span
                      class="el-tag el-tag--info el-tag--default el-tag--light"
                      ><span class="el-tag__content"
                        ><span class="el-tooltip__trigger">+ 8</span></span
                      ><!--v-if--></span
                    ><!--v-if-->
                  </div>
                </div>
              </div>
            </div>
            <div class="el-form-item asterisk-left">
              <label
                id="el-id-2773-15"
                for="el-id-2773-33"
                class="el-form-item__label"
                >Location</label
              >
              <div class="el-form-item__content">
                <div
                  class="el-cascader is-disabled cascader el-tooltip__trigger el-tooltip__trigger"
                >
                  <div class="el-input is-disabled el-input--suffix">
                    <!-- input --><!-- prepend slot --><!--v-if-->
                    <div class="el-input__wrapper">
                      <!-- prefix slot --><!--v-if--><input
                        class="el-input__inner"
                        type="text"
                        disabled=""
                        readonly=""
                        autocomplete="off"
                        tabindex="0"
                        placeholder="Select"
                        id="el-id-2773-33"
                        style="height: 40px"
                      /><!-- suffix slot --><span class="el-input__suffix"
                        ><span class="el-input__suffix-inner"
                          ><i class="el-icon el-input__icon icon-arrow-down"
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 1024 1024"
                            >
                              <path
                                fill="currentColor"
                                d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
                              ></path></svg></i
                          ><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--></span
                        ></span
                      >
                    </div>
                    <!-- append slot --><!--v-if-->
                  </div>
                  <div class="el-cascader__tags"><!--v-if--></div>
                </div>
              </div>
            </div>

            <div class="el-form-item is-success is-required asterisk-left">
              <label
                id="el-id-2773-17"
                for="el-id-2773-34"
                class="el-form-item__label"
                >Currency</label
              >
              <div class="el-form-item__content">
                <div class="el-select">
                  <div
                    class="select-trigger el-tooltip__trigger el-tooltip__trigger"
                  >
                    <!--v-if--><!-- fix: https://github.com/element-plus/element-plus/issues/11415 --><!--v-if-->
                    <div class="el-input el-input--suffix">
                      <!-- input --><!-- prepend slot --><!--v-if-->
                      <div class="el-input__wrapper">
                        <!-- prefix slot --><!--v-if--><input
                          class="el-input__inner"
                          type="text"
                          autocomplete="off"
                          tabindex="0"
                          placeholder="Select"
                          id="el-id-2773-34"
                          style="height: 40px"
                          readonly=""
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
              </div>
            </div>
          </form>
          <div class="w-100p">
            <div class="box-filter_duration">
              <div
                class="el-radio-group"
                role="radiogroup"
                aria-label="radio-group"
                id="el-id-2773-35"
              >
                <label class="el-radio"
                  ><span class="el-radio__input"
                    ><input
                      class="el-radio__original"
                      name="el-id-2773-19"
                      type="radio"
                      value="lastMonth"
                      tabindex="0" /><span class="el-radio__inner"></span></span
                  ><span class="el-radio__label">Last Month</span></label
                ><label class="el-radio"
                  ><span class="el-radio__input"
                    ><input
                      class="el-radio__original"
                      name="el-id-2773-19"
                      type="radio"
                      value="thisMonth" /><span
                      class="el-radio__inner"
                    ></span></span
                  ><span class="el-radio__label">This Month</span></label
                ><label class="el-radio"
                  ><span class="el-radio__input"
                    ><input
                      class="el-radio__original"
                      name="el-id-2773-19"
                      type="radio"
                      value="lastWeek" /><span
                      class="el-radio__inner"
                    ></span></span
                  ><span class="el-radio__label">Last Week</span></label
                ><label class="el-radio"
                  ><span class="el-radio__input"
                    ><input
                      class="el-radio__original"
                      name="el-id-2773-19"
                      type="radio"
                      value="thisWeek" /><span
                      class="el-radio__inner"
                    ></span></span
                  ><span class="el-radio__label">This Week</span></label
                ><label class="el-radio"
                  ><span class="el-radio__input"
                    ><input
                      class="el-radio__original"
                      name="el-id-2773-19"
                      type="radio"
                      value="yesterday" /><span
                      class="el-radio__inner"
                    ></span></span
                  ><span class="el-radio__label">Yesterday</span></label
                ><label class="el-radio is-checked"
                  ><span class="el-radio__input is-checked"
                    ><input
                      class="el-radio__original"
                      name="el-id-2773-19"
                      type="radio"
                      value="today" /><span
                      class="el-radio__inner"
                    ></span></span
                  ><span class="el-radio__label">Today</span></label
                >
              </div>
            </div>
            <div class="box-filter_btns">
              <button
                aria-disabled="false"
                type="button"
                class="el-button btn--s btn--gold"
              >
                <!--v-if--><span class=""><div>Submit</div></span></button
              ><!----><button
                aria-disabled="false"
                type="button"
                class="el-button btn--s btn--black"
              >
                <!--v-if--><span class=""><div>Export</div></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="box">
        <div class="box-level user-badge-level">
          <!----><!----><a style="">subindidemoag</a>
        </div>
        <div class="box-operate">
          <div class="box-operate-pagination">
            <div class="el-pagination is-background">
              <span class="el-pagination__sizes is-first is-last"
                ><div class="el-select el-select--default">
                  <div
                    class="select-trigger el-tooltip__trigger el-tooltip__trigger"
                  >
                    <!--v-if--><!-- fix: https://github.com/element-plus/element-plus/issues/11415 --><!--v-if-->
                    <div class="el-input el-input--default el-input--suffix">
                      <!-- input --><!-- prepend slot --><!--v-if-->
                      <div class="el-input__wrapper">
                        <!-- prefix slot --><!--v-if--><input
                          class="el-input__inner"
                          type="text"
                          readonly=""
                          autocomplete="off"
                          tabindex="0"
                          placeholder="Select"
                          id="el-id-4116-188"
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
                </div></span
              >
            </div>
          </div>
          <div class="box-operate-display">
            <span>Display Columns:　</span>
            <div
              class="el-cascader cascader el-tooltip__trigger el-tooltip__trigger"
            >
              <div class="el-input el-input--suffix">
                <!-- input --><!-- prepend slot --><!--v-if-->
                <div class="el-input__wrapper">
                  <!-- prefix slot --><!--v-if--><input
                    class="el-input__inner"
                    type="text"
                    readonly=""
                    autocomplete="off"
                    tabindex="0"
                    placeholder=""
                    id="el-id-4116-189"
                    style="height: 40px"
                  /><!-- suffix slot --><span class="el-input__suffix"
                    ><span class="el-input__suffix-inner"
                      ><i class="el-icon el-input__icon icon-arrow-down"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 1024 1024"
                        >
                          <path
                            fill="currentColor"
                            d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
                          ></path></svg></i
                      ><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--></span
                    ></span
                  >
                </div>
                <!-- append slot --><!--v-if-->
              </div>
              <div class="el-cascader__tags">
                <span
                  class="el-tag is-closable el-tag--info el-tag--default el-tag--light"
                  ><span class="el-tag__content"><span>Bet Count</span></span
                  ><i class="el-icon el-tag__close"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1024 1024"
                    >
                      <path
                        fill="currentColor"
                        d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
                      ></path></svg></i></span
                ><span class="el-tag el-tag--info el-tag--default el-tag--light"
                  ><span class="el-tag__content"
                    ><span class="el-tooltip__trigger">+ 12</span></span
                  ><!--v-if--></span
                ><!--v-if-->
              </div>
            </div>
          </div>
          <div class="box-operate-currency" style="">
            <div class="box-currency">
              <div class="el-dropdown">
                <button
                  aria-disabled="false"
                  type="button"
                  class="el-button el-tooltip__trigger"
                  id="el-id-4116-174"
                  role="button"
                  tabindex="0"
                  aria-controls="el-id-4116-175"
                  aria-expanded="false"
                  aria-haspopup="menu"
                >
                  <!--v-if--><span class=""
                    ><span class="el-dropdown-link box-currency-sum"
                      ><em>IDR</em
                      ><span class="negative-number"> (2,677.86) </span></span
                    ><i class="el-icon el-icon-arrow-down"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="currentColor"
                          d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
                        ></path></svg></i
                  ></span></button
                ><!--v-if-->
              </div>
            </div>
          </div>
        </div>
        <div class="box-data" disabled="false">
          <button
            aria-disabled="false"
            type="button"
            class="el-button btn--s btn--icon"
            style="margin-bottom: 10px"
          >
            <i class="el-icon"
              ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                <path
                  fill="currentColor"
                  d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
                ></path></svg></i
            ><span class="">View All</span></button
          ><!---->
          <div
            class="el-table--fit el-table--border el-table--group el-table--fluid-height el-table--scrollable-x el-table--scrollable-y el-table--enable-row-hover el-table--enable-row-transition has-footer el-table el-table--layout-fixed is-scrolling-left"
            data-prefix="el"
            id="dataTable"
            disabled="false"
            style="max-height: 70vh"
          >
            <div class="el-table__inner-wrapper" style="max-height: 70vh">
              <div class="hidden-columns">
                <div></div>
                <div>
                  <button
                    aria-disabled="true"
                    disabled=""
                    type="button"
                    class="el-button is-disabled btn--xs btn--icon"
                  >
                    <i class="el-icon"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="currentColor"
                          d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
                        ></path></svg></i
                    ><span class="">View</span>
                  </button>
                </div>
                <div><span></span></div>
                <!---->
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <!----><!----><!---->
                <div>
                  <!----><!---->
                  <div></div>
                </div>
              </div>
              <div class="el-table__header-wrapper">
                <table
                  class="el-table__header"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  style="width: 2179px"
                >
                  <colgroup>
                    <col name="el-table_9_column_73" width="-1" />
                    <col name="el-table_9_column_95" width="92" />
                    <col name="el-table_9_column_74" width="188" />
                    <col name="el-table_9_column_76" width="120" />
                    <col name="el-table_9_column_77" width="120" />
                    <col name="el-table_9_column_78" width="80" />
                    <col name="el-table_9_column_79" width="100" />
                    <col name="el-table_9_column_80" width="140" />
                    <col name="el-table_9_column_81" width="120" />
                    <col name="el-table_9_column_82" width="120" />
                    <col name="el-table_9_column_83" width="120" />
                    <col name="el-table_9_column_84_column_85" width="140" />
                    <col name="el-table_9_column_84_column_86" width="120" />
                    <col name="el-table_9_column_84_column_87" width="120" />
                    <col name="el-table_9_column_84_column_88" width="120" />
                    <col name="el-table_9_column_89_column_90" width="120" />
                    <col name="el-table_9_column_89_column_91" width="120" />
                    <col name="el-table_9_column_89_column_92" width="120" />
                    <col name="el-table_9_column_93_column_94" width="120" />
                  </colgroup>
                  <thead class="is-group">
                    <tr class="">
                      <th
                        class="el-table_9_column_73 is-leaf el-table__cell"
                        colspan="1"
                        rowspan="2"
                      >
                        <div class="cell"><!----><!----></div>
                      </th>
                      <th
                        class="el-table_9_column_95 is-leaf el-table__cell"
                        colspan="1"
                        rowspan="2"
                      >
                        <div class="cell">Player Summary<!----><!----></div>
                      </th>
                      <th
                        class="el-table_9_column_74 is-leaf el-table__cell"
                        colspan="1"
                        rowspan="2"
                      >
                        <div class="cell">User ID<!----><!----></div>
                      </th>
                      <th
                        class="el-table_9_column_76 is-leaf el-table__cell"
                        colspan="1"
                        rowspan="2"
                      >
                        <div class="cell">Platform<!----><!----></div>
                      </th>
                      <th
                        class="el-table_9_column_77 is-leaf el-table__cell"
                        colspan="1"
                        rowspan="2"
                      >
                        <div class="cell">Type<!----><!----></div>
                      </th>
                      <th
                        class="el-table_9_column_78 is-leaf el-table__cell"
                        colspan="1"
                        rowspan="2"
                      >
                        <div class="cell">Location<!----><!----></div>
                      </th>
                      <th
                        class="el-table_9_column_79 is-left is-leaf el-table__cell"
                        colspan="1"
                        rowspan="2"
                      >
                        <div class="cell">Bet Count<!----><!----></div>
                      </th>
                      <th
                        class="el-table_9_column_80 is-left is-leaf el-table__cell"
                        colspan="1"
                        rowspan="2"
                      >
                        <div class="cell">Valid Turnover<!----><!----></div>
                      </th>
                      <th
                        class="el-table_9_column_81 is-left is-leaf el-table__cell"
                        colspan="1"
                        rowspan="2"
                      >
                        <div class="cell">Bet Amount<!----><!----></div>
                      </th>
                      <th
                        class="el-table_9_column_82 is-left is-leaf el-table__cell"
                        colspan="1"
                        rowspan="2"
                      >
                        <div class="cell">Total Bet<!----><!----></div>
                      </th>
                      <th
                        class="el-table_9_column_83 is-left is-leaf el-table__cell"
                        colspan="1"
                        rowspan="2"
                      >
                        <div class="cell">Remark<!----><!----></div>
                      </th>
                      <th
                        class="el-table_9_column_84 header-level-border el-table__cell"
                        colspan="4"
                        rowspan="1"
                      >
                        <div class="cell">Player<!----><!----></div>
                      </th>
                      <th
                        class="el-table_9_column_89 header-level-border el-table__cell"
                        colspan="3"
                        rowspan="1"
                      >
                        <div class="cell">Agent<!----><!----></div>
                      </th>
                      <th
                        class="el-table_9_column_93 header-level-border el-table__cell"
                        colspan="1"
                        rowspan="1"
                      >
                        <div class="cell">Company<!----><!----></div>
                      </th>
                    </tr>
                    <tr class="">
                      <th
                        class="el-table_9_column_84_column_85 is-left is-leaf header-row-bottom header-level-border el-table__cell"
                        colspan="1"
                        rowspan="1"
                      >
                        <div class="cell">Player Win/Loss<!----><!----></div>
                      </th>
                      <th
                        class="el-table_9_column_84_column_86 is-left is-leaf header-row-bottom header-level-border el-table__cell"
                        colspan="1"
                        rowspan="1"
                      >
                        <div class="cell">Adjustment<!----><!----></div>
                      </th>
                      <th
                        class="el-table_9_column_84_column_87 is-left is-leaf header-row-bottom header-level-border el-table__cell"
                        colspan="1"
                        rowspan="1"
                      >
                        <div class="cell">Total P/L<!----><!----></div>
                      </th>
                      <th
                        class="el-table_9_column_84_column_88 is-left is-leaf header-row-bottom header-level-border el-table__cell"
                        colspan="1"
                        rowspan="1"
                      >
                        <div class="cell">Margin (%)<!----><!----></div>
                      </th>
                      <th
                        class="el-table_9_column_89_column_90 is-left is-leaf header-row-bottom header-level-border el-table__cell"
                        colspan="1"
                        rowspan="1"
                      >
                        <div class="cell">PT Win/Loss<!----><!----></div>
                      </th>
                      <th
                        class="el-table_9_column_89_column_91 is-left is-leaf header-row-bottom header-level-border el-table__cell"
                        colspan="1"
                        rowspan="1"
                      >
                        <div class="cell">Adjustment<!----><!----></div>
                      </th>
                      <th
                        class="el-table_9_column_89_column_92 is-left is-leaf header-row-bottom header-level-border el-table__cell"
                        colspan="1"
                        rowspan="1"
                      >
                        <div class="cell">Total P/L<!----><!----></div>
                      </th>
                      <th
                        class="el-table_9_column_93_column_94 is-left is-leaf header-row-bottom header-level-border el-table__cell"
                        colspan="1"
                        rowspan="1"
                      >
                        <div class="cell">Total P/L<!----><!----></div>
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div class="el-table__body-wrapper">
                <div class="el-scrollbar">
                  <div
                    class="el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
                    style="max-height: calc(-124px + 70vh)"
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
                        style="table-layout: fixed; width: 2179px"
                      >
                        <colgroup>
                          <col name="el-table_9_column_73" width="-1" />
                          <col name="el-table_9_column_95" width="92" />
                          <col name="el-table_9_column_74" width="188" />
                          <col name="el-table_9_column_76" width="120" />
                          <col name="el-table_9_column_77" width="120" />
                          <col name="el-table_9_column_78" width="80" />
                          <col name="el-table_9_column_79" width="100" />
                          <col name="el-table_9_column_80" width="140" />
                          <col name="el-table_9_column_81" width="120" />
                          <col name="el-table_9_column_82" width="120" />
                          <col name="el-table_9_column_83" width="120" />
                          <col
                            name="el-table_9_column_84_column_85"
                            width="140"
                          />
                          <col
                            name="el-table_9_column_84_column_86"
                            width="120"
                          />
                          <col
                            name="el-table_9_column_84_column_87"
                            width="120"
                          />
                          <col
                            name="el-table_9_column_84_column_88"
                            width="120"
                          />
                          <col
                            name="el-table_9_column_89_column_90"
                            width="120"
                          />
                          <col
                            name="el-table_9_column_89_column_91"
                            width="120"
                          />
                          <col
                            name="el-table_9_column_89_column_92"
                            width="120"
                          />
                          <col
                            name="el-table_9_column_93_column_94"
                            width="120"
                          />
                        </colgroup>
                        <!--v-if-->
                        <tbody>
                          <tr class="el-table__row">
                            <td
                              class="el-table_9_column_73 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell"><!----></div>
                            </td>
                            <td
                              class="el-table_9_column_95 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!----><button
                                  aria-disabled="false"
                                  type="button"
                                  class="el-button btn--xs btn--icon"
                                >
                                  <i class="el-icon"
                                    ><svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 1024 1024"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
                                      ></path></svg></i
                                  ><span class="">View</span>
                                </button>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_74 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!----><span>indwinnerag</span>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_76 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell"><!---->JDB</div>
                            </td>
                            <td
                              class="el-table_9_column_77 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell"><!---->SLOT</div>
                            </td>
                            <td
                              class="el-table_9_column_78 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell"><!----></div>
                            </td>
                            <td
                              class="el-table_9_column_79 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>1,284</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_80 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>2,489.60</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_81 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>2,489.60</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_82 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>2,489.60</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_83 is-left el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell"><!----></div>
                            </td>
                            <td
                              class="el-table_9_column_84_column_85 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>372.04</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_84_column_86 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!----><a class="is-zero"
                                  ><div><span>0</span></div></a
                                >
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_84_column_87 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>372.04</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_84_column_88 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>14.94 %</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_89_column_90 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>0</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_89_column_91 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>0</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_89_column_92 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>0</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_93_column_94 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div>
                                  <span class="negative-number">
                                    (372.04)
                                  </span>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="el-table__row">
                            <td
                              class="el-table_9_column_73 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell"><!----></div>
                            </td>
                            <td
                              class="el-table_9_column_95 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!----><button
                                  aria-disabled="false"
                                  type="button"
                                  class="el-button btn--xs btn--icon"
                                >
                                  <i class="el-icon"
                                    ><svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 1024 1024"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
                                      ></path></svg></i
                                  ><span class="">View</span>
                                </button>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_74 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!----><span>indwinnerag</span>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_76 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell"><!---->JDB</div>
                            </td>
                            <td
                              class="el-table_9_column_77 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell"><!---->FISH</div>
                            </td>
                            <td
                              class="el-table_9_column_78 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell"><!----></div>
                            </td>
                            <td
                              class="el-table_9_column_79 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>32</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_80 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>33.00</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_81 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>33.00</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_82 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>33.00</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_83 is-left el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell"><!----></div>
                            </td>
                            <td
                              class="el-table_9_column_84_column_85 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div>
                                  <span class="negative-number"> (16.00) </span>
                                </div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_84_column_86 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!----><a class="is-zero"
                                  ><div><span>0</span></div></a
                                >
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_84_column_87 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div>
                                  <span class="negative-number"> (16.00) </span>
                                </div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_84_column_88 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div>
                                  <span class="negative-number">
                                    (48.48 %)
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_89_column_90 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>0</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_89_column_91 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>0</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_89_column_92 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>0</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_93_column_94 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>16.00</span></div>
                              </div>
                            </td>
                          </tr>
                          <tr class="el-table__row">
                            <td
                              class="el-table_9_column_73 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell"><!----></div>
                            </td>
                            <td
                              class="el-table_9_column_95 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!----><button
                                  aria-disabled="false"
                                  type="button"
                                  class="el-button btn--xs btn--icon"
                                >
                                  <i class="el-icon"
                                    ><svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 1024 1024"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
                                      ></path></svg></i
                                  ><span class="">View</span>
                                </button>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_74 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!----><span>indwinnerag</span>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_76 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell"><!---->JILI</div>
                            </td>
                            <td
                              class="el-table_9_column_77 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell"><!---->TABLE</div>
                            </td>
                            <td
                              class="el-table_9_column_78 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell"><!----></div>
                            </td>
                            <td
                              class="el-table_9_column_79 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>13</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_80 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>2,660.00</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_81 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>2,660.00</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_82 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>2,660.00</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_83 is-left el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell"><!----></div>
                            </td>
                            <td
                              class="el-table_9_column_84_column_85 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div>
                                  <span class="negative-number">
                                    (272.00)
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_84_column_86 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!----><a class="is-zero"
                                  ><div><span>0</span></div></a
                                >
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_84_column_87 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div>
                                  <span class="negative-number">
                                    (272.00)
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_84_column_88 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div>
                                  <span class="negative-number">
                                    (10.23 %)
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_89_column_90 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>0</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_89_column_91 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>0</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_89_column_92 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>0</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_93_column_94 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>272.00</span></div>
                              </div>
                            </td>
                          </tr>
                          <tr class="el-table__row">
                            <td
                              class="el-table_9_column_73 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell"><!----></div>
                            </td>
                            <td
                              class="el-table_9_column_95 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!----><button
                                  aria-disabled="false"
                                  type="button"
                                  class="el-button btn--xs btn--icon"
                                >
                                  <i class="el-icon"
                                    ><svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 1024 1024"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
                                      ></path></svg></i
                                  ><span class="">View</span>
                                </button>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_74 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!----><span>indwinnerag</span>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_76 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell"><!---->JILI</div>
                            </td>
                            <td
                              class="el-table_9_column_77 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell"><!---->FISH</div>
                            </td>
                            <td
                              class="el-table_9_column_78 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell"><!----></div>
                            </td>
                            <td
                              class="el-table_9_column_79 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>2,011</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_80 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>5,476.30</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_81 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>5,476.30</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_82 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>5,476.30</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_83 is-left el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell"><!----></div>
                            </td>
                            <td
                              class="el-table_9_column_84_column_85 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div>
                                  <span class="negative-number">
                                    (376.90)
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_84_column_86 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!----><a class="is-zero"
                                  ><div><span>0</span></div></a
                                >
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_84_column_87 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div>
                                  <span class="negative-number">
                                    (376.90)
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_84_column_88 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div>
                                  <span class="negative-number">
                                    (6.88 %)
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_89_column_90 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>0</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_89_column_91 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>0</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_89_column_92 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>0</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_93_column_94 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>376.90</span></div>
                              </div>
                            </td>
                          </tr>
                          <tr class="el-table__row">
                            <td
                              class="el-table_9_column_73 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell"><!----></div>
                            </td>
                            <td
                              class="el-table_9_column_95 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!----><button
                                  aria-disabled="false"
                                  type="button"
                                  class="el-button btn--xs btn--icon"
                                >
                                  <i class="el-icon"
                                    ><svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 1024 1024"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
                                      ></path></svg></i
                                  ><span class="">View</span>
                                </button>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_74 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!----><span>indwinnerag</span>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_76 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell"><!---->JILI</div>
                            </td>
                            <td
                              class="el-table_9_column_77 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell"><!---->SLOT</div>
                            </td>
                            <td
                              class="el-table_9_column_78 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell"><!----></div>
                            </td>
                            <td
                              class="el-table_9_column_79 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>2,962</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_80 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>6,593.40</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_81 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>6,593.40</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_82 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>6,593.40</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_83 is-left el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell"><!----></div>
                            </td>
                            <td
                              class="el-table_9_column_84_column_85 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div>
                                  <span class="negative-number">
                                    (1,074.67)
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_84_column_86 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!----><a class="is-zero"
                                  ><div><span>0</span></div></a
                                >
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_84_column_87 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div>
                                  <span class="negative-number">
                                    (1,074.67)
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_84_column_88 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div>
                                  <span class="negative-number">
                                    (16.30 %)
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_89_column_90 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>0</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_89_column_91 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>0</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_89_column_92 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>0</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_93_column_94 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>1,074.67</span></div>
                              </div>
                            </td>
                          </tr>
                          <tr class="el-table__row">
                            <td
                              class="el-table_9_column_73 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell"><!----></div>
                            </td>
                            <td
                              class="el-table_9_column_95 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!----><button
                                  aria-disabled="false"
                                  type="button"
                                  class="el-button btn--xs btn--icon"
                                >
                                  <i class="el-icon"
                                    ><svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 1024 1024"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
                                      ></path></svg></i
                                  ><span class="">View</span>
                                </button>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_74 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!----><span>indwinnerag</span>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_76 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell"><!---->PP</div>
                            </td>
                            <td
                              class="el-table_9_column_77 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell"><!---->SLOT</div>
                            </td>
                            <td
                              class="el-table_9_column_78 el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell"><!----></div>
                            </td>
                            <td
                              class="el-table_9_column_79 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>8,566</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_80 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>7,157.05</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_81 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>7,157.05</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_82 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>7,157.05</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_83 is-left el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell"><!----></div>
                            </td>
                            <td
                              class="el-table_9_column_84_column_85 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div>
                                  <span class="negative-number">
                                    (1,310.34)
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_84_column_86 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!----><a class="is-zero"
                                  ><div><span>0</span></div></a
                                >
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_84_column_87 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div>
                                  <span class="negative-number">
                                    (1,310.34)
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_84_column_88 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div>
                                  <span class="negative-number">
                                    (18.31 %)
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_89_column_90 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>0</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_89_column_91 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>0</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_89_column_92 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>0</span></div>
                              </div>
                            </td>
                            <td
                              class="el-table_9_column_93_column_94 is-right el-table__cell"
                              rowspan="1"
                              colspan="1"
                            >
                              <div class="cell">
                                <!---->
                                <div><span>1,310.34</span></div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <!--v-if--><!--v-if-->
                    </div>
                  </div>
                  <div class="el-scrollbar__bar is-horizontal">
                    <div
                      class="el-scrollbar__thumb"
                      style="transform: translateX(0%); width: 529.117px"
                    ></div>
                  </div>
                  <div class="el-scrollbar__bar is-vertical">
                    <div
                      class="el-scrollbar__thumb"
                      style="transform: translateY(0%); height: 55.7279px"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="el-table__footer-wrapper" style="">
                <table
                  class="el-table__footer"
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  style="width: 2179px"
                >
                  <colgroup>
                    <col name="el-table_9_column_73" width="-1" />
                    <col name="el-table_9_column_95" width="92" />
                    <col name="el-table_9_column_74" width="188" />
                    <col name="el-table_9_column_76" width="120" />
                    <col name="el-table_9_column_77" width="120" />
                    <col name="el-table_9_column_78" width="80" />
                    <col name="el-table_9_column_79" width="100" />
                    <col name="el-table_9_column_80" width="140" />
                    <col name="el-table_9_column_81" width="120" />
                    <col name="el-table_9_column_82" width="120" />
                    <col name="el-table_9_column_83" width="120" />
                    <col name="el-table_9_column_84_column_85" width="140" />
                    <col name="el-table_9_column_84_column_86" width="120" />
                    <col name="el-table_9_column_84_column_87" width="120" />
                    <col name="el-table_9_column_84_column_88" width="120" />
                    <col name="el-table_9_column_89_column_90" width="120" />
                    <col name="el-table_9_column_89_column_91" width="120" />
                    <col name="el-table_9_column_89_column_92" width="120" />
                    <col name="el-table_9_column_93_column_94" width="120" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <td
                        colspan="1"
                        rowspan="2"
                        class="el-table__cell el-table_9_column_73 is-leaf"
                      >
                        <div class="cell"></div>
                      </td>
                      <td
                        colspan="1"
                        rowspan="2"
                        class="el-table__cell el-table_9_column_95 is-leaf"
                      >
                        <div class="cell">Total</div>
                      </td>
                      <td
                        colspan="1"
                        rowspan="2"
                        class="el-table__cell el-table_9_column_74 is-leaf"
                      >
                        <div class="cell"></div>
                      </td>
                      <td
                        colspan="1"
                        rowspan="2"
                        class="el-table__cell el-table_9_column_76 is-leaf"
                      >
                        <div class="cell"></div>
                      </td>
                      <td
                        colspan="1"
                        rowspan="2"
                        class="el-table__cell el-table_9_column_77 is-leaf"
                      >
                        <div class="cell"></div>
                      </td>
                      <td
                        colspan="1"
                        rowspan="2"
                        class="el-table__cell el-table_9_column_78 is-leaf"
                      >
                        <div class="cell"></div>
                      </td>
                      <td
                        colspan="1"
                        rowspan="2"
                        class="el-table__cell el-table_9_column_79 is-right is-leaf"
                      >
                        <div class="cell">14,868</div>
                      </td>
                      <td
                        colspan="1"
                        rowspan="2"
                        class="el-table__cell el-table_9_column_80 is-right is-leaf"
                      >
                        <div class="cell">24,409.35</div>
                      </td>
                      <td
                        colspan="1"
                        rowspan="2"
                        class="el-table__cell el-table_9_column_81 is-right is-leaf"
                      >
                        <div class="cell">24,409.35</div>
                      </td>
                      <td
                        colspan="1"
                        rowspan="2"
                        class="el-table__cell el-table_9_column_82 is-right is-leaf"
                      >
                        <div class="cell">24,409.35</div>
                      </td>
                      <td
                        colspan="1"
                        rowspan="2"
                        class="el-table__cell el-table_9_column_83 is-left is-leaf"
                      >
                        <div class="cell">0</div>
                      </td>
                      <td
                        colspan="1"
                        rowspan="1"
                        class="el-table__cell el-table_9_column_84_column_85 is-right is-leaf"
                      >
                        <div class="cell">
                          <div class="negative-number">(2,677.87)</div>
                        </div>
                      </td>
                      <td
                        colspan="1"
                        rowspan="1"
                        class="el-table__cell el-table_9_column_84_column_86 is-right is-leaf"
                      >
                        <div class="cell">0</div>
                      </td>
                      <td
                        colspan="1"
                        rowspan="1"
                        class="el-table__cell el-table_9_column_84_column_87 is-right is-leaf"
                      >
                        <div class="cell">
                          <div class="negative-number">(2,677.87)</div>
                        </div>
                      </td>
                      <td
                        colspan="1"
                        rowspan="1"
                        class="el-table__cell el-table_9_column_84_column_88 is-right is-leaf"
                      >
                        <div class="cell">
                          <div class="negative-number">(10.97 %)</div>
                        </div>
                      </td>
                      <td
                        colspan="1"
                        rowspan="1"
                        class="el-table__cell el-table_9_column_89_column_90 is-right is-leaf"
                      >
                        <div class="cell">0</div>
                      </td>
                      <td
                        colspan="1"
                        rowspan="1"
                        class="el-table__cell el-table_9_column_89_column_91 is-right is-leaf"
                      >
                        <div class="cell">0</div>
                      </td>
                      <td
                        colspan="1"
                        rowspan="1"
                        class="el-table__cell el-table_9_column_89_column_92 is-right is-leaf"
                      >
                        <div class="cell">0</div>
                      </td>
                      <td
                        colspan="1"
                        rowspan="1"
                        class="el-table__cell el-table_9_column_93_column_94 is-right is-leaf"
                      >
                        <div class="cell">2,677.87</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="el-table__border-left-patch"></div>
            </div>
            <div
              class="el-table__column-resize-proxy"
              style="display: none"
            ></div>
          </div>
          <div class="grandTotalTable">
            <div id="grandTotalTitleArea" style="display: none">
              Grand Total (IDR)
            </div>
            <div
              class="el-table--fit el-table--scrollable-x el-table--enable-row-hover el-table el-table--layout-fixed row-grandtotal is-scrolling-left"
              data-prefix="el"
              id="grandTotalTable"
            >
              <div class="el-table__inner-wrapper">
                <div class="hidden-columns">
                  <!---->
                  <div></div>
                  <div></div>
                  <!---->
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <!----><!----><!---->
                  <div>
                    <!----><!---->
                    <div></div>
                  </div>
                </div>
                <!--v-if-->
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
                          style="table-layout: fixed; width: 2180px"
                        >
                          <colgroup>
                            <col name="el-table_10_column_96" />
                            <col name="el-table_10_column_97" />
                            <col name="el-table_10_column_98" />
                            <col name="el-table_10_column_99" />
                            <col name="el-table_10_column_100" />
                            <col name="el-table_10_column_101" />
                            <col name="el-table_10_column_102" />
                            <col name="el-table_10_column_103" />
                            <col name="el-table_10_column_104" />
                            <col name="el-table_10_column_105" />
                            <col name="el-table_10_column_106_column_107" />
                            <col name="el-table_10_column_106_column_108" />
                            <col name="el-table_10_column_106_column_109" />
                            <col name="el-table_10_column_106_column_110" />
                            <col name="el-table_10_column_111_column_112" />
                            <col name="el-table_10_column_111_column_113" />
                            <col name="el-table_10_column_111_column_114" />
                            <col name="el-table_10_column_115_column_116" />
                          </colgroup>
                          <!--v-if-->
                          <tbody></tbody>
                        </table>
                        <div
                          class="el-table__empty-block"
                          style="height: 100%; width: 1080px"
                        >
                          <span class="el-table__empty-text"
                            ><div class="grandTotalBtn">
                              <div>
                                <span>Grand Total (IDR)</span><button>+</button>
                              </div>
                              <div
                                class="lds-spinner grandTotalLoading"
                                style="transform: scale(0.3); display: none"
                              >
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                              </div></div
                          ></span>
                        </div>
                        <!--v-if-->
                      </div>
                    </div>
                    <div class="el-scrollbar__bar is-horizontal">
                      <div
                        class="el-scrollbar__thumb"
                        style="transform: translateX(0%); width: 529.117px"
                      ></div>
                    </div>
                    <div class="el-scrollbar__bar is-vertical">
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
        <div class="el-pagination is-background">
          <button
            type="button"
            class="btn-prev is-first"
            disabled=""
            aria-label="Go to previous page"
            aria-disabled="true"
          >
            <i class="el-icon"
              ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
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
              ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                <path
                  fill="currentColor"
                  d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
                ></path></svg
            ></i>
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "WinLossReport",
};
</script>
