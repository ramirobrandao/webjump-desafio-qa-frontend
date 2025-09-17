describe('Adicionar produto ao carrinho de compra', () => {

    require("cypress-xpath");

    beforeEach(() => {
        //acessar a página
        cy.visit('https://magento2-demo.magebit.com/');

        //clicar no link para ir a tela onde será feito o login
        cy.contains('a', 'Sign In').click();

        //chama a função login de dentro do arquivo commands
        cy.login('ramirobrandao@outlook.com', 'AABBcc@123456');
    })

    it('Adiconar um produto ao carrinho de compra', () => {

        //clicar no link para ir a tela onde contem produtos masculinos
        cy.contains('span', 'Men').click();

        //clicar no link para escolher uma camiseta
        cy.xpath('//*[@id="maincontent"]/div[4]/div[2]/div/div/ul[1]/li[3]/a').click();
        cy.xpath('//*[@id="product-item-info_486"]/a/span/span/img').click();

        //clicar para escolher o tamanho
        cy.get('[id="option-label-size-157-item-173"]').click();

        //clicar para escolher a cor
        cy.get('[id="option-label-color-93-item-49"]').click();

        //clicar no botão de adicionar ao carrinho
        cy.contains('button', 'Add to Cart').click();

    })
})
