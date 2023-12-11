docker build --no-cache -f SQL\Dockerfile.PostgreSql -t probashest-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t probashest-java/app ../../..
