# Cypress-Framework

## Setup 🛠️

### Pre-requisites

* Install NodeJS and NPM pakcage manager.
* Code Editor of your choice e.g. Visual Studio Code
  * Install [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) VS Code extension from Microsoft to make linting work in IDE
* GIT Client (for remote tracking)
* GIT Bash terminal (for Windows)

### Setup from Scratch

* `npm init` to setup node project with package.json
* `npm install cypress --save-dev` to install cypress as dev dependency
* `npx cypress open` to open the cypress test runner and choose `E2E Testing` which will create cypress config, support and fixture folders.
* Choose browser of your choice, and scaffold examples which will create boilerplate specs within e2e folder.
* Remove the default boilerplate specs from `cypress/e2e` folder
* Add `.gitignore` to exclude files and folders from GIT
* Add `README.md` to document
* Start with writing tests under `cypress/e2e` directory.

#### Integrating ESLint

* Install [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) VS Code extension from Microsoft to make linting work in IDE
* Install eslint in project `npm init @eslint/config --save-dev`
* Install [Cypress ESLint Plugin](https://www.npmjs.com/package/eslint-plugin-cypress) with `npm install eslint-plugin-cypress --save-dev`
* Configure the `.eslintsrc.json` to use recommended settings or add custom rules:
```json
{
  "extends": [
    "plugin:cypress/recommended"
  ]
}
```
* [Linting Cypress code using ESLint and eslint-plugin-cypress](https://www.youtube.com/watch?v=-YgitwmwFo0)
