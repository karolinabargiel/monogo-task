# Monogo task

This project is a task designed to evaluate skills in automation testing.  
Objective: To automate 2-4 tests focusing on a key user journey: finding a product using the search feature, adding it to the cart, verifying that the item is indeed in the cart, and then removing it from the cart.   
Technology Stack: Playwright & TypeScript.  

## Required software
* Node.js -> v.14 or above
* Visual Studio Code
* Playwright Vs Code Extension

## How to use

* Clone the repository
* Open the project
* From the terminal install all the dependencies using 'npm i'
* To run tests, open terminal and use command: npm test
* To generate report, use command in terminal: npx playwright show-report

## Covered test scenarios:
### Scenario_01  
1. Go to https://skleptest.pl/
2. Search for product (search field on header)
3. Verify search results matches searched phrase
4. Click on item on search result page and go to product detail page
5. Set product quantity
6. Click add to cart button
7. Verify that message about adding product to cart is displayed
8. Click "View cart" button on banner
9. Verify Cart Page is opened
10. Verify Product was added to cart
11. Set product quantity to null
12. Click update cart
13. Verify product was removed, cart is empty

### Scenario_02
1. Go to https://skleptest.pl/
2. Input some dummy value into search field on header
3. Verify no product was found
4. Input valid value into search field on result page
5. Click on item on search result page and go to product detail page
6. Set product quantity
7. Click add to cart button
8. Verify that message about adding product to cart is displayed
9. Click "My Cart" button on header
10. Verify product name in cart is correct
11. Verify product quantity is correct
12. Click remove item from cart
13. Verify item was successfully removed

Please take note: Scenario_02 is failing, due to Error_01_User not able to remove product from cart by clicking remove icon.  
All tests are run on Chrome, Firefox and Safari browsers.

#### Found issues:
Error_01_User not able to remove product from cart by clicking remove icon.  
Steps to reproduce: Add product to cart, go to cart, click remove icon next to item in cart.  
Actual result: Product is still visible in cart.  
Expected result: Product should be removed from cart.  


Error_02_Product quantity set to "-9999999999" on Product Detail Page by default.  
Steps to reproduce: Click on any product in shop to open PDP.  
Actual result: Product quantity is set to "-9999999999".  
Expected result: Product quantity should be set to 1 by default.

## Testing approach

The aim was to test the functionality of product search, adding a product to the cart, and removing a product from the cart using two different scenarios. Each scenario reflects a similar path, although they differentiate by using different elements available on the website.  

In the first scenario assume that the user immediately searches for a product in the store, changes its quantity on the product page (which is enforced by an Error_02), then adds it to the cart. While setting the value to null in the cart and updating it, the user removes the product.  

The second scenario assumes that the user enters a phrase unrelated to the store's assortment in the search. It is checked whether the user is correctly informed about the lack of matches and whether an additional search window appears for them to use. After searching for the correct phrase, the user adds the product to the cart and attempts to remove it using the button next to the product in the cart. This scenario ends in failure because the product removal button does not work correctly (Error_01).
