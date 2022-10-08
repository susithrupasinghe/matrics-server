const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Memory_Utilization_Schema = new Schema({
  metricName: {
    type: String,
  },
  timestamp: {
    type: String,
  },
  timeSeriesData: [
    {
      podName: {
        type: String,
      },
      value: {
        type: String,
      },
    },
  ],
});

module.exports = Memory_Utilization_Model = mongoose.model(
  "memory_utilization",
  Memory_Utilization_Schema
);
