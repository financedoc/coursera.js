// categories.component.js
angular.module('data')
.controller('MenuCategoriesController', MenuCategoriesController)
.component('categories',{
  template: '<h3> Menu Categories </h3><ol><li ng-repeat="item in $ctrl.categories">{{item.name}}</li></ol>',
  bindings: {
    dishes: '<',
  } })
MenuCategoriesController.$inject = ['MenuDataService'];
function MenuCategoriesController(MenuDataService) {
  var menu = this;
  var promise = MenuDataService.getAllCategories();
  promise.then(function (response) {
    menu.categories = response.data;
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });

  menu.logMenuItems = function (shortName) {
    var promise = MenuDataService.getItemsForCategory(shortName);
    promise.then(function (response) {
      menu.dishes = response.data['menu_items'];
      //
      MenuDataService.setDishes(menu.dishes)
    })
    .catch(function (error) {
      console.log(error);
    })
  };

}
