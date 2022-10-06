///reference types ="Cypress"/>
describe('magento practice', function(){

it ('magento', function() {

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type('c')
        
    cy.wait(1000)
   // cy.get('.product:visible').should('have.length',4)
   //parent child channing
   cy.get('.products').find('.product').should('have.length',7)
  cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

})
})