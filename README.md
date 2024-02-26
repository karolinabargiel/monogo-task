# Monogo task

This project is a task designed to evaluate skills in automation testing.  
Objective: To automate 2-4 tests focusing on a key user journey: finding a product using the search feature, adding it to the cart, verifying that the item is indeed in the cart, and then removing it from the cart.   
Technology Stack: Playwright & TypeScript.  

## Required software
* Node js -> v.14 or above
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

Please take note: Scenario_02 is failing, due to Issue_01_User not able to remove product from cart by clicking remove icon.

#### Found issues:
Issue_01_User not able to remove product from cart by clicking remove icon. 
  
Steps to reproduce: Add product to cart, go to cart, click remove icon next to item in cart.  
Actual result: Product is still visible in cart.  
Expected result: Product should be removed from cart.  
