FROM einsqing/alpine-node:latest
COPY . /www
WORKDIR /www
RUN yarn global add pm2 && yarn install --production
EXPOSE 465
CMD pm2-runtime start pm2.json