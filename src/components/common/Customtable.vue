<template>
  <div>
    <el-table :data="paginatedData" border>
      <el-table-column v-if="showActions" label="Player Summary">
        <template #default="scope">
          <el-button type="primary" size="small" @click="handleButtonClick(scope.row)">
            Action
          </el-button>
        </template>
      </el-table-column>
      <template v-for="(header, index) in headers" :key="index">
        <el-table-column :label="header.title" :prop="header.prop">
          <!-- Check for subHeaders, render nested columns if present -->
          <template v-if="header.subHeaders">
            <el-table-column v-for="(subHeader, subIndex) in header.subHeaders" :key="subIndex" :label="subHeader.title"
              :prop="subHeader.prop"></el-table-column>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <el-pagination background layout="prev, pager, next, sizes, total" :total="data.length" :page-size="pageSize"
      :current-page="currentPage" @current-change="handlePageChange" @size-change="handleSizeChange" />
  </div>
</template>

<script>
export default {
  name: "TableComp",
  props: {
    headers: {
      type: Array,
      required: true,
    },
    reportData: {
      type: Array,
      required: true,
    },
    showActions: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentPage: 1, // Current page number
      pageSize: 10, // Number of items per page
    };
  },
  computed: {
    data() {
      return this.reportData;
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = this.currentPage * this.pageSize;
      return this.data.slice(start, end);
    },
  },
  methods: {
    handlePageChange(page) {
      this.currentPage = page;
    },
    handleSizeChange(size) {
      this.pageSize = size;
      this.currentPage = 1; // Reset to first page when page size changes
    },
    handleButtonClick(row) {
      console.log("Button clicked for row:", row);
    },
  },
};
</script>

<style scoped>
/* You can add custom styles here if needed */
</style>
