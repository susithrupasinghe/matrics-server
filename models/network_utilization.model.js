const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Network_Utilization_Schema = new Schema({
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

module.exports = Network_Utilization_Model = mongoose.model(
  "network_utilization",
  Network_Utilization_Schema
);
