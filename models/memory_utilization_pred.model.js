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

module.exports = Memory_Utilization__Pred_Model = mongoose.model(
  "memory_utilization_predict",
  Memory_Utilization_Schema
);
