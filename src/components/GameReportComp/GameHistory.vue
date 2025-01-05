<template>
    <div class="wrapper">
        <main :class="[!isSidebarOpen ? 'el-main isExtend' : 'el-main']">
            <h1>Game Report<span></span></h1>
            <div class="box">

                <Customfilter :filterButton="filterButton" :form="form" :timeZones="timeZones"
                    :platformOption="platformOptions" :typeOptions="typeOptions" :currency="currency"
                    @filterSubmit="applyFilters" :isUserId="isUserId" :isType="isType" :isCurrency="isCurrency" />
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
import TableComp from "../common/Customtable.vue";
import gamesummary from "../../utils/GameReport/gamesummary.json";
import Customfilter from "../common/Customfilter.vue";
export default {
    name: "PlayerSummary",
    components: {
        TableComp,
        Customfilter
    }, props: {
        isSidebarOpen: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            isActionEnabled: false,
            isUserId: false,
            isLocation: false,
            isType: true,
            isCurrency: true,
            filterButton: [
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
            },
            timeZones: [
                { value: 'GMT', label: 'GMT' },
                { value: 'UTC', label: 'UTC' },
                { value: 'CET', label: 'CET' },
            ],
            platformOptions: [
                {
                    value: 'JDB',
                    label: 'JDB',
                },
                {
                    value: 'JILI',
                    label: 'JILI',
                },
                {
                    value: 'PP',
                    label: 'PP',
                },
                {
                    value: 'SPRIBE',
                    label: 'SPRIBE',
                },
            ],

            currency: [
                { value: "IDR", label: "IDR" },
                { value: "INR", label: "INR" },
                { value: "KES", label: "KES" },
                { value: "MXN", label: "MXN" },
                { value: "PHP", label: "PHP" }
            ],
            headersKeys: [
                { title: "Game Type", prop: "gameType" },
                { title: "Platform", prop: "platform" },
                { title: "Bet Count", prop: "betCount" },
                { title: "Valid Turnover", prop: "validTurnover" },
                { title: "Bet Amount", prop: "betAmount" },
                { title: "Win Amount", prop: "winAmount" },
                { title: "Total Bet", prop: "totlBet" },
                {
                    title: "Player",
                    subHeaders: [
                        { title: "Win Loss", prop: "Player.amount" },
                        { title: "Adjustment", prop: "Player.percentage" },
                    ],
                },

            ],
            reportData: gamesummary,
        };
    },
    methods: {
        applyFilters(filterCriteria) {
            this.emittedFilterCriteria = filterCriteria; // Store the emitted criteria
            console.log("applyFilters called with:", !filterCriteria.currency ? "yes" : "no"); // Debugging line

            if (filterCriteria.currency) {
                this.filteredReportData = this.reportData.filter((data) => data.currency == filterCriteria.currency); // Reset to all data if no currency is selected

                console.log("this.filteredReportData:", this.filteredReportData)
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
