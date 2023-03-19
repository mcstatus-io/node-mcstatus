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

const host = 'play.hypixel.net';
const port = 25565;

// The `port` argument is optional and defaults
// to 25565.
mcs.statusJava(host, port)
    .then((result) => {
        // ...
        // `result` will be the same shape and
        // properties as what is documented on
        // our website.
        // https://mcstatus.io/docs#java-status
    })
    .catch((error) => {
        // Handle the `error` ...
        // Receiving an error does not mean that the
        // server is offline, it means there was an
        // issue with our service or your network.
    })
```

### Bedrock Status

```javascript
const mcs = require('node-mcstatus');

// ...

const host = 'pe.mineplex.com';
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
        // Handle the `error` ...
        // Receiving an error does not mean that the
        // server is offline, it means there was an
        // issue with our service or your network.
    })
```

## License
[MIT License](https://github.com/mcstatus-io/node-mcstatus/blob/main/LICENSE)