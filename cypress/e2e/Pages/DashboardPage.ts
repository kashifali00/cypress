export class DashboardPage {

    get logout_button() {
        cy.get("a[title='Log me out']").should('be.visible');
        return cy.get("a[title='Log me out']")
    }

}