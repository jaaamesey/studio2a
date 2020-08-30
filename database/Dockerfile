FROM postgres:12.3

ENV PGDATA = /temp-pg-data
ENV POSTGRES_USER studio2a
ENV POSTGRES_PASSWORD DEV_PASSWORD
ENV POSTGRES_DB studio2a

COPY *.sql /docker-entrypoint-initdb.d/
EXPOSE 5432