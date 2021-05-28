/**
 * Dependecy Modules
 */

let assert = require("assert").strict;
let webdriver = require("selenium-webdriver");
require("geckodriver");

const serverUri = "http://localhost:3000/";
const appTitle = "Aleksa Cekić | Portfolio";

let browser = new webdriver.Builder()
    .usingServer(serverUri)
    .withCapabilities({browserName: "chrome"})
    .build();

/**
 * Function to get the title and resolve it it promise.
 * @return {Promise<unknown>} [description]
 */
const logTitle = () => {
    return new Promise((reject, resolve) => {
        browser.getTitle().then(title => {
            resolve(title);
        });
    })
}

describe("Contact Page", () => {

    /**
     * Test case to load our application and check the title.
     */

    it("Should load the contact page and check the title", () => {
        return new Promise((reject, resolve) => {
            browser.get(`${serverUri}`)
                .then(logTitle())
                .then(title => {
                    assert.strictEqual(title, appTitle);
                    resolve();
                })
                .catch(err => reject(err));
        })
    });

    /**
     * Test case to check if the submit button is loaded.
     */
    it("Should check if the submit button is loaded", () => {
        return new Promise((reject, resolve) => {
            browser
                .findElement({id: "submit-btn"})
                .then(() => resolve())
                .catch(() => reject())
        });
    });

    /**
     * End of test cases use.
     * Closing the browser and exit.
     */
    after(() => {
        browser.quit();
    });

});
