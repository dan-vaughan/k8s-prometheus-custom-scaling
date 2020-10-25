#!/bin/bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
helm install kube-prometheus-stack prometheus-community/prometheus-operator -f helm-values/prometheus-operator-values.yml 
helm install prometheus-adapter prometheus-community/prometheus-adapter -f helm-values/prometheus-adapter-values.yml
kubectl apply -f manifests/