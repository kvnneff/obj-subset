BUILDDIR := ./build
TESTDIR := ./test
BIN := ./node_modules/.bin

build: node_modules builddir
	@$(BIN)/duo --stdout index.js > $(BUILDDIR)/build.js
	@$(BIN)/duo --stdout $(TESTDIR)/index.js > $(BUILDDIR)/tests.js --development

test:node_modules
	@$(BIN)/mocha test/index.js

test-browser: build
	@$(BIN)/duo-test \
		-c 'make build' \
		--build build/tests.js \
		--reporter spec \
		browser

node_modules:
	npm install

example:
	@node examples/

clean:
	rm -rf ./node_modules ./build ./components

builddir:
	mkdir -p $(BUILDDIR)

.PHONY: example build test
