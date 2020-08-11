FROM postgres:12.3
COPY *.sql /docker-entrypoint-initdb.d/
ENV POSTGRES_PASSWORD DEV_PASSWORD
EXPOSE 5432