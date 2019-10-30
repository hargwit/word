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

  cy.findByLabelText('My Word').then(subject => {
    cy.findByPlaceholderText('Enter word...', { container: subject }).type(
      'word',
    )
    cy.findByTestId('submit_button', { container: subject }).click()
  })
})
