import { expect, test } from "@playwright/test";
import { credentials } from "../config/credentials";
import { loginPageLocators, productsPageLocators, cartPageLocators } from "../config/locators";
import { urls, expectedTitles } from "../config/constants";

// Função para fazer login
async function login(page) {
    // Navega até a página de login
    await page.goto(urls.loginPage);
    // Verifica se o título da página corresponde ao esperado para a página de login
    await expect(await page.title()).toBe(expectedTitles.loginPage);
    // Preenche os campos de usuário e senha com as credenciais válidas
    await page.locator(loginPageLocators.usernameField).fill(credentials.validUsername);
    await page.locator(loginPageLocators.passwordField).fill(credentials.validPassword);
    // Clica no botão de login
    await page.locator(loginPageLocators.loginButton).click();
    // Verifica se a URL após o login corresponde à página de produtos
    await expect(await page.url()).toBe(urls.productsPage);
}

test('all products names begin with "Sauce Labs"', async ({ page }) => {
    // Executa a função de login
    await login(page);
    // Localiza o elemento que contém o título dos produtos
    const productTitleLocator = await page.locator(productsPageLocators.productTitle);
    // Obtém o texto de todos os títulos de produtos
    const productTitleList = await productTitleLocator.allTextContents();
    // Itera sobre a lista de títulos de produtos
    for(const item of productTitleList) {
        // Verifica se cada título de produto começa com "Sauce Labs"
        await expect(item.slice(0, 10)).toBe('Sauce Labs');
    }
});

test('add and remove products to cart', async ({ page }) => {
    // Executa a função de login
    await login(page);
    // Clica no botão para adicionar um produto ao carrinho
    await page.locator(productsPageLocators.addBPButton).click(); 
    // Aguarda a mudança de texto no botão de remoção do produto (sinalizando que o produto foi adicionado ao carrinho)
    await page.waitForSelector(productsPageLocators.removeButton);
    // Clica no botão para ir para o carrinho de compras
    await page.locator(productsPageLocators.cartButton).click();
    // Aguarda a presença do título do produto no carrinho
    await page.locator(cartPageLocators.productTitle).waitFor();
    // Verifica se há pelo menos um produto no carrinho
    expect(await page.locator(cartPageLocators.productTitle).count()).toBeGreaterThan(0);
    // Localiza o botão de remoção do produto no carrinho
    const removeButton = await page.locator(cartPageLocators.removeBPButton);
    // Clica no botão de remoção do produto
    await removeButton.click();
    // Aguarda até que o elemento desapareça (indicando que o produto foi removido)
    await removeButton.waitFor({ state: 'hidden' });
    // Clica no botão para continuar comprando
    await page.locator(cartPageLocators.backShopping).click();
    // Verifica se o texto "Products" está visível na página (indicando retorno à página de produtos)
    await expect(page.getByText(expectedTitles.productsPage)).toBeVisible();
});

