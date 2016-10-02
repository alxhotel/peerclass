# PeerClass

[![Build Status](https://travis-ci.org/alxhotel/peerclass.svg?branch=master)](https://travis-ci.org/alxhotel/peerclass)

PeerClass is a virtual classroom based in WebRTC.

#### WORK IN PROGRESS

### Built with
* [Spring framework](https://spring.io/) with [Kurento Room](https://github.com/Kurento/kurento-room)
* [Angular 2](https://angular.io/) with [TypeScript](https://www.typescriptlang.org/)
* [ng2-bootstrap](https://github.com/valor-software/ng2-bootstrap)
* [Angular Material](https://github.com/angular/material2)

## Setup
### Install for developers
1) Get NPM modules:
`cd src/main/resources/static && npm install`

2) Compile LESS files:
`cd src/main/resources/static && gulp css`

3) Compile TypeScript
`cd src/main/resources/static && tsc`

4) Compile with maven:
`mvn compile exec:java`

Open a browser and visit: `https://localhost:8443/`

### Install for users
1) Download and execute the lastest release:
`java -jar peerclass-latest.jar`

Open a browser and visit: `https://localhost:8443/`

### Configuration

TODO

## TODO List

| Feature / Fix / Design       | Status                       |
|------------------------------|------------------------------|
| Setup Kurento Room           |                        Doing |
| Create dashboard design      |                        Doing |
| Setup API endpoints          |                         TODO |
| Setup authentication of user |                         TODO |

Check out also the [projects page](https://github.com/alxhotel/peerclass/projects/1). More TODO items coming soon.

## Blog
Check out the blog about the development process of PeerClass at: [https://alxhotel.github.io/peerclass-blog](https://alxhotel.github.io/peerclass-blog)

