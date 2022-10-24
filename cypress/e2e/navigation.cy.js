
const mainpage = require('../e2e/pages/main.page'); 

describe('Tests for header navigation', () => {
        
    it('TC-05: Should navigate to "Why GitLab" section', () => {   
      mainpage.clickwhygitlabButton();
      mainpage.iswhyformVisible();
      mainpage.iswhyformCorrect();
      mainpage.urlAboutChecking();
    })  

    it('TC-06: Should navigate to "Platform" section', () => {   
      mainpage.clickplatformButton();
      mainpage.isplatformformVisible();
      mainpage.isplatformformCorrect();
      mainpage.urlAboutChecking();
    }) 
    
    it('TC-07: Should navigate to "Solutions" section', () => {   
      mainpage.clicksolutionsButton();
      mainpage.issolutionsformVisible();
      mainpage.issolutionsformCorrect();
      mainpage.urlAboutChecking();
    }) 

    it('TC-08: Should navigate to "Pricing" section', () => {   
      mainpage.clickpricingButton();
      mainpage.ispricingtitleVisible();
      mainpage.ispricingtitleCorrect();
      mainpage.urlPricingChecking();
    })  

    it('TC-09: Should navigate to "Partners" section', () => {   
      mainpage.clickpartnersButton();
      mainpage.ispartnerformVisible();
      mainpage.ispartnersformCorrect();
      mainpage.urlAboutChecking();
    }) 
    
    it('TC-10: Should navigate to "Resources" section', () => {   
      mainpage.clickresourcesButton();
      mainpage.isresourcesformVisible();
      mainpage.isresourcesformCorrect();
      mainpage.urlAboutChecking();
    }) 

      
})