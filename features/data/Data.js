const data = require("../data/Data.json");

class Data {
  getCredentials(userType) {
    return data.find((user) => user.type === userType && user.env  === process.env.Env); 
  }
}

module.exports = new Data();
