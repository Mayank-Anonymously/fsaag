<template>
    <div class="wrapper">
        <main :class="[!isSidebarOpen ? 'el-main isExtend' : 'el-main']">
            <h1>Adjustment Detail <span></span></h1>
            <div class="box">
                <Customfilter :filterButton="filterButton" :form="form" :timeZones="timeZones"
                    :platformOption="platformOptions" :typeOptions="typeOptions" :currency="currency"
                    @filterSubmit="applyFilters" :isCurrency="isCurrency" :isUserId="isUserId" :isType="isType" />
            </div>

            <div v-for="(curr, index) in filteredReportData" :key="index" class="box">
                <template v-if="curr.data && curr.data.length > 0">
                    <!-- Render the table if there is data -->
                    <TableComp :headers="headersKeys" :reportData="curr.data" :showActions="isActionEnabled" />
                </template>
                <template v-else>
                    <!-- Render a message or placeholder if there is no data -->
                    <div class="no-data-message box">
                        No Data Available
                    </div>
                </template>
            </div>
        </main>
    </div>
</template>

<script>
import TableComp from "../components/common/Customtable.vue";
import adjustment from "../utils/AdjustmentDetails/adjustment.json"; // Assuming this is your data source
import Customfilter from "./common/Customfilter.vue";

export default {
    name: "AdjustmentDetails",
    components: {
        TableComp,
        Customfilter
    },
    props: {
        isSidebarOpen: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            isCurrency: true,
            isType: true,
            isUserId: true,
            isActionEnabled: false,
            filteredReportData: [], // Filtered data
            reportData: adjustment, // Original data
            emittedFilterCriteria: null,
            filterButton: [
                "Last Month",
                "This Month",
                "Last Week",
                "This Week",
                "Yesterday",
                "Today",
            ],
            form: {
                dateRange: [],
                timeZone: null,
                platform: null,
                type: null,
                location: '',
                currency: null, // Changed to null for clarity
                selectedFilters: [],
            },
            timeZones: [
                { value: 'GMT', label: 'GMT' },
                { value: 'UTC', label: 'UTC' },
                { value: 'CET', label: 'CET' },
            ],
            platformOptions: [
                { value: 'JDB', label: 'JDB' },
                { value: 'JILI', label: 'JILI' },
                { value: 'PP', label: 'PP' },
                { value: 'SPRIBE', label: 'SPRIBE' },
            ],
            typeOptions: [
                { value: 'AWC_PROMOTION', label: 'AWC_PROMOTION' },
                { value: 'FREE_GAME', label: 'FREE_GAME' },
                { value: 'GP_PROMOTION', label: 'GP_PROMOTION' },
                { value: 'JACKPOT_WIN', label: 'JACKPOT_WIN' },
                { value: 'COMMISSION', label: 'EGAME' },
            ],
            currency: [
                { value: "IDR", label: "IDR" },
                { value: "INR", label: "INR" },
                { value: "KES", label: "KES" },
                { value: "MXN", label: "MXN" },
                { value: "PHP", label: "PHP" }
            ],
            headersKeys: [
                { title: "User ID", prop: "userId" },
                { title: "User Name", prop: "userName" },
                { title: "Platform", prop: "platform" },
                { title: "Game type", prop: "gameType" },
                { title: "Adjustment types", prop: "adjustmentTypes" },
                { title: "items", prop: "items" },
                {
                    title: "Adjustment",
                    subHeaders: [
                        { title: "Player", prop: "Adjustment.player" },
                        { title: "Adjustment", prop: "Adjustment.agent" },
                        { title: "Company", prop: "Adjustment.company" },
                    ],
                },

            ],
        };
    },
    created() {
        this.filteredReportData = this.reportData; // Initialize filtered data with all data
    },
    methods: {
        applyFilters(filterCriteria) {
            this.emittedFilterCriteria = filterCriteria; // Store the emitted criteria
            console.log("applyFilters called with:", !filterCriteria.currency ? "yes" : "no"); // Debugging line

            if (filterCriteria.currency) {
                this.filteredReportData = this.reportData.filter((data) => data.currency == filterCriteria.currency); // Reset to all data if no currency is selected

                return;
            }

            const relevantData = this.reportData.filter(item => item.currency === filterCriteria.currency);
            this.filteredReportData = relevantData.filter(item => {
                const matchesTimeZone = filterCriteria.timeZone ? item.timeZone === filterCriteria.timeZone : true;
                const matchesPlatform = filterCriteria.platform ? item.platform === filterCriteria.platform : true;
                const matchesType = filterCriteria.type ? item.type === filterCriteria.type : true;
                const matchesDateRange = this.checkDateRange(item.date, filterCriteria.dateRange);
                return matchesTimeZone && matchesPlatform && matchesType && matchesDateRange;
            });
        },
        checkDateRange(itemDate, dateRange) {
            if (!dateRange || dateRange.length !== 2) return true;
            const [startDate, endDate] = dateRange; nom
            return new Date(itemDate) >= new Date(startDate) && new Date(itemDate) <= new Date(endDate);
        },
    },
};
</script>