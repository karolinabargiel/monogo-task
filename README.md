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
2. Search for product
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
