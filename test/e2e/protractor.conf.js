exports.config = {

    specs: [
        'login/login.spec.js',
        'fosterAgency/fosterAgency.spec.js'
    ],

    baseUrl: 'http://localhost:3000',
    //logs in with a test user, then
    onPrepare: function() {
        browser.driver.get('http://localhost:3000/#/login');

        browser.driver.findElement(by.id('email')).sendKeys('Husam28@gmail.com');
        browser.driver.findElement(by.id('password')).sendKeys('abc');
        browser.driver.findElement(by.xpath("//input[@value='Log in']")).click();

        // Login takes some time, so wait until it's done.
        // For the test app's login, we know it's done when it redirects to
        // index.html.
        return browser.driver.wait(function() {
            return browser.driver.getCurrentUrl().then(function(url) {
                return /messages/.test(url);
            });
        }, 10000);
    }
};