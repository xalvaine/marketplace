FROM node:alpine AS runner
RUN apk add --no-cache libc6-compat
WORKDIR /app

ENV NODE_ENV production

COPY .next ./.next
COPY node_modules ./node_modules

RUN npx next telemetry disable
