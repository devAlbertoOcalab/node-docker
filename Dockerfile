FROM node:20.7.0
WORKDIR /dist
COPY package.json . 
# buildtime
RUN npm install
COPY .  ./
EXPOSE 3000
# runtime
CMD ["npm", "run", "dev"]