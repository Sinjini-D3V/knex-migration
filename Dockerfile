FROM postgres:latest

ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=null
ENV POSTGRES_DB=my_db

EXPOSE 5432
