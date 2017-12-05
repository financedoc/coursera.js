(function () {
angular.module('public')
.controller('MyController', MyController);

MyController.$inject = ['MenuService'];
function MyController(MenuService) {
  var myinfo = this;
  //myinfo.firstn="Daisy";
  //myinfo.lastn = "Duke";
  console.log(MenuService.getInfo())
  myinfo.user = MenuService.getInfo()
}


})();
