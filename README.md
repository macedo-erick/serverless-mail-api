
<h1 align="center"> serverless-mail-api </h1>

<p align="center"> 
<a href="https://choosealicense.com/licenses/mit/"><img src="https://img.shields.io/badge/License-GNU-green" /></a>
<a href="https://nodejs.org/download/release/v16.17.0/"><img src="https://img.shields.io/badge/node-%20v16.17.0-blue"/></a>
<a href="https://nodejs.org/download/release/v16.17.0"><img src="https://img.shields.io/badge/npm-%20v8.15.0-white"/></a>
<a href="https://www.serverless.com/framework/docs"><img src="https://img.shields.io/badge/serverless-%20v3.24.1-yellow"/></a>
</p>

## Introduction

The goal of this project is to build a fully serverless mail sending API.

## Installation

Clone the project

```
  git clone https://github.com/macedo-erick/serverless-mail-api.git
```

Go to the project directory

```
  cd serverless-mail-api
```

Install dependencies

```
  npm install

 # or

  yarn install
```

Create .env file


```
 MAIL=your-mail
 PASSWORD=your-password
 SMTP_HOST=smtp.gmail.com
 SMTP_PORT=465
 SMTP_SECURE=true
```

Start the server

```
 npm start

# or

 yarn start
```

Navigate to Swagger

```
 http://localhost:8082/dev/api-docs
```

## Authors

- [@macedo-erick](https://www.github.com/macedo-erick)

