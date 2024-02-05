FROM mysql
EXPOSE 3306
# Copy custom MySQL configuration file
COPY my-custom.cnf /etc/mysql/conf.d/
COPY ./testdump.sql /docker-entrypoint-initdb.d/
