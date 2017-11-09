(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems',foundItems)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var searchTerm = "mei"
  var menu = this;
  var promise = MenuSearchService.getMenuItems();
  promise.then(function(response){
    var found = MenuSearchService.getMatchedMenuItems(searchTerm,response);
    menu.categories=found;
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

  service.getMatchedMenuItems = function(searchTerm,response){
    var items=[]
    var found=[]
    items = response.data["menu_items"];
    for (var i=0; i< items.length; i++) {
        var target = items[i]["description"];
        if (target.indexOf(searchTerm) != -1){
          found.push(items[i])
        }
      }
      return found
    }


  }



foundItems.$inject=[]
function foundItems(){
  var ddo = {
      template:'<li>{{category.name}} <input type="button"" value ="Don\'t Want This One!"></input></li>'
  }
  return ddo;
}


})();
