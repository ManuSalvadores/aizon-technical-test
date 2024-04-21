## Process
For structuring the tests, I've embraced the Page Object Model (POM). This design pattern offers a clear and scalable approach to organizing test code. Each web page, including modals treated as separate pages for practicality, is represented by its own page object, encapsulating its functionality and elements. This modular approach simplifies maintenance and facilitates updates by isolating changes within specific page objects.

To be able to run the tests both on desktop and mobile, I leverage cucumber tags so that each test determines the viewport. (I do this through the Before hook and by using a custom command).

## Test Framework

The tests are written using Cypress and Cucumber. 

## Project Structure

- `cypress/integration`: Contains feature files and step definitions.
- `cypress/fixtures`: Contains static data.
- `cypress/support`: Contains support files such as custom commands, utils, pageObjects and pageElements.
- `cypress.json`: Cypress configuration file.
- `package.json`: Contains project metadata and dependencies.

## Dependencies

- [Cypress](https://www.cypress.io/): End-to-end testing framework.
- [cypress-cucumber-preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor): Cypress plugin for using Cucumber with Cypress.

## Author

Manuel Salvadores
