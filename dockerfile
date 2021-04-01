FROM node:alpine
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY . .

RUN yarn install
RUN yarn build

ENV NODE_ENV production

RUN npx next telemetry disable
