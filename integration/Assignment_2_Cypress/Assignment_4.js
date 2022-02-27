//login,sort to higher price and verify
describe('Adding prod to cart & checkout',function(){
    beforeEach(function(){
      cy.fixture('login-credentials/sauceLoginCredentials')
      .then(function(credentials){
        this.credentials=credentials;
      })
    })
    it("higherPriceSorting",function(){
        cy.login(this.credentials.userName1,this.credentials.passWord);//method to login 
        cy.highSortVerify()       //sorting price high to low, and verify
        
    })
})
