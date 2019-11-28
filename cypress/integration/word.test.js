it('renders all components', () => {
  cy.visit('/')

  cy.findByText('Word').should('exist')
  cy.findByText('Letters').should('exist')
  cy.findByText('Player 1').should('exist')
  cy.findByText('Player 2').should('exist')
  cy.findByText('My Word').should('exist')
  cy.findByText('About').should('exist')
})

it('it auto calculates the letters for player 2 when word is set', () => {
  cy.visit('/')

  cy.findByLabelText('My Word').within(() => {
    cy.findByLabelText('Enter word...').type('word')
    cy.findByTestId('submit_button').click()
  })

  cy.findByLabelText('Player 2').within(() => {
    cy.findAllByPlaceholderText('Enter word...').type('ward')
    cy.findByTestId('letters_input').should('have.value', '3')
  })
})
