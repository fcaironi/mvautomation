/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
require("dotenv").config();
module.exports = class myVistagePage {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open(path) {
    console.log(baseUrl + `${path}`);
    return browser.url(baseUrl + `${path}`);
  }
};
