FROM microsoft/dotnet:latest

RUN apt-get update && apt-get install -y sqlite3 libsqlite3-dev && rm -rf /var/lib/apt/lists/*

COPY . /app

WORKDIR /app

RUN ["dotnet", "restore"]

RUN ["dotnet", "build"]

EXPOSE 5000/tcp

CMD ["dotnet", "run", "--server.urls", "http://*:5000"]

# build command
# docker build -t angular2_dotnetcore_01232017 .

# run command
# docker run -p 5000:5000 angular2_dotnetcore_01232017