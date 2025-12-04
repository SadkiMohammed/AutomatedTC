import ConnexionTools from './Pages/connexionTools.js';
const connexiontest = new ConnexionTools();
describe('Automatisation Exercises', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com');
  });

  it("Test Case 1: Register User", () => {
   connexiontest.createAcount();
   connexiontest.deletCreatedAcount();
   
  });

  it("Test Case 2: Delete User", () => {
    connexiontest.createAcountandLogOut();
    connexiontest.deletAcount();
  });

  it("Test Case 3: Login User with incorrect email and password", () => {
    connexiontest.createAcountandLogOut();
    connexiontest.connexionIncorrect();
  });

  it("Test Case 4: Logout User", () => {
    connexiontest.createAcountandLogOut();
  });

  it("Test Case 5: Register User with existing email", () => {
    connexiontest.createAcountandLogOut();
    connexiontest.acountAllreadyExist();
  });

  it("Test Case 6: Contact Us Form", () => {
    connexiontest.contactUs();
  });

  it("Test Case 7: Test Cases", () => {
    connexiontest.testCases();
  });

  it("Test Case 8: Verify All Products and product detail page", () => {
    connexiontest.products();
  });

  it("Test Case 9: Search Product",() =>{
    connexiontest.serchProducts();
  });

  it("Test Case 10: Verify Subscription in home page",() =>{
    connexiontest.subscription();
  });

  it("Test Case 11: Verify Subscription in Cart page",() =>{
    connexiontest.cart();
  });

  it("Test Case 12: Add Products in Cart",() =>{
    connexiontest.addProducts();
  });

  it("Test Case 13: Verify Product quantity in Cart",() =>{
    connexiontest.createAcount();
    connexiontest.addQuantityProducts();
  });

  it("Test Case 14: Place Order: Register while Checkout",() =>{
    connexiontest.passerCommandeAnonime();
    connexiontest.createAcount();
    connexiontest.continuerCommande();
    connexiontest.deletCreatedAcount();
  });
  
  it("Test Case 14: Place Order: Register while Checkout",() =>{
    connexiontest.passerCommandeAnonime();
    connexiontest.createAcount();
    connexiontest.continuerCommande();
    connexiontest.deletCreatedAcount();
  });
});



 