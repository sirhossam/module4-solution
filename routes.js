(function () {
  "use strict";
  angular
    .module("MenuApp")
    .config(RoutesConfig);
  RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/home');
    $stateProvider
      .state(
        'home',
        {
          url: '/home',
          templateUrl: 'templates/home.html',

        }
      )
      .state(
        'categories',
        {
          url: '/categories',
          templateUrl: 'templates/categories.html',
          controller: 'categoriesCtrl as $ctrl',
          resolve: {
            myData: ['MenuDataService', function (MenuDataService) {
              return MenuDataService.getAllCategories()
            }]
          }
        }
      )
      .state(
        'items',
        {
          url: '/items/{categoryID}',
          templateUrl: 'templates/items.html',
          controller: 'itemsCtrl as $ctrl',
          resolve: {
            myItems: [ 'MenuDataService','$stateParams',
              function (MenuDataService,$stateParams) {
                return MenuDataService.getItemsForCategory($stateParams.categoryID);
              }]
          }
        }
      )
  }
}
)()