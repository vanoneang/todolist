
FROM node:12
RUN apt-get update && apt-get install -y mysql-server && service mysql start \
    && mysqladmin -u root password root \ 
    && mysql -uroot -proot  -e "use mysql; UPDATE user SET plugin = '' WHERE user = 'root' AND host = 'localhost'; FLUSH PRIVILEGES;" \
    && mysql -uroot -proot  -e "CREATE DATABASE IF NOT EXISTS todo;"

WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install && npx sequelize-cli db:migrate
EXPOSE 3000
CMD ["node", "index.js"]