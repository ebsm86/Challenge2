import HomePage from '../components/homepage/HomePage-components';
import RegistroPage from '../components/registro/registro-components';
import LoginPage from '../components/login/login-components';
import AddUserPage from '../components/adduser/addUser-components';
import AddContactPage from '../components/addCojtactPage/addContactPage-components';
import FormPage from '../components/contactpage/formPage-components';
const addContactPage = new AddContactPage();
const addUserPage = new AddUserPage();
const loginPage = new LoginPage();
const registroPage = new RegistroPage();
const homePage = new HomePage();
const formPage = new FormPage();
describe('Proceso de registro y manejo de contactos', () => {
    it.only('Login con usuario y contrseña', () => {
        homePage.navigate();
        homePage.clickSignup();

        
        registroPage.fillFormAndSubmit();
        registroPage.clicklogout();
        loginPage.navigate()
        loginPage.fillFormAndSubmit(registroPage.email, registroPage.password);
        registroPage.addUsers();
        
        cy.task('parseCsv', { filePath: 'users.csv' }).then((contacts) => {
            console.log(contacts);
            contacts.forEach((contact) => {
                formPage.fillForm(
                    contact.firstName,
                    contact.lastName,
                    contact.birthdate,
                    contact.email,
                    contact.phone,
                    contact.street1,
                    contact.city,
                    contact.stateProvince,
                    contact.postalCode,
                    contact.country
                );
                registroPage.addUsers();
                
            });
            
    });



    } )
    it('Debería registrar un usuario, iniciar sesión y crear contactos', () => {
       
        homePage.navigate();
        homePage.clickSignup();

        
        registroPage.fillFormAndSubmit();

        // const email = 'enriquecypress01@gmail.com';
        // const password = 'Enrique!';

        
        // loginPage.visit();
        // loginPage.fillFormAndSubmit(email, password);

        
        addUserPage.clickaddUser();

        
    addUserPage.clickaddUser();
});  
});













