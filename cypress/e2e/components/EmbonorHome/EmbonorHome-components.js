class EmbonorHome {
    navigate() {
        cy.visit('https://staging.portalkoe.cl/login');
    }

  fillFormAndSubmit() {
    cy.get('[data-cy="username"]').type('enrique.morales+cl@embonor.cl');
    cy.get('[data-cy="password"]').type('12345678');
    
  }
  loginClick() {
    cy.get('[data-cy="submit"]').click();

  }
  portalApp() {
    cy.get(':nth-child(2) > .sc-fzXfLO > img').click();
  }
  desplegables() {
    cy.get('.ant-menu-submenu-selected > .ant-menu-submenu-title').click();
    cy.get(':nth-child(2) > .ant-menu-submenu-title > .ant-menu-submenu-arrow').click();
    cy.get(':nth-child(3) > .ant-menu-submenu-title > .ant-menu-submenu-arrow').click();
  }
  
}
export default EmbonorHome;