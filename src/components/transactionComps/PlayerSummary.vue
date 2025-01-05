<template>
    <div class="wrapper">
        <!-- <main :class="[!isSidebarOpen ? 'el-main isExtend' : 'el-main']"> -->
        <main class="el-main">
            <h1>Player Summary<span></span></h1>
            <div class="box">

                <Customfilter :filterButton="filterButton" :form="form" :timeZones="timeZones"
                    :platformOption="platformOptions" :typeOptions="typeOptions" :currency="currency"
                    :isPrefixEnabled="isPrefixEnabled" :isPlayerId="isPlayerId" :isAgentId="isAgentId" />
            </div>
            <div class="box">
                <TableComp :headers="headersKeys" :reportData="reportData" :showActions="isActionEnabled" />


            </div>
        </main>
    </div>
</template>

<script>
import TableComp from "../common/Customtable.vue";
import Customfilter from "../common/Customfilter.vue";

export default {
    name: "PlayerSummary",
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
            isUserId: false,
            isActionEnabled: false,
            isPrefixEnabled: true,
            isPlayerId: true,
            isAgentId: true,
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
                {
                    value: 'AWC_PROMOTION',
                    label: 'AWC_PROMOTION',
                },
                {
                    value: 'FREE_GAME',
                    label: 'FREE_GAME',
                },
                {
                    value: 'GP_PROMOTION',
                    label: 'GP_PROMOTION',
                },
                {
                    value: 'JACKPOT_WIN',
                    label: 'JACKPOT_WIN',
                },
                {
                    value: 'COMMISSION',
                    label: 'EGAME',
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
                {
                    title: "PlayerId", prop: "playerId"
                },
                {
                    title: "Platform", prop: "platform"
                },
                {
                    title: "Bet Amount", prop: "betAmount"
                },
                {
                    title: "Valid Turnover", prop: "validTurnover"
                },
                {
                    title: "Win Amount", prop: "winAmount"
                },
                {
                    title: "Player Win/Loss", prop: "playerPL"
                },
                {
                    title: "Adjustment",
                    prop: "adjustment",
                },
                {
                    title: "Total P/L",
                    prop: "totalPL",
                },

            ],
            reportData: [],
        };
    },
    methods: {
        handleButtonClick(row) {
            console.log("Button clicked for:", row);
            alert(`Button clicked for User ID: ${row.userID}`);
        },
    },
};
</script>
