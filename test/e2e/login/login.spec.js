describe("hello-protractor", function () {
    describe("login", function () {
        it("should display the correct page url", function () {
            browser.get('/#');
            expect(browser.driver.getCurrentUrl()).toBe('http://localhost:3000/#/messages/inbox');
        });
    });
});