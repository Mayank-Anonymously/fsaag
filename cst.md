<template>
    <div>
        <div class="box-filter">
            <el-form :model="form" label-position="top" :inline="true" class="el-form--inline">
                <!-- Date and Time -->
                <el-form-item label="Date and Time" required>
                    <el-date-picker v-model="form.dateRange" type="datetimerange" range-separator="-"
                        start-placeholder="Start" end-placeholder="End" class="el-range-editor" />
                </el-form-item>

                <!-- Time Zone -->
                <el-form-item label="Time Zone" required>
                    <el-cascader v-model="form.timeZones" :options="timeZones" placeholder="Select Time Zone" />
                </el-form-item>

                <!-- Platform -->
                <el-form-item label="Platform" required>
                    <el-cascader v-model="form.platform" :options="platformOption" placeholder="Select Platform"
                        @click="console.log(form.platform)" />
                </el-form-item>


                <!-- Type -->
                <el-form-item label="Type" required>
                    <el-cascader v-model="form.type" :options="typeOptions" placeholder="Select Type" />
                </el-form-item>

                <!-- Location -->
                <el-form-item label="Location">
                    <el-input v-model="form.location" placeholder="Select" disabled readonly />
                </el-form-item>

                <!-- Currency -->
                <el-form-item label="Currency" required>
                    <el-cascader v-model="form.currency" :options="currency" placeholder="Select Currency" />
                </el-form-item>

                <div class="form-option-flex">
                    <el-checkbox-group v-model="form.selectedFilters" size="small"
                        style="margin-top: 10px; flex-wrap: wrap; gap: 10px; display: flex">
                        <el-checkbox-button v-for="(item, index) in filterButton" :key="index" :value="item"
                            class="el-radio">
                            {{ item }}
                        </el-checkbox-button>
                    </el-checkbox-group>

                    <el-button type="primary" class="el-button btn--s btn--gold" @click="onSubmit">Submit</el-button>
                    <el-button type="primary" class="el-button btn--s btn--gold" @click="exportData">EXPORT</el-button>

                </div>
            </el-form>
        </div>
    </div>
</template>
