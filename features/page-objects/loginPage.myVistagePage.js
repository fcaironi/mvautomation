const myVistage = require("./myVistagePage");
const data = require("../data/Data");
const selectors = {
  path: "login",
  inputUser: "//*[@name='username']",
  inputPassword: "//*[@name='password']",
  btnLogin: "//button[@type='submit']",
  lbllogo: "#logo"
};

class loginPage extends myVistage {
  get inputUser() {
    return $(selectors.inputUser);
  }
  get inputPassword() {
    return $(selectors.inputPassword);
  }
  get btnLogin() {
    return $(selectors.btnLogin);
  }
  get lbllogo() {
    return $(selectors.lbllogo);
  }

  open() {
    return super.open(selectors.path);
  }

  logout() {
    return super.open("logout");
  }

  async login(user) {
    const credentials = data.getCredentials(user);
    const username = credentials.username;
    const password = credentials.password;
    await this.inputUser.setValue(username);
    await this.inputPassword.setValue(password);
    await new Promise(r => setTimeout(r, 1000));
    await this.btnLogin.click();
    await expect(this.lbllogo).toBeDisplayed();
  }
}

module.exports = new loginPage();
