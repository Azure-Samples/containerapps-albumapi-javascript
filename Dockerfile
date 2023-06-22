FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY src/ .
RUN npm install --production --silent && mv node_modules ../
EXPOSE 3500
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
