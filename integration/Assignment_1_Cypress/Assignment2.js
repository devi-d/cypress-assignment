//Login and add prod to the cart,and verify name and price
describe('Assignment2',function(){
    before(function(){
         cy.fixture('login-credentials/sauceLoginCredentials')//calling fixture data
      .then(function(credentials){
        this.credentials=credentials;
      })
    })
    it("Adding prod to cart & veirfy",function(){
      cy.login(this.credentials.userName1,this.credentials.passWord);//method to login  
        cy.item2()//adding product  to cart 
        cy.gotoCart()       //goto Cart
        cy.get('.inventory_item_name').should('contain','Sauce Labs Fleece Jacket')//verifying product name
        cy.get('.inventory_item_price').should('contain','$49.99')  //verifying product price
    })
})