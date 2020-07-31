$(document).ready(function(e){

    var servVue = new Vue({
        el: "#serv",
        data: {
          paisesList: [],
          paisCode: "CR",
          paisDatos: [],
          
        },
        //get countries
        created: function(){
          var url = "https://corona-api.com/countries/CR";//cr default
          axios.get(url, {header:{"accept":"application/json"}})
          .then(function (response) {
            servVue.paisDatos = response.data.data;
          
          })
          url = "https://corona-api.com/countries"

          axios.get(url, {header:{"accept":"application/json"}})
          .then(function (response) {
            servVue.paisesList = response.data.data;
          
          });
        },//end get countries

        //get estadisticas por codigo de pais
        methods: {
          paisseleccionado: function(){
            servVue.paisDatos = [];
            var url = "https://corona-api.com/countries/" + servVue.paisCode;//nuevos datos de otro pais
            axios.get(url, {header:{"accept":"application/json"}})
            .then(function (response) {
            servVue.paisDatos = response.data.data;
          
          })
          }
        }

      })



});