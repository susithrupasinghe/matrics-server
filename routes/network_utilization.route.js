const express = require("express");
const router = express.Router();

const {
  fetch_All_Network_Utilization,
  fetch_All_Network_Utilization_By_Pod,
} = require("../controllers/network_utilization.controller");

router.get(
  "/fetch/fetch_All_Network_Utilization",
  fetch_All_Network_Utilization
);
router.get(
  "/fetch/fetch_All_Network_Utilization_By_Pod/:podName",
  fetch_All_Network_Utilization_By_Pod
);

module.exports = router;
