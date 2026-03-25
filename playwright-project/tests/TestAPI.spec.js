const { test, expect } = require('@playwright/test');

test('Full API Test (GET + POST)', async ({ request }) => {

  // =========================
  // 🔹 GET REQUEST
  // =========================
  const getResponse = await request.get('https://automationexercise.com/api/productsList');

  expect(getResponse.status()).toBe(200);

  const getBody = await getResponse.json();

  console.log("GET Response:", getBody);

  expect(getBody).toHaveProperty('products');
  expect(getBody.products.length).toBeGreaterThan(0);

  const firstProduct = getBody.products[0];

  expect(firstProduct).toHaveProperty('name');
  expect(firstProduct).toHaveProperty('price');

  console.log("First product:", firstProduct.name);


  // =========================
  // 🔹 POST REQUEST (Login)
  // =========================
  const postResponse = await request.post('https://automationexercise.com/api/verifyLogin', {
    form: {
      email: 'random@email.com',
      password: '123456'
    }
  });

  expect(postResponse.status()).toBe(200);

  const postBody = await postResponse.json();

   //console.log("Post Response", postBody);
   expect(postBody.responseCode).toBe(404);
   expect(postBody.message).toContain('User not found');

});