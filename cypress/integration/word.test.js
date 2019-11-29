import { INPUT_LABEL } from '../../src/components/input/constants'

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
    cy.findByLabelText(INPUT_LABEL).type('word')
    cy.findByTestId('submit_button').click()
  })

  cy.findByLabelText('Player 2').within(() => {
    cy.findAllByPlaceholderText(INPUT_LABEL).type('ward')
    cy.findByTestId('letters_input').should('have.value', '3')
  })
})
