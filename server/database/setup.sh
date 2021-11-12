#!/bin/bash

psql service=dev -c "SELECT 1 FROM pg_database WHERE datname = 'heimdall'" | grep -q 1 > /dev/null
[ $? -eq 0 ] && DB_EXISTS=1 || DB_EXISTS=0

[ $DB_EXISTS -eq 0 ] && psql service=dev -c 'CREATE DATABASE "heimdall"'

./node_modules/.bin/sequelize db:migrate

[ $DB_EXISTS -eq 0 ] && ./node_modules/.bin/sequelize db:seed:all || exit 0