{{/*
Expand the name of the chart.
*/}}
{{- define "cog-ai-model.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
If release name contains chart name it will be used as a full name.
*/}}
{{- define "cog-ai-model.fullname" -}}
{{- if .Values.fullnameOverride }}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- $name := default .Chart.Name .Values.nameOverride }}
{{- if contains $name .Release.Name }}
{{- .Release.Name | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}
{{- end }}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "cog-ai-model.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Common labels
*/}}
{{- define "cog-ai-model.labels" -}}
helm.sh/chart: {{ include "cog-ai-model.chart" . }}
{{ include "cog-ai-model.selectorLabels" . }}
{{- if .Chart.AppVersion }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
{{- end }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end }}

{{/*
Selector labels
*/}}
{{- define "cog-ai-model.selectorLabels" -}}
app.kubernetes.io/name: {{ include "cog-ai-model.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}

{{/*
Create the name of the service account to use
*/}}
{{- define "cog-ai-model.serviceAccountName" -}}
{{- if .Values.serviceAccount.create }}
{{- default (include "cog-ai-model.fullname" .) .Values.serviceAccount.name }}
{{- else }}
{{- default "default" .Values.serviceAccount.name }}
{{- end }}
{{- end }}

{{/*
Create the name of the sidecar container
*/}}
{{- define "cog-ai-model.sidecarName" -}}
{{- if .Values.fullnameOverride }}
{{- printf "%s-%s" .Values.fullnameOverride .Values.sidecar.name | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- $name := default .Chart.Name .Values.nameOverride }}
{{- printf "%s-%s-%s" .Release.Name $name .Values.sidecar.name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}

{{/*
Create the secret name for token
*/}}
{{- define "cog-ai-model.tokenSecretName" -}}
{{- if .Values.sidecar.sealedSecrets.enabled }}
{{- default (include "cog-ai-model.sidecarName" .) .Values.sidecar.sealedSecrets.name }}
{{- else }}
{{- default "default" .Values.sidecar.sealedSecrets.name }}
{{- end }}
{{- end }}
