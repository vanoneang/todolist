#!/bin/bash
set -e

echo `service mysql status`
service mysql start
sleep 3
echo `service mysql status`

mysql -uroot -proot < file.sql

node index.js