(function () {
'use strict';

angular.module('ShoppingList')
.service('ShoppingListService', ShoppingListService);


ShoppingListService.$inject = ['$http', 'ApiBasePath','$q', '$timeout']
function ShoppingListService($http, ApiBasePath,$q, $timeout) {
  var service = this;

  // List of shopping items
  var items = [];
  var itemsforCategory = []
  service.getAllCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });
    return response;
  };
  
  service.getItemsForCategory = function (shortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: shortName
      }
    });
    return response;
  };

  // Simulates call to server
  // Returns a promise, NOT items array directly
  // service.getItems = function () {
  //   var deferred = $q.defer();
  //
  //   // Wait 2 seconds before returning
  //   $timeout(function () {
  //     // deferred.reject(items);
  //     deferred.resolve(items);
  //   }, 800);
  //
  //   return deferred.promise;
  // };
}

})();
