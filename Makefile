BUILDDIR := ./build
TESTDIR := ./test
BIN := ./node_modules/.bin

build: node_modules builddir
	@$(BIN)/duo --stdout index.js > $(BUILDDIR)/build.js
	@$(BIN)/duo --stdout $(TESTDIR)/index.js > $(BUILDDIR)/tests.js --development

test: build
	@$(BIN)/duo-test \
		-c 'make build' \
		--build build/tests.js \
		--reporter spec \
		browser

node_modules:
	npm install

clean:
	rm -rf ./node_modules ./build ./components

builddir:
	mkdir -p $(BUILDDIR)

phony: build build-test tests