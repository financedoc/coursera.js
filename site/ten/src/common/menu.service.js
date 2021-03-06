(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);

MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }
    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getAllMenuItems = function () {
    return $http.get(ApiPath + '/menu_items.json').then(function (response) {
      return response.data;
    });
  };


  service.getOneMenuItem = function (itemid) {
    //console.log(ApiPath + '/menu_items/'+itemid+'.json')
    return $http.get(ApiPath + '/menu_items/'+itemid+'.json').then(function (response) {
        return response.data;
    });
  };

  service.setInfo = function(user){
    service.user = user
    console.log(user)
  }
  service.getInfo = function(){
    if (service.user){
      return service.user;
    }
    else {
      return;
    }
  }
  service.getPath = function(){
    return ApiPath;
  }

}



})();
