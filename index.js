exports.getJIRASession = function(username, password, serverAddress, __callback){
  var cheerio = require('cheerio');
  var request = require('request');
  request(serverAddress, (error, response, body)=> {
    if (error) throw error;
    if (response.statusCode !== 200) {
      console.err('FAILED TO LOG INTO JIRA!');
    }
    var $ = cheerio.load(body);
    __callback(response.headers['set-cookie']);
  });
};
