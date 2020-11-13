
FROM node:12
RUN apt-get update \
    && apt-get install -y mysql-server mysql-client \
    && apt-get clean \
    && service mysql start \
    && mysqladmin -u root password root \ 
    && mysql -uroot -proot  -e "CREATE DATABASE IF NOT EXISTS todo;" \
    && mysql -uroot -proot  -e "USE mysql; UPDATE user SET plugin='mysql_native_password' WHERE User='root'; FLUSH PRIVILEGES;"

WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 3000
CMD ["sh", "setup.sh"]