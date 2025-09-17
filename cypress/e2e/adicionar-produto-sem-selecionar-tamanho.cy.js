describe('Tentar adicionar produto ao carrinho de compra sem selecionar o tamanho', () => {

    require("cypress-xpath");

    beforeEach(() => {
        //acessar a página
        cy.visit('https://magento2-demo.magebit.com/');

        //clicar no link para ir a tela onde será feito o login
        cy.contains('a', 'Sign In').click();

        //chama a função login de dentro do arquivo commands
        cy.login('ramirobrandao@outlook.com', 'AABBcc@123456');
    })

    it('Adicionar um produto ao carrinho de compra sem escolher o tamanho e verificar se a mensagem de erro está visível na tela', () => {

        //clicar no link para ir a tela onde contem produtos masculinos
        cy.contains('span', 'Men').click();

        //clicar no link para escolher uma camiseta
        cy.xpath('//*[@id="maincontent"]/div[4]/div[2]/div/div/ul[1]/li[3]/a').click();
        cy.xpath('//*[@id="product-item-info_486"]/a/span/span/img').click();

        //clicar no botão de adicionar ao carrinho
        cy.contains('button', 'Add to Cart').click();

        //verifica se o texto está visível na tela
        cy.contains('This is a required field.').should('be.visible')

    })
})
