class ContactsPage {
    constructor() {
      this.endpoint = '/contacts';
    }
  
    mockContacts() {
      cy.intercept('GET', this.endpoint, {
        statusCode: 200,
        body: [
            {
                firstName: "Pepe",
                lastName: "Trueno",
                birthdate: "2015-05-07",
                email: "pepetrueno@gmail.com",
                phone: "11111111111",
                street1: "Saltadilla 123",
                city: "Michoacan",
                stateProvince: "Morelos",
                postalCode: "6050",
                country: "Mexico"
              },
              {
                firstName: "Chavo",
                lastName: "Trueno",
                birthdate: "2001-01-01",
                email: "elchavodel8@gmail.com",
                phone: "22222222222",
                street1: "La Vecindad del chavo 8",
                city: "Monterrey",
                stateProvince: "Chiapas",
                postalCode: "5698",
                country: "Guatemala"
              },
              {
                firstName: "Elon",
                lastName: "Musk",
                birthdate: "2015-06-12",
                email: "starlink@spacex.com",
                phone: "333333333",
                street1: "Silicom valley",
                city: "Baja",
                stateProvince: "California",
                postalCode: "4356",
                country: "Estados unidos"
              },
              {
                firstName: "Luis",
                lastName: "Perez",
                birthdate: "2001-01-09",
                email: "pepe@tupapa.com",
                phone: "25344748585",
                street1: "La cuica",
                city: "Potosi",
                stateProvince: "Culiacan",
                postalCode: "6878",
                country: "Holanda"
              },
              {
                firstName: "Pedro",
                lastName: "Garcia",
                birthdate: "2003-09-02",
                email: "trebeca@fica.com",
                phone: "848394959",
                street1: "Los condes",
                city: "Santiago",
                stateProvince: "Los condes",
                postalCode: "13242",
                country: "Chile"
              }


        ],
      }).as('getContacts');
    }
  }
  
  export default ContactsPage;