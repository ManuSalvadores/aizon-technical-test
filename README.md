## Process
For structuring the tests, I've embraced the Page Object Model (POM). This design pattern offers a clear and scalable approach to organizing test code. Each web page, including modals treated as separate pages for practicality, is represented by its own page object, encapsulating its functionality and elements. This modular approach simplifies maintenance and facilitates updates by isolating changes within specific page objects.

To be able to run the tests both on desktop and mobile, I leverage cucumber tags so that each test determines the viewport. (I do this through the Before hook and by using a custom command).

In this approach to crafting automated tests, i would take in consideration potential issues on both BE and FE, along with necessary validations and dependencies on external services tailored to each scenario. For instance, envision the complete signup, here, we would verify data persistence, ensure secure authentication, and scrutinize UI functionality and error handling. 
To reach production ready scenarios, we can simulate external authentication and notification services. Similarly, in scenarios like the product cart interaction and successful item deletion, we'd strive to ensure accurate database updates, ui responsiveness. You also can take a different approach and begin to simulating processes like inventory management. Finally when testing the  complete checkout scenario, we'd validate everything from inventory deductions to order recording and UI. Even if that means stubbing payment gateways and email services to isolate our testing. Through this thorough approach, we aim to create tests that comprehensively assess the functionality and reliability of our application across various scenarios and system interactions, ensuring confidence in its performance.


I think that those test are very importart during development and testing phase of the cycle. during development. They serve as actionable guidelines, providing developers with clear direction and accurately implementing registration and authentication features, complete checkout process and product cart handling. In testing, these tests ensure that user authentication functions seamlessly, safeguarding the authentication process. They can primary fit into a regression test set, but also, process like login/logout can serve as health checks of your application. Preventing any disruptive change during the development process.


In component testing, focusing on test isolation is like zooming in on the fine details of a painting to ensure each brushstroke is perfect. By examining individual software components—like small puzzle pieces—separately from the larger picture, we can make sure each piece functions just right and meets its specific role. This careful approach lets us delve deep into the inner workings of each component, checking algorithms, logic, and data handling without getting bogged down by the whole system's complexities. Sure, there are challenges like the time it takes, especially for complex software, and the tricky task of automating it all seamlessly. But by focusing on each part in its own spotlight, we catch issues early, improve quality, and save time on fixing bugs later.

## 🚀 Usage

For the very first time, you'll need to install dependencies.

```bash
npm install
```

Once installed if you prefer to run tests on cypress interactive mode, use the following command.

```bash
npm run cy:open
```

On the other hand, if you are looking forward to execute them in headless mode, try this command.

```bash
npm run cy:tests
```


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
