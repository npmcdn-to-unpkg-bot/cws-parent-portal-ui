describe("hello-protractor", function () {
    describe("login", function () {
        it("should display the correct title", function () {
            browser.get('/#');
            expect(browser.getTitle()).toBe('CWS Prototype');
        });
    });
});