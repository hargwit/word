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
    cy.getByLabelText('Enter word...', { container: subject }).type('word')
    cy.findByTestId('submit_button', { container: subject }).click()
  })

  cy.findByLabelText('Player 2').then(subject => {
    cy.findAllByPlaceholderText('Enter word...', { container: subject }).type(
      'ward',
    )
    cy.findByTestId('letters_input', { container: subject }).should(
      'have.value',
      '3',
    )
  })
})
