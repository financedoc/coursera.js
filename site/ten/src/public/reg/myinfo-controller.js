(function () {
angular.module('public')
.controller('MyController', MyController);

MyController.$inject = ['MenuService'];
function MyController() {
  var myinfo = this;
  myinfo.firstn="Daisy";
  myinfo.lastn = "Duke";
  //console.log(MenuService.getInfo())
}


})();
