
FROM node:12
RUN apt-get update && apt-get install -y mysql-server && service mysql start \
    && mysqladmin -u root password root \ 
    && mysql -uroot -proot  -e "CREATE DATABASE IF NOT EXISTS todo;" 

WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 3000
CMD ["sh", "setup.sh"]