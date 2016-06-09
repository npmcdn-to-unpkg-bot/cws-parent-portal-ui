describe('creating a profile', function(){


    //Once cleaner is implemented, create profile will login and we will have to login afterwards
    //since next spec logs in
    /*
     // need to logout to test this suite
     afterAll(function() {
        browser.get('#/');
        element(by.id('dropProfile')).click();
        element(by.css('[ng-click="logout()"]')).click();
        browser.waitForAngular();
     });*/

    beforeEach(function() {
        browser.get('#/create-profile');
    });

    it('should validate existence of first name', function() {
        expect(element(by.id('fname')).getAttribute('class')).toMatch('ng-invalid-required');

        element(by.id('fname')).sendKeys("Test");
        expect(element(by.id('fname')).getAttribute('class')).toMatch('ng-valid-required');
    });

    it('should validate existence of last name', function() {
        expect(element(by.id('lname')).getAttribute('class')).toMatch('ng-invalid-required');

        element(by.id('lname')).sendKeys("User");
        expect(element(by.id('lname')).getAttribute('class')).toMatch('ng-valid-required');
    });

    it('should validate existence of zip', function() {
        expect(element(by.id('zip')).getAttribute('class')).toMatch('ng-invalid-required');

        element(by.id('zip')).sendKeys("95642");
        expect(element(by.id('zip')).getAttribute('class')).toMatch('ng-valid-required');
    });

    it('should validate existence of email', function() {
        expect(element(by.id('email')).getAttribute('class')).toMatch('ng-invalid-required');

        element(by.id('email')).sendKeys("joeina.doe@example.com");
        expect(element(by.id('email')).getAttribute('class')).toMatch('ng-valid-required');
    });

    it('should validate existence of password', function() {
        expect(element(by.id('password')).getAttribute('class')).toMatch('ng-invalid-required');

        element(by.id('password')).sendKeys("asdf1234A!");
        expect(element(by.id('password')).getAttribute('class')).toMatch('ng-valid-required');
    });

    it('should validate existence of password confirmation', function() {
        expect(element(by.id('cpassword')).getAttribute('class')).toMatch('ng-invalid-required');

        element(by.id('cpassword')).sendKeys("asdf1234A!");
        expect(element(by.id('cpassword')).getAttribute('class')).toMatch('ng-valid-required');
    });

    it('should validate password matches strength requirements', function() {
        element(by.id('password')).sendKeys("badpass");
        expect(element(by.id('password')).getAttribute('class')).toMatch('ng-invalid-pattern');

        element(by.id('password')).sendKeys("asdf1234A!");
        expect(element(by.id('password')).getAttribute('class')).toMatch('ng-valid-pattern');
    });

    //We don't have a db cleaner in place
    /*
    it('should create a profile if proper fields are entered', function(){
        element(by.id('fname')).sendKeys("Test");
        element(by.id('lname')).sendKeys("User");
        element(by.id('zip')).sendKeys("95642");
        element(by.id('email')).sendKeys("joeina.doe@example.com");
        element(by.id('password')).sendKeys("asdf1234A!");
        element(by.id('cpassword')).sendKeys("asdf1234A!");

        element(by.buttonText("Register")).click();

        expect(browser.getCurrentUrl()).toContain('#/messages/inbox');
    }); */
});