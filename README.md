# UI Automation Test

A comprehensive UI automation testing suite built with Cypress for end-to-end testing of web applications.

## 🎯 Project Overview

This project provides automated testing capabilities for web applications using Cypress framework. It includes test cases for various user interactions and workflows, with a focus on maintainable and scalable test automation.

## 🛠️ Tech Stack

- **Cypress**: Modern end-to-end testing framework
- **JavaScript**: Primary programming language
- **Node.js**: Runtime environment
- **Mochawesome**: JSON reporting

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn package manager
- Git
- A modern web browser (Chrome, Firefox, or Edge)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jinojacob01/ui-automation-test.git
   cd ui-automation-test
   ```

2. **Install dependencies**
   ```bash
   npm install
   npm install cypress --save-dev
   ```

3. **Verify Cypress installation**
   ```bash
   npx cypress verify
   ```

## ⚙️ Cypress Configuration

The project uses `cypress.config.js` for Cypress-specific settings. Key configurations include:

- Base URL
- Viewport settings
- Timeout configurations
- Test file patterns

## 🏗️ Project Structure

```
ui-automation-test/
├── cypress/
│   ├── e2e/                    # Test files
│   │   ├── wishlist/           # Wishlist related tests
│   │   └── ...                 # Other test suites
│   ├── fixtures/               # Test data files
│   ├── support/                # Support files and custom commands
│   │   ├── commands.js         # Custom Cypress commands
│   │   └── e2e.js             # Global configurations
│   └── screenshots/            # Auto-generated screenshots
├── node_modules/               # Dependencies
├── cypress.config.js           # Cypress configuration
├── package.json               # Project dependencies and scripts
├── package-lock.json          # Locked dependency versions
└── README.md                  # Project documentation
```

## 🧪 Running Tests

### Interactive Mode (Cypress Test Runner)
```bash
# Open Cypress Test Runner
npm run cypress:open
# or
npx cypress open
```

### Headless Mode (Command Line)
```bash
# Run all tests
npm run cypress:run
# or
npx cypress run

# Run specific test file
npx cypress run --spec "cypress/e2e/wishlist/*.cy.js"

# Run tests in specific browser
npx cypress run --browser chrome
npx cypress run --browser firefox
```

## 📊 Test Reports

### Generating Reports

If using Mochawesome reporter:

```bash
# Install mochawesome
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator

# Run tests with reporting
npx cypress run --reporter mochawesome

# Merge multiple reports (if running in parallel)
npx mochawesome-merge cypress/reports/*.json > cypress/reports/output.json
npx marge cypress/reports/output.json --reportDir cypress/reports --inline
```

### Report Locations
- JSON Reports: `cypress/reports/`
