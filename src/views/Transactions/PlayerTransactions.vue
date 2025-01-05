<template>
    <section class="el-container is-vertical">
        <Header />
        <section class="el-container">
            <SideBar :is-sidebar-open="isSidebarOpen" @toggle-sidebar="toggleSidebar" />
            <PlayerTransactions />
        </section>
    </section>
</template>

<script>
import Header from "@/components/Header.vue";
import MyProfile from "@/components/MyProfile.vue";
import SideBar from "@/components/SideBar.vue";
import PlayerTransactions from "@/components/transactionComps/PlayerTransactions.vue";

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
        PlayerTransactions
    },
};
</script>
