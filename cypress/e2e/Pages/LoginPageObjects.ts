export class LoginPage {

    get sign_in_button() {
        return cy.get("a[title='Log in to your customer account']")
    }

    get username_field() {
        return cy.get('#email')
    }

    get password_field() {
        return cy.get('#passwd')
    }

    get login_button() {
        return cy.get('button[id=\'SubmitLogin\'] span')
    }

    get error_message_upon_invalid_cred() {
        return cy.get("div[class='alert alert-danger'] ol li")
    }

    get error_message_invalid_email() {
        return cy.get("div[id='create_account_error'] ol li")
    }

    get submitButton() {
        cy.scrollTo('bottom')
        return cy.get("button[id='SubmitCreate'] span")
    }
}