FROM node:22

WORKDIR /app

COPY package.json .

RUN bun install

COPY . .

EXPOSE 4200

CMD ["bun", "run", "dev"]
