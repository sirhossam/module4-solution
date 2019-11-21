(function () {
  "use strict";
  angular
      .module("MenuApp")
      .component('categoriesComponent',{
        templateUrl: 'templates/categories.component.html',
        bindings:{
          list:'<'
        }
      })
}
)()