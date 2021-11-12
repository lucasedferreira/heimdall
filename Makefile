# Setup and run app
.DEFAULT_GOAL := install

all: install

# Install dependencies
install:
	cd server && npm install
	cd client && npm install