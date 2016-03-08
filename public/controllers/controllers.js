app.controller('mainController', ['$http', 'Amadeus', function($http, Amadeus) {
  var vm = this;

  vm.retrieveDetails = function() {
    Amadeus.query(vm).then(function(response) {
      vm.trips = response.data.results;
    });
  };

}]);
