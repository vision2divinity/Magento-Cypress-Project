describe('erply task2', () => {
    it('Login HomePage', () => {
cy.visit('https://login.erply.com/')
cy.get('#clientCode').type('104572')
cy.get('#username').type('testassignment')
cy.get('#password').type('PosTestAssignment123')
cy.path('/html[1]/body[1]/div[1]/div[1]/div[3]').click() 
})
})