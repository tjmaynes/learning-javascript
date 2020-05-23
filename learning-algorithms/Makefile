REPO_NAME := leet-code

start_local_db:
	(docker rm -f $(REPO_NAME)-db || true) && docker run -d \
		--name $(REPO_NAME)-db \
		-e POSTGRES_USER=postgres \
		-e POSTGRES_PASSWORD=password \
		-e POSTGRES_DB=$(REPO_NAME)-test-db \
		-p 5432:5432 \
		postgres:9.5.14-alpine

install_dependencies:
	npm install

local_test:
	TEST_DB_USER=postgres \
	TEST_DB_HOST=localhost \
	TEST_DB_NAME=$(REPO_NAME)-test-db \
	TEST_DB_PASSWORD=password \
	TEST_DB_PORT=5432 \
	npm test

test_coverage:
	npm run test:coverage

test:
	npm test

start:
	npm run serve
