<template>
    <div class="wrapper">
        <main :class="[!isSidebarOpen ? 'el-main isExtend' : 'el-main']">
            <h1>By Game Ground Report<span></span></h1>
            <div class="box">

                <Customfilter :filterButton="filterButton" :form="form" :timeZones="timeZones"
                    :platformOption="platformOptions" :gameType="gameType" :currency="currency"
                    :isPlatformTxID="isPlatformTxID" :isAgentId="isAgentId" :isPrefixEnabled="isPrefixEnabled"
                    :isPlayerId="isPlayerId" :isCurrency="isCurrency" :isRoundId="isRoundId"
                    :refPlatformTxId="refPlatformTxId" :isType="isType" />
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
            isType: false,
            refPlatformTxId: true,
            isActionEnabled: false,
            isAgentId: false,
            isPrefixEnabled: false,
            isPlayerId: false,
            isPlatformTxID: false,
            isRoundId: true,
            isCurrency: false,
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
            gameType: [
                { value: "EGAME", label: "EGAME" },
                { value: "FH", label: "FH" },
                { value: "LIVE", label: "LIVE" },
                { value: "SLOT", label: "SLOT" },
                { value: "TABLE", label: "TABLE" }
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
                { title: "RefPlatformTxId", prop: "refPlatformTxId" },
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
