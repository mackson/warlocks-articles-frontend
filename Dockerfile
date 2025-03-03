FROM node:23 AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --legacy-peer-deps --production

COPY . .

RUN npm run build

FROM node:23 AS runner
WORKDIR /app
COPY --from=builder /app ./

EXPOSE 5005

CMD ["npm", "run", "start"]
