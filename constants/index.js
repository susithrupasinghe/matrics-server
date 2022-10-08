const PROMETHEUS_PORT = "http://localhost:9090/api/v1";
const CPU_USAGE = `sum (rate (container_cpu_usage_seconds_total{image!=""}[1m])) by (pod)`;
const MEMORY_UTILIZATION = `sum (rate (container_memory_working_set_bytes{image!=""}[1m])) by (pod)`;
const NETWORK_UTILIZATION = `sum (rate (container_network_receive_bytes_total{image!=""}[1m])) by (pod)`;

module.exports = {
  PROMETHEUS_PORT,
  NETWORK_UTILIZATION,
  CPU_USAGE,
  MEMORY_UTILIZATION,
};
