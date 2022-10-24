
const mainpage = require('../e2e/pages/main.page'); 
const searchpage = require('../e2e/pages/search.page'); 


describe('Tests for search work', () => {
        
    it('TC-13: Should check search work', () => {   
        mainpage.clicksearchButton();
        searchpage.enterSearchItem();
        searchpage.pressEnter();
        searchpage.isresulttitleVisible();
        searchpage.urlAboutChecking();
    })  

    it('TC-14: Should check search suggestions work', () => {   
        mainpage.clicksearchButton(),
        searchpage.clickdevopsButton();
        searchpage.urlDevopsChecking();
    }) 
    
    it('TC-15: Should redirect user to sign in form frome search page', () => {   
        mainpage.clicksearchButton(),
        searchpage.clickGitlabButton()
        searchpage.urlSigninChecking();
    }) 

      
})