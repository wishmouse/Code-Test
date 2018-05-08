var $ = require('jquery')
var request = require('superagent')

 $(document).ready(function(){


  $('#submit').click(function(e){
         firstName = $("#first-name").val()
         lastName = $("#last-name").val()
         email = $("#email").val()
         city = $("#city").val()

         console.log(firstName)
         console.log(lastName)
         console.log(email)
         console.log(city)

/*
           $.ajax({
                  method: "POST",
                  url: "/details",
                  data: {
                      firstName:firstName,
                      lastName:lastName,
                      email:email,
                      city:city
                    }
               })*/

      })


 }) // end doc.ready
