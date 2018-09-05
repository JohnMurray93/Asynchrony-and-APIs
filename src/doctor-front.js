import $ from 'jquery';
import { DoctorLookup } from './doctor-back.js';

$(document).ready(function() {
  $('#doctorQuery').click(function() {
    
    let query = $('#query').val();
    $('#query').val("");

    let search = new DoctorLookup();
    let promise = search.getDoctor(query);
    promise.then(function(response) {
      let body = JSON.parse(response);
      if(body.data.lenght === 0) {
        $("#results").append("<p>No doctors found, please try a different name or keyword.</p>");
      } else {
        for(let i = 0; i < body.data.length;i++){
          $('#results').append(`First Name: ${body.data[i].profile.first_name}`);
          $('#results').append(`Last Name: ${body.data[i].profile.last_name}`);
          if(body.data[i].practices.website != null || body.data[i].practices[0].website != undefined) {
            $('#results').append(`Website: ${body.data[i].practices[0].website}`);
          }
          $('#results').append(`Number: ${body.data[i].practices[0].phones[0].number}`);
          $('#results').append(`Street Address: ${body.data[i].profile.first_name}`);
          $('#results').append(`Zipcode: ${body.main.temp}`);
          if(body.data[i].practices[0].accepts_new_patients == true){
            $("#results").append("<li><p>This doctor is accepting new patients.</p></li>");
          }
          $("#results").append("<br><br>");
        }
      }
    });
    promise.then(function(error) {
      $('#errors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
