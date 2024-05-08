import { expect, test } from "@playwright/test";
import { credentials } from "../config/credentials";
import { loginPageLocators, productsPageLocators } from "../config/locators";
import { urls, expectedTitles } from "../config/constants";

test('the user login with success', async ({ page }) => {
    /* Acessa a página e valida o título */
    await page.goto(urls.loginPage);
    await expect(await page.title()).toBe(expectedTitles.loginPage);
    
    /* Insere usuário e senha válidos */
    await page.locator(loginPageLocators.usernameField).fill(credentials.validUsername);
    await page.locator(loginPageLocators.passwordField).fill(credentials.validPassword);
    
    /* Clica no botão de login */
    await page.locator(loginPageLocators.loginButton).click();
    
    /* Valida se o login foi realizado com sucesso */
    await expect(await page.url()).toBe(urls.productsPage);
    const productTitle = await page.locator(productsPageLocators.productTitle);
    expect(productTitle).toHaveText(expectedTitles.productsPage);
});

test('the user insert a wrong password', async ({ page }) => {
    /* Acessa a página e valida o título */
    await page.goto(urls.loginPage);
    await expect(await page.title()).toBe(expectedTitles.loginPage);
    
    /* Insere senha inválida */
    await page.locator(loginPageLocators.usernameField).fill(credentials.validUsername);
    await page.locator(loginPageLocators.passwordField).fill(credentials.invalidPassword);
    
    /* Clica no botão de login */
    await page.locator(loginPageLocators.loginButton).click();
    
    /* Valida mensagem de erro */
    const loginError = await page.locator(loginPageLocators.errorMessage);
    expect(loginError).toHaveText(loginPageLocators.loginError);
});
