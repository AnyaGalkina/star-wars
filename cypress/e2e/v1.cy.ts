describe('template spec', () => {
  before('visit url',() => {
    cy.visit('/')
  })

  it('passes', () => {
    cy.get('.Button_button__VRghQ').click()

    cy.get(':nth-child(2) > img').should('be.visible')

    cy.get('.Header_activeLink__O0cfS').click().wait(10000)

    // check if option is selected
    cy.get('.Select_select__B0PVy').select('red')

    // open the first character
    cy.get('.CharactersPage_charactersContainer__xzCpw > :nth-child(1)').click()

    // check if heading is correct
    cy.get('.CharacterDetails_characterDetailsContainer__obS39').should('contain.text', 'R2-D2')

    // check if value is correct
    cy.get('.CharacterImage_coloredBlock__8yP2H > .CharacterItem_flexBlock__T7yVv > .ColoredBlock_coloredBlock__iHw2S').should('contain.text', '33BBY')

    // close the modal
    cy.get('.CharacterDetails_closeButton__I-sVq').click()
    cy.get('.Select_select__B0PVy').select('All')

    //check if the page is clickable
    cy.get('.Page_selectedPage__Yhy5f').click()

    // check if title is visible
    cy.get('.CharactersPage_charactersPageHeader__XzN-3').should('be.visible')

  })
})