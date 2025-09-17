describe('Finalizar a compra com carrinho vazio', () => {

    require("cypress-xpath");

    beforeEach(() => {
        //acessar a página
        cy.visit('https://magento2-demo.magebit.com/');

        //clicar no link para ir a tela onde será feito o login
        cy.contains('a', 'Sign In').click();

        //chama a função login de dentro do arquivo commands
        cy.login('ramirobrandao@outlook.com', 'Abcd1234');
    })

    it('Clicar no carrinho de compras e verificar a mensagem de carrinho vazio', () => {

        //clicar no carrinho de compras
        cy.xpath('/html/body/div[2]/header/div[2]/div[1]/a').click();

        //verifica se o texto está visível na tela
        cy.contains('You have no items in your shopping cart.').should('be.visible')

    })

})
