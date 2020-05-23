# Simple CLI Executor

> simple tool for automating command-line executions. made just for fun, not really meant to be used in production.

[![CircleCI](https://circleci.com/gh/tjmaynes/simple-cli-executor.svg?style=svg)](https://circleci.com/gh/tjmaynes/simple-cli-executor)

## Requirements

- [node](https://nodejs.org)

## Usage

To install project dependencies, run the following command:
```bash
npm install
```

To run the application, run the following command:
```bash
PROGRAM=<some-unix-program> \
REQUESTS=<some-requests-to-be-made> \
node index.js
```

To run tests, run the following command:
```bash
npm tests
```
