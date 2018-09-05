let Promise = require('es6-promise').Promise;

export class DoctorLookup {
  getDoctor(query){
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&location=47.608013,-122.335167&sort=distance-asc&skip=0&limit=25&user_key=${process.env.exports.apiKey}`;
      request.onload = function(){
        if(this.status === 200){
          resolve(request.response);
        }else{
          reject(Error(request.statusText));
        }
      };
      request.open("GET",url,true);
      request.send();
    });
  }
}