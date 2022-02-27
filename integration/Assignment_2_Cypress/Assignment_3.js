//Checkout missing data
describe('Adding prod to cart & checkout',function(){
    beforeEach(function(){
      cy.fixture('login-credentials/sauceLoginCredentials')
      .then(function(credentials){
        this.credentials=credentials;
      })
    })
    it("firstname_empty",function(){
      cy.login(this.credentials.userName1,this.credentials.passWord);//method to login 
      cy.item1()   //adding prod to cart
      cy.checkout('{alt}',this.credentials.lastName,this.credentials.postalCode)  //firstname is empty
      cy.firstError(this.credentials.firstNameError)//firstname missing error
      cy.checkout(this.credentials.firstName,'{alt}',this.credentials.postalCode)  //lastname is empty
      cy.lastError(this.credentials.lastNameError)//lastname missing error
      cy.checkout(this.credentials.firstName,this.credentials.lastName,'{alt}')  //postalCode is empty
      cy.lastError(this.credentials.postalCodeError)//postalCode missing error
          })

  })
  
    