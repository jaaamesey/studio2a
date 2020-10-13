FROM postgres:12.3

ENV PGDATA = /temp-pg-data
ENV POSTGRES_USER studio2a
ENV POSTGRES_PASSWORD DEV_PASSWORD
ENV POSTGRES_DB studio2a

COPY *.sql /docker-entrypoint-initdb.d/
EXPOSE 5432 

# Port should be proxied to 5420, either in docker-compose.yml 
# or your docker run command (see https://docs.docker.com/get-started/part2/#run-your-image-as-a-container)