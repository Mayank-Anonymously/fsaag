<template>
    <section class="el-container is-vertical">
        <Header />
        <section class="el-container">
            <SideBar :is-sidebar-open="isSidebarOpen" @toggle-sidebar="toggleSidebar" />
            <ByGameGroundReport :is-sidebar-open="isSidebarOpen" />
        </section>
    </section>
</template>

<script>
import Header from "@/components/Header.vue";
import MyProfile from "@/components/MyProfile.vue";
import SideBar from "@/components/SideBar.vue";
import ByGameGroundReport from "@/components/transactionComps/ByGameGroundReport.vue";

export default {
    methods: {
        logout() {
            localStorage.removeItem("authToken");
            this.$router.push("/login");
        },
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
        MyProfile,
        ByGameGroundReport
    },
};
</script>
