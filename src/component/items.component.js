(function () {
  "use strict";
  angular
      .module("MenuApp")
      .component('itemsComponent',{
        templateUrl: 'templates/items.component.html',
        bindings:{
          list:'<'
        }
      })
}
)()