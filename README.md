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
### 1) Install KMS (Kurento Media Server)
#### [Option a] Ubuntu 14.04/15.04
```
echo "deb http://ubuntu.kurento.org trusty kms6" | sudo tee /etc/apt/sources.list.d/kurento.list
wget -O - http://ubuntu.kurento.org/kurento.gpg.key | sudo apt-key add -
sudo apt-get update
sudo apt-get install kurento-media-server-6.0
```
#### [Option b] Ubuntu 16.04
```
echo "deb http://ubuntu.kurento.org xenial kms6" | sudo tee /etc/apt/sources.list.d/kurento.list
wget -O - http://ubuntu.kurento.org/kurento.gpg.key | sudo apt-key add -
sudo apt-get update
sudo apt-get install kurento-media-server-6.0
```

### 2) Start KMS
```
kurento-media-server-6.0 start
```

### 3) Configuration

TODO

### 4) [Option a] Install and compile for developers
3.1) Get NPM modules:
```
cd src/main/resources/static && npm install
```

3.2) Compile LESS files:
```
cd src/main/resources/static && gulp css
```

3.3) Compile TypeScript
```
cd src/main/resources/static && tsc
```

3.4) Compile with maven:
```
mvn compile exec:java
```

### 4) [Option b] Install and compile for users
3.1) Download and execute the lastest release:
```
java -jar peerclass-latest.jar
```

### 5) Try it
Open a browser and visit:
```
https://localhost:[port]
```
By default port is `8443`. Note: it uses `https`.

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

## License

[MIT](LICENSE). Copyright (c) [Alex](https://github.com/alxhotel).

