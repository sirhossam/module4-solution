(function () {
  "use strict";
  angular
    .module("data")
    .service('MenuDataService', MenuDataService);
  MenuDataService.$inject = ['$http']
  function MenuDataService($http) {
    let service = this;
    // -------------------------------------------------------------------
    service.getAllCategories = function () {
      return $http({
        method: 'get',
        url: 'https://davids-restaurant.herokuapp.com/categories.json',
      })
      .then(r => { let rx=r.data; return rx });

    };
    // -------------------------------------------------------------------
    service.getItemsForCategory = function (categoryShortName) {
      return $http({
        method: 'get',
        url: ' https://davids-restaurant.herokuapp.com/menu_items.json',
        params: { 
          category: categoryShortName
         }
      })
      .then(r => {let rx=r.data.menu_items; return rx})
    };
  }
})()