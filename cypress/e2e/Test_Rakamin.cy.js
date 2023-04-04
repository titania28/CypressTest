describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://web-staging.rakamin.com/')
      cy.viewport('macbook-13')
      cy.get('.sc-crPCXo > [data-cy="login-page-button"]').click()
      cy.get('[data-cy="login-email-text-field"]').type('cobadeh281@gmail.com')
      cy.get('[data-cy="login-password-text-field"]').type('Bangtan7')
      cy.get('[data-cy="login-submit-button"]').click()
    })
  })