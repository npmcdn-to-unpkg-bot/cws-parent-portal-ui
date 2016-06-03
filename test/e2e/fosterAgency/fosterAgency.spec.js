describe('listing foster agencies', function() {
    it('should load the correct page', function(){
        browser.get('/#/foster-agency');
        expect(element(by.id('foster-agency-title')).getText()).toBe('Foster agencies in your zip code');
    });
});