const request = require("request");

const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request('https://api.ipify.org?format=json', (error, response, body) => {

    if (error) {
      return callback(error, null);
    }
    
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Reponse: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const ip = JSON.parse(body).ip;
    
    callback(error, ip);
  });
};


const fetchCoordsByIP = function(ip, callback) {
  request(`http://ipwho.is/${ip}`, (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }

    const jsonObject = JSON.parse(body);

    if (!jsonObject.success) {
      const message = `Success status was ${jsonObject.success}. Server message says: ${jsonObject.message} when fetching for IP${jsonObject.ip}`;
      callback(Error(message), null);
      return;
    }

    const latitude = JSON.parse(body).latitude;
    const longitude = JSON.parse(body).longitude;
    const coordinates = `${latitude}, ${longitude}`;

    callback(null, coordinates);
    

  });
};



module.exports = { fetchMyIP, fetchCoordsByIP };