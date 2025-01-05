<template>
  <div class="wrapper">
    <main :class="[!isSidebarOpen ? 'el-main isExtend' : 'el-main']">
      <h1>Win / Loss Summary <span></span></h1>
      <div class="box">
        <Customfilter :filterButton="filterButton" :form="form" :timeZones="timeZones" :platformOption="platformOptions"
          :typeOptions="typeOptions" :isType="isType" :currency="currency" @filterSubmit="applyFilters"
          :isLocation="isLocation" :isCurrency="isCurrency" />
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
import winloss from "../utils/winLossSummary/winloss.json";
import Customfilter from "./common/Customfilter.vue";

export default {
  name: "WinLossReport",
  props: {
    isSidebarOpen: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    TableComp,
    Customfilter
  },
  data() {
    return {
      isCurrency: true,
      isLocation: true,
      isActionEnabled: true,
      filteredReportData: [], // Filtered data
      filteredReportDataSet: [],
      isType: true,
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
          value: 'EGAME',
          label: 'EGAME',
        },
        {
          value: 'FISH',
          label: 'FISH',
        },
        {
          value: 'LIVE',
          label: 'LIVE',
        },
        {
          value: 'SLOT',
          label: 'SLOT',
        },
        {
          value: 'TABLE',
          label: 'TABLE',
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
        { title: "User ID", prop: "userID" },
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

<style>
.no-data-message {
  text-align: center;
  color: #999;
  font-size: 14px;
  margin: 20px 0;
  padding: 10px;
  border: 1px dashed #ccc;
}
</style>