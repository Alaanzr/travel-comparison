app.factory('Amadeus', ['$http', 'Config', 'dateConverter', function($http, Config, dateConverter) {
  var baseUrl = 'https://api.sandbox.amadeus.com/v1.2/flights/extensive-search?';
  var apikey;

Config.query().then(function(configs) {
  apikey = configs.data;
});

  return {
    query: function(vm) {
      return $http({
        url: baseUrl,
        method: 'GET',
        params: {
          apikey: apikey,
          origin: vm.origin,
          destination: vm.destination,
          departure_date: dateConverter.convertHTMLDate(vm.outboundDate)
        }
      });
    }
  };
}]);
