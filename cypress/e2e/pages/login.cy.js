import RegistroPage from '../components/registro/registro-components';
import LoginPage from '../components/login/login-components';
import ContactPage from '../components/contac/contac-components';


describe('Proceso de registro y manejo de contactos', () => {
  it('Debería registrar un usuario, iniciar sesión y crear contactos', () => {
    const registroPage = new RegistroPage();
    registroPage.visit();
    registroPage.fillFormAndSubmit();

    const userEmail = 'elEmailGenerado@example.com';
    const userPassword = 'TuPassword123!';

    const loginPage = new LoginPage();
    loginPage.visit();
    loginPage.fillFormAndSubmit(userEmail, userPassword);

    // Crear contactos desde un archivo CSV
    cy.fixture('contacts.csv').then((contacts) => {
      contacts.forEach(contact => {
        const contactPage = new ContactPage();
        contactPage.visit();
        contactPage.fillFormAndSubmit(contact.name, contact.email, contact.address, contact.phone);
      });
    });

    // Cerrar sesión
    cy.get('a[href="/users/sign_out"]').click();
  });
});