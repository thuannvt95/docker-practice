# =========================
# Stage 1: Build Angular
# =========================

FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source
COPY . .

# Build Angular (prod)
RUN npm run build -- --configuration production

# =========================
# Stage 2: Run with Nginx
# =========================
FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output
COPY --from=build /app/dist/ngrx-intro-standalone /usr/share/nginx/html

EXPOSE 90

CMD ["nginx", "-g", "daemon off;"]

