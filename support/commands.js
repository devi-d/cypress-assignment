Cypress.Commands.add('login',(email,password)=>{        //login
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type(email)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click();
})
Cypress.Commands.add('logout',()=>{
    cy.get('[id="react-burger-menu-btn"]').click();
    cy.get('[id="logout_sidebar_link"]').click();
})
Cypress.Commands.add('verifyProdTextAndURL',()=>{
    cy.get('.title').should('contain.text','Products')
    cy.url() .should('be.equal', 'https://www.saucedemo.com/inventory.html')
})
Cypress.Commands.add('checkout',(firstName,lastName,postalCode)=>{  //checkout
    cy.get('[class="shopping_cart_badge"]').click()
    cy.get('[id="checkout"]').click();                  
        cy.get('[id="first-name"]').type(firstName);    
        cy.get('[id="last-name"]').type(lastName);
        cy.get('[id="postal-code"]').type(postalCode);
        cy.get('[id="continue"]').click()

})
    Cypress.Commands.add('gotoCart',()=>{
        cy.get('[class="shopping_cart_badge"]').click();  
    })
Cypress.Commands.add('item1',()=>{          //adding item1 to cart
        cy.get('[id="add-to-cart-sauce-labs-onesie"]').click()    
})
Cypress.Commands.add('item2',()=>{          //adding item2 to cart
    cy.get('[id="add-to-cart-sauce-labs-fleece-jacket"]').click()
})
Cypress.Commands.add('cancelVerify',()=>{       //verifying cancel&verify is visible
    cy.get('[id="cancel"]')
})
Cypress.Commands.add('finishVerify',()=>{
    cy.get('[id="finish"]')
})
Cypress.Commands.add('checkoutVerify_thankYouMessage',(item_1,price_1,item_2,price_2,payment_info,shipping_info,item_total,tax_value,total_value)=>{
    cy.get('[class="inventory_item_name"]').should('contain.text',item_1)
    cy.get('[class="inventory_item_price"]').should('contain.text',price_1)
    cy.get('[class="inventory_item_name"]').should('contain.text',item_2)
    cy.get('[class="inventory_item_price"]').should('contain.text',price_2)
    cy.get('[class="summary_value_label"]').should('contain.text',payment_info)    //verifying payment info
    cy.get('[class="summary_value_label"]').should('contain.text',shipping_info)   //verifying shipping info
    cy.get('[class="summary_subtotal_label"]').should('contain.text',item_total)//verifying item total
    cy.get('[class="summary_tax_label"]').should('contain.text',tax_value)//verifying tax
    cy.get('[class="summary_total_label"]').should('contain.text',total_value)  //verifying total amount
    cy.get('[class="btn btn_action btn_medium cart_button"]').click()   //finish button
    cy.get('[class="complete-header"]').should('contain','THANK YOU FOR YOUR ORDER') //confirming order 
    })
    Cypress.Commands.add('firstError',(fError)=>{
        cy.get('[class="error-message-container error"]').should('contain.text',fError);
    })
    Cypress.Commands.add('lastError',(lError)=>{
        cy.get('[class="error-message-container error"]').should('contain.text',lError);

    })
    Cypress.Commands.add('postalError',(pError)=>{
        cy.get('[class="error-message-container error"]').should('contain.text',pError);
    })
    Cypress.Commands.add('highSortVerify',()=>{
        cy.get('.product_sort_container').select('Price (high to low)') 
        cy.get('.product_sort_container').should('have.value',"hilo")
        cy.get(':nth-child(1)>.inventory_item_description>.pricebar>.inventory_item_price').should('have.text','$49.99')

    })
    Cypress.Commands.add('lowSort',()=>{
        cy.get('.product_sort_container').select('Price (low to high)') 
        cy.get('.product_sort_container').should('have.value','lohi')
    })
    Cypress.Commands.add('laptopKeyboards',()=>{
        cy.contains('Electronics').trigger('mouseover')
        cy.contains('Laptop Accessories').trigger('mouseover')
         cy.contains('Laptop Keyboards').click()
        })
        Cypress.Commands.add('priceRange',()=>{
            cy.get('._1YAKP4 > ._2YxCDZ').select('1000').should('have.value','1000')
            cy.get('._3uDYxP > ._2YxCDZ').select('2000').should('have.value','2000')

        })
        Cypress.Commands.add('fetchingProductDetails',()=>{
            cy.get('[title="dprui A1278 Internal Laptop Keyboard"]').should('contain.text','dprui A1278 Internal Laptop Keyboard')
        })





