#!/bin/bash
helm init --wait
helm repo update
helm install stable/prometheus-operator -f helm-values/prometheus-operator-values.yml -n prom-demo
helm install stable/prometheus-adapter -n prom-adapter -f helm-values/prometheus-adapter-values.yml
kubectl apply -f manifests/