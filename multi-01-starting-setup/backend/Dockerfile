FROM node
WORKDIR /app
COPY package.json . 
RUN npm install
COPY . . 
EXPOSE 80
ENV MONGODB_USERNAME =sandeep
ENV MONGODB_PASSWORD = sandeep
CMD ["npm", "start"] 