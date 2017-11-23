(function () {
'use strict';

angular.module('ShoppingList')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/shoppinglist/templates/home.template.html'
  })

  // Premade list page
  .state('mainList', {
    url: '/main-list',
    templateUrl: 'src/shoppinglist/templates/main-shoppinglist.template.html',
    controller: 'MainShoppingListController as mainList',
    resolve: {
      items: ['ShoppingListService', function(ShoppingListService){
        return ShoppingListService.getAllCategories();
      }]
    }
  })

  .state('itemDetail',{

    url: 'item-detail/{itemId}',
    templateURL: 'src/shoppinglist/templates/item-detail.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve:{
      dishes: ['$stateParams','ShoppingListService',
        function($stateparams,ShoppingListService){
          return ShoppingListService.getItemsForCategory($stateParams.itemId)
            .then(function (dishes) {return dishes;
            })

        }      ]

    }
  });

}
})();
