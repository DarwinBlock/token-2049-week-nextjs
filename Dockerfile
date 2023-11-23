FROM node:alpine as base
# RUN apk add --no-cache g++ make py3-pip libc6-compat
RUN node -v
WORKDIR /app
COPY package*.json ./
EXPOSE 3000

FROM base as builder
WORKDIR /app
COPY . .
RUN npm run build

FROM base as production
WORKDIR /app

ENV NODE_ENV=production
ENV DB_HOST=mysql-token-week-do-user-4462607-0.c.db.ondigitalocean.com
ENV DB_USER=doadmin
ENV DB_PASSWORD=AVNS_gJRf_fT6gI9uLpr1kkC
ENV DB_DATABASE=defaultdb
RUN npm ci

# RUN addgroup -g 1001 -S nodejs
# RUN adduser -S nextjs -u 1001
# USER nextjs


COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

CMD npm start