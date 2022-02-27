//verifying checkout and overview pages
describe('verifying checkout&overview pages',function(){
    beforeEach(function(){
      cy.fixture('login-credentials/sauceLoginCredentials')
      .then(function(credentials){
        this.credentials=credentials;
      })
    })
    it("addProdCheckout&OverviewMerssage",function(){
      cy.login(this.credentials.userName1,this.credentials.passWord);//method to login 
      cy.item1()   //adding prod to cart
      cy.item2()
      cy.checkout(this.credentials.firstName,this.credentials.lastName,this.credentials.postalCode);//method to checkout
      //method to verify checkout products and order placed note
      cy.checkoutVerify_thankYouMessage(this.credentials.itemName1,this.credentials.itemPrice1,
        this.credentials.itemName2,this.credentials.itemPrice2,this.credentials.paymentInfo,
        this.credentials.shippinginfo,this.credentials.itemTotal,this.credentials.tax,this.credentials.total)
    }) 
  })   