const request = require('request-promise');
require('dotenv').config();


class Revcode {
    static retrieveByLatlng (latlng, callback) {
        request({
            uri: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlng}&key=${process.env.REACT_APP_API_KEY}`,
            json: true
          }).then((res) => {
            callback(res);
          }).catch((err) => {
            console.log(err);
            callback({ error: 'Could not reach Google GEO API.' });
          });
        }
      }
      
      module.exports = Revcode;