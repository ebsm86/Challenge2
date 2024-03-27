class LoginPage {
    visit() {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
    }
  
    fillFormAndSubmit(email, password) {
      cy.get('#email').type(email);
      cy.get('#password').type(password);
      cy.get('#submit').click();
      
    }
  }
  
  export default LoginPage;