
ChitterApi = function() {

}

ChitterApi.prototype.returnData = function () {
  $.get('https://chitter-backend-api.herokuapp.com/peeps', function(data) {
    return data
  })
};
