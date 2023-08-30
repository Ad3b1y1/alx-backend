{
  "name": "queuing_system_in_js",
  "version": "1.0.0",
  "description": "A project for learning the basics of a queueing system in Node.js.",
  "author": "Adebiyi Adeyemi <opeoluwaadebiyi@outlook.com>",
  "private": true,
  "license": "MIT",
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "lint-nt": "./node_modules/.bin/eslint.cmd",
    "check-lint": "lint [0-9]*.js",
    "check-lint-nt": "lint-nt [0-9]*.js",
    "test": "./node_modules/.bin/mocha --require @babel/register --exit",
    "dev": "nodemon --exec babel-node --presets @babel/preset-env"
  },
  "dependencies": {
    "chai-http": "^4.3.0",
    "express": "^4.17.1",
    "kue": "^0.11.6",
    "redis": "^2.8.0"
  },
  "devDependencies": {
    "@babel/cli": "^7.8.0",
    "@babel/core": "^7.8.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.8.2",
    "@babel/register": "^7.8.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "nodemon": "^2.0.2",
    "chai": "^4.2.0",
    "mocha": "^6.2.2",
    "request": "^2.88.0",
    "sinon": "^7.5.0"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/Ad3b1y1/alx-backend"
  },
  "bugs": {
    "url": "https://github.com/Ad3b1y1/alx-backend/issues"
  },
  "homepage": "https://github.com/Ad3b1y1/alx-backend/blob/main/0x03-queuing_system_in_js/README.md",
  "engines": {
    "node": "16.x",
    "npm": "8.x",
    "yarn": "1.x"
  }
}
