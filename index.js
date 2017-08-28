exports.getJIRASession = function(username, password, serverAddress, __callback){
  var request = require('request');
  request(serverAddress, (error, response, body)=> {
    if (error) throw error;
    if (response.statusCode !== 200) {
      console.err('FAILED TO LOG INTO JIRA!');
    }
    __callback(response.headers['set-cookie']);
  });
};
