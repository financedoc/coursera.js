(function () {
'use strict';

angular.module('ShoppingList')
.controller('ItemDetailController', ItemDetailController);

// Version with resolving to 1 item based on $stateParams in route config
ItemDetailController.$inject = ['$stateParams', 'dishes'];
function ItemDetailController($stateParams, items) {
  var itemDetails = this;
  //var item = items[$stateParams.itemId];
  itemDetails.details = dishes;
}

})();
