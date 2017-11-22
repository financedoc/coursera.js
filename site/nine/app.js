(function () {
'use strict';

angular.module('MenuApp', [])
.component('myComponent',{
  template: '<h3> Category Items </h3><ol><li ng-repeat="item in $ctrl.items">{{item.name}}</li></ol>',
  controller: CompController,
  bindings: {
    dishes: '<',
    prop2:'@' ,
    onAction: '&'
  } })
.controller('MenuCategoriesController', MenuCategoriesController)
.controller('MenuItemsController',MenuItemsController)
.service('MenuCategoriesService', MenuCategoriesService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

CompController.$inject  = ['MenuCategoriesService'];
function  CompController(MenuCategoriesService) {
  var detail2 = this;
  detail2.items = MenuCategoriesService.getDishes();
  console.log(detail2.items)

}


MenuCategoriesController.$inject = ['MenuCategoriesService'];
function MenuCategoriesController(MenuCategoriesService) {
  var menu = this;
  var promise = MenuCategoriesService.getMenuCategories();
  promise.then(function (response) {
    menu.categories = response.data;
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });

  menu.logMenuItems = function (shortName) {
    var promise = MenuCategoriesService.getMenuForCategory(shortName);
    promise.then(function (response) {
      menu.dishes = response.data['menu_items'];
      MenuCategoriesService.setDishes(menu.dishes)
    })
    .catch(function (error) {
      console.log(error);
    })
  };

}

MenuItemsController.$inject = ['MenuCategoriesService'];
function MenuItemsController(MenuCategoriesService) {
  var detail = this;
  detail.dishes = MenuCategoriesService.getDishes();
}

MenuCategoriesService.$inject = ['$http', 'ApiBasePath'];
function MenuCategoriesService($http, ApiBasePath) {
  var service = this;
  var sn
  var dishes=[]

  service.getMenuCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });
    return response;
  };


  service.getMenuForCategory = function (shortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: shortName
      }
    });
    return response;
  };

  service.setDishes = function(dishlist){
    dishes.splice(0)
    //console.log(dishes)
    for (var i=0;i<dishlist.length;i++){
      dishes.push(dishlist[i])

    }
//console.log(dishes)

  }
  service.getDishes = function(){
    return dishes
  }
}

})();
