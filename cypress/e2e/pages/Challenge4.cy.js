import HomePage from '../components/homepage/HomePage-components';
import RegistroPage from '../components/registro/registro-components';
import LoginPage from '../components/login/login-components';
import ContactsPage from '../components/contactpage1/contactpage1-components';
import UsersPage from '../components/userspage/userpage-components'

describe('Login y mock de endpoint con POM', () => {
    it('debe permitir el login y mockear la lista de contactos', () => {
        const homePage = new HomePage();
        const registroPage = new RegistroPage
        const loginPage = new LoginPage();
        const contactsPage = new ContactsPage();
        const usersPage = new UsersPage();

        contactsPage.mockContacts();

        homePage.navigate();
        homePage.clickSignup();

        registroPage.fillFormAndSubmit();

        loginPage.navigate()
        loginPage.fillFormAndSubmit('enriquebso@ypmail.com', '12345678');

        cy.wait('@getContacts');

        const namesToCheck = ['Pepe', 'Chavo', 'Elon', 'Luis', 'Pedro'];

        namesToCheck.forEach((name) => {
            usersPage.getUserName(name).should('exist');
        });
    });
});

