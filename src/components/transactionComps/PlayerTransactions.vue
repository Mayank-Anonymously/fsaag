<template>
    <div class="wrapper">
        <main :class="[!isSidebarOpen ? 'el-main isExtend' : 'el-main']">
            <!-- <main class="el-main"> -->
            <h1>Player Transactions<span></span></h1>
            <div class="box">

                <Customfilter :filterButton="filterButton" :form="form" :timeZones="timeZones"
                    :platformOption="platformOptions" :typeOptions="typeOptions" :currency="currency"
                    :isPlatformTxID="isPlatformTxID" :isPlayerId="isPlayerId" :isAgentId="isAgentId"
                    :isPrefixEnabled="isPrefixEnabled" :isCurrency="isCurrency" :isType="isType"
                    :isGameName="isGameName" />
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
            isActionEnabled: true,
            isAgentId: false,
            isPrefixEnabled: false,
            isPlayerId: true,
            isPlatformTxID: true,
            isType: true,
            isCurrency: false,
            isGameName: true,
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
                { title: "No.", prop: "No." },
                { title: "Currency", prop: "currency" },
                { title: "Player ID", prop: "playerID" },
                { title: "Platform txID", prop: "platformTxID" },
                { title: "RoundId", prop: "roundId" },
                { title: "Time", prop: "time" },
                { title: "Platform", prop: "platform" },
                { title: "Type", prop: "type" },
                { title: "Game Name", prop: "gameName" },
                { title: "Game Info", prop: "gameInfo" },
                { title: "Bet Type", prop: "betType" },
                { title: "Odds", prop: "odds" },
                { title: "Status", prop: "status" },
                { title: "Valid Turnover", prop: "validTurnover" },
                { title: "Bet Amount", prop: "betAmount" },
                { title: "Win Amount", prop: "winAmount" },
                { title: "PlayerWL", prop: "PlayerWL" },
                { title: "Device", prop: "device" },
                { title: "BetIP", prop: "betIP" },

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
