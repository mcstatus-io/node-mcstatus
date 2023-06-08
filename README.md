# node-mcstatus
The official Node.js library for interacting with the [mcstatus.io](https://mcstatus.io) API.

## Getting Started

Firstly, you will need to install the library. Open your terminal/command line in your workspace where your package.json file is located, and run the following command.

```
npm install node-mcstatus
```

## Usage

### Java Status

```javascript
const mcs = require('node-mcstatus');

// ...

const host = 'demo.mcstatus.io';
const port = 25565;
const options = { query: true };

// The `port` argument is optional and defaults
// to 25565. The `options` argument is optional.
mcs.statusJava(host, port, options)
    .then((result) => {
        // `result` will be the same shape and
        // properties as what is documented on
        // our website.
        // https://mcstatus.io/docs#java-status
    })
    .catch((error) => {
        // If the server is offline, then
        // you will NOT receive an error here.
        // Instead, you will use the `result.online`
        // boolean values in `.then()`.
        // Receiving an error here means that there
        // was an error with the service itself.
    })
```

### Bedrock Status

```javascript
const mcs = require('node-mcstatus');

// ...

const host = 'demo.mcstatus.io';
const port = 19132;

// The `port` argument is optional and defaults
// to 19132.
mcs.statusBedrock(host, port)
    .then((result) => {
        // ...
        // `result` will be the same shape and
        // properties as what is documented on
        // our website.
        // https://mcstatus.io/docs#bedrock-status
    })
    .catch((error) => {
        // If the server is offline, then
        // you will NOT receive an error here.
        // Instead, you will use the `result.online`
        // boolean values in `.then()`.
        // Receiving an error here means that there
        // was an error with the service itself.
    })
```

## License
[MIT License](https://github.com/mcstatus-io/node-mcstatus/blob/main/LICENSE)