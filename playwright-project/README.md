# 🧪 Playwright Automation Project (UI + API)

## 📌 About the project

This is a personal automation project where I tested a demo website using Playwright.

The goal was to practice both UI and API testing and understand how test automation works in a real scenario.

## 🌐 Website tested

https://automationexercise.com

---

## 🚀 What is covered

### ✔ UI Testing

The UI flow is automated up to adding a product to the cart. The test includes:

* navigating through the website
* interacting with forms and buttons
* adding a product to the cart
* basic validation (visibility checks)

### ⚠️ API Testing

I also tried to implement API tests using Playwright.

However, since this is a demo website, API testing is limited:

* some endpoints are not fully testable
* POST requests are not always reliable

This helped me understand the challenges of testing APIs on non-production environments.

---

## 🧪 Technologies used

* Playwright
* JavaScript
* Node.js

---

## ▶️ How to run tests

```bash
npm install
npx playwright test
```

---

## 📊 Reports

* HTML report: generated automatically by Playwright
* Allure report: optional setup for better visualization

---

## 🔄 CI/CD

Tests are integrated with GitHub Actions and run automatically on push.

---

## 📁 Project structure

* `tests/` → UI and API tests
* `playwright.config.js` → configuration
* `.github/workflows/` → CI/CD pipeline

---

## 📚 What I learned

* how to automate UI flows using Playwright
* handling dynamic elements and timing issues
* basic API testing with Playwright request
* limitations of testing demo environments
* working with reports and CI/CD

---

## 👨‍💻 Note

This is a learning project built on a demo website. The focus was on understanding automation concepts rather than building a full production-ready test suite.

---

## 👤 Author

Iulian
