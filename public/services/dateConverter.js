app.factory('dateConverter', [function() {
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

  return {
    convertHTMLDate: function(htmlDate) {
      date = htmlDate.toString().split(' ');
      return date[3] + '-' + convertMonthToNum(date[1]);
    }
  };
}]);
