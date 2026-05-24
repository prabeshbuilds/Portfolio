# My Portfolio (Next.js)

This is a Next.js portfolio application. The repository includes Kubernetes manifests so you can run the app locally on a Kubernetes cluster (Minikube) or deploy to any Kubernetes environment.

## Quick local development

Start the Next.js dev server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open http://localhost:3000 in your browser.

## Kubernetes (Minikube) — Quickstart

These steps show how to run the app with Minikube using the manifests in the `k8s/` directory.

Prerequisites:
- `minikube` installed and running
- `kubectl` configured and pointing at your Minikube cluster

Start Minikube if it's not running:

```bash
minikube start
```

Get Minikube's cluster IP address:

```bash
minikube ip
# example output: 192.168.49.2  <-- replace with your output
```

Note: the actual IP depends on your Minikube driver; run the command on your machine to get the real value.

Apply the manifests from the repository:

```bash
# Recommended: apply only the k8s manifests folder
kubectl apply -f k8s/

# Or (less recommended) apply everything in the current directory
# kubectl apply -f .
```

Files used from this repo (paths):
- `k8s/deployment.yml` — Deployment manifest
- `k8s/service.yml` — Service manifest

Verify resources are created:

```bash
# Show pods in all namespaces (or remove -A to check current namespace)
kubectl get pods -A

# Show nodes
kubectl get nodes

# Show services
kubectl get svc -A
```

Example: wait for pods to be ready and check one pod's logs

```bash
kubectl get pods
kubectl logs -f <pod-name>
kubectl describe pod <pod-name>
```

Accessing the application

- If the service is `NodePort`, get the NodePort and visit `MINIKUBE_IP:NODE_PORT`:

```bash
# get the NodePort value
kubectl get svc

# Example: if minikube ip is 192.168.49.2 and NodePort is 30007, open:
# http://192.168.49.2:30007
```

- If your service is `LoadBalancer` on Minikube, use `minikube service` to expose it:

```bash
minikube service --url -n default <service-name>
# or to open in browser
minikube service <service-name>
```

Helpful kubectl commands

- Apply manifests: `kubectl apply -f k8s/` or `kubectl apply -f .`
- Delete the applied resources: `kubectl delete -f k8s/` or `kubectl delete -f .`
- Get pods: `kubectl get pods -A` or `kubectl get pods -n <namespace>`
- Get nodes: `kubectl get nodes`
- Describe resource: `kubectl describe <resource> <name>`
- Stream logs: `kubectl logs -f <pod-name>`
- Port-forward a pod locally: `kubectl port-forward pod/<pod-name> 3000:3000`

Troubleshooting tips

- Pods not starting: run `kubectl describe pod <pod-name>` and check `kubectl logs <pod-name>`.
- Service unreachable on Minikube: run `minikube ip` and ensure you're using the correct NodePort or run `minikube service <service-name>`.
- If using `LoadBalancer` locally, run `minikube tunnel` in a separate terminal (requires root) to provision a LB IP.

Repository structure (relevant files)

- `k8s/deployment.yml` — Kubernetes Deployment for the Next.js app
- `k8s/service.yml` — Kubernetes Service (NodePort / LoadBalancer)
- `app/` — Next.js app sources
- `components/`, `data/`, `public/` — app assets


Common workflows

- Deploy to Minikube and open service:

```bash
minikube start
kubectl apply -f k8s/
minikube service <service-name>
```

- Update deployment after code change (rolling restart):

```bash
# rebuild image (if using local image, see your image build instructions)
kubectl rollout restart deployment/<deployment-name>
kubectl rollout status deployment/<deployment-name>
```

Docker & container image

This repository contains a `Dockerfile` at the repository root. Use the container image for local testing or to deploy to a Kubernetes cluster.

Build the image locally with Docker:

```bash
docker build -t my-portfolio:latest -f Dockerfile .
```

Run the image locally:

```bash
# If the image exposes port 3000
docker run --rm -p 3000:3000 my-portfolio:latest
```

Using the image with Minikube:

- Option A (build inside Minikube — recommended when using Docker driver):

```bash
minikube image build -t my-portfolio:latest -f Dockerfile .
```

- Option B (build locally then load into Minikube's node image store):

```bash
docker build -t my-portfolio:latest -f Dockerfile .
minikube image load my-portfolio:latest
```

Update `k8s/deployment.yml` to reference the image tag you built (for example `my-portfolio:latest`). Then redeploy with `kubectl apply -f k8s/` or use `kubectl rollout restart deployment/<deployment-name>`.

Notes:
- If you push the image to a registry, update the image name in `k8s/deployment.yml` accordingly.
- For production builds, run a production build (`npm run build`) and ensure the `Dockerfile` uses the optimized production start command used by the image.


If you'd like, I can also:
- Add example `Dockerfile` and `skaffold` config for iterative development with Minikube
- Run `minikube ip` and show the exact address from your environment (I can run commands if you allow)

--
Updated to include Kubernetes usage and quick commands.

