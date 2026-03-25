const { test, expect } = require('@playwright/test');

test('@Web AutomationExercise User Flow', async ({ page }) => {

 const name = "TestUser";
 const email = `testuser${Date.now()}@email.com`;
 const password = "123456";
 const gender = page.getByLabel("Mr.");
 
 
 await page.goto("https://automationexercise.com");

 await page.evaluate(() => {
  document.querySelectorAll("iframe").forEach(el => el.remove());
});

 const consent = page.getByRole('button', { name: 'Consent' });
 if (await consent.isVisible()) {
  await consent.click();
 }

 await page.locator("text=Signup / Login").click();

 await page.locator("input[data-qa='signup-name']").fill(name);
 await page.locator("input[data-qa='signup-email']").fill(email);
 await page.locator("button[data-qa='signup-button']").click();

 await gender.click();
 await expect(gender).toBeChecked();

 await page.locator("#password").fill(password);

 await page.locator("#days").selectOption("1");
 await page.locator("#months").selectOption("1");
 await page.locator("#years").selectOption("2000");

 await page.locator("#first_name").fill("Test");
 await page.locator("#last_name").fill("User");

 await page.locator("#address1").fill("Test Street");

 await page.locator("#country").selectOption("Canada");

 await page.locator("#state").fill("Ontario");
 await page.locator("#city").fill("Toronto");
 await page.locator("#zipcode").fill("12345");

 await page.locator("#mobile_number").fill("123456789");

  await page.locator("button[data-qa='create-account']").click();
 
await expect(page.locator("text=ACCOUNT CREATED")).toBeVisible();

 await page.locator("text=Continue").click();

 await expect(page.locator("text=Logged in as")).toBeVisible();

 await page.locator("text=Products").scrollIntoViewIfNeeded();

 await page.locator("text=Products").click();

 await page.locator(".productinfo").first().waitFor();

 await page.locator(".productinfo >> text=Add to cart").first().click();

 await page.locator("text=View Cart").click();

 await expect(page.locator(".cart_description")).toBeVisible();

});