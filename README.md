# Simple Feed

## Usage

### Requirements

* docker
* docker-compose
* npm
* Nodejs

### Setup

Start mongodb using docker-compose

```bash
$ cd .docker
$ cp .env.example .env
$ docker-compose up
```

Then start nodejs development server

```bash
$ npm run dev
```

Start production server

```bash
$ npm run build
$ npm start
```

### Testing

Import the postman collection and environment from `postman` folder