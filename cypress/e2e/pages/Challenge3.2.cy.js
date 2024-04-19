describe('Login y busqueda de aritculo', () => {
    it("Debe navegar, loguearse y buscar 'Macbook'", () => {
        cy.login('applytesters@mydomain.com', 'Apply123!!!');
        cy.searchType('searchType');
        cy.logout('logout');

    })
})