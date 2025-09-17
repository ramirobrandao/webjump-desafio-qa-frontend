describe('Página de login', () => {

    beforeEach(() => {
        //acessar a página
        cy.visit('https://magento2-demo.magebit.com/');

        //clicar no link para ir a tela onde será feito o login
        cy.contains('a', 'Sign In').click()
    })

    it('Preencher os campos do Login corretamente para realizar o login', () => {

        //chama a função login de dentro do arquivo commands
        cy.login('ramirobrandao@outlook.com', 'AABBcc@123456');
    })
})