//menudata.service.js
angular.module('data')
.service('MenuDataService', MenuDataService)

MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
  var service = this;
  var sn
  var dishes=[]

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

  service.setDishes = function(dishlist){
    dishes.splice(0)
    for (var i=0;i<dishlist.length;i++){
      dishes.push(dishlist[i])
    }
    //console.log(dishes)
  }
  service.getDishes = function(){
    return dishes
  }
}
