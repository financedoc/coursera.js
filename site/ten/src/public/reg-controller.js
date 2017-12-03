(function () {
angular.module('public')
.controller('RegController', RegController);

RegController.$inject = ['allMenuItems'];
function RegController(allMenuItems) {
  var reg = this;
  reg.allMenuItems = allMenuItems;
  reg.user={};
  reg.user.firstname="Ppp";
  shortNameList=[];
  for (item in allMenuItems.menu_items){
    shortNameList.push(allMenuItems.menu_items[item])
  }
  console.log(shortNameList)

  reg.submit = function () {
    console.log("Submit")
    reg.completed = true;
  };

}



})();
