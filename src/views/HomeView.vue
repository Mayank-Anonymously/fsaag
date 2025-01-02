<template>
  <div class="wrapper login-wrapper">
    <div class="parttern"></div>
    <div class="particle">
      <div class="particle-light"></div>
      <div class="particle-light"></div>
      <div class="particle-light"></div>
      <div class="particle-light"></div>
      <div class="particle-light"></div>
    </div>
    <div class="frame">
      <div class="el-card is-never-shadow login">
        <!--v-if-->
        <div class="el-card__body" style="">
          <div class="login-logo">
            <img
              src="https://fsaag.velkigames365.cc/assets/logo-awc-1e540571.png"
            />
          </div>
          <form
            @submit.prevent="handleLogin"
            class="el-form el-form--default el-form--label-right"
          >
            <div class="el-form-item is-required is-no-asterisk asterisk-left">
              <!--v-if-->
              <div class="el-form-item__content">
                <div class="el-input">
                  <!-- input --><!-- prepend slot --><!--v-if-->
                  <div class="el-input__wrapper">
                    <!-- prefix slot --><!--v-if--><input
                      class="el-input__inner"
                      modelmodifiers="[object Object]"
                      maxlength="40"
                      type="text"
                      autocomplete="off"
                      tabindex="0"
                      placeholder="User ID"
                      id="el-id-2711-3"
                    /><!-- suffix slot --><!--v-if-->
                  </div>
                  <!-- append slot --><!--v-if-->
                </div>
              </div>
            </div>
            <div class="el-form-item is-required is-no-asterisk asterisk-left">
              <!--v-if-->
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
                      placeholder="Password"
                      id="el-id-2711-4"
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
            <div class="el-form-item is-no-asterisk asterisk-left">
              <!--v-if-->
              <div class="el-form-item__content">
                <button
                  aria-disabled="false"
                  type="submit"
                  class="el-button submit"
                >
                  <!--v-if--><span class="">Log In</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      console.log("User ID:", this.userId, "Password:", this.password);
      localStorage.setItem("authToken", true);
      this.$router.push("/dashboard");
    },
  },
};
</script>
