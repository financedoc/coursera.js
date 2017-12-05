(function () {
angular.module('public')
.controller('RegController', RegController);

RegController.$inject = ['allMenuItems','MenuService'];
function RegController(allMenuItems) {
  var reg = this;
  reg.allMenuItems = allMenuItems;
  reg.user={};
  reg.shortNameList=[];
  console.log(allMenuItems)
  for (item in allMenuItems.menu_items){
    reg.shortNameList.push(allMenuItems.menu_items[item]["short_name"])
    }
  reg.selection = "Does Not Match Our Records";
    reg.checkit= function(){
      var itemindex = reg.shortNameList.indexOf(reg.user.menuPick);
      if (itemindex !== -1){
        reg.selection = allMenuItems.menu_items[itemindex].name
      }
    }


  reg.submit = function () {
    //Menuservice.setInfo(reg.user);
    //console.log(reg.user)
    reg.completed = true;
  };

}



})();
