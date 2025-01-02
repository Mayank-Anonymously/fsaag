<template>
  <section class="el-container is-vertical">
    <Header />
    <section class="el-container">
      <SideBar
        :is-sidebar-open="isSidebarOpen"
        @toggle-sidebar="toggleSidebar"
      />
      <Member :is-sidebar-open="isSidebarOpen" />
    </section>
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import Member from "@/components/Member.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
  data() {
    return {
      isSidebarOpen: true, // Initial sidebar state
    };
  },

  components: {
    Header,
    SideBar,
    Member,
  },
};
</script>
