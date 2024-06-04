const { Given, When, Then } = require("@wdio/cucumber-framework");
const { user, password } = require("../data/Data.js");
const loginPage = require("../page-objects/loginPage.myVistagePage.js");
const { awaitExpression } = require("@babel/types");

const pages = {
  login: loginPage,
};

Given("user that goes to the {string} page", async (page) => {
  await pages[page].open();
});

When("user visualizes the login screen", async () => {
  await expect(loginPage.inputUser).toBeDisplayed();
});

When("user successfully logs in as {string}", async (user) => {
  await loginPage.login(user);
});

Then("user validates the login elements", async () => {
  await expect(loginPage.inputUser).toBeDisplayed();
  await expect(loginPage.inputPassword).toBeDisplayed();
  await expect(loginPage.btnLogin).toBeDisplayed();
});


