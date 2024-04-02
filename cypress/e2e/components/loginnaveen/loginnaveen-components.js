class RegistroMaveen {
    navigate() {
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    }

  fillFormAndSubmit() {
    cy.get('#input-email').type('applytesters@mydomain.com');
    cy.get('#input-password').type('Apply123!!!');
    
  }
  loginClick() {
    cy.get('form > .btn').click()
  
  }

  searchtype() {
    cy.get('.form-control').type('Macbook');
    cy.get('.input-group-btn > .btn > .fa').click();
  }

  LogOut() {
    cy.get('.dropdown > .dropdown-toggle > .fa').click();
    cy.get('.dropdown-menu > :nth-child(5) > a').click();
    cy.get('.pull-right > .btn').click();
  }

}

 
export default RegistroMaveen;