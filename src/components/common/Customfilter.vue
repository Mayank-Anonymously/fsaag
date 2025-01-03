<template>
    <div>
        <div class="box-filter">
            <el-form ref="form" :model="form" label-position="top" :inline="true" class="el-form--inline">
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
                    <el-cascader v-model="form.platform" :options="platformOptions" placeholder="Select Platform" />
                </el-form-item>

                <!-- Type -->
                <el-form-item label="Type" required>
                    <el-cascader v-model="form.type" :options="typeOptions" placeholder="Select Type" />
                </el-form-item>

                <!-- Location -->
                <el-form-item label="Location">
                    <el-input v-model="form.location" placeholder="Select" disabled readonly />
                </el-form-item>

                <!-- Platform -->
                <el-form-item label="Currency" required>
                    <el-cascader v-model="form.currency" :options="currency" placeholder="Select currency" />
                </el-form-item>



                <div class="form-option-flex">
                    <el-checkbox-group v-model="checkboxGroup4" size="small"
                        style="margin-top: 10px; flex-wrap: wrap; gap: 10px; display: flex">
                        <el-checkbox-button v-for="(item, index) in filterButton" :key="index" :value="item"
                            class="el-radio">
                            {{ item }}
                        </el-checkbox-button>
                    </el-checkbox-group>
                    <el-button type="primary" class="el-button btn--s btn--gold" @click="onSubmit">Submit</el-button>
                    <el-button type="primary" class="el-button btn--s btn--gold" @click="onSubmit">EXPORT</el-button>
                </div>
            </el-form>
        </div>

    </div>
</template>

<script>
import { reactive } from 'vue'
// do not use same name with ref    
const form = reactive({
    dateRange: [],
    timeZone: null,
    platform: null,
    type: null,
    location: '',
    currency: '',
    selectedFilter: "Today"

})

const onSubmit = () => {
    console.log('submit!')
}

export default {
    name: "Customfilter",
    props: {
        filterButton: {
            type: Array,
            default: () => [],
        },
        form: {
            type: Object,
            required: true,
        },
        timeZones: {
            type: Array,
            default: () => [], // Default is not to show actions
        },
        platformOptions: {
            type: Array,
            default: () => [], // Default is not to show actions
        },
        typeOptions: {
            type: Array,
            default: () => [], // Default is not to show actions
        },
        currency: {
            type: Array,
            default: () => [], // Default is not to show actions
        },

    },

};
</script>

<style>
.button-group {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.button-group .el-button {
    flex: 1;
    margin-right: 10px;
    /* Space between buttons */
}

.button-group .el-button:last-child {
    margin-right: 0;
    /* Remove margin from the last button */
}
</style>