
const signuppage = require('../e2e/pages/signup.page') 
const mainpage = require('../e2e/pages/main.page'); 
const page = require('./pages/page')


describe('Tests in Sign Up Page', () => {
    
        
    it('TC-01: Should sign up on GitLab with valid credentials', () => {   
      mainpage.clickLoginButton();
      mainpage.clicksignupButton();
      signuppage.enterFirstname();
      signuppage.enterLastname();
      signuppage.enterUsername();
      signuppage.enterEmail();
      signuppage.enterPassword();
      signuppage.clicksubmitButton();
      signuppage.ismessageVisible();
      signuppage.ismessageCorrect();
      signuppage.urlUserChecking();   
    }) 

    it('TC-02: Should sign up on GitLab with invalid credentials', () => {   
      mainpage.clickLoginButton();
      mainpage.clicksignupButton();
      signuppage.enterFirstname();
      signuppage.enterLastname();
      signuppage.enterUsername();
      signuppage.enterwrongEmail();
      signuppage.enterPassword();
      signuppage.clicksubmitButton();
      signuppage.isemailmessageVisible();
      signuppage.isemailmessageCorrect();
      signuppage.urlSignupChecking();    
    }) 

    it('TC-03: Should sign in on GitLab with valid credentials', () => {   
      mainpage.clickLoginButton();
      mainpage.clicksignupButton();
      signuppage.clicksubmitButton();
      signuppage.isemptynameVisible();
      signuppage.isemptynameCorrect();
      signuppage.isemptysurnameVisible();
      signuppage.isemptysurnameCorrect();
      signuppage.urlSignupChecking();    
    }) 

    it('TC-04: Should sign up on GitLab with Saleforce', () => {   
      mainpage.clickLoginButton();
      mainpage.clicksignupButton();
      signuppage.clicksaleforceButton();
    }) 
})