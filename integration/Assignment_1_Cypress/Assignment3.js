describe('Assignment3',function(){
    before(function(){
         cy.fixture('login-credentials/sauceLoginCredentials')//calling fixture data
      .then(function(credentials){
        this.credentials=credentials;
      })
      cy.fixture('login-credentials/locator').then(function(locator) {
        this.locator= locator
    })
    })
    it("Adding lowest price to cart & Remove",function(){
      cy.login(this.credentials.userName1,this.credentials.passWord);//method to login  
        cy.lowSort()    //sorting low to high
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click( )   //adding prod to cart
        cy.get('[class="shopping_cart_badge"]').click()     //opening cart
        cy.get('.inventory_item_name').should('contain','Sauce Labs Onesie')//verifying product name
        cy.get('.inventory_item_price').should('contain','$7.99')  //verifying product price
        cy.get('[class="btn btn_secondary btn_small cart_button"]').click()//removing prod from cart
        cy.get(this.locator.emptyCart).should('not.be.visible') //verifying the empty cart

    })
})