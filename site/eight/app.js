(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  //if (!searchTerm ) searchTerm = "onion";

  var promise = MenuSearchService.getMenuItems();

  promise.then(function (response) {
    var found=  MenuSearchService.getMatchedMenuItems("",response)
    menu.categories = found
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMenuItems = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    });
    return response;
  };

  service.getSearchTerm = function(){
    return searchTerm
    console.log(searchTerm)

  }

  service.getMatchedMenuItems = function(searchTerm,response){
    var items = []
    //if (!searchTerm) return items
    items = response.data["menu_items"];
    var found = []
    for (var i=0; i< items.length; i++) {
      var target = items[i]["description"];

      if (target.indexOf(searchTerm) != -1){
        found.push(items[i])
      }
    }
    return found
  }
}

})();
