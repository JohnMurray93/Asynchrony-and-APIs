import $ from 'jquery';
import { Doctor } from './doctor-back.js';
$(document).ready(function(){
  $("#search").submit(function(){
    let query = $('#query').val();
    let doctor = new Doctor(query);
    let promise = doctor.getDoctor(query);
    promise.then(function(response){
      let body = JSON.parse(response);
      if(body.data.lenght === 0){
        $("#results").append("<li><p>No doctors found</p></li>");
      }else{
        for(let i = 0; i < body.data.length;i++){
          $("#results").append("<br>");
          $("#results").append("<li><p>Name: "+body.data[i].profile.first_name+" "+body.data[i].profile.last_name+"</p></li>");
          if(body.data[i].practices[0].website != null || body.data[i].practices[0].website != undefined){
            $("#results").append("<li><p>Website: "+body.data[i].practices[0].website+"</p></li>");
          }
          $("#results").append("<li><p>Phone: "+body.data[i].practices[0].phones[0].number+"</p></li>");
          $("#results").append("<li><p>"+body.data[i].practices[0].visit_address.street+" "+body.data[i].practices[0].visit_address.city+"</p></li>");
          $("#results").append("<br>");
          if(body.data[i].practices[0].accepts_new_patients == true){
            $("#results").append("<li><p>This doctor is accepting new patients.</p></li>");
          }
          $("#results").append("<br>");
        }
      }
    });
  });
});
