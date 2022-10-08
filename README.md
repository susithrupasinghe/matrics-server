## Matrics Server

## References

https://blog.freshtracks.io/a-deep-dive-into-kubernetes-metrics-part-3-container-resource-metrics-361c5ee46e66

## Setup Kubernetes Cluster

## Login to Azure

1. az login
2. az aks get-credentials --resource-group ResearchGroup --name ResearchCluster
   az aks get-credentials --resource-group ResearchGroup --name ResearchClus
3. kubectl get nodes

## Install Istio

4. istioctl install --set profile=demo -y
5. kubectl label namespace default istio-injection=enabled

## Deploy Microservice Applications

6. kubectl apply -f Kubernetes-manifests.yaml
7. kubectl get service --watch
8. kubectl get pods

## Inject Istio Configurations

9. kubectl apply -f release/istio-manifests.yaml
10. istioctl analyze
11. kubectl apply -f samples/addons
12. istioctl dashboard kiali
13. istioctl dashboard grafana
14. istioctl dashboard prometheus
