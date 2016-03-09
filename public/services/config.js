app.factory('Config', ['$http', function($http) {

  return {
    query: function() {
      return $http.get('/config');
    }
  };
}]);
