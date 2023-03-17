import {selectRandomDropdownValue,selectRandomCheckbox} from "../1-getting-started/../../utils/helper"
describe('handling dynamic of random', () => {
    beforeEach(() => {
     
      cy.visit('https://www.globalsqa.com/samplepagetest/')
    })

    it('testing dropdown random selection', () => {
cy.get('#g2599-name').clear()
.type('peter')
cy.get('#g2599-email').clear().type('pet@gmail.com')

//cy.get('#g2599-experienceinyears').select('10+')
selectRandomDropdownValue('#g2599-experienceinyears','#g2599-experienceinyears option')

selectRandomCheckbox("[name='g2599-expertise[]']")
selectRandomCheckbox("[type='radio']")
    })


})
