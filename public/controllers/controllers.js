app.controller('mainController', ['$http', 'Amadeus', 'Config', function($http, Amadeus, Config) {
  var vm = this;

  vm.retrieveDetails = function() {
    Amadeus.query(vm).then(function(response) {
      vm.trips = response.data.results;
    });
  };

}]);
