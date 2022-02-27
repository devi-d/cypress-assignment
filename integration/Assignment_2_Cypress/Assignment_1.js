//Login,adding prod to cart & checkout
describe('Adding prod to cart & checkout',function(){
  before(function(){
       cy.fixture('login-credentials/sauceLoginCredentials')//calling fixture data
    .then(function(credentials){
      this.credentials=credentials;
    })
  })
  it("adding prod & checkout",function(){
    cy.login(this.credentials.userName1,this.credentials.passWord);//method to login 
    cy.item1()   //adding prod to cart
    cy.checkout(this.credentials.firstName,this.credentials.lastName,this.credentials.postalCode);//method to checkout
        cy.cancelVerify().should('be.visible'); //verifying Cancel     
        cy.finishVerify().should('be.visible'); //verifying finish     


  })
})
