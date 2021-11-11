describe('new user form', () => {
    const nameInput = () => cy.get('[name="name"]')
    const emailInput = () => cy.get('[name="email"]')
    const pwdInput = () => cy.get('[name="password"]')

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('renders correctly', () => {
        nameInput().should('exist')
        emailInput().should('exist')
        pwdInput().should('exist')
    })

    it('can type in fields', () => {
        const name = 'Brandyn'
        const email = 'dummy@example.com'
        const password = 'dummypassword123'

        nameInput().type(name).should('have.value', name)
        emailInput().type(email).should('have.value', email)
        pwdInput().type(password).should('have.value', password)
    })

    it('can accept TOS', () => {
        cy.get('[type="checkbox"]').check()
        cy.get('[type="checkbox"]').should('be.checked')
    })

    it('can submit the form', () => {
        cy.get('form').submit
    })

    it('cannot submit empty form', () => {
        nameInput().clear()
        emailInput().clear()
        cy.get('button').should('be.disabled')
    })
})