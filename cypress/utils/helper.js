

export const randomNumber =(numbers)=>{

    return Math.floor(Math.random()* numbers)
}

export const selectRandomDropdownValue =(ddElement,ddOptions)=>{
cy.get(ddOptions)
.its('length')
.then(($len)=>{
    const lenValue=$len;
    const list=randomNumber(lenValue)

    cy.get(ddOptions)
    .eq(list)
    .then((ele)=>{
cy.get(ddElement).select(ele.val()).should('have.value',ele.val())
    })
})
}

export const selectRandomCheckbox=(element)=>{
cy.get(element)
.its('length')
.then(($len)=>{
    const lenValue=$len;
    const list=randomNumber(lenValue)

    cy.get(element)
    .eq(list)
    .should('not.be.checked')
    .check()
})
}