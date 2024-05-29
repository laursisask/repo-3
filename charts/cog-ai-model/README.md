# cog-ai-model

A Helm chart to install an IA model with Cog

![Version: 0.14.3](https://img.shields.io/badge/Version-0.14.3-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square)

## Values

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| affinity | object | `{}` |  |
| apiGateway.annotations | object | `{}` |  |
| apiGateway.enabled | bool | `false` |  |
| apiGateway.hostnames | object | `{}` |  |
| apiGateway.parentRefs.name | string | `"stable-gateway"` |  |
| apiGateway.parentRefs.namespace | string | `"gateway-ns"` |  |
| args | list | `[]` |  |
| autoscaling.enabled | bool | `false` |  |
| autoscaling.maxReplicas | int | `100` |  |
| autoscaling.minReplicas | int | `1` |  |
| autoscaling.targetCPUUtilizationPercentage | int | `80` |  |
| config.modelLocalDir | string | `"/var/huggingface/cache"` |  |
| config.modelMountDir | string | `"/root/.cache/huggingface"` |  |
| envs | object | `{}` |  |
| envsFrom | object | `{}` |  |
| fullnameOverride | string | `""` |  |
| image.pullPolicy | string | `"IfNotPresent"` |  |
| image.repository | string | `"your-docker-repo/image-name"` |  |
| image.tag | string | `""` |  |
| imagePullSecrets | list | `[]` |  |
| ingress.annotations | object | `{}` |  |
| ingress.className | string | `""` |  |
| ingress.enabled | bool | `false` |  |
| ingress.hosts[0].host | string | `"chart-example.local"` |  |
| ingress.hosts[0].paths[0].path | string | `"/"` |  |
| ingress.hosts[0].paths[0].pathType | string | `"ImplementationSpecific"` |  |
| ingress.tls | list | `[]` |  |
| livenessProbe.exec.command[0] | string | `"/usr/bin/sh"` |  |
| livenessProbe.exec.command[1] | string | `"-c"` |  |
| livenessProbe.exec.command[2] | string | `"/usr/bin/test -f /var/run/cog/ready"` |  |
| livenessProbe.failureThreshold | int | `10` |  |
| livenessProbe.periodSeconds | int | `100` |  |
| livenessProbe.successThreshold | int | `1` |  |
| livenessProbe.timeoutSeconds | int | `1` |  |
| nameOverride | string | `""` |  |
| nodeSelector | object | `{}` |  |
| podAnnotations | object | `{}` |  |
| podLabels | object | `{}` |  |
| podSecurityContext | object | `{}` |  |
| readinessProbe.exec.command[0] | string | `"/usr/bin/sh"` |  |
| readinessProbe.exec.command[1] | string | `"-c"` |  |
| readinessProbe.exec.command[2] | string | `"/usr/bin/test -f /var/run/cog/ready"` |  |
| readinessProbe.failureThreshold | int | `10` |  |
| readinessProbe.periodSeconds | int | `100` |  |
| readinessProbe.successThreshold | int | `1` |  |
| readinessProbe.timeoutSeconds | int | `1` |  |
| replicaCount | int | `1` |  |
| resources | object | `{}` |  |
| routes | object | `{}` |  |
| runtimeClassName | string | `"nvidia"` |  |
| securityContext | object | `{}` |  |
| service.annotations | object | `{}` |  |
| service.port | int | `5000` |  |
| service.targetPort | int | `5000` |  |
| service.type | string | `"NodePort"` |  |
| serviceAccount.annotations | object | `{}` |  |
| serviceAccount.automount | bool | `true` |  |
| serviceAccount.create | bool | `true` |  |
| serviceAccount.name | string | `""` |  |
| sidecar.annotations."sealedsecrets.bitnami.com/cluster-wide" | string | `"true"` |  |
| sidecar.defaultConfTemplate | string | `"server {\n  listen 80;\n\n  location / {\n      if ($http_authorization != 'Bearer ${TOKEN}') {\n          return 403;\n      }\n\n      proxy_pass http://127.0.0.1:{{ .Values.service.targetPort }};\n      proxy_http_version 1.1;\n      proxy_set_header Host $host;\n      proxy_set_header X-Real-IP $remote_addr;\n      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n  }\n}"` |  |
| sidecar.enabled | bool | `false` |  |
| sidecar.env | list | `[]` |  |
| sidecar.image.pullPolicy | string | `"IfNotPresent"` |  |
| sidecar.image.repository | string | `"nginx"` |  |
| sidecar.image.tag | string | `"1.26.0"` |  |
| sidecar.livenessProbe.httpGet.path | string | `"/healthz"` |  |
| sidecar.livenessProbe.httpGet.port | int | `80` |  |
| sidecar.livenessProbe.initialDelaySeconds | int | `15` |  |
| sidecar.livenessProbe.periodSeconds | int | `20` |  |
| sidecar.name | string | `"nginx-auth-sidecar"` |  |
| sidecar.ports[0].containerPort | int | `80` |  |
| sidecar.ports[0].name | string | `"http"` |  |
| sidecar.ports[0].protocol | string | `"TCP"` |  |
| sidecar.readinessProbe.httpGet.path | string | `"/healthz"` |  |
| sidecar.readinessProbe.httpGet.port | int | `80` |  |
| sidecar.readinessProbe.initialDelaySeconds | int | `15` |  |
| sidecar.readinessProbe.periodSeconds | int | `20` |  |
| sidecar.resources | object | `{}` |  |
| sidecar.sealedSecrets.enabled | bool | `false` |  |
| sidecar.sealedSecrets.name | string | `""` |  |
| sidecar.sealedSecrets.token | string | `""` |  |
| sidecar.securityContext | object | `{}` |  |
| sidecar.service.port | int | `80` |  |
| sidecar.service.targetPort | int | `80` |  |
| sidecar.service.type | string | `"ClusterIP"` |  |
| strategy | object | `{}` |  |
| tolerations | list | `[]` |  |

## Nginx Auth

This chart can deploy an Nginx server with Bearer Toekn authentication enabled. It is disabled by default.

Just set sidecar.enable to true and provide the required values.

If you want to use sealed secrets to enable the token just set sidecar.sealedSecrets to true and provide the required values for token key.
Alternatively you can provide a secret with the token key by hand or use a secret from a secret manager like vault and configure an environment variable
to set a env called `TOKEN` the retrieves the value of that secret.

### Create a sealed secret

Follow the instructions on the [sealed-secrets](https://github.com/bitnami-labs/sealed-secrets) project to install the sealed-secrets controller.

Then you can create a sealed secret with the following command:

```bash
# Create a json/yaml-encoded Secret somehow:
# (note use of `--dry-run` - this is just a local file!)
echo -n MY_TOKEN | kubectl create secret generic mysecret --dry-run=client --from-file=foo=/dev/stdin -o json >mysecret.json

# This is the important bit:
kubeseal -f mysecret.json -w mysealedsecret.json
```

Then you can use the sealed secret in the values.yaml file like this:
- Retrieve the foo key with the sealed secret from `mysealedsecret.json`
- Set it in the values.yaml file in the key `sidecar.sealedSecrets.token`
- Remove `mysealedsecret.json` and `mysecret.json` files
- All these is now safe to be commited to a git repository

----------------------------------------------
Autogenerated from chart metadata using [helm-docs v1.11.0](https://github.com/norwoodj/helm-docs/releases/v1.11.0)