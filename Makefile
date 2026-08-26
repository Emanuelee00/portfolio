all: run

install:
	cd site && npm install

run: install
	cd site && npm run dev

build: install
	cd site && npm run build

preview: build
	cd site && npm run preview
