describe('Página de login', () => {

    beforeEach(() => {
        //acessar a página
        cy.visit('https://magento2-demo.magebit.com/');

        //clicar no link para ir a tela onde será feito o login
        cy.contains('a', 'Sign In').click();
    })

    it('Clicar em login sem preencher os campos e verificar se a mensagem de erro está visível', () => {

        //clicar no botão de login
        cy.contains('button', 'Sign In').click();

        //verifica se o texto está visível na tela
        cy.contains('Invalid Form Key. Please refresh the page.').should('be.visible')

    })
})