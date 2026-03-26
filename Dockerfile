FROM node:20-alpine AS builder
WORKDIR /app
COPY vite-version/package.json vite-version/pnpm-lock.yaml ./
RUN corepack enable && pnpm install --frozen-lockfile
COPY vite-version/ .
RUN npx vite build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
