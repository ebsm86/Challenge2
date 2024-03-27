class RegistroPage {
//  visit() {
//     cy.visit('https://thinking-tester-contact-list.herokuapp.com/addUser');
//   }

  fillFormAndSubmit() {
    cy.get('#firstName').type('pepe');
    cy.get('#lastName').type('Trueno');
    cy.get('#email').type('enriquecypress01@gmail.com');
    cy.get('#password').type('Enrique!');
    cy.get('#submit').click();
  }
}

export default RegistroPage;