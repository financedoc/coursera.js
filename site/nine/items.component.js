angular.module('MenuApp')
.controller('CompController',CompController)
.component('items',{
  template: '<h3> Category Items </h3><ol><li ng-repeat="item in $ctrl.items">{{item.name}}</li></ol>',
  controller: CompController,
  bindings: {
    dishes: '<',
  } })
CompController.$inject  = ['MenuDataService'];
function  CompController(MenuDataService) {
  var detail2 = this;
  detail2.items = MenuDataService.getDishes();
  }
