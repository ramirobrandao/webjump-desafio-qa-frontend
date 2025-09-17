describe('Cadastro sme preencher os campos', () => {

    beforeEach(() => {
        //acessar a página
        cy.visit('https://magento2-demo.magebit.com/');

        //clicar no link para ir a tela onde será criado uma nova conta
        cy.contains('a', 'Create an Account').click();
    })

    it('Clicar em cadastrar sem preencher os campos obrigatórios e verificar a mensagem de erro está visível', () => {

        //clica no botão para criar conta
        cy.contains('button', 'Create an Account').click();

        //verifica se o texto está visível na tela
        cy.contains('Invalid Form Key. Please refresh the page.').should('be.visible')
    })

})