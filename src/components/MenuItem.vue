<template>
  <li class="el-menu-item" :class="{ 'is-active': isActive }">
    <div v-if="menu.subMenu" class="el-sub-menu__title" @click="toggleMenu">
      <span>{{ menu.name }}</span>
      <i
        class="el-icon el-icon-caret-right"
        :style="{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }"
      ></i>
    </div>
    <ul v-if="menu.subMenu && isOpen" class="el-menu el-menu--inline">
      <MenuItem v-for="(sub, index) in menu.subMenu" :key="index" :menu="sub" />
    </ul>
    <a v-else :href="menu.link">{{ menu.name }}</a>
  </li>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    menu: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    isActive() {
      return this.menu.isActive || false;
    },
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.el-menu-item {
  list-style: none;
  padding: 10px;
}
.el-sub-menu__title {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
