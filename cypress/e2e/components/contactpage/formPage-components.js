class FormPage {
    visit() {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/'); 
    }

    fillForm(firstName, lastName, dateOfBirth, email, phone, streetAddress1, city, stateOrProvince, postalCode, country) {
        cy.get('#firstName').type(firstName);
        cy.get('#lastName').type(lastName);
        cy.get('#birthdate').type(dateOfBirth);
        cy.get('#email').type(email);
        cy.get('#phone').type(phone);
        cy.get('#street1').type(streetAddress1);
        cy.get('#city').type(city);
        cy.get('#stateProvince').type(stateOrProvince);
        cy.get('#postalcode').type(postalCode);
        cy.get('#country').type(country); 
    }

    submitForm() {
        cy.get('#submit').click();
    }
}

export default FormPage;