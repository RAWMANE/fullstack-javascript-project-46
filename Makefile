install :
	npm install

lint:
	npx eslint .

fix:
	npx eslint . --fix

publish :
	npm publish --dry-run


