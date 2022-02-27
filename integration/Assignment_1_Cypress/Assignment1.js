
//Login with  different users by keeping data in fixture
describe('Assignment1-Fixture',function(){
  beforeEach(function(){
    cy.fixture('login-credentials/sauceLoginCredentials')
    .then(function(credentials){
      this.credentials=credentials;
    })
  })
  it('loginWithMultipleUsers',function(){     
  //Loginwith multiple users , verify text-product and logout
cy.login(this.credentials.userName1,this.credentials.passWord)    //user1   
cy.verifyProdTextAndURL()
cy.logout()
//LoginUser2 -  error login credentials
  //cy.login(this.credentials.userName2,this.credentials.passWord)    //user2
  //cy.verifyProdTextAndURL()
  //cy.logout()
  //LoginUser3
    cy.login(this.credentials.userName3,this.credentials.passWord)    //user3
    cy.verifyProdTextAndURL()
    cy.logout()
    //LoginUser4
      cy.login(this.credentials.userName4,this.credentials.passWord)    //user4
      cy.verifyProdTextAndURL()
      cy.logout()
})
  })