describe('Word', () => {
  it('auto calculates the letters for player 2 when word is set', () => {
    cy.visit('/')

    cy.findByText('My Word')
      .parent()
      .within(() => {
        // findByLabelText does not work here
        cy.get('#validated_input').type('ward')
        cy.findByTestId('submit_button').click()
      })

    cy.findByText('Player 2')
      .parent()
      .within(() => {
        cy.get('#validated_input').type('word')
        cy.findByTestId('letters_input').should('have.value', '3')
      })
  })
})
