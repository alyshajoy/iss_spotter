const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned IP:", ip);
// });

// fetchCoordsByIP(("50.66.36.130"), (error, data) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned coordinates: ", data);
// });

const coordinates = {
  lat: "51.0486151",
  long: "-114.0708459"
};

fetchISSFlyOverTimes(coordinates, (error, data) => {
  if(error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log("It worked! Returned fly over times:", data);
});