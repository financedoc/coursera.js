(function () {
'use strict';

angular.module('ShoppingList')
.controller('MainShoppingListController', MainShoppingListController);


MainShoppingListController.$inject = ['items'];
function MainShoppingListController(items) {
  var mainList = this;
  mainList.items = [];
  mainList.items = items.data;


//   mainList.logMenuItems = function (shortName) {
//   var promise = ShoppingListService.getItemsForCategory(shortName);
//   promise.then(function (response) {
//     mainList.dishes = response.data['menu_items'];
//  console.log(mainList.dishes)
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
// };

}

})();
