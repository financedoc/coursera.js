(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var showList = this;
  showList.items = ShoppingListCheckOffService.getItems();
  showList.boughtItem = function (itemIndex) {
  ShoppingListCheckOffService.bought(itemIndex);

}
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;
  boughtList.boughtItems = ShoppingListCheckOffService.getBoughtItems();

}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items=[{name:"Eggs",quantity:12},{name:"Milk",quantity:2},{name:"Meat",quantity:2},{name:"Fish",quantity:1},{name:"Coffee",quantity:7}]

  var boughtItems = [];

  service.bought = function (itemIndex) {
    console.log(itemIndex)
    boughtItems.push(items[itemIndex]);
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };
  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
