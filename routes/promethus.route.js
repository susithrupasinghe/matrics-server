const express = require("express");
const router = express.Router();

const {
  fetch_Cpu_Usage,
  fetch_Memory_Utilization,
  fetch_Network_Utilization,
} = require("../controllers/promethus.controller");

router.post("/fetch/fetch_Cpu_Usage", fetch_Cpu_Usage);
router.post("/fetch/fetch_Memory_Utilization", fetch_Memory_Utilization);
router.post("/fetch/fetch_Network_Utilization", fetch_Network_Utilization);

module.exports = router;
