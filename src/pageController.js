function PageController() {
  this.data = null;
}

PageController.prototype.postData = function (data) {
  console.log(data);
  for (var i = 0; i < data.length; i++) {
    document.write('hello')
  }
};
