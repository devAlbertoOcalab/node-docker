FROM node:20.7.0
WORKDIR /dist
COPY package.json . 
# buildtime
RUN npm install
# ARG NODE_ENV
# RUN if[ "$NODE_ENV" = "development" ]; \
#     then npm install; \
#     else npm install --only=production; \
#     fi
COPY .  ./
EXPOSE 3000
# runtime
CMD ["npm", "run", "dev"]