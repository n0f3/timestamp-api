# Timestamp microservice

[![Run on Repl.it](https://repl.it/badge/github/n0f3/timestamp-api)](https://repl.it/github/n0f3/timestamp-api)

Simple microservice that accepts a date as parameter and will return a json object in the format:

```
{
  "unix": number,
  "natural": string
}
```

where unix is Unix timestamp in seconds and natural is a string value representing the date in human readable format.

## [Live Demo](https://4qx4g.sse.codesandbox.io)

## Project structure

```
.
├── package.json
├── Procfile
├── public
│   └── javascript
│       └── index.js
├── README.md
├── routes
│   └── apiRoutes.js
├── server.js
└── views
    └── index.pug
```
