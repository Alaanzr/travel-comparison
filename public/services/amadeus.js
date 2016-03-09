app.factory('Amadeus', ['$http', 'Config', function($http, Config) {
  var baseUrl = 'https://api.sandbox.amadeus.com/v1.2/flights/extensive-search?';
  var apikey;
  var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  function convertMonthToNum(month) {
    return '0' + (months.indexOf(month) + 1);
  }

  function convertHTMLDate(htmlDate) {
    date = htmlDate.toString().split(' ');
    return date[3] + '-' + convertMonthToNum(date[1]);
  }

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
          departure_date: convertHTMLDate(vm.outboundDate)
        }
      });
    }
  };
}]);
