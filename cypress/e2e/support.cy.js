
const mainpage = require('../e2e/pages/main.page'); 
const supportpage = require('../e2e/pages/support.page'); 

describe('Tests for all support services', () => {
        
    it('TC-16: Should navigate user to Contact Support', () => {   
        mainpage.clickLoginButton();
        supportpage.clickcontsctButton();
        supportpage.isresultVisible();
        supportpage.iscontactCorrect();
        supportpage.urlSupportChecking();
    })  

    it('TC-17: Should navigate user to Get Help page', () => {   
        mainpage.clickLoginButton();
        supportpage.clickgethelpButton();
        supportpage.isresultVisible();
        supportpage.isgethelpCorrect();
        supportpage.urlGethelpChecking();
    }) 
    
    it('TC-18: Should navigate user to GitLab Professional Services', () => {   
        mainpage.clickLoginButton();
        supportpage.clickservicesButton();
        //supportpage.isservicesVisible();
        //supportpage.isservicesCorrect();
        //supportpage.urlServicesChecking();
    }) 

    it('TC-19: Should navigate user to Talk to an Expert page', () => {   
        mainpage.clickLoginButton();
        supportpage.clicksalesButton();
        supportpage.issalesVisible();
        supportpage.issalesCorrect();
        supportpage.urlSalesChecking();
    }) 
    
    it('TC-20: Should navigate user to registration page', () => {   
        mainpage.clickLoginButton();
        supportpage.clickregisterButton();
        supportpage.isregisterformVisible();
        supportpage.urlSignupChecking();
    }) 

      
})