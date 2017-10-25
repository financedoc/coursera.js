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
  showList.items = ShoppingListCheckOffService.getItems();
  ShoppingListCheckOffService.bought(itemIndex);
  showList.empty = (showList.items.length === 0)
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;
  boughtList.boughtItems = ShoppingListCheckOffService.getBoughtItems();
  boughtList.showMsg =  function() {
    return ShoppingListCheckOffService.getEmpty();
  }
  //boughtList.x=ShoppingListCheckOffService.getQty
  console.log(boughtList.showMsg)
}


function ShoppingListCheckOffService() {
  var service = this;
  // List of shopping items
  var items=[{name:"Eggs",quantity:12, pricePerItem:3},
              {name:"Milk",quantity:2,pricePerItem:4},
              {name:"Meat",quantity:2,pricePerItem:9},
              {name:"Fish",quantity:1,pricePerItem:11},
              {name:"Coffee",quantity:7,pricePerItem:5}]
  // list fo bought items
  var boughtItems = [];

  service.bought = function (itemIndex) {
    boughtItems.push(items[itemIndex]);
    items.splice(itemIndex, 1);

  };
  service.getEmpty = function () {
    if (boughtItems.length >0) return 0
    else return 1;

  };
  service.getItems = function () {
    return items;
  };
  service.getBoughtItems = function () {
    return boughtItems;
  };

}

})();
