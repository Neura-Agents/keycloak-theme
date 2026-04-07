# Stage 1: Build the Theme (Node.js)
FROM node:20-slim AS theme-builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build-keycloak-theme

# Stage 2: Keycloak Server
FROM quay.io/keycloak/keycloak:latest

# Copy the built theme JAR from the first stage
COPY --from=theme-builder /app/dist_keycloak/keycloak-theme-for-kc-22-to-25.jar /opt/keycloak/providers/

# Run the build command to optimize the image
RUN /opt/keycloak/bin/kc.sh build

# Standard environment variables (these can be overridden in Coolify)
ENV KC_DB=postgres
ENV KC_HEALTH_ENABLED=true
ENV KC_METRICS_ENABLED=true

# ENTRYPOINT with Traefik/Proxy trust (copied from your project-config)
ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start", "--http-enabled=true", "--hostname-strict=false", "--proxy-headers=xforwarded"]
