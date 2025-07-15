FROM node:18-alpine

WORKDIR /ziomax-atlas

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN cp -r public .next/standalone/ && cp -r .next/static .next/standalone/.next/

ENV NODE_ENV production

CMD ["node", ".next/standalone/server.js"]

EXPOSE 3001
