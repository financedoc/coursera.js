(function () {
angular.module('public')
.controller('RegController', RegController);

RegController.$inject = ['allMenuItems','MenuService'];
function RegController(allMenuItems,MenuService) {
  var reg = this;
  reg.completed = false;
  reg.allMenuItems = allMenuItems;
  reg.user={};
  reg.shortNameList=[];
  //console.log(MenuService.getInfo())
  for (item in allMenuItems.menu_items){
    reg.shortNameList.push(allMenuItems.menu_items[item]["short_name"])
    }
  reg.selection = "No Such Menu Number Exists";
    reg.checkit= function(){
      var itemindex = reg.shortNameList.indexOf(reg.user.menuPick);
      if (itemindex !== -1){
        reg.selection = allMenuItems.menu_items[itemindex].name
        reg.user.favorite = reg.selection;
      }
      else{
        reg.selection = "No Such Menu Number Exists"
      }
    };

// The following function is not called as it is an artifact of task 1.
// It is left live because task 4 called for a test of teh task 1 function.

    reg.checkone = function () {
      if (reg.user.menuPick) {
        x=MenuService.getOneMenuItem(reg.user.menuPick)
        x.then(function(data){
          console.log(data.name)
          if(data.name){
            reg.selection = data.name
          }
        })
      }
      else {
        alert("No menu selection detected")
      }
    }

  reg.submit = function () {
    MenuService.setInfo(reg.user);
    //console.log(reg.user)
    reg.completed = true;
    reg.savedMessage = "Your information has been saved"
  };

}



})();
