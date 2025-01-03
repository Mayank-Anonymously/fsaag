<template>
    <div class="wrapper">
        <main class="el-main">
            <h1>Player Summary<span></span></h1>
            <div class="box">

                <Customfilter :filterButton="filterButton" :form="form" :timeZones="timeZones"
                    :platformOption="platformOptions" :typeOptions="typeOptions" :currency="currency" />
            </div>
            <div class="box">
                <TableComp :headers="headersKeys" :reportData="reportData" :showActions="isActionEnabled" />


            </div>
        </main>
    </div>
</template>

<script>
import TableComp from "../common/Customtable.vue";
import winloss from "../../utils/winLossSummary/winloss.json";
import Customfilter from "../common/Customfilter.vue";
export default {
    name: "PlayerSummary",
    components: {
        TableComp,
        Customfilter
    },
    data() {
        return {
            isActionEnabled: true,
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
                { title: "User  ID", prop: "userID" },
                { title: "Platform", prop: "platform" },
                { title: "Type", prop: "type" },
                { title: "Location", prop: "location" },
                { title: "Bet Count", prop: "betCount" },
                { title: "Valid Turnover", prop: "validTurnover" },
                { title: "Bet Amount", prop: "betAmount" },
                { title: "Total Bet", prop: "totlBet" },
                { title: "Remark", prop: "remark" },
                {
                    title: "Player",
                    subHeaders: [
                        { title: "Win Loss", prop: "Player.playerWinLoss" },
                        { title: "Adjustment", prop: "Player.adjustment" },
                        { title: "Total PL", prop: "Player.totalPL" },
                        { title: "Margin", prop: "Player.margin" },
                    ],
                },
                {
                    title: "Agent",
                    subHeaders: [
                        { title: "Win Loss", prop: "Agent.ptWinLoss" },
                        { title: "Adjustment", prop: "Agent.Adjustment" },
                        { title: "Total PL", prop: "Agent.totalPL" },
                    ],
                },
                {
                    title: "Company",
                    subHeaders: [{ title: "Company Total PL", prop: "Company.totalPL" }],
                },
            ],
            reportData: winloss,
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
