class ConnexionTools {
    constructor() {
        this.generatedEmail = '';
        
        // Login/Signup locators
        this.locatorSignupName = '[data-qa="signup-name"]';
        this.locatorSignupEmail = '[data-qa="signup-email"]';
        this.locatorSignupButton = '[data-qa="signup-button"]';
        this.locatorLoginEmail = '[data-qa="login-email"]';
        this.locatorLoginPassword = '[data-qa="login-password"]';
        this.locatorLoginButton = '[data-qa="login-button"]';
        this.locatorSearchProduct = '[id="search_product"]';
        this.locatorSearchButton = '[id="submit_search"]';
        this.locatorAddToCart = 'a[class="btn btn-default add-to-cart"]';
        this.locatorContinueShopping = '[class="btn btn-success close-modal btn-block"]';
        this.locatorAddToCartDetail = 'button[class="btn btn-default cart"]';
        this.locatorCloseCheckoutModal = 'button[class="btn btn-success close-checkout-modal btn-block"]';
        
        // Account locators
        this.locatorDeleteAccount = 'a[href="/delete_account"]';
        this.locatorAccountDeleted = '[data-qa="account-deleted"]';
        this.locatorContinueButton = 'a[data-qa="continue-button"]';
        this.locatorLogout = 'a[href="/logout"]';
        this.locatorCheckout = 'a[class="btn btn-default check_out"]';
        this.locatorPayment = 'a[href="/payment"]';
        this.locatorNameOnCard = 'input[name="name_on_card"]';
        this.locatorCardNumber = 'input[name="card_number"]';
        this.locatorCvc = 'input[name="cvc"]';
        this.locatorMM = 'input[data-qa="expiry-month"]';
        this.locatorYY = 'input[name="expiry_year"]';
        this.locatorConfirmPayment = 'button[data-qa="pay-button"]';
        
        // Form locators
        this.locatorGender = '[id="id_gender1"]';
        this.locatorPassword = 'input[data-qa="password"]';
        this.locatorDays = 'select#days';
        this.locatorMonths = 'select#months';
        this.locatorYears = 'select#years';
        this.locatorNewsletter = '#newsletter';
        this.locatorOptin = '#optin';
        this.locatorFirstName = 'input[data-qa="first_name"]';
        this.locatorLastName = 'input[data-qa="last_name"]';
        this.locatorAddress1 = 'input[data-qa="address"]';
        this.locatorCountry = 'select#country';
        this.locatorState = 'input[data-qa="state"]';
        this.locatorCity = 'input[data-qa="city"]';
        this.locatorZipcode = 'input[data-qa="zipcode"]';
        this.locatorMobileNumber = 'input[data-qa="mobile_number"]';
        this.locatorCreateAccountButton = 'button[data-qa="create-account"]';
        
        // Navigation locators
        this.locatorTestCases = 'a[href="/test_cases"]';
        this.locatorSignupLogin = 'i[class="fa fa-lock"]';
        this.locatorHome = 'a[href="/"]';
        this.locatorContactUs = 'a[href="/contact_us"]';
        this.locatorTestCasesButton = 'i[class="fa fa-list"]';
        this.locatorProducts = 'a[href="/products"]';
        this.locatorViewProduct = 'a[style="color: brown;"]';

        //Get in Touch locators
        this.locatorName = 'input[name="name"]';
        this.locatorEmail = 'input[name="email"]';
        this.locatorSubject = 'input[name="subject"]';
        this.locatorMessage = 'textarea[name="message"]';
        this.locatorUploadFile = 'input[type="file"]';
        this.locatorSubmitButton = 'input[type="submit"]';
        this.locatorSubscription = 'input[id="susbscribe_email"]';
        this.locatorSubscriptionButton = 'button[id="subscribe"]';
    }
   
    RandomAlpha(length = 8) {
        const letters = "abcdefghijklmnopqrstuvwxyz";
        let result = "";

        for (let i = 0; i < length; i++) {
            result += letters.charAt(Math.floor(Math.random() * letters.length));
        }

        return result;
    }

     genererMail() {
        var mailrandom = Math.floor(Math.random() * 1000);
        return mailrandom + "@live.com";
    }

    createAcount() {
        // Cliquer sur le lien "Signup / Login" dans le menu
        cy.get(this.locatorSignupLogin).click();

        // Saisire Nome et Email
        const name = this.RandomAlpha(12);
        this.generatedEmail = this.genererMail();

        cy.get(this.locatorSignupName).type(name);
        cy.get(this.locatorSignupEmail).type('test'+this.generatedEmail);
        cy.get(this.locatorSignupButton).click();

        // Remplir le formulaire
        cy.get(this.locatorGender).check();
        cy.get(this.locatorPassword).type("Azerty123");
        cy.get(this.locatorDays).select('20');
        cy.get(this.locatorMonths).select('September');
        cy.get(this.locatorYears).select('1995');
        cy.get(this.locatorNewsletter).check();
        cy.get(this.locatorOptin).check();
        cy.get(this.locatorFirstName).type("Sadki");
        cy.get(this.locatorLastName).type("Simo");
        cy.get(this.locatorAddress1).type("36 rue des cites");
        cy.get(this.locatorCountry).select("Canada");
        cy.get(this.locatorState).type("Quebec");
        cy.get(this.locatorCity).type("Montreal");
        cy.get(this.locatorZipcode).type("H2W 2W2");
        cy.get(this.locatorMobileNumber).type("1234567890");
        cy.get(this.locatorCreateAccountButton).click();

        // Verify that 'ACCOUNT CREATED!' is visible
        cy.contains('b', 'Account Created!').should('be.visible');

        // Click 'Continue' button
        cy.contains('a', 'Continue').click();

        // Verify that ' Logged in as username' is visible
        cy.contains('a', 'Logged in as '+name).should('be.visible');   
    }

    deletCreatedAcount() {
    // Click 'Delete Account' button
        cy.get(this.locatorDeleteAccount).click();

        // Verify that 'ACCOUNT DELETED!' is visible
        cy.get(this.locatorAccountDeleted).should('have.text', 'Account Deleted!');

        // Click 'Continue' button
        cy.get(this.locatorContinueButton).click();
    }

    createAcountandLogOut() {
    // Vérifier que la page Test Cases est bien chargée
    cy.get(this.locatorTestCases).should('be.visible');

    // Cliquer sur le lien "Signup / Login" dans le menu
    cy.get(this.locatorSignupLogin).click();

    // Saisire Nome et Email
    const name = this.RandomAlpha(12);
    this.generatedEmail = this.genererMail();

    cy.get(this.locatorSignupName).type(name);
    cy.get(this.locatorSignupEmail).type('test'+this.generatedEmail);
    cy.get(this.locatorSignupButton).click();

    // Remplir le formulaire
    cy.get(this.locatorGender).check();
    cy.get(this.locatorPassword).type("Azerty123");
    cy.get(this.locatorDays).select('20');
    cy.get(this.locatorMonths).select('September');
    cy.get(this.locatorYears).select('1995');
    cy.get(this.locatorNewsletter).check();
    cy.get(this.locatorOptin).check();
    cy.get(this.locatorFirstName).type("Sadki");
    cy.get(this.locatorLastName).type("Simo");
    cy.get(this.locatorAddress1).type("36 rue des cites");
    cy.get(this.locatorCountry).select("Canada");
    cy.get(this.locatorState).type("Quebec");
    cy.get(this.locatorCity).type("Montreal");
    cy.get(this.locatorZipcode).type("H2W 2W2");
    cy.get(this.locatorMobileNumber).type("1234567890");
    cy.get(this.locatorCreateAccountButton).click();

    // Verify that 'ACCOUNT CREATED!' is visible
    cy.contains('b', 'Account Created!').should('be.visible');

    // Click 'Continue' button
    cy.contains('a', 'Continue').click();

    // Verify that ' Logged in as username' is visible
    cy.contains('a', 'Logged in as '+name).should('be.visible');  

    // logout
    cy.contains('a', 'Logout').click();

    // Verify that user is navigated to login page
    cy.get("h2").contains('Login to your account').should('be.visible');

    }

    deletAcount() {
        // Saisie Email et mot de passe
        cy.get(this.locatorLoginEmail).type('test'+ this.generatedEmail);
        cy.get(this.locatorLoginPassword).type("Azerty123");
        cy.get(this.locatorLoginButton).click();

        // Click 'Delete Account' button
        cy.get(this.locatorDeleteAccount).click();

        // Verify that 'ACCOUNT DELETED!' is visible
        cy.get(this.locatorAccountDeleted).should('have.text', 'Account Deleted!');

        // Click 'Continue' button
        cy.get(this.locatorContinueButton).click();
    }
    
    connexionIncorrect(){
        // Cliquer sur le lien "Signup / Login" dans le menu
        cy.get(this.locatorSignupLogin).click();

        // Saisire Nome et Email
        this.generatedEmail = this.genererMail();
        cy.get(this.locatorLoginEmail).type('test'+this.generatedEmail);
        cy.get(this.locatorLoginPassword).type("Azerty");
        cy.get(this.locatorLoginButton).click();
        cy.get("p").contains('Your email or password is incorrect!').should('be.visible');
    }

    acountAllreadyExist(){
        // Vérifier que la page Test Cases est bien chargée
        cy.get(this.locatorTestCases).should('be.visible');

        // Cliquer sur le lien "Signup / Login" dans le menu
        cy.get(this.locatorSignupLogin).click();

        // Saisire Nome et Email
        const name = this.RandomAlpha(12);

        cy.get(this.locatorSignupName).type(name);
        cy.get(this.locatorSignupEmail).type('test'+this.generatedEmail);
        cy.get(this.locatorSignupButton).click();
        // Verify error 'Email Address already exist!' is visible
        cy.get("p").contains('Email Address already exist!').should('be.visible');
    }

    contactUs(){
        cy.get(this.locatorHome).should('be.visible');
        cy.get(this.locatorContactUs).click();
        cy.get("h2").contains('Get In Touch').should('be.visible');
        cy.get(this.locatorName).type('sadki');
        cy.get(this.locatorEmail).type('dodo@live.com');
        cy.get(this.locatorSubject).type('Test Cypress');
        cy.get(this.locatorMessage).type('Ceci est un test automatique avec Cypress.');
        // Uploader le fichier depuis fixtures
        cy.get(this.locatorUploadFile).selectFile('cypress/e2e/Fils/CompteRendu.txt');
        // Soumettre le formulaire
        cy.get(this.locatorSubmitButton).click();
        // Gérer l’alerte JS (le site affiche un alert après submit)
        cy.on('window:alert', (txt) => {
        expect(txt).to.contain('Press OK to proceed!');
        });
        // Vérifier le message de succès (si présent sur la page après submit)
        cy.contains('Success! Your details have been submitted successfully.').should('be.visible');
    }
    testCases(){
        // Vérifier que la page Home visible 
        cy.get(this.locatorTestCases).should('be.visible');
        // Cliquer sur le lien Test Cases
        cy.contains('a', 'Test Cases').click();
        //Verify user is navigated to test cases page successfully
        cy.get("b").contains('Test Cases').should('be.visible');
    }

    products(){
        // Vérifier que la page Home visible 
        cy.get(this.locatorHome).should('be.visible');
        // Cliquer sur le lien Products
        cy.get(this.locatorProducts).click();
        // Verify user is navigated to ALL PRODUCTS page successfully
        cy.get("h2").contains('All Products').should('be.visible');
        cy.get('.product-image-wrapper').should('be.visible').and('have.length.greaterThan', 0);
        //Click first product
        cy.get('.choose').first().click();
        // Verify User is landed to product detail page
        cy.url().should('include', '/product_details/1');
        // Verify product name, category, price, availability, condition, brand is visible
        cy.get('p').contains('Category');
        cy.get('span').contains('Rs');
        cy.get('b').contains('Availability:');
        cy.get('b').contains('Condition:');
        cy.get('b').contains('Brand:');
    }

    serchProducts(){
        // Vérifier que la page Home visible 
        cy.get(this.locatorHome).should('be.visible');
        // Cliquer sur le lien Products
        cy.get(this.locatorProducts).click();
        // Verify user is navigated to ALL PRODUCTS page successfully
        cy.get("h2").contains('All Products').should('be.visible');
        cy.get(this.locatorSearchProduct).type('Tshirt');
        cy.get(this.locatorSearchButton).click();
        cy.get('.product-image-wrapper').should('be.visible').and('have.length.greaterThan', 0);
    }

    subscription(){
        // Vérifier que la page Home visible 
        cy.get(this.locatorHome).should('be.visible');
        // scroll to bottom
        cy.get('h2').contains('Subscription').should('be.visible');
        cy.get(this.locatorSubscription).type('dod@live.com');
        cy.get(this.locatorSubscriptionButton).click();
        cy.contains('You have been successfully subscribed!').should('be.visible');

    }

    cart(){
        // Vérifier que la page Home visible 
        cy.get(this.locatorHome).should('be.visible');
        // Cliquer sur le lien Cart
        cy.contains('a', ' Cart').click();
        // scroll to bottom
        cy.get('h2').contains('Subscription').should('be.visible');
        cy.get(this.locatorSubscription).type('dod@live.com');
        cy.get(this.locatorSubscriptionButton).click();
        cy.contains('You have been successfully subscribed!').should('be.visible');
    }

    addProducts(){
        // Vérifier que la page Home visible 
        cy.get(this.locatorHome).should('be.visible');
        // Cliquer sur le lien Products
        cy.get(this.locatorProducts).click();
        // Verify user is navigated to ALL PRODUCTS page successfully
        cy.get("h2").contains('All Products').should('be.visible');
        cy.get('.product-image-wrapper').should('be.visible').and('have.length.greaterThan', 0);
        //add products 
        cy.get('a[data-product-id="1"]').first().click();
        cy.get(this.locatorContinueShopping).click();
        cy.get('a[data-product-id="2"]').first().click();
        cy.get(this.locatorContinueShopping).click();
        cy.contains('a', ' Cart').click();
        cy.get('[class="product_image"]').should('be.visible').and('have.length.greaterThan', 0);
        cy.get('p[class="cart_total_price"]').first().should('be.visible');
        cy.get('p[class="cart_total_price"]').eq(1).should('be.visible');
    }

    addQuantityProducts(){
        // Vérifier que la page Home visible 
        cy.get(this.locatorHome).should('be.visible');
        // Cliquer sur le lien Products
        cy.get(this.locatorProducts).click();
        // Verify user is navigated to ALL PRODUCTS page successfully
        cy.get("h2").contains('All Products').should('be.visible');
        cy.get('.product-image-wrapper').should('be.visible').and('have.length.greaterThan', 0);
        //add products 
        cy.get(this.locatorViewProduct).first().click();
        cy.get('#quantity').clear().type('4').should('have.value', '4');
        cy.get(this.locatorAddToCartDetail).click();
        cy.get(this.locatorContinueShopping).click();
        // Cliquer sur le lien Cart
        cy.contains('a', ' Cart').click();
        cy.contains('button', '4').should('be.visible');

    }

    passerCommandeAnonime(){
        // Vérifier que la page Home visible 
        cy.get(this.locatorHome).should('be.visible');
        // Cliquer sur le lien Products
        cy.get(this.locatorProducts).click();
        // Verify user is navigated to ALL PRODUCTS page successfully
        cy.get("h2").contains('All Products').should('be.visible');
        cy.get('.product-image-wrapper').should('be.visible').and('have.length.greaterThan', 0);
        //add products 
        cy.get(this.locatorViewProduct).first().click();
        cy.get('#quantity').clear().type('2').should('have.value', '2');
        cy.get(this.locatorAddToCartDetail).click();
        cy.get(this.locatorContinueShopping).click();
        // Cliquer sur le lien Cart
        cy.contains('a', ' Cart').click();
        cy.get(this.locatorCheckout).click();
        cy.get(this.locatorCloseCheckoutModal).click();
    }

    continuerCommande(){
        cy.contains('a', ' Cart').click();
        cy.get(this.locatorCheckout).click();
        cy.get(this.locatorMessage).type('message');
        cy.get(this.locatorPayment).click();
        cy.get(this.locatorNameOnCard).type('Sadki Simo');
        cy.get(this.locatorCardNumber).type('1234567890123456');
        cy.get(this.locatorCvc).type('123');
        cy.get(this.locatorMM).type('12');
        cy.get(this.locatorYY).type('2025');
        cy.get(this.locatorConfirmPayment).click();
        cy.get('p').contains('Congratulations! Your order has been confirmed!').should('be.visible');
        cy.get(this.locatorContinueButton).click();
    }
}

export default ConnexionTools;
