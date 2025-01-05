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
                    <el-cascader v-model="form.platform" :options="platformOption" placeholder="Select Platform" />
                </el-form-item>

                <!-- Type -->
                <el-form-item label="Type" required>
                    <el-cascader v-model="form.type" :options="typeOptions" placeholder="Select Type" />
                </el-form-item>

                <!-- Conditional rendering based on isUser Id -->
                <el-form-item v-if="isUserId" label="User ID">
                    <el-input v-model="form.userId" placeholder="Enter User ID" />
                </el-form-item>

                <el-form-item v-if="isUserId" label="User ID">
                    <el-input v-model="form.userId" placeholder="Enter User ID" />
                </el-form-item>

                <!-- Conditional Location Input -->
                <el-form-item v-if="isLocation" label="Location">
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

<script>
import { reactive } from "vue";

export default {
    name: "CustomFilter",
    props: {
        filterButton: {
            type: Array,
            default: () => [],
        },
        timeZones: {
            type: Array,
            default: () => [],
        },
        platformOption: {
            type: Array,
            required: true,
        },
        typeOptions: {
            type: Array,
            default: () => [],
        },
        currency: {
            type: Array,
            default: () => [],
        },
        isUserId: {
            type: Boolean,
            required: true,
        },
        isLocation: {
            type: Boolean,
            required: true
        }

    },

    setup(props, { emit }) {
        const form = reactive({
            dateRange: [],
            timeZones: null,
            platform: null,
            type: null,
            location: "",
            currency: null,
            selectedFilters: [],
        });
        const onSubmit = () => {
            const filterCriteria = {
                dateRange: form.dateRange,
                timeZones: form.timeZones,
                platform: form.platform,
                type: form.type,
                currency: form.currency,
                selectedFilters: form.selectedFilters,
            };
            emit("filterSubmit", filterCriteria);
            console.log("Filter Criteria Emitted:", filterCriteria); // Debugging line
        };

        const exportData = () => {
            console.log("Exporting data...");
        };

        return {
            form,
            onSubmit,
            exportData,
        };
    }
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
}

.button-group .el-button:last-child {
    margin-right: 0;
}
</style>