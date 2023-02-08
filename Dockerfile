FROM node:16
COPY . /app
WORKDIR /app
RUN npm i
CMD npm run dev
EXPOSE 4001