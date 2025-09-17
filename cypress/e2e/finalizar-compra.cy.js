describe('Finalizar a compra em um usuário com endereço já definido e com produtos no carrinho', () => {

    require("cypress-xpath");

    beforeEach(() => {
        //acessar a página
        cy.visit('https://magento2-demo.magebit.com/');

        //clicar no link para ir a tela onde será feito o login
        cy.contains('a', 'Sign In').click();

        //chama a função login de dentro do arquivo commands
        cy.login('ramirobrandao@outlook.com', 'AABBcc@123456');
    })

    it('Clicar no carrinho de compras e finalizar a compra em um usuário com endereço já definido e com produtos no carrinho', () => {

        //clicar no carrinho de compras
        cy.xpath('/html/body/div[2]/header/div[2]/div[1]/a').click();

        //espera 2 segundos
        cy.wait(2000);

        //clica no botão para confirmar e continuar
        cy.xpath('//*[@id="maincontent"]/div[3]/div/div[2]/div[1]/ul/li[1]/button').click();

        //espera 5 segundos
        cy.wait(5000);

        //clica no botão para confirmar e continuar
        cy.xpath('//*[@id="shipping-method-buttons-container"]/div/button').click();

        //espera 5 segundos
        cy.wait(5000);

        //clica no botão para confirmar e finalizar
        cy.xpath('//*[@id="checkout-payment-method-load"]/div/div/div[2]/div[2]/div[4]/div/button').click();

    })

})