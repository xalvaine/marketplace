FROM node:alpine
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY . .

# RUN yarn install --production
# RUN yarn build

RUN npx next telemetry disable
