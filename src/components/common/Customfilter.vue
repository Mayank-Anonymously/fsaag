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
                <div>
                    <el-radio-group v-model="radio1" size="large">
                        <el-radio-button class="el-radio" label="New York" value="New York" />
                        <el-radio-button label="Washington" value="Washington" />
                        <el-radio-button label="Los Angeles" value="Los Angeles" />
                        <el-radio-button label="Chicago" value="Chicago" />
                    </el-radio-group>
                    <el-form-item class="button-group">
                        <el-button type="primary" @click="onSubmit">Create</el-button>
                        <el-button>Cancel</el-button>
                    </el-form-item>
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
    currency: ''
})

const onSubmit = () => {
    console.log('submit!')
}
export default {
    name: "Customfilter",
    props: {
        filterButton: {
            type: Array,
            required: true,
        },
        form: {
            type: Object,
            required: true,
        },
        timeZones: {
            type: Array,
            default: false, // Default is not to show actions
        },
        platformOptions: {
            type: Array,
            default: false, // Default is not to show actions
        },
        typeOptions: {
            type: Array,
            default: false, // Default is not to show actions
        },
        currency: {
            type: Array,
            default: false, // Default is not to show actions
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