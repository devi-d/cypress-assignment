describe('flipkart',()=>{


it("flipkart shopping",()=> {
    cy.visit('https://www.flipkart.com/')
    cy.laptopKeyboards()      //selecting Laptop keyboards
    cy.priceRange()           //selecting price range as 1000 to 2000
    cy.contains('Price -- High to Low').click() // price sort to high to low 
    cy.fetchingProductDetails()   //fetching highest product details

})
})