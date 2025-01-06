<template>
    <div class="wrapper">
        <main :class="[!isSidebarOpen ? 'el-main isExtend' : 'el-main']">
            <h1>Account Summary<span></span></h1>
            <div class="box">

                <Customfilter :filterButton="filterButton" :form="form" :timeZones="timeZones"
                    :platformOption="platformOptions" :typeOptions="typeOptions" :currency="currency"
                    @filterSubmit="applyFilters" :isUserId="isUserId" :isType="isType" :isCurrency="isCurrency"
                    :isPlatform="isPlatform" :isPlayerId="isPlayerId" />
            </div>

            <div v-for="(curr, index) in filteredReportData" :key="index" class="box">
                <template v-if="curr.data && curr.data.length > 0">
                    <!-- Render the table if there is data -->
                    <TableComp :headers="headersKeys" :reportData="curr.data" :showActions="isActionEnabled" />
                </template>

            </div>

            <div class="box">

                <TableComp :headers="headersKeys" :reportData="filteredReportData" :showActions="isActionEnabled" />
            </div>

        </main>
    </div>
</template>

<script>
import TableComp from "../common/Customtable.vue";
import Customfilter from "../common/Customfilter.vue";
export default {
    name: "AccountStatement",
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
            filteredReportData: [],
            isActionEnabled: false,
            isUserId: false,
            isType: true,
            isCurrency: false,
            isLocation: false,
            isPlatform: false,
            isPlayerId: true,
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

            typeOptions: [
                { "value": "ALL", "label": "ALL" },
                { "value": "CANCEL", "label": "CANCEL" },
                { "value": "BET", "label": "BET" },
                { "value": "SETTLE", "label": "SETTLE" },
                { "value": "UNSETTLE", "label": "UNSETTLE" },
                { "value": "VOID", "label": "VOID" },
                { "value": "UNVOID", "label": "UNVOID" },
                { "value": "BET_ADJUST", "label": "BET_ADJUST" },
                { "value": "REFUND", "label": "REFUND" },
                { "value": "TRANSFER_OUT", "label": "TRANSFER_OUT" },
                { "value": "TRANSFER_IN", "label": "TRANSFER_IN" },
                { "value": "PLATFORM_DEDUCT", "label": "PLATFORM_DEDUCT" },
                { "value": "PLATFORM_CREDIT", "label": "PLATFORM_CREDIT" },
                { "value": "BET_AND_SETTLE", "label": "BET_AND_SETTLE" },
                { "value": "CANCEL_BET_AND_SETTLE", "label": "CANCEL_BET_AND_SETTLE" },
                { "value": "RESETTLE", "label": "RESETTLE" },
                { "value": "PROMOTION_BONUS", "label": "PROMOTION_BONUS" },
                { "value": "ADJUST_AMOUNT", "label": "ADJUST_AMOUNT" },
                { "value": "CANCEL_ADJUST_AMOUNT", "label": "CANCEL_ADJUST_AMOUNT" },
                { "value": "STREAMER_TIP", "label": "STREAMER_TIP" },
                { "value": "CANCEL_STREAMER_TIP", "label": "CANCEL_STREAMER_TIP" },
                { "value": "BONUS_SETTLE", "label": "BONUS_SETTLE" },
                { "value": "DEALER_TIP", "label": "DEALER_TIP" },
                { "value": "CANCEL_DEALER_TIP", "label": "CANCEL_DEALER_TIP" },
                { "value": "JACKPOT_WIN", "label": "JACKPOT_WIN" },
                { "value": "BONUS_TRANSFER_MAIN_WALLET", "label": "BONUS_TRANSFER_MAIN_WALLET" }
            ],

            currency: [
                { value: "IDR", label: "IDR" },
                { value: "INR", label: "INR" },
                { value: "KES", label: "KES" },
                { value: "MXN", label: "MXN" },
                { value: "PHP", label: "PHP" }
            ],
            headersKeys: [
                { "title": "Player ID", "prop": "playerId" },
                { "title": "Currency", "prop": "currency" },
                { "title": "Debit", "prop": "debit" },
                { "title": "Credit", "prop": "credit" },
                { "title": "Before Balance", "prop": "beforeBalance" },
                { "title": "After Balance", "prop": "afterBalance" },
                { "title": "Date and Time", "prop": "dateAndTime" },
                { "title": "Type", "prop": "type" },
                { "title": "Request ID", "prop": "requestId" },

            ],
            reportData: [],
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
