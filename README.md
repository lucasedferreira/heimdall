# Heimdall 🚪

The purpose of this project is to controll the door lock with an app.

## 📦 Dependencies

Install these dependencies in your system, using the system package manager:
- docker
- docker-compose
- psql

## 🚀 Getting start

Install npm packages
```
make install
```

Run the server
```
cd server
npm run start
```

Run the client

`In progress`

## 🗄️ Creating local databases

### Using Docker

We recommend to use Docker to run PostgreSQL database service.

With Adminer:
```
docker-compose up -d
```

If you prefer to use another tool for manage the db, just run:
```
docker run -d \
--name postgres \
-e POSTGRES_PASSWORD=heimdall123 \
-p 5432:5432 postgres
```

## ☕ Access the platform

### DB admin

- Adminer `http://localhost:8080/?pgsql=postgres&username=postgres`
  - use the password `heimdall123`

### Front-end

`In progress`

### Back-end

- API `http://localhost/2424`
  - Documentation `In progress`

## 🧪 Testing the project
`In progress`
