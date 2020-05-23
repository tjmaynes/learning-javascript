# Leet Code

> test driven approach to solving questions on leet code.

[![CircleCI](https://circleci.com/gh/tjmaynes/leet-code.svg?style=svg)](https://circleci.com/gh/tjmaynes/leet-code)

## Requirements

- [docker](https://docker.com/)
- [nodejs](https://nodejs.org/en/)

## Usage

To install project dependencies, run the following command:
```bash
make install_dependencies
```

To run all tests, run the following command:
```bash
TEST_DB_USER=<some-todo-db-user> \
TEST_DB_HOST=<some-todo-db-host> \
TEST_DB_NAME=<some-todo-db-name> \
TEST_DB_PASSWORD=<some-todo-db-password> \
TEST_DB_PORT=<some-todo-db-port> \
make test
```

To get test coverage, run the following command:
```bash
TEST_DB_USER=<some-todo-db-user> \
TEST_DB_HOST=<some-todo-db-host> \
TEST_DB_NAME=<some-todo-db-name> \
TEST_DB_PASSWORD=<some-todo-db-password> \
TEST_DB_PORT=<some-todo-db-port> \
make test_coverage
```

To run PostgreSQL locally, run the following command:
```bash
make start_local_db
```

To run all tests locally, run the following command:
```bash
make local_test
```
