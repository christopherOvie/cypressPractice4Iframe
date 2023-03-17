/// <reference types="cypress" />

import 'cypress-iframe'
describe('example to-do app', () => {
  beforeEach(() => {
   
    cy.visit('http://links.giveawayoftheday.com/demo.guru99.com/')
  })
//#save > span.mat-button-wrapper > div > span  accept
  it('displays two todo items by default', () => {
    cy.frameLoaded('#site_iframe')//load the frame
    cy.iframe('#site_iframe')            //interact wt the frame
    .find(".dropdown-toggle")
    .first()
    .trigger('mouseover').click()
    .next()
    .find('li')
    .contains('Login')
    .click()
   .then(()=>{
    cy.frameLoaded('#site_iframe')//load the frame
    cy.iframe('#site_iframe')
    .find('#email').type('abc')
   })

 

  })
})
