
const mainpage = require('../e2e/pages/main.page'); 
const trialpage = require('../e2e/pages/trial_expert.page'); 


describe('Tests for free trial and talk to an expert functions', () => {
        
    it('TC-11: Should display "Talk to an expert" form', () => {   
        mainpage.clickexpertsButton();
        trialpage.istitleVisible();
        trialpage.istitleCorrect();
        trialpage.isexpertsformVisible();
        trialpage.urlSalesChecking();
    })  

    it('TC-12: Should display "Free trial" form', () => {   
        mainpage.clicktrialButton();
        trialpage.istrialVisible();
        trialpage.istrialCorrect();
        trialpage.istrialformVisible();
        trialpage.urlTrialChecking();
    }) 
    
      
})