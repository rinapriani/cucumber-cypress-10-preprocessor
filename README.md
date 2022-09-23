# Como criar um projeto utilizando o cypress v.10 + cypress-cucumber-preprocessor

> :information_source:  Vale destacar que estamos utilizando configuração para arquivos escritos em JavaScript e que este projeto visa documentar a nova configuração do @badeball/cypress-cucumber-preprocessor. Como realizar a criação de arquivos e estruturar o projeto está contido em em outro [projeto](https://github.com/luisantoniosasilva/Cypress_Cucumber_PageObjects).

1. Inicializar o npm no repositório: `npm init -y`
2. Instalar o cypress como dependência do projeto e todos pacotes que precisaremos: `npm install cypress -D @bahmutov/cypress-esbuild-preprocessor @badeball/cypress-cucumber-preprocessor`
3. Abrir o projeto cypress para inicializar a configuração para o e2e
   - Neste projeto iniciamos configurando o arquivo `package.json` com o bloco de código e executamos no terminar com `npm run test`, mas caso não deseje configurar, você pode utilizar `npx cypress open`
   ```JS
   "scripts": {
   "test": "cypress open"
     },
   ```
4. Configure o arquivo `cypress.config.js` ou copie e cole o código abaixo que está disposto na [documentação](https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/examples/esbuild-cjs/cypress.config.js)

   ```JS
   const { defineConfig } = require("cypress");
    const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
    const addCucumberPreprocessorPlugin =
    require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
    const createEsbuildPlugin =
    require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;


    module.exports = defineConfig({
        e2e: {
            async setupNodeEvents(on, config) {
            const bundler = createBundler({
                plugins: [createEsbuildPlugin(config)],
            });

            on("file:preprocessor", bundler);
            await addCucumberPreprocessorPlugin(on, config);

            return config;
            },
            specPattern: "cypress/e2e/features/*.feature",
            //Observe que a linha acima define onde estarão seus cenários
            chromeWebSecurity: false,
        },
    });
   ```
5. Criar o arquivo `.cypress-cucumber-preprocessorrc.json` na raíz do projeto contendo o seguinte trecho de código conforme [documentação](https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/configuration.md):
    ```JS
    {
        "json": {
            "enabled": true
    },
        "stepDefinitions": [
            "[filepath]/**/*.{js,ts}",
            "[filepath].{js,ts}",
            "cypress/e2e/step_definitions/*.{js,ts}"
            //Observe que a linha acima define onde estarão os steps dos cenários escritos
        ]
    }
    ```
6. Após essa configuração você estará apto para utilizar os recursos em seu projeto.
