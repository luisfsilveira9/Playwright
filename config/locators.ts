export const loginPageLocators = {
    usernameField: '[data-test="username"]',
    passwordField: '[data-test="password"]',
    loginButton: '[data-test="login-button"]',
    errorMessage: '[data-test="error"]',
    loginError: 'Epic sadface: Username and password do not match any user in this service'
};

export const productsPageLocators = {
    productTitle: '.header_secondary_container > span',
    addBPButton: '(//button[contains(.,\'Add to cart\')])[1]',
    removeButton: '//button[contains(text(),\'Remove\')]',
    cartButton: '//a[@data-test=\'shopping-cart-link\']'
};

export const cartPageLocators = {
    productTitle: '(//div[contains(.,\'Sauce Labs Backpack\')])[9]',
    removeBPButton: '//button[@data-test=\'remove-sauce-labs-backpack\']',
    backShopping: '//button[@data-test=\'continue-shopping\']',
    checkoutButton: '//button[@data-test=\'checkout\']'
};

// Adicione outros locators conforme necessário
